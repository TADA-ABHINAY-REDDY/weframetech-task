export interface Franchisee {
  id: number;
  name: string;
  image: string | null;
  stage: number;
}

export interface Step {
  id: number;
  name: string;
  completed: boolean;
}

export interface Question {
  id: number;
  user: {
    name: string;
    role: string;
    image: string | null;
  };
  question: string;
  time: string;
}

export interface Lead {
  id: number;
  name: string;
  stage: string;
  image: string | null;
}

export interface InsightData {
  salesGrowth: number;
  feedback: string;
}

export interface FinancialData {
  targetAmount: number;
  currentAmount: number;
  franchiseeCount: number;
  growthPercentage: number;
}