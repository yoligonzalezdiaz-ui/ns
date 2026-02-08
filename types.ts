
export interface ClassItem {
  name: string;
  time: string;
  category: 'Agua' | 'Sala' | 'Zen' | 'Intenso';
}

export interface DaySchedule {
  day: string;
  classes: ClassItem[];
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
}
