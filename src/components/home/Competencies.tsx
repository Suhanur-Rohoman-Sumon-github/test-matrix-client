import { competencies } from "@/data/data";
import React from "react";

const Competencies = () => {
  return (
    <div>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Digital Competencies
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive assessment across critical digital skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((comp, index) => (
              <div
                key={index}
                className=" p-6 text-center space-y-4 group hover:border-primary/40 transition-all duration-300  glow-border glass-card"
              >
                <comp.icon className="w-12 h-12 text-primary mx-auto  " />
                <h3 className="text-lg font-semibold text-white">
                  {comp.title}
                </h3>
                <div className="inline-flex px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium">
                  {comp.levels}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competencies;
