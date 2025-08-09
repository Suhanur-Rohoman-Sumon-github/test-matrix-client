import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
const Hero = () => {
  return (
    <div>
      <section className="relative pb-32 overflow-hidden light-top pt-[230px]">
        {/* Floating Glowing Icons */}

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
                <div className="glow-text">Test Your</div>
                <div className="text-primary">English Skills</div>
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
    </div>
  );
};

export default Hero;
