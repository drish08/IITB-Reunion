import * as React from 'react';
import Layout from '../components/Layout';
import { Users } from 'lucide-react';

const Committee: React.FC = () => {
  const committees = [
    {
      name: "Event Planning",
      description: "Coordinate main events, scheduling, and logistics",
      members: ["Dr. Rajesh Kumar (Lead)", "Priya Sharma", "Alex Chen"],
    },
    {
      name: "Technical Sessions",
      description: "Organize workshops, talks, and panel discussions",
      members: ["Prof. Sarah Wilson (Lead)", "Dr. Mike Zhang", "Rahul Mehta"],
    },
    {
      name: "Cultural Program",
      description: "Plan entertainment, performances, and cultural activities",
      members: ["Anita Desai (Lead)", "James Lee", "Maria Garcia"],
    },
    {
      name: "Alumni Relations",
      description: "Handle outreach, registration, and alumni coordination",
      members: ["Vikram Patel (Lead)", "Lisa Chen", "Mohammed Ahmed"],
    },
  ];

  return (
    <Layout>
      <div className="text-center mb-12">
        <Users className="w-12 h-12 text-celestial-400 animate-twinkle mx-auto mb-4" />
        <h1 className="text-4xl font-cinzel font-bold magical-text">Committee Members</h1>
      </div>
      <div className="space-y-8">
        {committees.map((committee, index) => (
          <div key={index} className="glass-effect rounded-2xl p-8 ethereal-shadow">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">{committee.name}</h2>
            <p className="text-celestial-200 mb-4">{committee.description}</p>
            <ul className="space-y-2 text-celestial-200">
              {committee.members.map((member, memberIndex) => (
                <li key={memberIndex}>• {member}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Committee;