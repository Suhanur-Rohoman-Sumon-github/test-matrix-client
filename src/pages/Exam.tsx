import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Clock,
  Shield,
  Award,
  Play,
  CheckCircle,
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
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import CompletionPage from "@/components/CompletionPage";
import Hero from "@/components/exam/Hero";
import Competency from "@/components/exam/Competency";
import Security from "@/components/exam/Security";
import { useNavigate } from "react-router-dom";
import { useGetAllCategoriesQuery } from "@/redux/fetures/Steps/Steps.api";
import { currentUser } from "@/redux/fetures/auth/auth.slice";
import { useCurrentUser } from "@/utils/getCurrentUser";

// Map icon names (from your API) to actual imported icon components
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
  const { toast } = useToast();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllCategoriesQuery(undefined);

  // Show loading message if loading
  if (isLoading) {
    return <p className="text-center p-10">Loading...</p>;
  }

  // Show error if exists
  if (error) {
    return (
      <p className="text-center p-10 text-red-600">
        Error loading data, please try again later.
      </p>
    );
  }

  const currentUserStep = user?.currentStep;

  const startExam = (stepNumber: number) => {
    navigate(`/exam/${stepNumber}`);
  };

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

              // Disable if step is greater than currentUserStep (cannot skip ahead)
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
                        onClick={() => startExam(step._id)}
                        className="group/btn"
                        disabled={isDisabled} // Disable if not allowed
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
                  <CardContent>{/* ...rest unchanged */}</CardContent>
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
