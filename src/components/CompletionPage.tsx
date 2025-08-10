import { useEffect, useRef } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import html2pdf from "html2pdf.js";
import { useCurrentUser } from "@/utils/getCurrentUser";

interface Question {
  question: string;
  options: string[];
  correct: number;
}

interface CompletionPageProps {
  step: 1 | 2 | 3;
  score: number;
  total: number;
  questions: Question[];
  selectedOptions: number[];
}

const getCertification = (
  step: 1 | 2 | 3,
  percent: number
): { certification: string; canRetake: boolean; nextStep?: number } => {
  if (step === 1) {
    if (percent < 25)
      return { certification: "Fail", canRetake: false, nextStep: 1 };
    if (percent < 50)
      return { certification: "A1", canRetake: true, nextStep: 1 };
    if (percent < 75)
      return { certification: "A2", canRetake: true, nextStep: 1 };
    return { certification: "A2", canRetake: true, nextStep: 2 };
  }
  if (step === 2) {
    if (percent < 25)
      return { certification: "A2", canRetake: true, nextStep: 2 };
    if (percent < 50)
      return { certification: "B1", canRetake: true, nextStep: 2 };
    if (percent < 75)
      return { certification: "B2", canRetake: true, nextStep: 2 };
    return { certification: "B2", canRetake: true, nextStep: 3 };
  }
  if (step === 3) {
    if (percent < 25)
      return { certification: "B2", canRetake: true, nextStep: 3 };
    if (percent < 50)
      return { certification: "C1", canRetake: true, nextStep: 3 };
    return { certification: "C2", canRetake: true, nextStep: 3 };
  }
  return { certification: "Fail", canRetake: false, nextStep: step };
};

const CompletionPage = ({
  step,
  score,
  total,
  questions,
  selectedOptions,
}: CompletionPageProps) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const user = useCurrentUser();

  const percent = (score / total) * 100;
  const { certification, canRetake, nextStep } = getCertification(
    step,
    percent
  );

  useEffect(() => {
    if (certification !== "Fail") {
      confetti({
        particleCount: 300,
        spread: 100,
        origin: { y: 0.6 },
      });
    }
  }, [certification]);

  const downloadCertificate = () => {
    const element = certificateRef.current;
    if (element) {
      const opt = {
        margin: 0.5,
        filename: `${user.name}-certificate.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "landscape" },
      };
      html2pdf().set(opt).from(element).save();
    }
  };

  return (
    <div className="text-center space-y-8 max-w-3xl mx-auto p-8 glow-border glass-card">
      <h1 className="text-4xl font-bold text-primary-glow">
        🎉 Assessment Complete!
      </h1>
      <p className="text-lg text-muted-foreground">
        You completed Step {step} of the assessment.
      </p>
      <div className="text-2xl font-semibold">
        Your Score: <span className="text-primary">{score}</span> / {total} (
        {percent.toFixed(2)}%)
      </div>
      <div className="text-3xl font-bold text-accent-glow mb-6">
        Certification: {certification}
      </div>

      {certification === "Fail" && !canRetake ? (
        <p className="text-red-600 font-semibold">
          Unfortunately, you did not pass this step and no retake is allowed.
        </p>
      ) : (
        <>
          {certification !== "Fail" && (
            <>
              <div
                ref={certificateRef}
                className="bg-gradient-to-r bg-primary  px-16 py-14 rounded-3xl shadow-2xl max-w-4xl mx-auto relative border-4 border-white text-black"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                <h2 className="text-4xl font-extrabold mb-4 tracking-widest uppercase drop-shadow-lg ">
                  Certificate of Achievement
                </h2>
                <p className="text-lg mb-6 italic opacity-90">
                  This is proudly presented to
                </p>
                <h3 className="text-3xl font-bold mb-6 tracking-wide drop-shadow-md">
                  {user.name}
                </h3>
                <p className="text-xl mb-8 leading-relaxed max-w-xl mx-auto opacity-90">
                  In recognition of successfully completing Step {step} of the
                  assessment, demonstrating exceptional knowledge and skill at
                  the <strong>{certification}</strong> level.
                </p>
                <p className="text-sm opacity-80 mb-12">
                  Awarded on:{" "}
                  <time dateTime={new Date().toISOString()}>
                    {new Date().toLocaleDateString()}
                  </time>
                </p>

                {/* Signatures */}
                <div className="flex justify-between px-20 mt-16">
                  <div className="text-center">
                    <img
                      src="https://signature.freefire-name.com/img.php?f=2&t=Ceo"
                      alt="CEO Signature"
                      className="h-16 mb-1 filter drop-shadow-lg"
                    />
                    <p className="font-semibold tracking-wide">CEO</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="https://planetofnames.biz/cdn/shop/products/SimpleDesign.jpg?v=1666923538&width=1946"
                      alt="Examiner Signature"
                      className="h-16 mb-1 filter drop-shadow-lg"
                    />
                    <p className="font-semibold tracking-wide">Examiner</p>
                  </div>
                </div>

                {/* Decorative seal */}
                <div
                  className="absolute top-8 right-8 w-24 h-24 rounded-full border-4 border-white flex items-center justify-center text-white font-black text-xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.3) 40%, transparent 80%)",
                    boxShadow: "0 0 15px 5px rgba(255,255,255,0.4)",
                    userSelect: "none",
                  }}
                >
                  ✔️
                </div>
              </div>

              <Button
                className="mt-10"
                variant="outline"
                onClick={downloadCertificate}
                style={{ borderColor: "#8b5cf6", color: "#8b5cf6" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#8b5cf6";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#8b5cf6";
                }}
              >
                🎓 Download Certificate
              </Button>
            </>
          )}

          {nextStep && nextStep > step && (
            <p className="text-green-600 font-semibold mt-6">
              Congratulations! You can proceed to Step {nextStep}.
            </p>
          )}

          {!canRetake && certification !== "Fail" && (
            <p className="text-yellow-600 font-semibold mt-6">
              Please review your results carefully.
            </p>
          )}
        </>
      )}

      {/* Answers Review */}
      <div className="mt-10 text-left">
        <h3 className="text-xl font-bold mb-4 text-primary-glow">
          Your Answers:
        </h3>
        <div className="space-y-4">
          {questions.map((q, i) => {
            const isCorrect = selectedOptions[i] === q.correct;
            const optionLabel = (n: number) => String.fromCharCode(65 + n);
            return (
              <div
                key={i}
                className={`p-4 rounded-lg border ${
                  isCorrect
                    ? "border-green-500 bg-green-50/10"
                    : "border-red-500 bg-red-50/10"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-primary-glow">
                      {q.question}
                    </p>
                    <p className="text-muted-foreground">
                      Your answer:{" "}
                      <strong>{optionLabel(selectedOptions[i])}</strong> —{" "}
                      {q.options[selectedOptions[i]]}
                    </p>
                    {!isCorrect && (
                      <p className="text-green-500">
                        Correct answer:{" "}
                        <strong>{optionLabel(q.correct)}</strong> —{" "}
                        {q.options[q.correct]}
                      </p>
                    )}
                  </div>
                  {isCorrect ? (
                    <Check className="text-green-500 w-5 h-5" />
                  ) : (
                    <X className="text-red-500 w-5 h-5" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CompletionPage;
