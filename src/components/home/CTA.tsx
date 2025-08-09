import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div>
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
    </div>
  );
};

export default CTA;
