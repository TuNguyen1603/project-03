import { Product } from './product.model';

export interface Cart {
  id: number;
  fullName: string;
  address: string;
  creditNumber: string;
  total: number;
  products: Product[];
}
