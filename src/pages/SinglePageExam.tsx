/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import CompletionPage from "@/components/CompletionPage";
import { useGetAllQuestionsQuery } from "@/redux/fetures/questions/question.api";

import { useParams } from "react-router-dom";
import { useExamSecurity } from "@/components/exam/useExamSecurity";
import { MockQuestion } from "./MockQuestion";
import { useUpdateUserStepProgressMutation } from "@/redux/fetures/Steps/Steps.api";
import { useCurrentUser } from "@/utils/getCurrentUser";

// Separate MockQuestion so hooks order in main component never changes

const SinglePageExam = () => {
  useExamSecurity();
  const { questionId } = useParams();
  console.log(questionId);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(600);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isExamActive, setIsExamActive] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<
    (number | undefined)[]
  >([]);

  const { data, isLoading, error } = useGetAllQuestionsQuery(questionId);
  const [updateUser] = useUpdateUserStepProgressMutation();
  const questions = data?.data || [];
  const user = useCurrentUser();

  // Handle timer
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

  const handleOptionSelect = (index: number) => {
    const currentQ = questions[currentQuestion - 1];
    const correctIndex = currentQ.correct;
    const alreadySelected = selectedOptions[currentQuestion - 1] !== undefined;
    if (alreadySelected) return;

    const updated = [...selectedOptions];
    updated[currentQuestion - 1] = index;
    setSelectedOptions(updated);

    if (index === correctIndex) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.3 } });
    }
  };

  const calculateScore = () => {
    return questions.reduce(
      (acc, q, i) => acc + (selectedOptions[i] === q.correct ? 1 : 0),
      0
    );
  };

  const handleSubmit = () => {
    const score = calculateScore();
    console.log(score);

    updateUser({
      userId: user._id,
      score: score,
    });

    setIsSubmitted(true);
    setIsExamActive(false);
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.3 } });
  };

  // Conditional UI, no early return
  const loadingUI = isLoading ? <p>Loading.....</p> : null;
  const emptyUI =
    !isLoading && questions.length === 0 ? <p>No questions available</p> : null;

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <div className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {loadingUI ||
            emptyUI ||
            (isSubmitted ? (
              <CompletionPage
                step={1}
                score={calculateScore()}
                total={questions.length}
                questions={questions}
                selectedOptions={selectedOptions}
              />
            ) : (
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <MockQuestion
                    questionObj={questions[currentQuestion - 1]}
                    currentQuestion={currentQuestion}
                    totalQuestions={questions.length}
                    selected={selectedOptions[currentQuestion - 1]}
                    timeRemaining={timeRemaining}
                    handleOptionSelect={handleOptionSelect}
                    goToPrev={() => setCurrentQuestion((q) => q - 1)}
                    goToNext={() => setCurrentQuestion((q) => q + 1)}
                    handleSubmit={handleSubmit}
                  />
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePageExam;
