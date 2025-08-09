import Footer from "./Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Competencies from "@/components/home/Competencies";
import CTA from "@/components/home/CTA";

const Home = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}

      <Features />
      {/* Competencies Section */}

      <Competencies />
      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default Home;
