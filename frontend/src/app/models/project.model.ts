export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  repoUrl?: string | null;
  liveUrl?: string | null;
  imageUrl?: string | null;
}