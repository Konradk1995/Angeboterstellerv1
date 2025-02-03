import React, { useState } from 'react';
import { FileCheck, Clock, Rocket, Zap } from 'lucide-react';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: FileCheck,
      title: 'Strategie & Planung',
      duration: '2 Wochen',
      description: 'Informationssammlung, Anforderungsanalyse und Projektplanung',
      details: [
        'Projektumfang definieren',
        'Technische Anforderungen analysieren',
        'Zeitplan erstellen',
        'Ressourcen planen'
      ]
    },
    {
      icon: Clock,
      title: 'Design & Entwicklung',
      duration: '6-8 Wochen',
      description: 'UI/UX Design, Entwicklung und Feedback-Zyklen',
      details: [
        'Wireframes erstellen',
        'Design-Konzepte entwickeln',
        'Frontend-Entwicklung',
        'CMS-Integration'
      ]
    },
    {
      icon: Zap,
      title: 'Testing & Optimierung',
      duration: '1-2 Wochen',
      description: 'Umfassende Tests und Performance-Optimierung',
      details: [
        'Cross-Browser Testing',
        'Mobile Responsiveness',
        'Performance-Optimierung',
        'SEO-Überprüfung'
      ]
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      duration: '1 Woche',
      description: 'Finale Tests, Deployment und Einweisung',
      details: [
        'Deployment vorbereiten',
        'Content Migration',
        'Team-Schulung',
        'Go-Live Support'
      ]
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-indigo-600 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${(activeStep + 1) * 25}%` }}
          />
        </div>
      </div>

      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isPast = index < activeStep;
        const isFuture = index > activeStep;

        return (
          <div 
            key={index}
            className={`
              relative flex items-start mb-12 last:mb-0 transition-all duration-300
              ${isActive ? 'scale-100 opacity-100' : 'opacity-70 hover:opacity-90'}
            `}
            onClick={() => setActiveStep(index)}
          >
            {/* Connector Line */}
            {index !== steps.length - 1 && (
              <div 
                className={`
                  absolute left-6 top-12 w-0.5 h-full -z-10 transition-colors duration-300
                  ${isPast ? 'bg-indigo-600' : 'bg-gray-200'}
                `}
              />
            )}

            {/* Icon */}
            <div 
              className={`
                flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                transition-all duration-300 cursor-pointer
                ${isActive ? 'bg-indigo-600 scale-110' : 'bg-indigo-100'}
                ${isPast ? 'bg-indigo-600' : ''}
                ${isFuture ? 'bg-gray-100' : ''}
              `}
            >
              {React.createElement(step.icon, { 
                className: `h-6 w-6 ${isActive || isPast ? 'text-white' : 'text-indigo-600'}`
              })}
            </div>

            {/* Content */}
            <div className="ml-6 flex-grow">
              <div 
                className={`
                  p-6 rounded-lg transition-all duration-300
                  ${isActive ? 'bg-white shadow-lg' : 'hover:bg-white hover:shadow-md'}
                `}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {step.duration}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                {/* Expandable Details */}
                <div className={`space-y-2 ${isActive ? 'block' : 'hidden'}`}>
                  {step.details.map((detail, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className={`
            px-4 py-2 rounded-lg font-medium transition-all
            ${activeStep === 0 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'}
          `}
        >
          Vorheriger Schritt
        </button>
        <button
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          disabled={activeStep === steps.length - 1}
          className={`
            px-4 py-2 rounded-lg font-medium transition-all
            ${activeStep === steps.length - 1 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700'}
          `}
        >
          Nächster Schritt
        </button>
      </div>
    </div>
  );
};

export default Timeline;