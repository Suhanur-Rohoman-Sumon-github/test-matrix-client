import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Code2,
  Database,
  Globe,
  Lock,
} from "lucide-react";

const About = () => {
  const objectives = [
    {
      icon: Target,
      title: "Assess Digital Skills",
      description:
        "Comprehensive evaluation based on predefined Test_School levels from A1 to C2",
    },
    {
      icon: Shield,
      title: "3-Step Progressive Pathway",
      description:
        "Structured assessment flow ensuring proper skill validation at each level",
    },
    {
      icon: Award,
      title: "Automated Certification",
      description:
        "Instant assignment of certification levels based on performance scores",
    },
    {
      icon: Lock,
      title: "Secure Assessment",
      description:
        "Prevent retests on failure, implement timers and maintain test integrity",
    },
  ];

  const levels = [
    {
      step: "Step 1",
      levels: ["A1", "A2"],
      title: "Foundation Level",
      description:
        "Basic digital fundamentals, internet safety, and intro programming",
      requirements: "25% pass threshold, <25% = fail with no retake",
      color: "bg-success/20 border-success/40 text-success-glow",
    },
    {
      step: "Step 2",
      levels: ["B1", "B2"],
      title: "Intermediate Level",
      description:
        "Programming logic, web development, backend basics, and cybersecurity",
      requirements: "Accessible after achieving 75% in Step 1",
      color: "bg-primary/20 border-primary/40 text-primary-glow",
    },
    {
      step: "Step 3",
      levels: ["C1", "C2"],
      title: "Advanced Level",
      description:
        "Full-stack development, DevOps, security mastery, and complex problem solving",
      requirements: "Accessible after achieving 75% in Step 2",
      color: "bg-accent/20 border-accent/40 text-accent-glow",
    },
  ];

  const competencyAreas = [
    {
      icon: Code2,
      title: "Programming & Logic",
      description:
        "Variables, functions, OOP, async programming, testing & debugging",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "HTML/CSS, JavaScript, DOM manipulation, responsive design, APIs",
    },
    {
      icon: Database,
      title: "Data Management",
      description:
        "SQL databases, data analysis, JSON handling, data visualization",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Password security, HTTPS, encryption, secure coding practices",
    },
  ];

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="glow-text">About</span>
                <span className="text-primary-glow"> Test_School</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                A comprehensive digital competency assessment platform designed
                to evaluate and certify your technical skills through a
                structured, progressive testing methodology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Objectives */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Platform Objectives
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our mission is to provide accurate, secure, and comprehensive
              digital skill assessment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className=" p-8 text-center space-y-6 group  transition-all duration-500  glow-border glass-card"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-primary  transition-all duration-300">
                  <objective.icon className="w-8 h-8 text-[#6bdaff]" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary-glow">
                    {objective.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {objective.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Levels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              3-Step Assessment Flow
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Progressive evaluation system designed to accurately assess your
              competency level
            </p>
          </div>

          <div className="space-y-8">
            {levels.map((level, index) => (
              <div
                key={index}
                className=" p-8 group  transition-all duration-500  glow-border glass-card"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`px-4 py-2 rounded-lg border ${level.color} font-semibold`}
                      >
                        {level.step}
                      </div>
                      <div className="flex gap-2">
                        {level.levels.map((lvl) => (
                          <div
                            key={lvl}
                            className="px-3 py-1 rounded-full bg-primary/20 text-primary-glow text-sm font-medium"
                          >
                            {lvl}
                          </div>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary-glow">
                      {level.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {level.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-accent-glow">
                      <CheckCircle className="w-4 h-4" />
                      <span>{level.requirements}</span>
                    </div>
                  </div>
                  <div className="text-6xl font-bold text-primary/20">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competency Areas */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Core Competency Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive assessment across critical digital skills and
              technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competencyAreas.map((area, index) => (
              <div
                key={index}
                className=" p-8 space-y-6 group  transition-all duration-500 glow-border glass-card"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary  transition-all duration-300">
                    <area.icon className="w-6 h-6 text-[#6bdaff]" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-glow">
                    {area.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" p-12 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold glow-text">
                Assessment Details
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each assessment is carefully designed with timed questions,
                secure browser environment, and comprehensive evaluation
                criteria
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 ">
              <div className="space-y-2  glow-border glass-card">
                <div className="text-3xl font-bold text-primary-glow">132</div>
                <div className="text-muted-foreground">Total Questions</div>
                <div className="text-sm text-accent-glow">
                  22 competencies × 6 levels
                </div>
              </div>
              <div className="space-y-2 glow-border glass-card">
                <div className="text-3xl font-bold text-primary-glow">44</div>
                <div className="text-muted-foreground">Questions per Step</div>
                <div className="text-sm text-accent-glow">
                  From 2 relevant levels
                </div>
              </div>
              <div className="space-y-2 glass-card glow-border p-2 glass-card">
                <div className="text-3xl font-bold text-primary-glow">
                  1 min
                </div>
                <div className="text-muted-foreground">Per Question</div>
                <div className="text-sm text-accent-glow">
                  Configurable timing
                </div>
              </div>
            </div>

            <Button variant="neon" size="xl" asChild>
              <Link to="/register" className="group">
                Start Your Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
