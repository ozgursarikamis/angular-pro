export interface Product {
  id: string;
  price: string;
  name: string;
}

export interface Cart {
  product_id: string;
  quantity: number;
}
