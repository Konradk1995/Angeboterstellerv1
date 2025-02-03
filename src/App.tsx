import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://fuxrsrnxybniaopskvii.supabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1eHJzcm54eWJuaWFvcHNrdmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1OTU4ODIsImV4cCI6MjA1NDE3MTg4Mn0.Zd6qyUP7-mMScNEfMfFSy8bLtAVUK-UdfMt7zMSe4LM';
const supabase = createClient(supabaseUrl, supabaseKey);

// Types
interface Offer {
  id: string;
  title: string;
  description: string;
  created_at: string;
}

// Loader Component
const Loader: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>
);

// Error Component
const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">Oops! </strong>
    <span className="block sm:inline">{message}</span>
  </div>
);

// Offers List Component
const OffersList: React.FC<{ offers: Offer[] }> = ({ offers }) => (
  <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6">Available Offers</h1>
    {offers.map(offer => (
      <div key={offer.id} className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-xl font-semibold mb-2">{offer.title}</h2>
        <p className="text-gray-600">{offer.description}</p>
        <span className="text-sm text-gray-500 mt-2">
          Created on: {new Date(offer.created_at).toLocaleDateString()}
        </span>
      </div>
    ))}
  </div>
);

// Offer Input Component
const LocalOfferInputComponent: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('offers')
        .insert([{ title, description }]);
      
      if (error) throw error;
      
      // Reset form
      setTitle('');
      setDescription('');
      alert('Offer submitted successfully!');
    } catch (error) {
      console.error('Error submitting offer:', error);
      alert('Failed to submit offer');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Offer</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Offer Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Offer Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Offer
          </button>
        </div>
      </form>
    </div>
  );
};

// Main App Component
function App() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch offers from Supabase
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const { data, error } = await supabase
          .from('offers')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setOffers(data || []);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  // Navigation Component
  const Navigation: React.FC = () => (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Offers App</Link>
        <div>
          <Link to="/" className="text-white mr-4 hover:underline">View Offers</Link>
          <Link to="/create" className="text-white hover:underline">Create Offer</Link>
        </div>
      </div>
    </nav>
  );

  // Show loader while loading
  if (loading) return <Loader />;

  // Show error if something goes wrong
  if (error) return <ErrorMessage message={error} />;

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<OffersList offers={offers} />} />
          <Route path="/create" element={<LocalOfferInputComponent />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;