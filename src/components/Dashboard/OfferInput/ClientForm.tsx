import React from 'react';

interface ClientFormProps {
  formData: {
    client_name: string;
    client_email: string;
    client_company: string;
    project_title: string;
    project_description: string;
    website_type: string;
    follow_up_date: string;
    notes: string;
  };
  // moin 
  
  setFormData: (data: any) => void;
}

const ClientForm: React.FC<ClientFormProps> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Kundendaten</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="client_name"
            value={formData.client_name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">E-Mail</label>
          <input
            type="email"
            name="client_email"
            value={formData.client_email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Unternehmen</label>
          <input
            type="text"
            name="client_company"
            value={formData.client_company}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Projekttitel</label>
          <input
            type="text"
            name="project_title"
            value={formData.project_title}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Projektbeschreibung</label>
          <textarea
            name="project_description"
            value={formData.project_description}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Website-Typ</label>
          <input
            type="text"
            name="website_type"
            value={formData.website_type}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Follow-Up Datum</label>
          <input
            type="date"
            name="follow_up_date"
            value={formData.follow_up_date}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Notizen</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientForm;