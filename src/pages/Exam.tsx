import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
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
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import CompletionPage from "@/components/CompletionPage";

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(2640); // 44 minutes for 44 questions
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isExamActive, setIsExamActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<
    (number | undefined)[]
  >([]);
  const { toast } = useToast();

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
    { name: "Digital Fundamentals", icon: Brain, questions: 8 },
    { name: "Programming Logic", icon: Code, questions: 12 },
    { name: "Web Development", icon: Globe, questions: 10 },
    { name: "Database Management", icon: Database, questions: 8 },
    { name: "Cybersecurity", icon: Shield, questions: 6 },
  ];

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

  const startExam = (stepNumber: number) => {
    setCurrentStep(stepNumber);
    setIsExamActive(true);
    setCurrentQuestion(1);
    setTimeRemaining(2640); // Reset timer
    toast({
      title: "Assessment Started",
      description: `Step ${stepNumber} assessment is now active. Good luck!`,
    });
  };

  const calculateScore = () => {
    return questions.reduce((acc, q, i) => {
      return acc + (selectedOptions[i] === q.correct ? 1 : 0);
    }, 0);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
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
                  bgStyle = "bg-green-500 border-green-600";
                  textStyle = "text-white";
                } else if (isSelected && !isCorrect) {
                  bgStyle = "bg-red-500 border-red-600 opacity-80";
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

  if (isSubmitted) {
    const score = calculateScore();
    return (
      <CompletionPage
        score={score}
        total={questions.length}
        questions={questions}
        selectedOptions={selectedOptions}
      />
    );
  }

  if (isExamActive && currentStep) {
    return (
      <div className="min-h-screen bg-background cyber-grid">
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

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20  ">
                <Award className="w-5 h-5 text-primary-glow mr-2" />
                <span className="text-primary-glow font-medium">
                  Digital Competency Assessment
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="glow-text">Assessment</span>
                <span className="text-primary-glow"> Portal</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Progressive 3-step evaluation system from A1 to C2 certification
                levels. Secure, timed, and comprehensive testing environment.
              </p>
            </div>
          </div>
        </div>
      </section>

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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Assessment Coverage
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive evaluation across key digital competency areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencyAreas.map((area, index) => (
              <Card
                key={index}
                className=" glow-border text-center p-6 group  transition-all duration-500 "
              >
                <div className="space-y-4">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-primary    transition-all duration-300">
                    <area.icon className="w-6 h-6 text-[#6bdaff]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-glow">
                      {area.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {area.questions} questions per step
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-20 ">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Card className=" border-destructive/20 p-8">
            <div className="space-y-6">
              <div className="inline-flex p-4 rounded-xl bg-destructive/20 shadow-[0_0_20px_hsl(var(--destructive)/0.3)]">
                <AlertCircle className="w-8 h-8 text-destructive-glow" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-destructive-glow">
                  Important Assessment Guidelines
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    • Assessments are timed and must be completed in one session
                  </p>
                  <p>
                    • Secure browser mode prevents external tab access during
                    exam
                  </p>
                  <p>
                    • Step 1 failure (score &lt;25%) prevents retaking - choose
                    wisely
                  </p>
                  <p>• Live monitoring may be active during assessment</p>
                  <p>
                    • Questions are randomized from competency-specific pools
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Exam;
