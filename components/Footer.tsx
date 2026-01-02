
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-600 p-2 rounded-lg">
                <i className="fas fa-car-crash text-xl text-white"></i>
              </div>
              <span className="font-extrabold text-2xl tracking-tighter">AAA COLLISION</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 pr-8">
              Expert collision and mechanical repair since 1999. Your one-stop shop for automotive excellence in the Greater Houston Area.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors"><i className="fab fa-twitter"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#estimate" className="hover:text-red-500 transition-colors">Free Estimate</a></li>
            </ul>
          </div>

          {/* Location */}
          <div id="contact">
            <h4 className="text-lg font-bold mb-6">Houston HQ</h4>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-start gap-4">
                <i className="fas fa-location-dot mt-1 text-red-600"></i>
                <span>2951 Washington Dr, Ste B,<br />Houston, TX 77038</span>
              </div>
              <div className="flex items-center gap-4">
                <i className="fas fa-phone text-red-600"></i>
                <a href="tel:8324301992" className="hover:text-white transition-colors">(832) 430-1992</a>
              </div>
              <div className="flex items-center gap-4">
                <i className="fas fa-envelope text-red-600"></i>
                <a href="mailto:info@aaacollisioncenter.com" className="hover:text-white transition-colors">info@aaacollisioncenter.com</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6">Service Hours</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between text-red-500 font-bold"><span>Roadside:</span> <span>24/7 Available</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} AAA Collision Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
