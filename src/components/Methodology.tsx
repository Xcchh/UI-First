import React from 'react';

const Methodology = () => {
  const categories = {
    Environmental: [
      'Carbon Emissions',
      'Energy Efficiency',
      'Waste Management',
      'Water Usage',
      'Biodiversity Impact'
    ],
    Social: [
      'Employee Welfare',
      'Community Relations',
      'Human Rights',
      'Health & Safety',
      'Supply Chain Management'
    ],
    Governance: [
      'Board Structure',
      'Business Ethics',
      'Risk Management',
      'Shareholder Rights',
      'Transparency'
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-[#020202] mb-12 text-center">ESG Evaluation Methodology</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-[#020202] mb-6">{category}</h3>
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#9EE44D] rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold text-[#020202] mb-6">Scoring System</h3>
        <p className="text-gray-600 mb-4">
          Our comprehensive evaluation system assigns scores based on:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#9EE44D] rounded-full"></div>
            <span>Data-driven metrics and KPIs</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#9EE44D] rounded-full"></div>
            <span>Industry-specific benchmarks</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#9EE44D] rounded-full"></div>
            <span>Third-party verifications</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-[#9EE44D] rounded-full"></div>
            <span>Continuous monitoring</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Methodology;