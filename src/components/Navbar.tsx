import React from 'react';
import { Building2, LineChart, TrendingUp, Info } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Building2 },
    { id: 'methodology', label: 'Methodology', icon: Info },
    { id: 'results', label: 'Results', icon: LineChart },
    { id: 'recommendations', label: 'Recommendations', icon: TrendingUp },
  ];

  return (
    <nav className="bg-[#020202] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors
                  ${activeTab === item.id ? 'bg-[#9EE44D] text-[#020202]' : 'hover:bg-gray-800'}`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;