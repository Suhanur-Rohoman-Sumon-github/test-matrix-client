import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Clock,
  Shield,
  Award,
  Users,
  VideoIcon,
  Lock,
  FileCheck,
  Mail,
  Download,
  CheckCircle,
  ArrowRight,
  Brain,
  BarChart3,
  Smartphone,
} from "lucide-react";

const Services = () => {
  const coreFeatures = [
    {
      icon: Brain,
      title: "3-Step Assessment Flow",
      description:
        "Progressive evaluation through Foundation (A1-A2), Intermediate (B1-B2), and Advanced (C1-C2) levels",
      features: [
        "Smart scoring algorithm",
        "Level-appropriate questions",
        "Progressive unlocking system",
        "Performance-based advancement",
      ],
    },
    {
      icon: Clock,
      title: "Advanced Timer System",
      description:
        "Sophisticated time management with countdown timers and automatic submission capabilities",
      features: [
        "1 minute per question default",
        "Configurable time limits",
        "Auto-submit on expiration",
        "Real-time countdown display",
      ],
    },
    {
      icon: Award,
      title: "Digital Certification",
      description:
        "Automated certificate generation with instant delivery and verification systems",
      features: [
        "Instant PDF generation",
        "Email delivery system",
        "Digital verification codes",
        "Professional certificate design",
      ],
    },
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "Secure Exam Environment",
      description:
        "Safe Exam Browser integration with comprehensive security measures",
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Restricted navigation and input methods during assessment",
    },
    {
      icon: VideoIcon,
      title: "Live Monitoring",
      description:
        "Optional video recording during exams for integrity verification",
    },
    {
      icon: FileCheck,
      title: "Anti-Cheat System",
      description: "Advanced detection of unauthorized activities and attempts",
    },
  ];

  const userRoles = [
    {
      role: "Student",
      description: "Take assessments, view results, download certificates",
      icon: Users,
      features: [
        "Access to all assessment levels",
        "Real-time progress tracking",
        "Certificate download",
        "Performance analytics",
      ],
    },
    {
      role: "Supervisor",
      description: "Monitor student progress and manage assessments",
      icon: BarChart3,
      features: [
        "Student progress oversight",
        "Assessment scheduling",
        "Results monitoring",
        "Performance reports",
      ],
    },
    {
      role: "Admin",
      description: "Full platform management and analytics access",
      icon: Lock,
      features: [
        "User management",
        "System configuration",
        "Comprehensive analytics",
        "Question pool management",
      ],
    },
  ];

  const bonusFeatures = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Detailed performance analytics per competency and trending data",
    },
    {
      icon: Mail,
      title: "Email Notifications",
      description:
        "Automated email system for results, certificates, and updates",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description:
        "Fully responsive design for seamless mobile and tablet experience",
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
                <span className="glow-text">Our</span>
                <span className="text-primary-glow"> Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Comprehensive digital competency assessment platform with
                advanced security, automated certification, and detailed
                analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Core Assessment Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced features designed for comprehensive and accurate skill
              evaluation
            </p>
          </div>

          <div className="space-y-12">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className=" p-8 group  transition-all duration-500 glow-border glass-card"
              >
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-xl bg-gradient-primary    transition-all duration-300">
                        <feature.icon className="w-8 h-8 text-[#6bdaff]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-glow">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {feature.features.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-success-glow flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Security & Integrity
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade security measures to ensure assessment integrity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className=" p-8 text-center space-y-6 group  transition-all duration-500 glow-border glass-card"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-primary    transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-[#6bdaff]" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary-glow">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Roles */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              User Roles & Access
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored interfaces and permissions for different user types
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {userRoles.map((user, index) => (
              <div
                key={index}
                className=" p-8 space-y-6 group  transition-all duration-500 glow-border glass-card"
              >
                <div className="text-center space-y-4">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-primary    transition-all duration-300">
                    <user.icon className="w-8 h-8 text-[#6bdaff]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-glow">
                      {user.role}
                    </h3>
                    <p className="text-muted-foreground">{user.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {user.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-success-glow flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Additional Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhanced capabilities for a complete assessment experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bonusFeatures.map((feature, index) => (
              <div
                key={index}
                className=" p-8 text-center space-y-6 group  transition-all duration-500 glow-border glass-card"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-primary    transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-[#6bdaff]" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary-glow">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20  ">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 glow-border glass-card">
          <div className=" p-12 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold glow-text">
                Ready to Begin?
              </h2>
              <p className="text-xl text-muted-foreground">
                Experience our comprehensive digital competency assessment
                platform
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
                <Link to="/login">Access Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
