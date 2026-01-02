
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  image?: string;
}

export interface EstimateFormData {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  description: string;
}
