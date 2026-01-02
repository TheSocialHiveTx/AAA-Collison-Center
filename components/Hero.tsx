
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Auto Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-500 border border-red-500/30 px-3 py-1 rounded-full text-sm font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            24/7 ROADSIDE ASSISTANCE
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Houston's Experts in <span className="text-red-600">Perfect</span> Collision Repair.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            From minor dings to complete engine overhauls, AAA Collision Center restores your vehicle to showroom condition. Serving Houston, Katy, and Cypress with precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#estimate" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg text-center transition-all shadow-xl shadow-red-900/20 active:scale-95">
              Get Free Estimate
            </a>
            <a href="#services" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold text-lg text-center transition-all active:scale-95">
              Explore Services
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 border-t border-slate-700 pt-8">
            <div>
              <div className="text-white text-2xl font-bold">25+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-white text-2xl font-bold">15k+</div>
              <div className="text-slate-400 text-sm">Vehicles Fixed</div>
            </div>
            <div>
              <div className="text-white text-2xl font-bold">4.9/5</div>
              <div className="text-slate-400 text-sm">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
