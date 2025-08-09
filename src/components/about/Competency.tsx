import { competencyAreas } from "@/data/data";
import React from "react";

const Competency = () => {
  return (
    <div>
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Core Competency Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive assessment across critical digital skills and
              technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competencyAreas.map((area, index) => (
              <div
                key={index}
                className=" p-8 space-y-6 group  transition-all duration-500 glow-border glass-card"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-primary  transition-all duration-300">
                    <area.icon className="w-6 h-6 text-[#6bdaff]" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-glow">
                    {area.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Competency;
