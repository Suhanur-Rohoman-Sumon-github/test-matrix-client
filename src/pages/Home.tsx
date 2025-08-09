import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import {
  Brain,
  Shield,
  Award,
  Zap,
  Clock,
  Users,
  ArrowRight,
  Code,
  Database,
  Globe,
} from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import Footer from "./Footer";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "3-Step Progressive Assessment",
      description: "A1→A2 → B1→B2 → C1→C2 certification pathway",
    },
    {
      icon: Shield,
      title: "Secure Testing Environment",
      description: "Protected browser, anti-cheat measures, live monitoring",
    },
    {
      icon: Clock,
      title: "Timed Evaluations",
      description: "Structured time limits with auto-submission",
    },
    {
      icon: Award,
      title: "Digital Certification",
      description: "Instant PDF certificates upon completion",
    },
  ];

  const competencies = [
    { icon: Code, title: "Programming Logic", levels: "A1-C2" },
    { icon: Globe, title: "Web Development", levels: "A1-C2" },
    { icon: Database, title: "Database Management", levels: "B1-C2" },
    { icon: Shield, title: "Cybersecurity", levels: "A2-C2" },
  ];

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pb-32 overflow-hidden light-top pt-[230px]">
        {/* Floating Glowing Icons */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Top-left floating icon */}
          <div className="absolute top-[200px] left-10 w-10 h-10 animate-floatSlow glowIcon">
            💡
          </div>

          {/* Top-right floating icon */}
          <div className="absolute top-16 right-16 w-10 h-10 animate-pulseSlow glowIcon">
            🚀
          </div>

          {/* Another floating icon */}
          <div className="absolute top-32 left-20 w-8 h-8 animate-spinSlow glowIcon">
            ⚙️
          </div>
        </div>

        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Digital Assessment Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-dark opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold space-y-2">
                <div className="glow-text">Prove Your</div>
                <div className="text-primary">Digital Mastery</div>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Advanced 3-step progressive evaluation system. From basic A1
                level to expert C2 certification. Secure, timed, and
                comprehensive digital competency testing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="neon" size="xl" asChild>
                <Link to="/register" className="group">
                  Start Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="glass" size="xl" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Advanced Assessment Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology for accurate and secure digital competency
              evaluation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className=" p-8 text-center space-y-4   glow-border glass-card"
              >
                <div className="inline-flex p-4 rounded-xl bg-primary shadow-sm group-hover:shadow-md transition-all duration-300">
                  <feature.icon className="w-8 h-8 " />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Digital Competencies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive assessment across critical digital skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((comp, index) => (
              <div
                key={index}
                className=" p-6 text-center space-y-4 group hover:border-primary/40 transition-all duration-300  glow-border glass-card"
              >
                <comp.icon className="w-12 h-12 text-primary mx-auto " />
                <h3 className="text-lg font-semibold text-white">
                  {comp.title}
                </h3>
                <div className="inline-flex px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                  {comp.levels}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24  light-bottom ">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 glow-border  p-8 glass-card">
          <div className="space-y-8 ">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Ready to Test Your Skills?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of professionals who have certified their digital
              competencies
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center ">
              <Button variant="neon" size="xl" asChild>
                <Link to="/register">Begin Assessment</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
