import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
      
      <div className="container mx-auto px-6 pt-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
              Frontend Developer
            </span>
            <br />
            Crafting Digital Experiences
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Transforming ideas into elegant, responsive, and user-friendly web applications
            using modern technologies and best practices.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a
              href="#contact"
              className="px-8 py-3 bg-white/10 rounded-full text-white font-medium hover:bg-white/20 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white animate-bounce transition-colors"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}