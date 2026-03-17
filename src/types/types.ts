export interface LinkAction {
  href: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string[];
  description: string;
  primaryCta: LinkAction;
  secondaryCta: LinkAction;
  cardTitle: string;
  cardDescription: string;
}

export interface Review {
  quote: string;
  author: string;
  role: string;
}

export interface Project {
  name: string;
  type: string;
  url: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phoneLabel: string;
  phone: string;
}

export interface HomePageContent {
  seo: {
    title: string;
    description: string;
  };
  hero: HeroContent;
  reviews: Review[];
  projects: Project[];
  contact: ContactInfo;
}
