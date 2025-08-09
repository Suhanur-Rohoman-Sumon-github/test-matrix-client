import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div>
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
    </div>
  );
};

export default Hero;
