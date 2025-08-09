import { bonusFeatures } from "@/data/data";
import React from "react";

const Bonus = () => {
  return (
    <div>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Additional Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enhanced capabilities for a complete assessment experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bonusFeatures.map((feature, index) => (
              <div
                key={index}
                className=" p-8 text-center space-y-6 group  transition-all duration-500 glow-border glass-card"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-primary    transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-[#6bdaff] " />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary-glow">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bonus;
