import React from 'react';

const ServicesSlide = ({ offer }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Unsere Leistungen</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {offer?.services?.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSlide;