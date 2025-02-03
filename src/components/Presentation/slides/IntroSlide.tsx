import React from 'react';
import { BarChart } from 'lucide-react';

const IntroSlide = ({ offer }) => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <BarChart className="h-16 w-16 text-indigo-600 mx-auto mb-8" />
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Angebot für {offer?.client_name}
      </h1>
      <p className="text-xl text-gray-600 mb-8">{offer?.project_title}</p>
    </div>
  );
};

export default IntroSlide;

