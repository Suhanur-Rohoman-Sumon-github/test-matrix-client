import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AssessmentDetail = () => {
  return (
    <div>
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

export default AssessmentDetail;
