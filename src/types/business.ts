export interface Business {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  hours?: string;
  linkWording?: string;
  website?: string;
  founderInfo?: FounderInfo;
}

export interface FounderInfo {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

export { };