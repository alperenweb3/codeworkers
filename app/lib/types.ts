export interface Project {
  title: string;
  description: string;
  url: string;
}

export interface Graduate {
  id: string;
  name: string;
  email: string;
  phone: string;
  graduationYear: number;
  program: string;
  skills: string[];
  location: string;
  linkedin: string;
  github: string;
  bio: string;
  projects: Project[];
  availability: string;
  profileImageUrl: string;
}