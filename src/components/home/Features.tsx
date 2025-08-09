import { features } from "@/data/data";
import React from "react";

const Features = () => {
  return (
    <div>
      <section className="py-24 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Advanced Assessment Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology for accurate and secure digital competency
              evaluation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className=" p-8 text-center space-y-4   glow-border glass-card"
              >
                <div className="inline-flex p-4 rounded-xl bg-primary shadow-sm group-hover:shadow-md transition-all duration-300">
                  <feature.icon className="w-8 h-8 " />
                </div>
                <h3 className="text-xl font-semibold text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
