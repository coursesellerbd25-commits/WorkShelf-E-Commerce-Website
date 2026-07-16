export type Product = {
  _id: string;
  name: string;
  price: number;
  rating: number;
  stock: number;
  category: string;
  description: string;
  images?: string[];

  bulkAvailable: boolean;
};