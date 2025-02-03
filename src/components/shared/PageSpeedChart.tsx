import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Cell
} from 'recharts';

interface PageSpeedProps {
  data: Array<{
    name: string;
    mobile: number;
    desktop: number;
  }>;
}

const PageSpeedChart: React.FC<PageSpeedProps> = ({ data = [] }) => {
  // Custom colors for the bars
  const colors = {
    mobile: {
      good: '#22c55e',
      medium: '#eab308',
      poor: '#ef4444'
    },
    desktop: {
      good: '#86efac',
      medium: '#fde047',
      poor: '#fca5a5'
    }
  };

  // Get color based on score
  const getColor = (score: number, type: 'mobile' | 'desktop') => {
    if (score >= 90) return colors[type].good;
    if (score >= 50) return colors[type].medium;
    return colors[type].poor;
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border">
          <p className="font-semibold text-gray-800">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="mt-2">
              <p className="text-sm" style={{ color: entry.fill }}>
                {entry.name}: {entry.value}
              </p>
              <p className="text-xs text-gray-500">
                {entry.value >= 90 ? 'Good' : entry.value >= 50 ? 'Needs Improvement' : 'Poor'}
              </p>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  // Custom legend
  const CustomLegend = ({ payload }: any) => {
    return (
      <div className="flex justify-center gap-6 mb-4">
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center">
            <div 
              className="w-3 h-3 rounded mr-2" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-gray-600">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
        PageSpeed Insights Scores
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#e5e7eb"
          />
          <XAxis 
            dataKey="name"
            tick={{ fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
          />
          <YAxis 
            tick={{ fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
            domain={[0, 100]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
          <Bar 
            dataKey="mobile" 
            name="Mobile Score" 
            radius={[4, 4, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`mobile-${index}`}
                fill={getColor(entry.mobile, 'mobile')}
              />
            ))}
          </Bar>
          <Bar 
            dataKey="desktop" 
            name="Desktop Score"
            radius={[4, 4, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`desktop-${index}`}
                fill={getColor(entry.desktop, 'desktop')}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      
      {/* Score Legend */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
        <div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded bg-emerald-500" />
            <span className="text-gray-600">Good (90-100)</span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded bg-yellow-500" />
            <span className="text-gray-600">Needs Improvement (50-89)</span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded bg-red-500" />
            <span className="text-gray-600">Poor (0-49)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSpeedChart;