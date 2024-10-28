export interface CompanyData {
  name: string;
  scores: {
    environmental: number;
    social: number;
    governance: number;
  };
  industry: string;
  industryRank: number;
  totalCompanies: number;
}