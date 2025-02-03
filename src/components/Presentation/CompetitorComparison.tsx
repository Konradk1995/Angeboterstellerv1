import React, { useState } from 'react';

const CompetitorForm = ({ onUpdate }) => {
  const [metrics, setMetrics] = useState([
    {
      metric: "Performance",
      competitor1: 0,
      competitor2: 0,
      ourSolution: 0
    },
    // ... weitere Metriken
  ]);

  const handleMetricChange = (index, field, value) => {
    const newMetrics = [...metrics];
    newMetrics[index][field] = Number(value);
    setMetrics(newMetrics);
    onUpdate(newMetrics);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium">Wettbewerbervergleich</h3>
      {metrics.map((metric, index) => (
        <div key={index} className="grid grid-cols-4 gap-4 items-center">
          <input
            type="text"
            value={metric.metric}
            onChange={(e) => handleMetricChange(index, 'metric', e.target.value)}
            className="border rounded p-2"
            placeholder="Metrik Name"
          />
          <input
            type="number"
            min="0"
            max="100"
            value={metric.competitor1}
            onChange={(e) => handleMetricChange(index, 'competitor1', e.target.value)}
            className="border rounded p-2"
            placeholder="Wettbewerber 1"
          />
          <input
            type="number"
            min="0"
            max="100"
            value={metric.competitor2}
            onChange={(e) => handleMetricChange(index, 'competitor2', e.target.value)}
            className="border rounded p-2"
            placeholder="Wettbewerber 2"
          />
          <input
            type="number"
            min="0"
            max="100"
            value={metric.ourSolution}
            onChange={(e) => handleMetricChange(index, 'ourSolution', e.target.value)}
            className="border rounded p-2"
            placeholder="Unsere Lösung"
          />
        </div>
      ))}
    </div>
  );
};

export default CompetitorForm;