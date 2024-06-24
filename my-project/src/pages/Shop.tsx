import { ProductType } from '../types';
import Product from '../components/Product';

interface ShopProps {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const products: ProductType[] = [
  { id: 1, title: 'Biryani', price: 300, imageUrl: 'https://example.com/images/nihari.jpg' },
  { id: 2, title: 'Nihari', price: 350, imageUrl: 'https://example.com/images/nihari.jpg' },
  { id: 3, title: 'Haleem', price: 250, imageUrl: 'https://img.freepik.com/premium-photo/chicken-haleem-halim-daleem-with-fried-onion-served-dish-isolated-wooden-table-top-view-indian-spices-food_689047-4633.jpg' },
  { id: 4, title: 'Karahi', price: 400, imageUrl: 'https://example.com/images/karahi.jpg' },
  { id: 5, title: 'Kofta', price: 280, imageUrl: 'https://example.com/images/kofta.jpg' },
  { id: 6, title: 'Seekh Kebab', price: 220, imageUrl: 'https://example.com/images/seekh_kebab.jpg' },
  { id: 7, title: 'Paya', price: 330, imageUrl: 'https://example.com/images/paya.jpg' },
  { id: 8, title: 'Chapli Kebab', price: 260, imageUrl: 'https://example.com/images/chapli_kebab.jpg' },
  { id: 9, title: 'Butter Chicken', price: 350, imageUrl: 'https://example.com/images/butter_chicken.jpg' },
  { id: 10, title: 'Tandoori Chicken', price: 300, imageUrl: 'https://example.com/images/tandoori_chicken.jpg' },
  { id: 11, title: 'Samosa', price: 40, imageUrl: 'https://example.com/images/samosa.jpg' },
  { id: 12, title: 'Paratha', price: 50, imageUrl: 'https://example.com/images/paratha.jpg' },
  { id: 13, title: 'Aloo Gosht', price: 320, imageUrl: 'https://example.com/images/aloo_gosht.jpg' },
  { id: 14, title: 'Daal Chawal', price: 180, imageUrl: 'https://example.com/images/daal_chawal.jpg' },
  { id: 15, title: 'Palak Paneer', price: 250, imageUrl: 'https://example.com/images/palak_paneer.jpg' },
  { id: 16, title: 'Saag', price: 230, imageUrl: 'https://example.com/images/saag.jpg' },
  { id: 17, title: 'Chicken Handi', price: 370, imageUrl: 'https://example.com/images/chicken_handi.jpg' },
  { id: 18, title: 'Korma', price: 340, imageUrl: 'https://example.com/images/korma.jpg' },
  { id: 19, title: 'Beef Karahi', price: 400, imageUrl: 'https://example.com/images/beef_karahi.jpg' },
  { id: 20, title: 'Mutton Karahi', price: 450, imageUrl: 'https://example.com/images/mutton_karahi.jpg' },
  { id: 21, title: 'Raita', price: 40, imageUrl: 'https://example.com/images/raita.jpg' },
  { id: 22, title: 'Chana Chaat', price: 100, imageUrl: 'https://example.com/images/chana_chaat.jpg' },
  { id: 23, title: 'Pakora', price: 60, imageUrl: 'https://example.com/images/pakora.jpg' },
  { id: 24, title: 'Zarda', price: 200, imageUrl: 'https://example.com/images/zarda.jpg' },
  { id: 25, title: 'Jalebi', price: 150, imageUrl: 'https://example.com/images/jalebi.jpg' },
  { id: 26, title: 'Gulab Jamun', price: 180, imageUrl: 'https://example.com/images/gulab_jamun.jpg' },
  { id: 27, title: 'Barfi', price: 220, imageUrl: 'https://example.com/images/barfi.jpg' },
  { id: 28, title: 'Kheer', price: 210, imageUrl: 'https://example.com/images/kheer.jpg' },
  { id: 29, title: 'Ras Malai', price: 250, imageUrl: 'https://example.com/images/ras_malai.jpg' },
  { id: 30, title: 'Gajar Ka Halwa', price: 270, imageUrl: 'https://example.com/images/gajar_ka_halwa.jpg' }
];

const Shop: React.FC<ShopProps> = ({ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }) => {
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
        />
      ))}
    </div>
  );
}

export default Shop;








// import React from 'react';
// import { ProductType } from '../types';
// import Product from '../components/Product';

// interface ShopProps {
//   cart: ProductType[];
//   addToCart: (product: ProductType) => void;
//   increaseQuantity: (id: number) => void;
//   decreaseQuantity: (id: number) => void;
//   removeFromCart: (id: number) => void;
// }

// const Shop: React.FC<ShopProps> = ({ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }) => {
//   const products: ProductType[] = [
//     { id: 1, title: 'Product 1', price: 200, imageUrl: 'https://via.placeholder.com/150' },
//     { id: 2, title: 'Product 2', price: 250, imageUrl: 'https://via.placeholder.com/150' },
//     // Add more products as needed
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//       {products.map(product => {
//         const cartItem = cart.find(item => item.id === product.id);
//         return (
//           <Product
//             key={product.id}
//             product={product}
//             cartItem={cartItem}
//             addToCart={addToCart}
//             increaseQuantity={increaseQuantity}
//             decreaseQuantity={decreaseQuantity}
//             removeFromCart={removeFromCart}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default Shop;
