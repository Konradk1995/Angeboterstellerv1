import React from 'react';
import CompetitorComparison from '../../shared/CompetitorComparison';

interface CompetitorSlideProps {
  offer: {
    competitor_data?: {
      metric: string;
      competitor1: number;
      competitor2: number;
      ourSolution: number;
    }[];
  };
}

const CompetitorSlide: React.FC<CompetitorSlideProps> = ({ offer }) => {
  // Fallback-Daten falls keine Wettbewerberdaten vorhanden sind
  const comparisonData = offer?.competitor_data || [
    {
      metric: "Design",
      competitor1: 70,
      competitor2: 65,
      ourSolution: 85
    },
    {
      metric: "Funktionalität",
      competitor1: 75,
      competitor2: 70,
      ourSolution: 95
    },
    {
      metric: "Mobile Experience",
      competitor1: 65,
      competitor2: 80,
      ourSolution: 90
    }
  ];

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Vergleich mit Wettbewerbern</h2>
      <div className="h-[500px]">
        <CompetitorComparison data={comparisonData} />
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="h-3 w-full bg-[#818cf8] rounded mb-2"></div>
          <span className="text-sm text-gray-600">Wettbewerber 1</span>
        </div>
        <div className="text-center">
          <div className="h-3 w-full bg-[#6366f1] rounded mb-2"></div>
          <span className="text-sm text-gray-600">Wettbewerber 2</span>
        </div>
        <div className="text-center">
          <div className="h-3 w-full bg-[#4f46e5] rounded mb-2"></div>
          <span className="text-sm text-gray-600">Unsere Lösung</span>
        </div>
      </div>
    </div>
  );
};

export default CompetitorSlide;