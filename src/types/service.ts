
export interface Professional {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
  bio: string;
  availableDays: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  professionals: Professional[];
  availableDays: string[];
  requirements?: string[];
  duration: number; // in minutes
  price: string;
}
