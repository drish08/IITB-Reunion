import * as React from 'react';
import Layout from '../components/Layout';
import { Calendar } from 'lucide-react';

const Schedule: React.FC = () => {
  const schedule = [
    {
      day: "Day 1 - December 26",
      events: [
        { time: "09:00 AM", title: "Registration & Welcome Kit Collection" },
        { time: "10:30 AM", title: "Opening Ceremony" },
        { time: "12:00 PM", title: "Campus Tour" },
        { time: "02:00 PM", title: "Lunch & Networking" },
        { time: "04:00 PM", title: "Department Visits" },
        { time: "07:00 PM", title: "Cultural Evening & Dinner" },
      ],
    },
    {
      day: "Day 2 - December 27",
      events: [
        { time: "09:30 AM", title: "Technical Sessions" },
        { time: "11:30 AM", title: "Panel Discussion" },
        { time: "01:00 PM", title: "Lunch Break" },
        { time: "02:30 PM", title: "Sports Activities" },
        { time: "07:00 PM", title: "Gala Dinner & Awards" },
      ],
    },
    {
      day: "Day 3 - December 28",
      events: [
        { time: "10:00 AM", title: "Family Day Activities" },
        { time: "12:00 PM", title: "Group Photo Session" },
        { time: "01:30 PM", title: "Picnic Lunch" },
        { time: "04:00 PM", title: "Memory Sharing Session" },
        { time: "07:00 PM", title: "Farewell Dinner" },
      ],
    },
  ];

  return (
    <Layout>
      <div className="text-center mb-12">
        <Calendar className="w-12 h-12 text-celestial-400 animate-twinkle mx-auto mb-4" />
        <h1 className="text-4xl font-cinzel font-bold magical-text">Event Schedule</h1>
      </div>
      <div className="space-y-8">
        {schedule.map((day, index) => (
          <div key={index} className="glass-effect rounded-2xl p-8 ethereal-shadow">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">{day.day}</h2>
            <div className="space-y-4">
              {day.events.map((event, eventIndex) => (
                <div key={eventIndex} className="flex items-center space-x-4 text-celestial-200">
                  <span className="font-mono w-24">{event.time}</span>
                  <span>{event.title}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Schedule;