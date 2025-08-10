/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  ArrowRight,
  Brain,
  Code,
  Globe,
  Database,
  Lock,
  AlertCircle,
  Timer,
  BookOpen,
  Pencil,
  Book,
  Headphones,
  Text,
  Shield,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";

import CompletionPage from "@/components/CompletionPage";
import Hero from "@/components/exam/Hero";
import Competency from "@/components/exam/Competency";
import Security from "@/components/exam/Security";
import { useNavigate } from "react-router-dom";
import { useGetAllCategoriesQuery } from "@/redux/fetures/Steps/Steps.api";
import { useCurrentUser } from "@/utils/getCurrentUser";
import { useGetSingleUserQuery } from "@/redux/fetures/user/user.api";
import { toast } from "sonner";

// Icon map
const iconMap = {
  Brain,
  Code,
  Globe,
  Database,
  Lock,
  AlertCircle,
  Timer,
  BookOpen,
  Pencil,
  Book,
  Headphones,
  Text,
  Shield,
  Award,
  Clock,
  CheckCircle,
  Play,
  ArrowRight,
};

const Exam = () => {
  const user = useCurrentUser();
  const { data: freshUser, isLoading: userLoading } = useGetSingleUserQuery(
    user?._id,
    { skip: !user?._id }
  );

  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllCategoriesQuery(undefined);

  const [directCompletionForStep, setDirectCompletionForStep] = useState<
    number | null
  >(null);

  // State to hold questions & selected answers for the completion page
  const [completionData, setCompletionData] = useState<{
    questions: any[];
    selectedOptions: number[];
  }>({ questions: [], selectedOptions: [] });

  // Mock function to fetch questions and user's selected answers for a step
  // Replace with your actual fetching logic
  const fetchStepCompletionData = async (step: number) => {
    // Example mock questions for step
    const mockQuestions = [
      {
        question: "What is React?",
        options: ["Library", "Framework", "Language", "Tool"],
        correct: 0,
      },
      {
        question: "What does JSX stand for?",
        options: [
          "JavaScript XML",
          "Java Source X",
          "JavaScript Example",
          "None",
        ],
        correct: 0,
      },
    ];

    // Example mock selected options - replace with user's answers from DB/state
    const mockSelectedOptions = [0, 0]; // both correct

    return { questions: mockQuestions, selectedOptions: mockSelectedOptions };
  };

  // Show loading or error
  if (isLoading || userLoading) {
    return <p className="text-center p-10">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-center p-10 text-red-600">
        Error loading data, please try again later.
      </p>
    );
  }

  const currentUserStep = freshUser?.data?.currentStep ?? 1;
  const stepScores = freshUser?.data?.stepScores || {};

  const startExam = async (stepNumber: number, stepId: string) => {
    const scoreForStep = stepScores[`step${stepNumber}`];

    if (scoreForStep === undefined) {
      // User not completed this step, navigate to exam
      navigate(`/exam/${stepId}`);
      return;
    }

    // Fetch questions and answers from DB/state, not mock ideally
    const { questions, selectedOptions } = await fetchStepCompletionData(
      stepNumber
    );

    // Wait or refetch fresh user data before showing completion page
    // e.g., await refetchUser();

    setCompletionData({ questions, selectedOptions });
    setDirectCompletionForStep(stepNumber);
    toast.success(`You already completed Step ${stepNumber}. Showing results.`);
  };

  // If user wants to see completion page directly:
  if (directCompletionForStep !== null) {
    return (
      <CompletionPage
        step={directCompletionForStep}
        score={stepScores[`step${directCompletionForStep}`] || 0}
        total={completionData.questions.length}
        questions={completionData.questions}
        selectedOptions={completionData.selectedOptions}
        onClose={() => setDirectCompletionForStep(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Hero />

      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Assessment Steps
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your assessment level and begin your certification journey
            </p>
          </div>

          <div className="space-y-8">
            {data?.data?.map((step) => {
              const IconComponent = iconMap[step.icon] || Brain;
              const isDisabled = step.step > currentUserStep;

              return (
                <Card
                  key={step.step}
                  className="glow-border group transition-all duration-500"
                >
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-xl bg-gradient-primary transition-all duration-300">
                          <IconComponent className="w-8 h-8 text-[#6bdaff]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-2xl text-primary-glow">
                              {step.title}
                            </CardTitle>
                            <div className="flex gap-2">
                              {step.levels.map((level: string) => (
                                <Badge key={level} className={step.color}>
                                  {level}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <CardDescription className="text-lg">
                            {step.description}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex-1" />
                      <Button
                        variant="cyber"
                        size="lg"
                        onClick={() => startExam(step.step, step._id)} // Pass both step and _id
                        className="group/btn"
                        disabled={isDisabled}
                        title={
                          isDisabled
                            ? "Complete previous steps before starting this one"
                            : undefined
                        }
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Start Assessment
                        <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>{/* Additional info here */}</CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Competency />
      <Security />
    </div>
  );
};

export default Exam;
