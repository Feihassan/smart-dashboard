export interface FinanceData {
  date: string;
  income: number;
  expenses: number;
}

export interface HealthData {
  steps: { current: number; goal: number };
  calories: { current: number; goal: number };
  water: { current: number; goal: number };
}

export interface LearningData {
  subject: string;
  hours: number;
}

export interface Activity {
  id: number;
  type: 'payment' | 'expense' | 'exercise' | 'study';
  description: string;
  amount?: number;
  duration?: string;
  date: string;
}

export type DateRange = 'today' | 'week' | 'month' | 'year';
