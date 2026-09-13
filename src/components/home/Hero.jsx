import React from 'react';
import Button from '../common/Button';
import heroImage from '../../assets/banner-stack.png';

const Hero = () => {
  return (
    <section id="home" className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Build Your Ideal <br className="hidden sm:inline" />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <Button variant="primary">Explore Technologies</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img 
            src={heroImage} 
            alt="Dev Stack Illustration" 
            className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;