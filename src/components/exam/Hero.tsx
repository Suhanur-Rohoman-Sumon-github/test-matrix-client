import { Award } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div>
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
    </div>
  );
};

export default Hero;
