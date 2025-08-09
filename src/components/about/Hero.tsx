import React from 'react';

const Hero = () => {
    return (
      <div>
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold">
                  <span className="glow-text">About</span>
                  <span className="text-primary-glow"> Test_School</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  A comprehensive digital competency assessment platform
                  designed to evaluate and certify your technical skills through
                  a structured, progressive testing methodology.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Hero;