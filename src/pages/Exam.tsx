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
import { useNavigate, useRouteError } from "react-router-dom";

const Exam = () => {
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

    // Add 43 more questions here in same format
  ];

  const { toast } = useToast();

  const navigate = useNavigate();

  const examSteps = [
    {
      step: 1,
      title: "Foundation Assessment",
      levels: ["A1", "A2"],
      description:
        "Basic digital fundamentals, internet safety, and programming concepts",
      questions: 44,
      timeLimit: "44 minutes",
      passingScore: 25,
      advanceScore: 75,
      color: "bg-success/20 border-success/40 text-success-glow",
      icon: Brain,
      requirements: [
        "Score &lt;25%: Fail, no retake allowed",
        "25-49.99%: A1 certification",
        "50-74.99%: A2 certification",
        "≥75%: A2 certified + advance to Step 2",
      ],
    },
    {
      step: 2,
      title: "Intermediate Assessment",
      levels: ["B1", "B2"],
      description:
        "Programming logic, web development, databases, and cybersecurity",
      questions: 44,
      timeLimit: "44 minutes",
      passingScore: 25,
      advanceScore: 75,
      color: "bg-primary/20 border-primary/40 text-primary-glow",
      icon: Code,
      requirements: [
        "Score &lt;25%: Remain at A2",
        "25-49.99%: B1 certification",
        "50-74.99%: B2 certification",
        "≥75%: B2 certified + advance to Step 3",
      ],
    },
    {
      step: 3,
      title: "Advanced Assessment",
      levels: ["C1", "C2"],
      description:
        "Full-stack development, DevOps, security mastery, and complex problem solving",
      questions: 44,
      timeLimit: "44 minutes",
      passingScore: 25,
      advanceScore: 50,
      color: "bg-accent/20 border-accent/40 text-accent-glow",
      icon: Globe,
      requirements: [
        "Score &lt;25%: Remain at B2",
        "25-49.99%: C1 certification",
        "≥50%: C2 certification",
      ],
    },
  ];

  const competencyAreas = [
    { name: "Basic Grammar", icon: BookOpen, questions: 8 },
    { name: "Vocabulary & Usage", icon: Pencil, questions: 12 },
    { name: "Reading Comprehension", icon: Book, questions: 10 },
    { name: "Listening Skills", icon: Headphones, questions: 8 },
    { name: "Speaking & Pronunciation", icon: Globe, questions: 6 },
    { name: "Writing Skills", icon: Text, questions: 7 },
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const startExam = (stepNumber: number) => {
    navigate(`/exam/${stepNumber}`);
  };

  const calculateScore = () => {
    return questions.reduce((acc, q, i) => {
      return acc + (selectedOptions[i] === q.correct ? 1 : 0);
    }, 0);
  };

 
  

 

  return (
    <div className="min-h-screen bg-background cyber-grid">
      {/* Hero Section */}
      <Hero />

      {/* Assessment Steps */}
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
            {examSteps.map((step, index) => (
              <Card
                key={step.step}
                className=" glow-border group  transition-all duration-500"
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-xl bg-gradient-primary    transition-all duration-300">
                        <step.icon className="w-8 h-8  text-[#6bdaff]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-2xl text-primary-glow">
                            {step.title}
                          </CardTitle>
                          <div className="flex gap-2">
                            {step.levels.map((level) => (
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
                      onClick={() => startExam(step.step)}
                      className="group/btn"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Start Assessment
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary-glow">
                        Assessment Details
                      </h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>
                            {step.questions} questions • {step.timeLimit}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Passing score: {step.passingScore}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4" />
                          <span>Advance score: {step.advanceScore}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2 space-y-4">
                      <h4 className="font-semibold text-primary-glow">
                        Scoring Requirements
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.requirements.map((req, reqIndex) => (
                          <div
                            key={reqIndex}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary-glow" />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competency Areas */}
      <Competency />

      {/* Security Notice */}
      <Security />
    </div>
  );
};

export default Exam;
