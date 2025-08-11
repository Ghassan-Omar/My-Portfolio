import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Greeting */}
          <p className="text-emerald-400 font-mono text-lg mb-6 animate-fade-in">
            Hi, my name is
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="text-slate-100 block">Ghassan Emran.</span>
          </h1>
          
          {/* Tagline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-400 mb-8">
            I build things for the web.
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
            I'm a full-stack developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products at{' '}
            <a 
              href="mailto:https://ghassan.98@yahoo.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline transition-colors"
            >
              freelance
            </a>.
          </p>
          
          {/* CTA Button */}
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 border-2 border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-400/10 transition-all duration-200 text-lg font-medium relative overflow-hidden"
          >
            <span className="relative z-10">Check out my work!</span>
            <div className="absolute inset-0 bg-emerald-400/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

