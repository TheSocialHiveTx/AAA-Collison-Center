
import React, { useState } from 'react';

const EstimateForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 p-12 rounded-3xl text-center">
        <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
          <i className="fas fa-check"></i>
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4">Request Received!</h3>
        <p className="text-slate-600 text-lg">Our team will review your information and call you within 24 hours to schedule your free estimate.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-8 text-green-600 font-bold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div id="estimate" className="bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <i className="fas fa-car-side text-[15rem] rotate-12"></i>
      </div>

      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl font-black text-white mb-8">Get a Free Estimate</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div>
              <label className="block text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Full Name</label>
              <input required type="text" className="w-full bg-slate-800 border-none rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-red-600 transition-all outline-none" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Email Address</label>
              <input required type="email" className="w-full bg-slate-800 border-none rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-red-600 transition-all outline-none" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Phone Number</label>
              <input required type="tel" className="w-full bg-slate-800 border-none rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-red-600 transition-all outline-none" placeholder="(832) 000-0000" />
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Vehicle Year / Make / Model</label>
              <input required type="text" className="w-full bg-slate-800 border-none rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-red-600 transition-all outline-none" placeholder="2022 Tesla Model 3" />
            </div>
            <div>
              <label className="block text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">Damage Description</label>
              <textarea required rows={4} className="w-full bg-slate-800 border-none rounded-xl px-4 py-4 text-white focus:ring-2 focus:ring-red-600 transition-all outline-none resize-none" placeholder="Rear-end collision damage..."></textarea>
            </div>
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-xl shadow-red-600/20 transition-all active:scale-95">
              Send Request <i className="fas fa-paper-plane ml-2"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EstimateForm;
