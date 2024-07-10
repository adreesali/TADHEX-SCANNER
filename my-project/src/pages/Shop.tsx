import React, { useEffect, useState } from 'react';
import { ProductType } from '../types';
import Product from '../components/Product';

interface ShopProps {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const Shop: React.FC<ShopProps> = ({ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: ProductType[]) => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <div className="container mx-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          cartItem={cart.find(item => item.id === product.id)}
          addToCart={addToCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
          copyToClipboard={() => copyToClipboard(product.title, product.id)}
          copied={copiedIndex === product.id}
        />
      ))}
    </div>
  );
}

export default Shop;











import React, { useEffect, useState } from 'react';
import { ProductType } from '../types';
import Product from '../components/Product';

interface ShopProps {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const Shop: React.FC<ShopProps> = ({ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: ProductType[]) => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <div className="container mx-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          cartItem={cart.find(item => item.id === product.id)}
          addToCart={addToCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
          copyToClipboard={() => copyToClipboard(product.title, product.id)}
          copied={copiedIndex === product.id}
        />
      ))}
    </div>
  );
}

export default Shop;

