export interface PropertyTypes {
  property_id: string;
  title: string;
  price: number;
  paymentFrequency: string;
  location: string;
  features: string[];
  description: string;
  images: string[];
  status: string;
  isSaved: boolean;
  className: string | number;
}

export type PropertiesTypes = PropertyTypes[];
