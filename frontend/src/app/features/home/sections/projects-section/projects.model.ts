export type ProjectTag =
  | '.NET'
  | 'Angular'
  | 'NestJS'
  | 'SQL'
  | 'Azure'
  | 'Clean Architecture'
  | 'NgRx'
  | 'APIs'
  | 'CI/CD';

export type ProjectLink = {
  label: 'Live' | 'Repo' | 'Case study';
  url: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: ProjectTag[];
  highlights?: string[];
  links?: ProjectLink[];
  featured?: boolean;
};
