import React from 'react';

interface ServicesFormProps {
  formData: {
    design_included: boolean;
    development_included: boolean;
    cms_used: string;
    seo_audit_included: boolean;
    seo_optimization_included: boolean;
    keyword_research_included: boolean;
    backlink_strategy_included: boolean;
    services: { name: string; price: number }[];
    additional_services: { name: string; description: string; price: number }[];
  };
  setFormData: (data: any) => void;
}

const ServicesForm: React.FC<ServicesFormProps> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleServiceChange = (index: number, field: string, value: any) => {
    const newServices = [...formData.services];
    newServices[index][field] = value;
    setFormData({ ...formData, services: newServices });
  };

  const handleAdditionalServiceChange = (index: number, field: string, value: any) => {
    const newAdditionalServices = [...formData.additional_services];
    newAdditionalServices[index][field] = value;
    setFormData({ ...formData, additional_services: newAdditionalServices });
  };

  const addService = () => {
    setFormData({ ...formData, services: [...formData.services, { name: '', price: 0 }] });
  };

  const addAdditionalService = () => {
    setFormData({ ...formData, additional_services: [...formData.additional_services, { name: '', description: '', price: 0 }] });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Dienstleistungen</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Design enthalten</label>
          <input
            type="checkbox"
            name="design_included"
            checked={formData.design_included}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">Entwicklung enthalten</label>
          <input
            type="checkbox"
            name="development_included"
            checked={formData.development_included}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">Verwendetes CMS</label>
          <input
            type="text"
            name="cms_used"
            value={formData.cms_used}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">SEO-Audit enthalten</label>
          <input
            type="checkbox"
            name="seo_audit_included"
            checked={formData.seo_audit_included}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">SEO-Optimierung enthalten</label>
          <input
            type="checkbox"
            name="seo_optimization_included"
            checked={formData.seo_optimization_included}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">Keyword-Recherche enthalten</label>
          <input
            type="checkbox"
            name="keyword_research_included"
            checked={formData.keyword_research_included}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">Backlink-Strategie enthalten</label>
          <input
            type="checkbox"
            name="backlink_strategy_included"
            checked={formData.backlink_strategy_included}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">Dienstleistungen</label>
          {formData.services.map((service, index) => (
            <div key={index} className="flex space-x-4 mt-2">
              <input
                type="text"
                name={`service_name_${index}`}
                value={service.name}
                onChange={(e) => handleServiceChange(index, 'name', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Dienstleistungsname"
              />
              <input
                type="number"
                name={`service_price_${index}`}
                value={service.price}
                onChange={(e) => handleServiceChange(index, 'price', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Preis"
              />
            </div>
          ))}
          <button type="button" onClick={addService} className="mt-2 text-indigo-600 hover:text-indigo-800">
            + Dienstleistung hinzufügen
          </button>
        </div>
        <div>
          <label className="block text-gray-700">Zusätzliche Dienstleistungen</label>
          {formData.additional_services.map((service, index) => (
            <div key={index} className="space-y-2 mt-2">
              <input
                type="text"
                name={`additional_service_name_${index}`}
                value={service.name}
                onChange={(e) => handleAdditionalServiceChange(index, 'name', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Dienstleistungsname"
              />
              <textarea
                name={`additional_service_description_${index}`}
                value={service.description}
                onChange={(e) => handleAdditionalServiceChange(index, 'description', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Beschreibung"
              />
              <input
                type="number"
                name={`additional_service_price_${index}`}
                value={service.price}
                onChange={(e) => handleAdditionalServiceChange(index, 'price', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Preis"
              />
            </div>
          ))}
          <button type="button" onClick={addAdditionalService} className="mt-2 text-indigo-600 hover:text-indigo-800">
            + Zusätzliche Dienstleistung hinzufügen
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesForm;