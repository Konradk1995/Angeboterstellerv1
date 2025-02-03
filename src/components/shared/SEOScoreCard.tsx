import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface SEOScore {
  category: string;
  score: number;
  items: {
    name: string;
    status: 'pass' | 'fail' | 'warning';
    description: string;
  }[];
}

interface SEOScoreCardProps {
  data: SEOScore;
}

const SEOScoreCard: React.FC<SEOScoreCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">{data.category}</h3>
        <div className="text-2xl font-bold text-indigo-600">{data.score}%</div>
      </div>
      <div className="space-y-4">
        {data.items.map((item, index) => (
          <div key={index} className="flex items-start space-x-3">
            {item.status === 'pass' ? (
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SEOScoreCard;