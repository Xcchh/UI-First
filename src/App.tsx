import React, { useState } from 'react';
import { Upload, LineChart, Building2, ArrowRight, FileUpload, Leaf, Users, Scale, TrendingUp, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import FileUploader from './components/FileUploader';
import ScoreCard from './components/ScoreCard';
import { CompanyData } from './types';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);

  return (
    <div className="min-h-screen bg-[#EFEFEF]">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === 'home' && (
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#020202] mb-6">
              ESG Performance Evaluation Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Upload your company's data for a comprehensive ESG analysis
            </p>
            <FileUploader setCompanyData={setCompanyData} />
          </div>

          {companyData && (
            <ScoreCard data={companyData} />
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Leaf className="w-12 h-12 text-[#9EE44D] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Environmental Impact</h3>
              <p className="text-gray-600">Evaluate your company's environmental footprint and sustainability initiatives.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-[#9EE44D] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Social Responsibility</h3>
              <p className="text-gray-600">Assess your organization's impact on communities and stakeholders.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <Scale className="w-12 h-12 text-[#9EE44D] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Governance Standards</h3>
              <p className="text-gray-600">Review your corporate governance practices and ethical standards.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'methodology' && <Methodology />}
      {activeTab === 'results' && <Results companyData={companyData} />}
      {activeTab === 'recommendations' && <Recommendations companyData={companyData} />}
    </div>
  );
}

export default App;