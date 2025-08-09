import { coreFeatures } from "@/data/data";
import { CheckCircle } from "lucide-react";
import React from "react";

const Core = () => {
  return (
    <div>
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Core Assessment Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced features designed for comprehensive and accurate skill
              evaluation
            </p>
          </div>

          <div className="space-y-12">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className=" p-8 group  transition-all duration-500 glow-border glass-card"
              >
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-xl bg-gradient-primary    transition-all duration-300">
                        <feature.icon className="w-8 h-8 text-[#6bdaff] " />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-glow">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-lg">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {feature.features.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-success-glow flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
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

export default Core;
