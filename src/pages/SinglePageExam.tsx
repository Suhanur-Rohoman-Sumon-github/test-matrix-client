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
import { useCurrentUser } from "@/utils/getCurrentUser";
import {
  useGetSingleUserQuery,
  useUpdateUserStepProgressMutation,
} from "@/redux/fetures/user/user.api";

// Separate MockQuestion so hooks order in main component never changes

const SinglePageExam = () => {
  useExamSecurity();

  const { questionId } = useParams();
  console.log("QuestionId (step):", questionId);

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
  const { data: freshUser, isLoading: userLoading } = useGetSingleUserQuery(
    user?._id,
    {
      skip: !user?._id, // Don't run if no user
    }
  );

  // Store existing certification-based score if any
  const [existingScore, setExistingScore] = useState<number | null>(null);

  // Check if user already has a certification for this step and skip questions if yes
  useEffect(() => {
    if (!freshUser) return;

    // Use questionId from URL param (the step user is trying to take)
    const stepNumber = questionId ? Number(questionId) : 1;

    // Get user's certification for the current step (the step user is taking)
    const cert = freshUser.certifications
      ? freshUser.certifications[`step${stepNumber}`]
      : null;

    // Certification to approximate score mapping
    const certScoreMap: Record<string, number> = {
      Fail: 0,
      A1: 40,
      A2: 60,
      B1: 50,
      B2: 70,
      C1: 80,
      C2: 90,
    };

    // If certification exists and not "Fail", show completion page directly
    if (cert && cert !== "Fail") {
      setExistingScore(certScoreMap[cert] || 0);
      setIsSubmitted(true);
    }
  }, [freshUser, questionId]);

  // Timer effect
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

  // Handle answer option select
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

  // Calculate score from selected answers
  const calculateScore = () => {
    return questions.reduce(
      (acc, q, i) => acc + (selectedOptions[i] === q.correct ? 1 : 0),
      0
    );
  };

  // Handle exam submission
  const handleSubmit = async () => {
    const totalCorrect = calculateScore();
    const score = (totalCorrect / questions.length) * 100;
    console.log("Score to update:", score);

    try {
      await updateUser({
        userId: user._id,
        score: score,
      }).unwrap(); // unwrap throws on error

      // Optionally: toast.success("Progress updated");
    } catch (error) {
      console.error("Failed to update user step progress:", error);
      toast.error("Failed to update user progress.");
    }

    setIsSubmitted(true);
    setIsExamActive(false);
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.3 } });
  };

  // Decide final score to show (from DB certification or calculated)
  const finalScore =
    existingScore !== null
      ? existingScore
      : (calculateScore() / questions.length) * 100;

  // Conditional UI
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
                step={questionId ? Number(questionId) : 1}
                score={finalScore}
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
