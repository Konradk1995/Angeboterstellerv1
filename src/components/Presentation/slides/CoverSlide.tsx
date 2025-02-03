import React from 'react';

interface CoverSlideProps {
  offer: {
    client_name?: string;
    project_title?: string;
  };
}

const CoverSlide: React.FC<CoverSlideProps> = ({ offer }) => {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Angebot für {offer?.client_name || 'Kunde'}
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        {offer?.project_title || 'Projektname'}
      </p>
    </div>
  );
};

export default CoverSlide;