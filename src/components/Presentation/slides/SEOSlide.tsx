import React from 'react';
import PageSpeedChart from '../../shared/PageSpeedChart';
import SEOScoreCard from '../../shared/SEOScoreCard';

const SEOSlide = ({ offer }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">SEO & Performance</h2>
      <div className="grid gap-8">
        <PageSpeedChart data={offer?.pageSpeed || []} />
        <SEOScoreCard data={offer?.seoScore || {}} />
      </div>
    </div>
  );
};

export default SEOSlide;
