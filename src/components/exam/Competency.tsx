import { competency } from '@/data/data';
import React from 'react';
import { Card } from '../ui/card';

const Competency = () => {
    return (
      <div>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold glow-text">
                Assessment Coverage
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive evaluation across key digital competency areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competency.map((area, index) => (
                <Card
                  key={index}
                  className=" glow-border text-center p-6 group  transition-all duration-500 "
                >
                  <div className="space-y-4">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-primary    transition-all duration-300">
                      <area.icon className="w-6 h-6 text-[#6bdaff]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-glow">
                        {area.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {area.questions} questions per step
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
};

export default Competency;