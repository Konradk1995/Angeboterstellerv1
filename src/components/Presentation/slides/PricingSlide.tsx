import React from 'react';

interface PricingSlideProps {
  offer: {
    total_price?: number;
    services?: {
      name: string;
      description?: string;
    }[];
  };
}

const PricingSlide: React.FC<PricingSlideProps> = ({ offer }) => {
  const formatPrice = (price: number = 0) => {
    return new Intl.NumberFormat('de-DE', { 
      style: 'currency', 
      currency: 'EUR' 
    }).format(price);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Investition</h2>
      
      <div className="text-center mb-8">
        <span className="text-4xl font-bold text-indigo-600">
          {formatPrice(offer?.total_price)}
        </span>
      </div>

      <div className="space-y-4">
        {offer?.services?.map((service, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
            {service.description && (
              <p className="text-gray-600">{service.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSlide;