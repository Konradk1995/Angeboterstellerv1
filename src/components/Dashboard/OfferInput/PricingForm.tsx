// src/components/Dashboard/OfferInput/PricingForm.tsx
import React from 'react';

interface PricingFormProps {
  formData: {
    total_price: number;
    payment_terms: string;
    invoice_sent: boolean;
    invoice_paid: boolean;
  };
  setFormData: (data: any) => void;
}

const PricingForm: React.FC<PricingFormProps> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Preise und Zahlungsbedingungen</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Gesamtpreis</label>
          <input
            type="number"
            name="total_price"
            value={formData.total_price}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Zahlungsbedingungen</label>
          <textarea
            name="payment_terms"
            value={formData.payment_terms}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Rechnung gesendet</label>
          <input
            type="checkbox"
            name="invoice_sent"
            checked={formData.invoice_sent}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
        <div>
          <label className="block text-gray-700">Rechnung bezahlt</label>
          <input
            type="checkbox"
            name="invoice_paid"
            checked={formData.invoice_paid}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingForm;