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
  { id: 1, title: 'Biryani', price: 300, imageUrl: 'data:image/jpeg;base64,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' },
  { id: 2, title: 'Nihari', price: 350, imageUrl: 'https://t4.ftcdn.net/jpg/00/29/29/25/360_F_29292582_rKWLOVhtxYcFgAkSK7S7dqyxXcXodpJK.jpg' },
  { id: 3, title: 'Haleem', price: 250, imageUrl: 'https://img.freepik.com/premium-photo/chicken-haleem-halim-daleem-with-fried-onion-served-dish-isolated-wooden-table-top-view-indian-spices-food_689047-4633.jpg' },
  { id: 4, title: 'Karahi', price: 400, imageUrl: 'https://img.freepik.com/premium-photo/chicken-haleem-halim-daleem-with-fried-onion-served-dish-isolated-wooden-table-top-view-indian-spices-food_689047-4633.jpg' },
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
  { id: 17, title: 'Chicken Handi', price: 370, imageUrl: 'https://www.shanfoods.com/wp-content/uploads/2016/11/chicken-handi-main.jpg' },
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
