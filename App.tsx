
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import EstimateForm from './components/EstimateForm';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Why Choose Us Section */}
        <section id="about" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?q=80&w=1200&auto=format&fit=crop" 
                  alt="Mechanic at work" 
                  className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover h-[500px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl z-20 hidden md:block border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl">
                      <i className="fas fa-award"></i>
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900">Certified</h4>
                      <p className="text-sm text-slate-500">I-CAR Platinum Shop</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">About AAA Collision</h2>
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">Your Trusted Partner in Automotive Recovery.</h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  AAA Collision Center is your one-stop shop for expert collision repair, auto repair, and auto maintenance in Houston, Katy, Cypress, and surrounding areas. 
                  Our locally owned facility cares for all makes and models—including trucks, vans, motorhomes, classics, and exotics.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="text-red-600 mt-1"><i className="fas fa-check-circle"></i></div>
                    <div>
                      <h5 className="font-bold text-slate-900">Expert Mechanics</h5>
                      <p className="text-sm text-slate-500">ASE & I-CAR Professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-red-600 mt-1"><i className="fas fa-check-circle"></i></div>
                    <div>
                      <h5 className="font-bold text-slate-900">Advanced Tech</h5>
                      <p className="text-sm text-slate-500">Precision Diagnostics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-red-600 mt-1"><i className="fas fa-check-circle"></i></div>
                    <div>
                      <h5 className="font-bold text-slate-900">24/7 Support</h5>
                      <p className="text-sm text-slate-500">Always here when needed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-red-600 mt-1"><i className="fas fa-check-circle"></i></div>
                    <div>
                      <h5 className="font-bold text-slate-900">Lifetime Warranty</h5>
                      <p className="text-sm text-slate-500">On all collision body work</p>
                    </div>
                  </div>
                </div>
                <a href="tel:8324301992" className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95">
                  Learn More About Us <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Services />

        {/* Estimate Section Wrapper */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Ready to Repair?</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Professional Estimates.</h3>
              <p className="max-w-2xl mx-auto text-slate-600 text-lg">
                Fill out the form below or use our AI assistant to get started. We pride ourselves on transparent, honest pricing.
              </p>
            </div>
            <EstimateForm />
          </div>
        </section>

        {/* Local Area Callout */}
        <section className="py-20 bg-slate-900">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <h4 className="text-2xl font-bold mb-8">Proudly Serving These Houston Communities</h4>
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-50">
                <span className="text-xl font-black tracking-widest">HOUSTON</span>
                <span className="text-xl font-black tracking-widest">KATY</span>
                <span className="text-xl font-black tracking-widest">CYPRESS</span>
                <span className="text-xl font-black tracking-widest">SPRING</span>
                <span className="text-xl font-black tracking-widest">JERSEY VILLAGE</span>
                <span className="text-xl font-black tracking-widest">SUGAR LAND</span>
              </div>
           </div>
        </section>
      </main>

      <Footer />
      <ChatBot />

      {/* Persistent CTA Button for Mobile */}
      <div className="md:hidden fixed bottom-6 left-6 z-[60]">
        <a 
          href="tel:8324301992" 
          className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl active:scale-90"
        >
          <i className="fas fa-phone text-2xl"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
