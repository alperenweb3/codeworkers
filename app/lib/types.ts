export interface Project {
  title: string;
  description: string;
  url: string;
}

export interface Graduate {
  id: string;
  name: string;
  email: string;
  title:string;
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

export type FirestoreData = {
  [key: string]: string | number | boolean | string[];
};
