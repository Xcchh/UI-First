import React from 'react';
import { CompanyData } from '../types';
import { TrendingUp, Shield, Users, Leaf } from 'lucide-react';

interface RecommendationsProps {
  companyData: CompanyData | null;
}

const Recommendations: React.FC<RecommendationsProps> = ({ companyData }) => {
  if (!companyData) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold">Please upload company data first</h2>
      </div>
    );
  }

  const recommendations = [
    {
      category: 'Environmental',
      icon: Leaf,
      items: [
        'Implement renewable energy solutions',
        'Develop waste reduction programs',
        'Set science-based emission targets'
      ]
    },
    {
      category: 'Social',
      icon: Users,
      items: [
        'Enhance diversity and inclusion initiatives',
        'Strengthen community engagement programs',
        'Improve supply chain monitoring'
      ]
    },
    {
      category: 'Governance',
      icon: Shield,
      items: [
        'Establish ESG oversight committee',
        'Enhance transparency in reporting',
        'Implement stakeholder engagement framework'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#020202] mb-4">Development Recommendations</h2>
        <p className="text-xl text-gray-600">Strategic initiatives to enhance your ESG performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {recommendations.map((rec) => (
          <div key={rec.category} className="bg-white rounded-xl shadow-lg p-8">
            <rec.icon className="w-12 h-12 text-[#9EE44D] mb-4" />
            <h3 className="text-2xl font-semibold mb-4">{rec.category}</h3>
            <ul className="space-y-4">
              {rec.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-[#9EE44D] rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-semibold mb-6">Implementation Timeline</h3>
        <div className="space-y-8">
          <div className="relative flex items-center">
            <div className="w-8 h-8 bg-[#9EE44D] rounded-full flex items-center justify-center">
              <span className="text-white font-bold">1</span>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Short-term (0-6 months)</h4>
              <p className="text-gray-600">Quick wins and immediate improvements</p>
            </div>
          </div>
          <div className="relative flex items-center">
            <div className="w-8 h-8 bg-[#9EE44D] rounded-full flex items-center justify-center">
              <span className="text-white font-bold">2</span>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Medium-term (6-18 months)</h4>
              <p className="text-gray-600">Strategic initiatives and system implementations</p>
            </div>
          </div>
          <div className="relative flex items-center">
            <div className="w-8 h-8 bg-[#9EE44D] rounded-full flex items-center justify-center">
              <span className="text-white font-bold">3</span>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Long-term (18+ months)</h4>
              <p className="text-gray-600">Transformational changes and industry leadership</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;