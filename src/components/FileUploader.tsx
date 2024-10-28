import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface FileUploaderProps {
  setCompanyData: (data: any) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ setCompanyData }) => {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    // Simulated data for demonstration
    setCompanyData({
      name: "Example Corp",
      scores: {
        environmental: 85,
        social: 78,
        governance: 92
      },
      industry: "Technology",
      industryRank: 3,
      totalCompanies: 50
    });
  }, [setCompanyData]);

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="border-2 border-dashed border-[#9EE44D] rounded-xl p-12 max-w-2xl mx-auto
        hover:border-[#020202] transition-colors cursor-pointer bg-white"
    >
      <div className="text-center">
        <Upload className="w-16 h-16 mx-auto mb-4 text-[#9EE44D]" />
        <h3 className="text-xl font-semibold mb-2">Drop your files here</h3>
        <p className="text-gray-600">or click to upload company data</p>
      </div>
    </div>
  );
};

export default FileUploader;