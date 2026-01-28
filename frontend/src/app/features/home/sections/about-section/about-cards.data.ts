import { AboutCard } from './about.model';

export const ABOUT_CARDS: AboutCard[] = [
  {
    id: 'experience',
    icon: 'experience',
    title: 'Experience',
    value: '+12 years',
    description: 'Building end-to-end web applications',
  },
  {
    id: 'stack',
    icon: 'stack',
    title: 'Stack',
    value: '.NET + Angular',
    description: 'Robust backend + modern UI',
  },
  {
    id: 'quality',
    icon: 'quality',
    title: 'Working method',
    value: 'Quality first',
    description: 'Best practices, testing, and continuous refactoring',
  },
  {
    id: 'tools',
    icon: 'tools',
    title: 'Stack',
    stack: ['C#', 'ASP.NET', 'Angular', 'Tailwind'],
  },
];
