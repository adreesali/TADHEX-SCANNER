interface ProductType {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number; // Add quantity property
}

export interface CartItemType extends ProductType {
  quantity: number;
}
