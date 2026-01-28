import { ServiceCard } from './services.model';

export const SERVICES: ServiceCard[] = [
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description:
      'I build end-to-end web applications that are scalable and business-oriented using .NET and Angular.',
    bullets: ['Robust APIs', 'Modern & accessible UI', 'Performance and DX'],
    stack: ['.NET', 'Angular', 'SQL', 'REST'],
    icon: 'fullstack',
  },
  {
    id: 'architecture',
    title: 'Architecture & Scalability',
    description:
      'I design solid foundations using Clean Architecture, patterns, and technical decisions that allow systems to grow without pain.',
    bullets: ['Modular design', 'Safe refactors', 'Best practices'],
    stack: ['Clean Architecture', 'Azure', 'Testing'],
    icon: 'architecture',
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Evolution',
    description:
      'I improve existing products by fixing bugs, optimizing performance, and adding new features without breaking what already works.',
    bullets: ['Bug fixing', 'Optimization', 'Continuous improvement'],
    stack: ['Observability', 'Refactor', 'CI/CD'],
    icon: 'maintenance',
  },
  // {
  //   id: 'collaboration',
  //   title: 'Team Collaboration',
  //   description:
  //     'I integrate quickly into teams, contributing clarity through communication, code reviews, and technical mentoring.',
  //   bullets: ['Code reviews', 'Mentoring', 'Collaborative work'],
  //   stack: ['Git', 'Agile', 'Documentation'],
  //   icon: 'collaboration',
  // },
];
