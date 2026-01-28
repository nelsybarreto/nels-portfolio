export type ServiceIconKey = 'fullstack' | 'architecture' | 'maintenance' | 'collaboration';

export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
  stack?: string[];
  icon: ServiceIconKey;
};