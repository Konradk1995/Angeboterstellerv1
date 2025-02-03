import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import CoverSlide from './slides/CoverSlide';
import ServicesSlide from './slides/ServicesSlide';
import TimelineSlide from './slides/TimelineSlide';
import SEOSlide from './slides/SEOSlide';
import CompetitorSlide from './slides/CompetitorSlide';
import PricingSlide from './slides/PricingSlide';

const Slide: React.FC<{ active: boolean; children: React.ReactNode }> = ({ active, children }) => (
  <div className={`absolute inset-0 flex items-center justify-center p-8 transition-all duration-500 ${
    active ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
  }`}>
    {children}
  </div>
);

interface Offer {
  id: string;
  client_name?: string;
  project_title?: string;
  total_price?: number;
  services?: {
    name: string;
    description?: string;
  }[];
  competitor_data?: {
    metric: string;
    competitor1: number;
    competitor2: number;
    ourSolution: number;
  }[];
}

function Presentation({ offers }: { offers: Offer[] }) {
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const offer = offers.find((offer) => offer.id === id);

  const slides = [
    {
      id: 'cover',
      title: 'Cover',
      component: offer ? <CoverSlide offer={offer} /> : null
    },
    {
      id: 'services',
      title: 'Services',
      component: <ServicesSlide offer={offer} />
    },
    {
      id: 'pricing',
      title: 'Pricing',
      component: offer ? <PricingSlide offer={offer} /> : null
    },
    {
      id: 'timeline',
      title: 'Timeline',
      component: <TimelineSlide offer={offer} />
    },
    {
      id: 'seo',
      title: 'SEO & Performance',
      component: <SEOSlide offer={offer} />
    },
    {
      id: 'competitor',
      title: 'Vergleich',
      component: offer ? <CompetitorSlide offer={offer} /> : null
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      {slides.map((slide, index) => (
        <Slide key={slide.id} active={currentSlide === index}>
          {slide.component}
        </Slide>
      ))}
      <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <ChevronLeft className="h-8 w-8 text-gray-600" />
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <ChevronRight className="h-8 w-8 text-gray-600" />
      </button>
    </div>
  );
}

export default Presentation;