import React from 'react';

interface SEOMetricsFormProps {
  formData: {
    pagespeed_score_mobile: number;
    pagespeed_score_desktop: number;
    core_web_vitals: { [key: string]: number };
    seo_metrics: { [key: string]: number };
    performance_goals: { [key: string]: number };
    [key: string]: number | { [key: string]: number };
  };
  setFormData: (data: any) => void;
}

const SEOMetricsForm: React.FC<SEOMetricsFormProps> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleJsonChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [field]: { ...formData[field], [name]: value } });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">SEO & Performance Metriken</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Pagespeed Score Mobile</label>
          <input
            type="number"
            name="pagespeed_score_mobile"
            value={formData.pagespeed_score_mobile}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Pagespeed Score Desktop</label>
          <input
            type="number"
            name="pagespeed_score_desktop"
            value={formData.pagespeed_score_desktop}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Core Web Vitals</label>
          {Object.keys(formData.core_web_vitals).map((key) => (
            <div key={key} className="flex space-x-4 mt-2">
              <input
                type="text"
                name={key}
                value={formData.core_web_vitals[key]}
                onChange={(e) => handleJsonChange(e, 'core_web_vitals')}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder={key}
              />
            </div>
          ))}
        </div>
        <div>
          <label className="block text-gray-700">SEO Metriken</label>
          {Object.keys(formData.seo_metrics).map((key) => (
            <div key={key} className="flex space-x-4 mt-2">
              <input
                type="text"
                name={key}
                value={formData.seo_metrics[key]}
                onChange={(e) => handleJsonChange(e, 'seo_metrics')}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder={key}
              />
            </div>
          ))}
        </div>
        <div>
          <label className="block text-gray-700">Performance Ziele</label>
          {Object.keys(formData.performance_goals).map((key) => (
            <div key={key} className="flex space-x-4 mt-2">
              <input
                type="text"
                name={key}
                value={formData.performance_goals[key]}
                onChange={(e) => handleJsonChange(e, 'performance_goals')}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder={key}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SEOMetricsForm;