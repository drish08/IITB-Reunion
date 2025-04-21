import * as React from 'react';

interface LayoutProps {
  children: React.ReactNode; // Explicitly typed as React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-midnight-800 starry-bg text-white">
      {/* Navigation */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="glass-effect px-10 py-4 rounded-full ethereal-shadow magical-border">
          <div className="flex space-x-10">
            <a href="/schedule" className="text-celestial-300 hover:text-celestial-200 font-cinzel font-medium tracking-wide transition-all">Schedule</a>
            <a href="/venue" className="text-celestial-300 hover:text-celestial-200 font-cinzel font-medium tracking-wide transition-all">Venue</a>
            <a href="/committee" className="text-celestial-300 hover:text-celestial-200 font-cinzel font-medium tracking-wide transition-all">Committee</a>
            <a href="/faq" className="text-celestial-300 hover:text-celestial-200 font-cinzel font-medium tracking-wide transition-all">FAQ</a>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="container mx-auto px-4 py-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;