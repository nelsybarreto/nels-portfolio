import { Project } from './projects.model';

export const PROJECTS: Project[] = [
  {
    id: 'workflow-elsa',
    title: 'Workflow Platform (.NET) · Elsa',
    description:
      'Extensión de motor de workflows: diseño de actividades, APIs y mejoras de DX para flujos mantenibles.',
    tags: ['.NET', 'APIs', 'Clean Architecture'],
    highlights: ['Extensible y modular', 'Validaciones y errores consistentes', 'Listo para escalar'],
    links: [{ label: 'Case study', url: '#' }],
    featured: true,
  },
  {
    id: 'news-publisher',
    title: 'News Publisher Platform',
    description:
      'Módulos para publicación y administración diaria de contenidos con UX enfocada en velocidad editorial.',
    tags: ['Angular', 'APIs', 'SQL'],
    highlights: ['UI rápida', 'Flujos claros', 'Mantenibilidad'],
    links: [{ label: 'Case study', url: '#' }],
  },
  {
    id: 'xbrl-suite',
    title: 'XBRL Processing Suite',
    description:
      'Carga, validación y procesamiento de reportes XBRL con almacenamiento y pipeline de procesamiento.',
    tags: ['.NET', 'SQL', 'Clean Architecture'],
    highlights: ['Procesamiento robusto', 'Validación', 'Persistencia confiable'],
    links: [{ label: 'Case study', url: '#' }],
  },
  {
    id: 'ecommerce-angular',
    title: 'E-commerce (Angular + Tailwind)',
    description:
      'Frontend escalable con componentes reutilizables, UI moderna y base lista para crecer.',
    tags: ['Angular', 'CI/CD'],
    highlights: ['Componentización', 'Responsive', 'Diseño consistente'],
    links: [{ label: 'Repo', url: '#' }],
  },
];
