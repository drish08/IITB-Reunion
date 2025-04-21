
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Wand2, Calendar, MapPin, Users, Camera, MessageSquare, HelpCircle, Sparkles, X, Clock, Star, Building } from 'lucide-react';
import Schedule from './pages/Schedule';
import Venue from './pages/Venue';
import Committee from './pages/Committee';
import FAQ from './pages/FAQ';

function App() {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);
  const [isCommitteeFormOpen, setIsCommitteeFormOpen] = useState(false);

  const speakers = [
    { name: "Dr. Sarah Johnson", about: "AI Research Lead at Tech Corp" },
    { name: "Prof. Michael Chen", about: "Quantum Computing Pioneer" },
    { name: "Eng. Priya Patel", about: "Space Technology Expert" },
    { name: "Dr. James Wilson", about: "Renewable Energy Innovator" },
    { name: "Dr. Lisa Zhang", about: "Biotech Researcher" },
    { name: "Prof. Alex Kumar", about: "Robotics Specialist" },
    { name: "Dr. Emma Davis", about: "Climate Science Expert" },
    { name: "Prof. Raj Mehta", about: "Digital Ethics Researcher" },
  ];

  return (
    <Routes>
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/committee" element={<Committee />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/" element={
        <div className="min-h-screen bg-midnight-800 starry-bg text-white">
          {/* Navigation */}
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="glass-effect px-10 py-4 rounded-full ethereal-shadow magical-border">
              <div className="flex space-x-10">
                <Link to="/schedule" className="text-celestial-300 hover:text-celestial-200 font-cinzel font-medium tracking-wide transition-all">Schedule</Link>
                <Link to="/venue" className="text-celestial-300 hover:text-celestial-200 font-cinzel font-medium tracking-wide transition-all">Venue</Link>
                <Link to="/committee" className="text-celestial-300 hover:text-celestial-200 font-cinzel font-medium tracking-wide transition-all">Committee</Link>
                <Link to="/faq" className="text-celestial-300 hover:text-celestial-200 font-cinzel font-medium tracking-wide transition-all">FAQ</Link>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div className="bg-midnight-900/80 py-3 overflow-hidden border-b border-celestial-500/20">
            <div className="animate-marquee whitespace-nowrap">
              <span className="mx-6 text-celestial-400 font-cinzel">✧ Class of 2000</span>
              <span className="mx-6 text-celestial-400 font-cinzel">✧ IITB</span>
              <span className="mx-6 text-celestial-400 font-cinzel">✧ Enchanted Evening</span>
              <span className="mx-6 text-celestial-400 font-cinzel">✧ Class of 2000</span>
              <span className="mx-6 text-celestial-400 font-cinzel">✧ IITB</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="glass-effect rounded-2xl p-10 ethereal-shadow mb-16">
              <div className="flex items-center justify-center mb-10">
                <Wand2 className="w-16 h-16 text-celestial-400 animate-sparkle" />
                <h1 className="text-7xl font-cinzel font-bold ml-6 magical-text">
                  An Enchanted Evening
                </h1>
              </div>

              {/* Event Details */}
              <div className="text-center mb-12">
                <h2 className="text-5xl font-cinzel font-bold text-celestial-300 mb-6">Magical Reunion</h2>
                <div className="flex items-center justify-center gap-6 mb-6">
                  <Clock className="w-8 h-8 text-celestial-400 animate-twinkle" />
                  <span className="text-2xl font-cormorant text-white/90">26 to 28 December</span>
                  <Building className="w-8 h-8 text-celestial-400 animate-twinkle" />
                  <span className="text-2xl font-cormorant text-white/90">IIT Bombay</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative rounded-xl overflow-hidden mb-12 border-2 border-celestial-500/30">
                <img 
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
                  alt="Enchanted Evening"
                  className="w-full h-[500px] object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/90 to-transparent"></div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <button 
                  onClick={() => setIsRSVPOpen(true)}
                  className="star-button group bg-gradient-to-r from-celestial-500 to-celestial-400 text-white font-bold py-5 px-8 rounded-xl transform hover:scale-105 transition-all ethereal-shadow font-cinzel tracking-wide"
                >
                  <Sparkles className="w-6 h-6 inline-block mr-3 animate-twinkle" />
                  RSVP Now
                </button>
                <button 
                  onClick={() => setIsCommitteeFormOpen(true)}
                  className="star-button group bg-gradient-to-r from-midnight-700 to-midnight-600 text-celestial-300 font-bold py-5 px-8 rounded-xl transform hover:scale-105 transition-all ethereal-shadow border border-celestial-500/30 font-cinzel tracking-wide"
                >
                  <Users className="w-6 h-6 inline-block mr-3 animate-twinkle" />
                  Join Committee
                </button>
                <button className="star-button group bg-gradient-to-r from-midnight-700 to-midnight-600 text-celestial-300 font-bold py-5 px-8 rounded-xl transform hover:scale-105 transition-all ethereal-shadow border border-celestial-500/30 font-cinzel tracking-wide">
                  <Camera className="w-6 h-6 inline-block mr-3 animate-twinkle" />
                  Share Memories
                </button>
                <button className="star-button group bg-gradient-to-r from-stardust-400 to-stardust-300 text-white font-bold py-5 px-8 rounded-xl transform hover:scale-105 transition-all ethereal-shadow font-cinzel tracking-wide">
                  <MessageSquare className="w-6 h-6 inline-block mr-3 animate-twinkle" />
                  Join the Magic
                </button>
              </div>
            </div>

            {/* Schedule Section */}
            <div className="glass-effect rounded-2xl p-10 ethereal-shadow mb-16">
              <h2 className="text-3xl font-cinzel font-bold text-center mb-8 magical-text">Three Enchanted Evenings</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { day: "First Evening", desc: "Welcome ceremony under the stars, campus tour illuminated by fairy lights, and evening cultural program with magical performances." },
                  { day: "Second Evening", desc: "Department visits with enchanting demonstrations, magical sports activities, and a grand dinner with awards ceremony." },
                  { day: "Final Evening", desc: "Family day with enchanted picnic, ethereal photo sessions, and farewell gathering in our magical garden." }
                ].map((day, index) => (
                  <div key={index} className="bg-midnight-900/50 p-6 rounded-lg border border-celestial-500/20 hover:border-celestial-400/50 transition-all ethereal-shadow">
                    <h3 className="text-xl font-cinzel font-bold text-celestial-300 mb-4">{day.day}</h3>
                    <p className="text-celestial-100/90 font-cormorant text-lg">{day.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Speakers Section */}
            <div className="glass-effect rounded-2xl p-10 ethereal-shadow mb-16">
              <h2 className="text-3xl font-cinzel font-bold text-center mb-8 magical-text">Distinguished Guests</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {speakers.map((speaker, index) => (
                  <div key={index} className="bg-midnight-900/50 p-6 rounded-lg border border-celestial-500/20 hover:border-celestial-400/50 transition-all ethereal-shadow">
                    <Star className="w-6 h-6 text-celestial-400 mb-4 animate-twinkle" />
                    <h3 className="text-xl font-cinzel font-bold text-white mb-2">{speaker.name}</h3>
                    <p className="text-celestial-200/90 font-cormorant text-lg">{speaker.about}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Calendar, text: 'Schedule', path: '/schedule' },
                { icon: MapPin, text: 'Venue', path: '/venue' },
                { icon: Users, text: 'Committees', path: '/committee' },
                { icon: HelpCircle, text: 'FAQ', path: '/faq' },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="flex flex-col items-center justify-center p-6 glass-effect rounded-lg hover:bg-midnight-900/50 transition-all transform hover:scale-105 ethereal-shadow border border-celestial-500/20"
                >
                  <item.icon className="w-12 h-12 mb-2 text-celestial-400 animate-twinkle" />
                  <span className="font-cinzel font-bold text-celestial-300">{item.text}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* RSVP Modal */}
          {isRSVPOpen && (
            <div className="fixed inset-0 bg-midnight-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="bg-gradient-to-br from-celestial-900 to-midnight-900 p-1 rounded-xl ethereal-shadow w-full max-w-xl animate-float">
                <div className="bg-midnight-800 rounded-lg p-6 relative">
                  <button 
                    onClick={() => setIsRSVPOpen(false)}
                    className="absolute -top-3 -right-3 bg-red-900 hover:bg-red-800 text-white rounded-full p-1 shadow-lg transform hover:scale-110 transition-all"
                    aria-label="Close form"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="text-center mb-6">
                    <h2 className="text-xl font-cinzel font-bold magical-text">RSVP Form</h2>
                    <p className="text-celestial-300 text-xs mt-1">Are You In?</p>
                  </div>

                  <form className="space-y-4">
                    {/* Basic Details */}
                    <div>
                      <label className="block text-celestial-300">Full Name</label>
                      <input type="text" className="input-field" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-celestial-300">Email Address</label>
                      <input type="email" className="input-field" placeholder="Your email" />
                    </div>
                    <div>
                      <label className="block text-celestial-300">Phone Number</label>
                      <input type="text" className="input-field" placeholder="Optional" />
                    </div>
                    <div>
                      <label className="block text-celestial-300">Year of Graduation</label>
                      <input type="text" className="input-field" placeholder="e.g., 2000" />
                    </div>

                    {/* Attendance Info */}
                    <div>
                      <label className="block text-celestial-300">Will you attend?</label>
                      <select className="input-field">
                        <option>Yes</option>
                        <option>No</option>
                        <option>Maybe</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-celestial-300">Number of Guests</label>
                      <input type="number" className="input-field" placeholder="Optional" />
                    </div>
                    <div>
                      <label className="block text-celestial-300">Names of Guests</label>
                      <textarea className="input-field" placeholder="Optional"></textarea>
                    </div>

                    {/* Event Participation */}
                    <div>
                      <label className="block text-celestial-300">Will you attend the welcome dinner?</label>
                      <select className="input-field">
                        <option>Yes</option>
                        <option>No</option>
                        <option>Maybe</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-celestial-300">Will you join group travel/stay?</label>
                      <select className="input-field">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-celestial-300">Will you participate in performances or open mic?</label>
                      <select className="input-field">
                        <option>Yes</option>
                        <option>No</option>
                        <option>Maybe</option>
                      </select>
                    </div>

                    {/* Travel Info */}
                    <div>
                      <label className="block text-celestial-300">City you're traveling from</label>
                      <input type="text" className="input-field" placeholder="Optional" />
                    </div>
                    <div>
                      <label className="block text-celestial-300">Need help with travel/accommodation?</label>
                      <select className="input-field">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>

                    {/* T-Shirt Info */}
                    <div>
                      <label className="block text-celestial-300">T-Shirt Size</label>
                      <select className="input-field">
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-celestial-300">Do you want to order a souvenir T-shirt?</label>
                      <select className="input-field">
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>

                    {/* Preferences / Accessibility */}
                    <div>
                      <label className="block text-celestial-300">Dietary preferences</label>
                      <select className="input-field">
                        <option>Veg</option>
                        <option>Non-Veg</option>
                        <option>Jain</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-celestial-300">Accessibility needs</label>
                      <textarea className="input-field" placeholder="Optional"></textarea>
                    </div>

                    {/* Message / Notes */}
                    <div>
                      <label className="block text-celestial-300">Anything you’d like to share with the organizers?</label>
                      <textarea className="input-field" placeholder="Optional"></textarea>
                    </div>

                    <button type="submit" className="star-button bg-gradient-to-r from-celestial-500 to-celestial-400 text-white font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Committee Join Modal */}
          {isCommitteeFormOpen && (
            <div className="fixed inset-0 bg-midnight-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="bg-gradient-to-br from-celestial-900 to-midnight-900 p-1 rounded-xl ethereal-shadow w-full max-w-xl animate-float">
                <div className="bg-midnight-800 rounded-lg p-6 relative">
                  <button 
                    onClick={() => setIsCommitteeFormOpen(false)}
                    className="absolute -top-3 -right-3 bg-red-900 hover:bg-red-800 text-white rounded-full p-1 shadow-lg transform hover:scale-110 transition-all"
                    aria-label="Close form"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="text-center mb-6">
                    <h2 className="text-xl font-cinzel font-bold magical-text">Join the Organizing Crew</h2>
                    <p className="text-celestial-300 text-xs mt-1">Help make this reunion magical!</p>
                  </div>

                  <form className="space-y-4">
                    {/* Basic Info */}
                    <div>
                      <label className="block text-celestial-300">Full Name</label>
                      <input type="text" className="input-field" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-celestial-300">Contact Email</label>
                      <input type="email" className="input-field" placeholder="Your email" />
                    </div>
                    <div>
                      <label className="block text-celestial-300">Phone Number</label>
                      <input type="text" className="input-field" placeholder="Optional" />
                    </div>

                    {/* Availability */}
                    <div>
                      <label className="block text-celestial-300">Available to help?</label>
                      <select className="input-field">
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Only Online</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-celestial-300">Preferred time for meetings</label>
                      <input type="text" className="input-field" placeholder="e.g., evenings, weekends" />
                    </div>

                    {/* Role Preferences */}
                    <div>
                      <label className="block text-celestial-300">Role Preferences</label>
                      <div className="space-y-2">
                        {[
                          "Event Planning",
                          "Budget & Finance",
                          "Travel Coordination",
                          "Accommodation & Venue",
                          "Design (Posters, Website, T-Shirts)",
                          "Photography/Videography",
                          "Communication & Outreach (WhatsApp, Email, Social Media)",
                          "Games & Activities",
                          "Souvenirs & Goodies",
                          "Anchoring / Hosting",
                        ].map((role, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <input type="checkbox" id={`role-${index}`} className="checkbox" />
                            <label htmlFor={`role-${index}`} className="text-celestial-300">{role}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills / Experience */}
                    <div>
                      <label className="block text-celestial-300">Past experience with events?</label>
                      <textarea className="input-field" placeholder="Optional"></textarea>
                    </div>
                    <div>
                      <label className="block text-celestial-300">Do you have any useful contacts/vendors?</label>
                      <textarea className="input-field" placeholder="Optional"></textarea>
                    </div>

                    {/* Message to Team */}
                    <div>
                      <label className="block text-celestial-300">Why do you want to join? Any ideas?</label>
                      <textarea className="input-field" placeholder="Optional"></textarea>
                    </div>

                    <button type="submit" className="star-button bg-gradient-to-r from-celestial-500 to-celestial-400 text-white font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      } />
    </Routes>
  );
}

export default App;