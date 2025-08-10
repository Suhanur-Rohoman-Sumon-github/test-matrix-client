import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import CompletionPage from "@/components/CompletionPage";

const questions = [
  {
    question:
      "Which of the following best describes a variable in programming?",
    options: [
      "A fixed value that cannot be changed during program execution",
      "A container that stores data values that can be modified",
      "A function that performs mathematical calculations",
      "A comment that explains what the code does",
    ],
    correct: 1,
    area: "Programming Logic",
  },
  {
    question:
      "Which of the following best describes a variable in programming?",
    options: [
      "A fixed value that cannot be changed during program execution",
      "A container that stores data values that can be modified",
      "A function that performs mathematical calculations",
      "A comment that explains what the code does",
    ],
    correct: 1,
    area: "Programming Logic",
  },
  // Add more questions as needed
];

const SinglePageExam = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isExamActive, setIsExamActive] = useState(true); // start active immediately
  const [selectedOptions, setSelectedOptions] = useState<
    (number | undefined)[]
  >([]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleOptionSelect = (index: number) => {
    const currentQ = questions[currentQuestion - 1];
    const correctIndex = currentQ.correct;
    const alreadySelected = selectedOptions[currentQuestion - 1] !== undefined;
    if (alreadySelected) return;

    const updated = [...selectedOptions];
    updated[currentQuestion - 1] = index;
    setSelectedOptions(updated);

    if (index === correctIndex) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.3 },
      });
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isExamActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsExamActive(false);
            toast.error("Time's Up!");
            setIsSubmitted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isExamActive, timeRemaining]);

  const calculateScore = () => {
    return questions.reduce((acc, q, i) => {
      return acc + (selectedOptions[i] === q.correct ? 1 : 0);
    }, 0);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setIsExamActive(false);
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.3 },
    });
  };

  const MockQuestion = () => {
    const questionObj = questions[currentQuestion - 1];
    const selected = selectedOptions[currentQuestion - 1];
    const correct = questionObj.correct;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Badge
              variant="outline"
              className="text-primary-glow border-primary/40"
            >
              Question {currentQuestion} of {questions.length}
            </Badge>
            <Badge
              variant="outline"
              className="text-accent-glow border-accent/40"
            >
              {questionObj.area}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-destructive-glow">
            <Timer className="w-4 h-4" />
            <span className="font-mono text-lg">
              {formatTime(timeRemaining)}
            </span>
          </div>
        </div>

        <Progress
          value={(currentQuestion / questions.length) * 100}
          className="h-2"
        />

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary-glow">
            {questionObj.question}
          </h3>

          <div className="space-y-3">
            {questionObj.options.map((option, index) => {
              const isSelected = selected === index;
              const isCorrect = correct === index;
              let bgStyle = "";
              let textStyle = "text-muted-foreground";

              if (selected !== undefined) {
                if (isCorrect) {
                  bgStyle = "glass-card border-green-600";
                  textStyle = "text-white";
                } else if (isSelected && !isCorrect) {
                  bgStyle = "border-red-600 opacity-80";
                  textStyle = "text-white";
                }
              }

              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer hover:border-primary/40 hover:bg-primary/5 ${bgStyle}`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-primary/40 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary-glow">
                        {String.fromCharCode(65 + index)}
                      </span>
                    </div>
                    <span className={`${textStyle}`}>{option}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            disabled={currentQuestion <= 1}
            onClick={() => setCurrentQuestion((q) => q - 1)}
          >
            Previous
          </Button>

          {currentQuestion === questions.length ? (
            <Button variant="cyber" onClick={handleSubmit}>
              Submit Exam
              <ArrowRight className="w-4 h-4 ml-2 text-white" />
            </Button>
          ) : (
            <Button
              variant="cyber"
              onClick={() => setCurrentQuestion((q) => q + 1)}
              disabled={currentQuestion >= questions.length}
            >
              Next Question
              <ArrowRight className="w-4 h-4 ml-2 text-white" />
            </Button>
          )}
        </div>
      </div>
    );
  };

  if (isExamActive || isSubmitted) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-background cyber-grid ">
        <div className="pt-24 pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
            {isSubmitted ? (
              <CompletionPage
                score={score}
                total={questions.length}
                questions={questions}
                selectedOptions={selectedOptions}
              />
            ) : (
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <MockQuestion />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    );
  }

  // This fallback should never appear now, but just in case:
  return <div>Loading exam...</div>;
};

export default SinglePageExam;
