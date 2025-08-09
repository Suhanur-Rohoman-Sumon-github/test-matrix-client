import { objectives } from "@/data/data";
import React from "react";

const Platform = () => {
  return (
    <div>
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Platform Objectives
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our mission is to provide accurate, secure, and comprehensive
              digital skill assessment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className=" p-8 text-center space-y-6 group  transition-all duration-500  glow-border glass-card"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-primary  transition-all duration-300">
                  <objective.icon className="w-8 h-8 text-[#6bdaff]" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary-glow">
                    {objective.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {objective.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Platform;
