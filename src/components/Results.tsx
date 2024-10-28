import React from 'react';
import { CompanyData } from '../types';

interface ResultsProps {
  companyData: CompanyData | null;
}

const Results: React.FC<ResultsProps> = ({ companyData }) => {
  if (!companyData) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold">Please upload company data first</h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-[#020202] mb-6">Industry Performance</h2>
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-gray-600">Industry Rank</p>
            <p className="text-4xl font-bold text-[#9EE44D]">
              #{companyData.industryRank}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Total Companies</p>
            <p className="text-4xl font-bold">{companyData.totalCompanies}</p>
          </div>
          <div>
            <p className="text-gray-600">Industry</p>
            <p className="text-4xl font-bold">{companyData.industry}</p>
          </div>
        </div>

        <div className="space-y-6">
          {Object.entries(companyData.scores).map(([category, score]) => (
            <div key={category} className="relative">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold capitalize">{category}</span>
                <span className="text-lg font-semibold">{score}%</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#9EE44D] rounded-full"
                  style={{ width: `${score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Strengths</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#9EE44D] rounded-full"></div>
              <span>Strong governance framework</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#9EE44D] rounded-full"></div>
              <span>Above average environmental initiatives</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">Areas for Improvement</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#020202] rounded-full"></div>
              <span>Social impact measurement</span>
            </li>
            <li className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[#020202] rounded-full"></div>
              <span>Supply chain transparency</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Results;