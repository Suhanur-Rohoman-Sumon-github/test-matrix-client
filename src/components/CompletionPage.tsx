/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import html2pdf from "html2pdf.js";

const CompletionPage = ({
  score,
  total,
  questions,
  selectedOptions,
}: {
  score: number;
  total: number;
  questions: any[];
  selectedOptions: number[];
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const getGrade = () => {
    const percent = (score / total) * 100;
    if (percent >= 90) return { label: "Best", color: "text-green-500" };
    if (percent >= 70) return { label: "Better", color: "text-yellow-500" };
    return { label: "Good", color: "text-blue-500" };
  };

  const { label, color } = getGrade();

  useEffect(() => {
    confetti({
      particleCount: 300,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  const downloadCertificate = () => {
    const element = certificateRef.current;
    if (element) {
      const opt = {
        margin: 0.5,
        filename: "certificate.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "landscape" },
      };
      html2pdf().set(opt).from(element).save();
    }
  };

  const userName = "John Doe"; // Replace with real user name if available

  return (
    <div className="text-center space-y-8 max-w-3xl mx-auto p-8  ">
      <h1 className="text-4xl font-bold text-primary-glow">
        🎉 Congratulations!
      </h1>
      <p className="text-lg text-muted-foreground">
        You completed the assessment.
      </p>
      <div className="text-2xl font-semibold">
        Your Score: <span className="text-primary">{score}</span> / {total}
      </div>
      <div className={`text-3xl font-bold ${color}`}>Grade: {label}</div>

      {/* Certificate Section */}
      {label === "Best" && (
        <div className=" border border-green-400 p-6 rounded-xl bg-green-100/10">
          <div
            ref={certificateRef}
            className="bg-white text-black px-12 py-10 rounded-md shadow-xl text-center max-w-4xl mx-auto relative"
          >
            <h2 className="text-3xl font-bold mb-2">
              Certificate of Completion
            </h2>
            <p className="text-lg mb-4 italic text-gray-600">
              This is to certify that
            </p>
            <h3 className="text-2xl font-bold mb-2">{userName}</h3>
            <p className="text-md mb-6">
              has successfully completed the assessment with a grade of{" "}
              <strong>{label}</strong>.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Awarded on: {new Date().toLocaleDateString()}
            </p>

            {/* Signatures */}
            <div className="flex justify-between px-12 mt-10">
              <div className="text-left">
                <img
                  src="/signatures/ceo-signature.png"
                  alt="CEO Signature"
                  className="h-12 mb-1"
                />
                <p className="font-semibold">CEO</p>
              </div>
              <div className="text-right">
                <img
                  src="/signatures/examiner-signature.png"
                  alt="Examiner Signature"
                  className="h-12 mb-1"
                />
                <p className="font-semibold">Examiner</p>
              </div>
            </div>
          </div>

          <Button
            className="mt-6"
            variant="outline"
            onClick={downloadCertificate}
          >
            🎓 Download Certificate
          </Button>
        </div>
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
