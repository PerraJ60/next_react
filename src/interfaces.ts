export interface BioInterface {
  name: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
}
export interface PositionInterface {
  id: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  location: string;
  achievements: string[];
}
export interface ProductInterface {
  id: string;
  name: string;
  image: string;
  type: string;
  qty: string;
  price: string;
}
