export interface PersonalInfo {
  name: string;
  role: string;
  one_liner: string;
  about: About;
  contact: {
    email: string;
    github: string;
    linkedin: string;
    website: string;
  };
}

export interface Contribution {
  title: string;
  description?: string;
}

export interface About {
  paragraphs: string[];
  contributions?: Contribution[];
}

export interface Education {
  institution: string;
  duration: string;
  degree: string;
  achievements: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
}

export interface Project {
  name: string;
  duration: string;
  tech_stack: string[];
  details: string[];
  sourceCode?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SkillSet {
  languages: SkillCategory;
  frameworks: SkillCategory;
  databases: SkillCategory;
  technologies: SkillCategory;
  tools: SkillCategory;
}

export interface GithubRepo {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
}

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  readTime: string;
  url: string;
}
