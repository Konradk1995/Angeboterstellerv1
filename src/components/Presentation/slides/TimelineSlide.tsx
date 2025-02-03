import React from 'react';
import Timeline from '../../shared/Timeline';

const TimelineSlide = ({ offer }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Projektablauf</h2>
      <Timeline />
    </div>
  );
};

export default TimelineSlide;