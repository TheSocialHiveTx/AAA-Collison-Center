
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="bg-red-600 p-2 rounded-lg">
                <i className="fas fa-car-crash text-2xl text-white"></i>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tighter">AAA COLLISION</span>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">Houston's Elite Care</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-red-500 transition-colors font-medium">Home</a>
            <a href="#services" className="hover:text-red-500 transition-colors font-medium">Services</a>
            <a href="#about" className="hover:text-red-500 transition-colors font-medium">About</a>
            <a href="#contact" className="hover:text-red-500 transition-colors font-medium">Contact</a>
            <a href="tel:8324301992" className="bg-red-600 hover:bg-red-700 px-6 py-2.5 rounded-full font-bold transition-all shadow-md active:scale-95">
              (832) 430-1992
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2">
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-slate-700">Home</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-slate-700">Services</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-slate-700">About</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium border-b border-slate-700">Contact</a>
            <a href="tel:8324301992" className="block w-full text-center bg-red-600 text-white font-bold py-4 mt-4 rounded-lg">Call Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
