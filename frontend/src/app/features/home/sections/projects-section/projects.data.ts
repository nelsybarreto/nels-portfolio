import { Project } from './projects.model';

export const PROJECTS: Project[] = [
  {
    id: 'workflow-elsa',
    title: 'Workflow Platform (.NET) · Elsa',
    description:
      'Extension of a workflow engine: activity design, APIs, and DX improvements for maintainable and scalable workflows.',
    tags: ['.NET', 'APIs', 'Clean Architecture'],
    highlights: [
      'Extensible and modular',
      'Consistent validation and error handling',
      'Built to scale',
    ],
    links: [{ label: 'Case study', url: '#' }],
    featured: true,
  },
  {
    id: 'news-publisher',
    title: 'News Publisher Platform',
    description:
      'Modules for daily content publishing and management, with UX focused on editorial speed and clarity.',
    tags: ['Angular', 'APIs', 'SQL'],
    highlights: ['Fast UI', 'Clear workflows', 'Maintainable architecture'],
    links: [{ label: 'Case study', url: '#' }],
  },
  {
    id: 'xbrl-suite',
    title: 'XBRL Processing Suite',
    description:
      'Ingestion, validation, and processing of XBRL reports with reliable storage and a robust processing pipeline.',
    tags: ['.NET', 'SQL', 'Clean Architecture'],
    highlights: ['Robust processing', 'Strong validation', 'Reliable persistence'],
    links: [{ label: 'Case study', url: '#' }],
  },
  {
    id: 'ecommerce-angular',
    title: 'E-commerce (Angular + Tailwind)',
    description:
      'Scalable frontend built with reusable components, modern UI, and a solid foundation for future growth.',
    tags: ['Angular', 'CI/CD'],
    highlights: ['Component-driven design', 'Responsive layout', 'Consistent UI system'],
    links: [{ label: 'Case study', url: '#' }],
  },
];
