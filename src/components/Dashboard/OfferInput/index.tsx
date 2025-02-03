import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientForm from './ClientForm';
import ServicesForm from './ServicesForm';
import PricingForm from './PricingForm';
import SEOMetricsForm from './SEOMetricsForm';
import supabase from '../../../App';

interface OfferInputProps {
  offers: any[];
  setOffers: (offers: any[]) => void;
}

const OfferInput: React.FC<OfferInputProps> = ({ offers, setOffers }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    client_name: '',
    client_email: '',
    client_company: '',
    project_title: '',
    project_description: '',
    website_type: '',
    design_included: false,
    development_included: false,
    cms_used: '',
    seo_audit_included: false,
    pagespeed_score_mobile: 0,
    pagespeed_score_desktop: 0,
    core_web_vitals: {},
    seo_optimization_included: false,
    keyword_research_included: false,
    backlink_strategy_included: false,
    services: [],
    total_price: 0,
    proposal_status: 'draft',
    follow_up_date: null,
    notes: '',
    project_start_date: null,
    project_end_date: null,
    milestones: [],
    payment_terms: '',
    invoice_sent: false,
    invoice_paid: false,
    additional_services: [],
    design_preferences: {},
    seo_target_keywords: [],
    competitor_websites: [],
    assigned_to: null,
    team_notes: {},
    contract_signed: false,
    contract_url: '',
    proposal_viewed: false,
    proposal_viewed_at: null,
    template_used: '',
    seo_metrics: {},
    performance_goals: {},
  });

  const [seoMetricsData, setSeoMetricsData] = useState({
    pagespeed_score_mobile: 0,
    pagespeed_score_desktop: 0,
    core_web_vitals: {},
      seo_metrics: {}
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const offerData = {
        ...formData,
        services: JSON.stringify(formData.services),
        core_web_vitals: JSON.stringify(formData.core_web_vitals),
        milestones: JSON.stringify(formData.milestones),
        additional_services: JSON.stringify(formData.additional_services),
        design_preferences: JSON.stringify(formData.design_preferences),
        seo_target_keywords: JSON.stringify(formData.seo_target_keywords),
        competitor_websites: JSON.stringify(formData.competitor_websites),
        team_notes: JSON.stringify(formData.team_notes),
        seo_metrics: JSON.stringify(formData.seo_metrics),
        performance_goals: JSON.stringify(formData.performance_goals),
      };

      const { data, error } = await supabase
        .from('offers')
        .insert([offerData])
        .select();

      if (error) throw error;

      setOffers([...offers, data[0]]);
      navigate('/presentation/' + data[0].id);
    } catch (error) {
      alert(`Fehler beim Speichern des Angebots: ${(error as any).message}`);
    } finally {
      setLoading(false);
    }
  };
        <SEOMetricsForm formData={seoMetricsData} setFormData={setSeoMetricsData} />
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-8">Neues Angebot erstellen</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <ClientForm formData={formData} setFormData={setFormData} />
        <ServicesForm formData={formData} setFormData={setFormData} />
        <PricingForm formData={formData} setFormData={setFormData} />
        <SEOMetricsForm formData={formData} setFormData={setFormData} />

        <div className="flex justify-end">
          <button 
            type="submit"
            disabled={loading}
            className={`
              ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}
              text-white px-6 py-2 rounded-lg transition-colors
            `}
          >
            {loading ? 'Speichern...' : 'Angebot speichern'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OfferInput;