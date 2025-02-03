import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';

interface CompetitorData {
  metric: string;
  competitor1: number;
  competitor2: number;
  ourSolution: number;
}

interface CompetitorComparisonProps {
  data: CompetitorData[];
}

const CompetitorComparison: React.FC<CompetitorComparisonProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="metric" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="Competitor 1" dataKey="competitor1" stroke="#818cf8" fill="#818cf8" fillOpacity={0.3} />
        <Radar name="Competitor 2" dataKey="competitor2" stroke="#6366f1" fill="#6366f1" fillOpacity={0.3} />
        <Radar name="Our Solution" dataKey="ourSolution" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.3} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default CompetitorComparison;