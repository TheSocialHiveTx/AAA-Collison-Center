
import React from 'react';

const services = [
  {
    title: 'Collision Repair',
    description: 'Expert body work to restore your vehicle after accidents, big or small.',
    icon: 'fa-car-burst',
    color: 'bg-blue-500'
  },
  {
    title: 'Mechanical Repair',
    description: 'Full engine diagnostics, transmission work, and suspension repairs.',
    icon: 'fa-gears',
    color: 'bg-green-500'
  },
  {
    title: 'Maintenance',
    description: 'Oil changes, brake inspections, and routine tune-ups to keep you safe.',
    icon: 'fa-wrench',
    color: 'bg-orange-500'
  },
  {
    title: 'Paint & Refinish',
    description: 'Computer-matched paint systems for a seamless factory-quality finish.',
    icon: 'fa-fill-drip',
    color: 'bg-purple-500'
  },
  {
    title: 'Classic & Exotic',
    description: 'Specialized care for high-end luxury vehicles and vintage classics.',
    icon: 'fa-gem',
    color: 'bg-red-500'
  },
  {
    title: '24/7 Recovery',
    description: 'Round-the-clock towing and roadside recovery for all vehicle sizes.',
    icon: 'fa-truck-pickup',
    color: 'bg-slate-700'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Comprehensive Auto Solutions</h3>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg">
            We provide elite automotive care for all makes and models, ensuring your safety and vehicle longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-3xl border border-slate-100 hover:border-red-100 hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-300">
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center text-red-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
