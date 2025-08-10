/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Timer } from "lucide-react";

export const MockQuestion = ({
  questionObj,
  currentQuestion,
  totalQuestions,
  selected,
  timeRemaining,
  handleOptionSelect,
  goToPrev,
  goToNext,
  handleSubmit,
}: any) => {
  const correct = questionObj.correct;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Badge
            variant="outline"
            className="text-primary-glow border-primary/40"
          >
            Question {currentQuestion} of {totalQuestions}
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
          <span className="font-mono text-lg">{formatTime(timeRemaining)}</span>
        </div>
      </div>

      <Progress
        value={(currentQuestion / totalQuestions) * 100}
        className="h-2"
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-primary-glow">
          {questionObj.question}
        </h3>

        <div className="space-y-3">
          {questionObj.options.map((option: string, index: number) => {
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
          onClick={goToPrev}
        >
          Previous
        </Button>

        {currentQuestion === totalQuestions ? (
          <Button variant="cyber" onClick={handleSubmit}>
            Submit Exam
            <ArrowRight className="w-4 h-4 ml-2 text-white" />
          </Button>
        ) : (
          <Button
            variant="cyber"
            onClick={goToNext}
            disabled={currentQuestion >= totalQuestions}
          >
            Next Question
            <ArrowRight className="w-4 h-4 ml-2 text-white" />
          </Button>
        )}
      </div>
    </div>
  );
};
