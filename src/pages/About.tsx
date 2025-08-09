import Hero from "@/components/about/Hero";
import Platform from "@/components/about/Platform";
import Assessment from "@/components/about/Assessment";
import Competency from "@/components/about/Competency";
import AssessmentDetail from "@/components/about/AssessmentDetail";

const About = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      {/* Hero Section */}
      <Hero />
      {/* Platform Objectives */}
      <Platform />
      {/* Assessment Levels */}
      <Assessment />
      {/* Competency Areas */}
      <Competency />
      {/* Assessment Details */}
      <AssessmentDetail />
    </div>
  );
};

export default About;
