import { AboutCard } from './about.model';

export const ABOUT_CARDS: AboutCard[] = [
  {
    id: 'experience',
    icon: 'experience',
    title: 'Experiencia',
    value: '+12 años',
    description: 'Construyendo aplicaciones web end-to-end',
  },
  {
    id: 'stack',
    icon: 'stack',
    title: 'Especialidad',
    value: '.NET + Angular',
    description: 'Backend sólido + UI moderna',
  },
  {
    id: 'quality',
    icon: 'quality',
    title: 'Forma de trabajo',
    value: 'Calidad',
    description: 'Buenas prácticas, tests y refactor continuo',
  },
  {
    id: 'tools',
    icon: 'tools',
    title: 'Stack',
    stack: ['C#', 'ASP.NET', 'Angular', 'Tailwind'],
  },
];
