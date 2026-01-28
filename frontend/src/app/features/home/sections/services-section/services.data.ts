import { ServiceCard } from './services.model';

export const SERVICES: ServiceCard[] = [
  {
    id: 'fullstack',
    title: 'Desarrollo Full Stack',
    description:
      'Construyo aplicaciones web end-to-end, escalables y orientadas a negocio con .NET y Angular.',
    bullets: ['APIs robustas', 'UI moderna y accesible', 'Performance y DX'],
    stack: ['.NET', 'Angular', 'SQL', 'REST'],
    icon: 'fullstack',
  },
  {
    id: 'architecture',
    title: 'Arquitectura & Escalabilidad',
    description:
      'Defino bases sólidas: Clean Architecture, patrones y decisiones técnicas pensadas para crecer sin dolor.',
    bullets: ['Diseño de módulos', 'Refactors seguros', 'Buenas prácticas'],
    stack: ['Clean Architecture', 'Azure', 'Testing'],
    icon: 'architecture',
  },
  {
    id: 'maintenance',
    title: 'Mantenimiento & Evolución',
    description:
      'Mejoro productos existentes: corrijo bugs, optimizo rendimiento y agrego funcionalidades sin romper lo que funciona.',
    bullets: ['Bug fixing', 'Optimización', 'Mejora continua'],
    stack: ['Observabilidad', 'Refactor', 'CI/CD'],
    icon: 'maintenance',
  },
  // {
  //   id: 'collaboration',
  //   title: 'Colaboración en equipos',
  //   description:
  //     'Me integro rápido y aporto claridad: comunicación, code reviews y acompañamiento técnico para subir la calidad.',
  //   bullets: ['Code review', 'Mentoring', 'Trabajo colaborativo'],
  //   stack: ['Git', 'Agile', 'Documentación'],
  //   icon: 'collaboration',
  // },
];