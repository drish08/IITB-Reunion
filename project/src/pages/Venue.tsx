import * as React from 'react';
import Layout from '../components/Layout';
import { MapPin } from 'lucide-react';

const Venue: React.FC = () => {
  return (
    <Layout>
      <div className="text-center mb-12">
        <MapPin className="w-12 h-12 text-celestial-400 animate-twinkle mx-auto mb-4" />
        <h1 className="text-4xl font-cinzel font-bold magical-text">Venue Details</h1>
      </div>
      <div className="glass-effect rounded-2xl p-8 ethereal-shadow mb-8">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">IIT Bombay Campus</h2>
        <div className="aspect-video rounded-lg overflow-hidden mb-6">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
            alt="IIT Bombay Campus"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-celestial-200">
          Located in Powai, Mumbai, IIT Bombay's sprawling campus spans over 550 acres of lush greenery. The campus
          seamlessly blends academic excellence with natural beauty, creating the perfect backdrop for our reunion
          celebrations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-effect rounded-2xl p-6 ethereal-shadow">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Main Event Venues</h3>
          <ul className="space-y-3 text-celestial-200">
            <li>• Convocation Hall - Opening Ceremony</li>
            <li>• Main Building - Technical Sessions</li>
            <li>• Central Library - Photo Exhibition</li>
            <li>• Gymkhana - Sports Activities</li>
            <li>• Alumni Center - Registration</li>
          </ul>
        </div>
        <div className="glass-effect rounded-2xl p-6 ethereal-shadow">
          <h3 className="text-xl font-bold text-yellow-400 mb-4">Getting Here</h3>
          <ul className="space-y-3 text-celestial-200">
            <li>• 5 km from Kanjurmarg Station</li>
            <li>• 7 km from International Airport</li>
            <li>• Ample parking available</li>
            <li>• Campus shuttle service provided</li>
            <li>• Pick-up service on request</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Venue;