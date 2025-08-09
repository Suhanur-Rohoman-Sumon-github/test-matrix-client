import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Timer, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

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
  // Add 43 more questions here in same format
];

export default function ExamUI() {
  const [currentStep, setCurrentStep] = useState<number | null>(1);
  const [timeRemaining, setTimeRemaining] = useState(2640);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isExamActive, setIsExamActive] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isExamActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsExamActive(false);
            toast({
              title: "Time's Up!",
              description: "Your assessment has been automatically submitted.",
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isExamActive, timeRemaining, toast]);

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

              let borderColor = "border-gray-300"; // default border
              if (selected !== undefined) {
                if (isCorrect) borderColor = "border-green-500";
                else if (isSelected && !isCorrect)
                  borderColor = "border-red-500";
              }

              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${borderColor} transition-all duration-300 cursor-pointer hover:border-primary/40`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full border-2 border-primary/40 flex items-center justify-center">
                      <span className="text-xs font-medium text-primary-glow">
                        {String.fromCharCode(65 + index)}
                      </span>
                    </div>
                    <span className="text-muted-foreground">{option}</span>
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
          <Button
            variant="cyber"
            onClick={() =>
              setCurrentQuestion((q) => Math.min(questions.length, q + 1))
            }
            disabled={currentQuestion >= questions.length}
          >
            Next Question
            <ArrowRight className="w-4 h-4 ml-2 text-white" />
          </Button>
        </div>
      </div>
    );
  };

  if (isExamActive && currentStep) {
    return (
      <div className="min-h-screen bg-background cyber-grid mt-4">
        <div className="fixed top-0 w-full z-50  border-b border-primary/20 p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Shield className="w-6 h-6 text-primary-glow" />
              <span className="font-semibold text-primary-glow">
                Step {currentStep} Assessment - ACTIVE
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-sm text-muted-foreground">
                Secure Browser Mode
              </div>
              <Button variant="destructive" size="sm">
                End Assessment
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-24 pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className=" border-primary/20">
              <CardContent className="p-8">
                <MockQuestion />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
