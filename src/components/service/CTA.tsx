import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <div>
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

export default CTA;
