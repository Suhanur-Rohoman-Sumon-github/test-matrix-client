import { levels } from "@/data/data";
import { CheckCircle } from "lucide-react";
import React from "react";

const Assessment = () => {
  return (
    <div>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              3-Step Assessment Flow
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Progressive evaluation system designed to accurately assess your
              competency level
            </p>
          </div>

          <div className="space-y-8">
            {levels.map((level, index) => (
              <div
                key={index}
                className=" p-8 group  transition-all duration-500  glow-border glass-card"
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`px-4 py-2 rounded-lg border ${level.color} font-semibold`}
                      >
                        {level.step}
                      </div>
                      <div className="flex gap-2">
                        {level.levels.map((lvl) => (
                          <div
                            key={lvl}
                            className="px-3 py-1 rounded-full bg-primary/20 text-primary-glow text-sm font-medium"
                          >
                            {lvl}
                          </div>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary-glow">
                      {level.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {level.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-accent-glow">
                      <CheckCircle className="w-4 h-4" />
                      <span>{level.requirements}</span>
                    </div>
                  </div>
                  <div className="text-6xl font-bold text-primary/20">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assessment;
