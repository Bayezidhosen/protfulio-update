export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  hasPublicDemo: boolean;
  dashboardUrl?: string;
  githubUrl: string;
  highlights: string[];
  role: string;
  year: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'tools';
  description: string;
  iconName: string;
  color: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  capabilities: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  focus: string;
  description: string;
  keyPoints: string[];
}
