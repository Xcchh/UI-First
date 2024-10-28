import React from 'react';
import { CompanyData } from '../types';

interface ScoreCardProps {
  data: CompanyData;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#020202]">{data.name}</h2>
        <p className="text-gray-600">ESG Performance Overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(data.scores).map(([category, score]) => (
          <div key={category} className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#EFEFEF"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#9EE44D"
                  strokeWidth="3"
                  strokeDasharray={`${score}, 100`}
                />
                <text x="18" y="20.35" className="text-3xl" textAnchor="middle">
                  {score}%
                </text>
              </svg>
            </div>
            <h3 className="text-xl font-semibold capitalize">{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreCard;