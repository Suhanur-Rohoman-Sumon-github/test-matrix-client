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
  ChartBar,
  Star,
} from "lucide-react";
import { Certificate } from "crypto";
import Hero from "@/components/service/Hero";
import Core from "@/components/service/Core";
import Security from "@/components/service/Security";
import CTA from "@/components/service/CTA";
import Bonus from "@/components/service/Bonus";
import WhyChooseUs from "@/components/service/WhyChooseUs";

const Services = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      {/* Hero Section */}

      <Hero />
      {/* Core Features */}

      <Core />
      {/* Security Features */}

      <Security />
      {/* Why Choose Us */}
      <WhyChooseUs />
      {/* Bonus Features */}
      <Bonus />
      {/* CTA Section */}
      <CTA />
      {/* Footer or additional sections can be added here */}
    </div>
  );
};

export default Services;
