import * as React from 'react';
import Layout from '../components/Layout';
import { HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What's included in the registration fee?",
      answer:
        "The registration fee covers all events, meals, welcome kit with reunion merchandise, and access to all activities during the three-day celebration.",
    },
    {
      question: "Can I bring family members?",
      answer:
        "Yes! We encourage you to bring your family. There are special rates for spouses and children, and we have planned family-friendly activities.",
    },
    {
      question: "Is accommodation provided?",
      answer:
        "We have arranged special rates with nearby hotels. Limited on-campus guest house accommodation is also available on a first-come, first-served basis.",
    },
    {
      question: "What should I wear?",
      answer:
        "Business casual for day events, formal attire for the gala dinner. Don't forget comfortable shoes for campus tours!",
    },
    {
      question: "Is there parking available?",
      answer: "Yes, ample parking is available on campus. You'll receive a parking pass with your registration kit.",
    },
    {
      question: "Can I update my RSVP details later?",
      answer:
        "Yes, you can modify your RSVP details up to two weeks before the event by contacting the organizing committee.",
    },
  ];

  return (
    <Layout>
      <div className="text-center mb-12">
        <HelpCircle className="w-12 h-12 text-celestial-400 animate-twinkle mx-auto mb-4" />
        <h1 className="text-4xl font-cinzel font-bold magical-text">Frequently Asked Questions</h1>
      </div>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="glass-effect rounded-2xl p-8 ethereal-shadow">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">{faq.question}</h2>
            <p className="text-celestial-200">{faq.answer}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default FAQ;