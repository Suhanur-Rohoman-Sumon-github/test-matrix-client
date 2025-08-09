import { whyChooseUs } from "@/data/data";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold glow-text">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what sets our English testing platform apart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="p-8 space-y-6 group transition-all duration-500 glow-border glass-card"
              >
                <div className="text-center space-y-4">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-primary transition-all duration-300 justify-center mx-auto">
                    <item.icon className="w-8 h-8 text-[#6bdaff]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-glow">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
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

export default WhyChooseUs;
