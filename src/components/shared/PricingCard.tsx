import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, featured = false }) => {
  return (
    <div className={`rounded-xl p-8 ${
      featured 
        ? 'bg-indigo-600 text-white transform scale-105 shadow-xl' 
        : 'bg-white text-gray-900 shadow-lg'
    }`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <CheckCircle2 className={`h-5 w-5 ${featured ? 'text-indigo-200' : 'text-indigo-600'}`} />
            <span className={featured ? 'text-indigo-100' : 'text-gray-600'}>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
        featured
          ? 'bg-white text-indigo-600 hover:bg-gray-100'
          : 'bg-indigo-600 text-white hover:bg-indigo-700'
      }`}>
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;