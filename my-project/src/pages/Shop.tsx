
import React from 'react';
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
  
  {
    id: 2, title: 'Nihari', price: 350, imageUrl: 'https://t4.ftcdn.net/jpg/00/29/29/25/360_F_29292582_rKWLOVhtxYcFgAkSK7S7dqyxXcXodpJK.jpg',
    quantity: 0
  },
  {
    id: 3, title: 'Haleem', price: 250, imageUrl: 'https://img.freepik.com/premium-photo/chicken-haleem-halim-daleem-with-fried-onion-served-dish-isolated-wooden-table-top-view-indian-spices-food_689047-4633.jpg',
    quantity: 0
  }, 
  {
    id: 4, title: 'Karahi', price: 400000000, imageUrl: 'https://www.shutterstock.com/image-photo/pakistani-chicken-karahi-naan-traditional-260nw-1790057045.jpg',
    quantity: 0
  },
  {
    id: 5, title: 'Kofta', price: 280, imageUrl: 'https://img.freepik.com/premium-photo/indian-kofta-curry-dish-served-bowl-karahi-selective-focus_466689-97139.jpg',
    quantity: 0
  },
  {
    id: 6, title: 'Seekh Kebab', price: 220, imageUrl: 'https://www.shutterstock.com/image-photo/seekh-kabab-made-minced-chicken-600nw-2108952107.jpg',
    quantity: 0
  },
  {
    id: 7, title: 'Paya', price: 330, imageUrl: 'https://t4.ftcdn.net/jpg/01/14/51/33/360_F_114513306_t59LICVATdyIrjG13VAGkfLW4TkJJoM3.jpg',
    quantity: 0
  },
  {
    id: 8, title: 'Chapli Kebab', price: 260, imageUrl: 'https://media.istockphoto.com/id/501137055/photo/chapli-kabab-11.jpg?s=612x612&w=0&k=20&c=L76f8tzZruBtGHxP-7VzitCOLi3583BPRo-zF6Tq9Q0=',
    quantity: 0
  },
  {
    id: 9, title: 'Butter Chicken', price: 350, imageUrl: 'https://t3.ftcdn.net/jpg/06/01/41/66/360_F_601416673_Tn9dqtXuujNiavuJnNNspgcDezsStYpD.jpg',
    quantity: 0
  },
  {
    id: 10, title: 'Tandoori Chicken', price: 300, imageUrl: 'https://t3.ftcdn.net/jpg/03/61/02/44/360_F_361024401_whhOCNdEPi0LlQz1lvbyY0dvZuno3aVp.jpg',
    quantity: 0
  },
  {
    id: 11, title: 'Samosa', price: 40, imageUrl: 'https://media.istockphoto.com/id/1430060145/photo/sweet-tasty-fried-indian-dish-samosha-indian-delicious-deep-fried-breakfast-samosa-also-know.jpg?s=612x612&w=0&k=20&c=bxOAfJThGKNSzugC7Id_vPO9l5UPljCKSgOc18-2vS0=',
    quantity: 0
  },
  {
    id: 12, title: 'Paratha', price: 50, imageUrl: 'https://img.freepik.com/premium-photo/kerala-paratha-hd-8k-wallpaper-stock-photographic-image_853645-68330.jpg',
    quantity: 0
  },
  {
    id: 13, title: 'Aloo Gosht', price: 320, imageUrl: 'https://www.shutterstock.com/image-photo/spicy-lamb-potatoes-stew-aloo-600nw-1911922336.jpg',
    quantity: 0
  },
  {
    id: 14, title: 'Daal Chawal', price: 180, imageUrl: 'https://www.shutterstock.com/image-photo/arhar-dal-rice-indian-dish-600nw-2389357495.jpg',
    quantity: 0
  },
  {
    id: 16, title: 'Saag', price: 230, imageUrl: 'https://shwetainthekitchen.com/wp-content/uploads/2021/01/Sarson-ka-Saag.jpg',
    quantity: 0
  },
  {
    id: 17, title: 'Chicken Handi', price: 370, imageUrl: 'https://www.shanfoods.com/wp-content/uploads/2016/11/chicken-handi-main.jpg',
    quantity: 0
  },
  {
    id: 18, title: 'Korma', price: 340, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0H0OIp5bOBVISfwuSJHHs1j3V0rqD7QpKwA&s',
    quantity: 0
  },
  {
    id: 19, title: 'Beef Karahi', price: 400, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStM7VoLDdTMl_v3hsI0G4OJSMpRO0JU253Qw&s',
    quantity: 0
  },
  {
    id: 20, title: 'Mutton Karahi', price: 450, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fBc-HjcmeZLysfI1Dyp2zBFBnUtgu6dAfQ&s',
    quantity: 0
  },
  {
    id: 21, title: 'Raita', price: 40, imageUrl: 'https://www.shutterstock.com/shutterstock/videos/3463174861/thumb/1.jpg?ip=x480',
    quantity: 0
  },
  {
    id: 22, title: 'Chana Chaat', price: 100, imageUrl: 'https://c8.alamy.com/comp/EWWDYM/delicious-chana-chaat-with-dahi-bhalley-papri-EWWDYM.jpg',
    quantity: 0
  },
  {
    id: 23, title: 'Pakora', price: 60, imageUrl: 'https://media.istockphoto.com/id/1254198647/photo/palak-pakoras-fried-hot-and-tasty.jpg?s=612x612&w=0&k=20&c=K4LK0v0zazVqH5DMeb_0Z7BUFj7ThhlRhLnlQBqZUds=',
    quantity: 0
  },
  {
    id: 24, title: 'Zarda', price: 200, imageUrl: 'https://www.shutterstock.com/image-photo/zarda-sweet-rice-260nw-786305767.jpg',
    quantity: 0
  },
  {
    id: 25, title: 'Jalebi', price: 150, imageUrl: 'https://cdn.pixabay.com/photo/2015/06/23/05/23/fresh-jalebi-818316_640.jpg',
    quantity: 0
  },
  {
    id: 26, title: 'Gulab Jamun', price: 180, imageUrl: 'https://t3.ftcdn.net/jpg/02/06/87/12/360_F_206871222_s1nf8eK8M3YwS0pa6oHs1b96f8CCsLia.jpg',
    quantity: 0
  },
  {
    id: 27, title: 'Barfi', price: 220, imageUrl: 'https://media.istockphoto.com/id/1428238615/photo/singhara-barfi-or-singhada-burfi%C2%A0or-halwa-made-using-water-chestnut-flour-fasting-or-upwas.jpg?s=612x612&w=0&k=20&c=mJot3AHCyHlU4BqFiPwZoJ0rxixZwUvqAP4fV1z1HO8=',
    quantity: 0
  },
  {
    id: 28, title: 'Kheer', price: 210, imageUrl: 'https://t3.ftcdn.net/jpg/02/33/48/76/360_F_233487618_zZdP4pLcOeENbhphPlaBuU2CDA3kUW0K.jpg',
    quantity: 0
  },
  {
    id: 29, title: 'Ras Malai', price: 250, imageUrl: 'https://t4.ftcdn.net/jpg/02/28/08/97/360_F_228089710_bP57eP6tiAYsMnZHSSW6rcUJEreZt5WK.jpg',
    quantity: 0
  },
  {
    id: 30, title: 'Gajar Ka Halwa', price: 270, imageUrl: 'https://t3.ftcdn.net/jpg/03/27/17/30/360_F_327173095_araZyvlYmOO17gNxsK6jsXxbVuEAQJ9q.jpg',
    quantity: 0
  }
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

