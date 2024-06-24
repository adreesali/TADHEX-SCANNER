import React, { useState } from 'react';

interface Dish {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Menu: React.FC = () => {
  const [cart, setCart] = useState<Dish[]>([]);
  const dishes: Dish[] = [
    { id: 1, name: 'DR Tahir Sabri Marasi', price: 200, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 2, name: 'Dish 2', price: 250, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 3, name: 'Dish 3', price: 180, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 4, name: 'Dish 4', price: 300, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 5, name: 'Dish 5', price: 150, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 6, name: 'Dish 6', price: 220, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 7, name: 'Dish 7', price: 280, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 8, name: 'Dish 8', price: 190, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 9, name: 'Dish 9', price: 210, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 10, name: 'Dish 10', price: 320, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 11, name: 'Dish 11', price: 170, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 12, name: 'Dish 12', price: 240, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 13, name: 'Dish 13', price: 260, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 14, name: 'Dish 14', price: 280, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 15, name: 'Dish 15', price: 300, image: 'https://via.placeholder.com/150', quantity: 0 },
  ];

  const addToCart = (dish: Dish) => {
    const updatedCart = [...cart];
    const existingDish = updatedCart.find(d => d.id === dish.id);
    if (existingDish) {
      existingDish.quantity++;
    } else {
      updatedCart.push({ ...dish, quantity: 1 });
    }
    setCart(updatedCart);
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter(dish => dish.id !== id);
    setCart(updatedCart);
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map(dish => {
      if (dish.id === id) {
        dish.quantity++;
      }
      return dish;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map(dish => {
      if (dish.id === id && dish.quantity > 0) {
        dish.quantity--;
      }
      return dish;
    });
    setCart(updatedCart);
  };

  const getTotalBill = () => {
    return cart.reduce((total, dish) => total + dish.price * dish.quantity, 0);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied to clipboard: ${text}`);
  };

  const handleWhatsAppOrder = () => {
    const totalBill = getTotalBill();
    const message = `Order details:\n`;
    const orderDetails = cart.map(dish => `${dish.name}: ${dish.quantity}\n`).join('');
    const totalPriceMessage = `\nTotal Price: PKR ${totalBill}`;

    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
      `${message}${orderDetails}${totalPriceMessage}`
    )}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Restaurant Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dishes.map(dish => (
          <div key={dish.id} className="border p-4 rounded shadow-lg flex flex-col items-center">
            <img src={dish.image} alt={dish.name} className="w-full h-32 object-cover mb-4" />
            <h2 className="text-xl font-bold">{dish.name}</h2>
            <p className="text-gray-600">PKR {dish.price}</p>
            {cart.find(item => item.id === dish.id) ? (
              <div className="flex mt-2 space-x-2">
                <button
                  onClick={() => increaseQuantity(dish.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
                >
                  +
                </button>
                <span className="text-xl">
                  {cart.find(item => item.id === dish.id)?.quantity || 0}
                </span>
                <button
                  onClick={() => decreaseQuantity(dish.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  -
                </button>
              </div>
            ) : (
              // <button
              //   onClick={() => addToCart(dish)}
              //   className="bg-blue-500 text-white mt-2 px-4 py-2 rounded hover:bg-blue-700 w-full"
              // >
              //   Add to Cart
              // </button>
            )}
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="mt-8">
          <button
            onClick={handleWhatsAppOrder}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Order via WhatsApp
          </button>
          <button
            onClick={() => copyToClipboard(`Total Bill: PKR ${getTotalBill()}`)}
            className="bg-blue-500 text-white px-4 py-2 ml-4 rounded hover:bg-blue-700"
          >
            Copy Total Bill
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;

interface Dish {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Menu: React.FC = () => {
  const [cart, setCart] = useState<Dish[]>([]);
  const dishes: Dish[] = [
    { id: 1, name: 'Dish 1', price: 200, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 2, name: 'Dish 2', price: 250, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 3, name: 'Dish 3', price: 180, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 4, name: 'Dish 4', price: 300, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 5, name: 'Dish 5', price: 150, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 6, name: 'Dish 6', price: 220, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 7, name: 'Dish 7', price: 280, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 8, name: 'Dish 8', price: 190, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 9, name: 'Dish 9', price: 210, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 10, name: 'Dish 10', price: 320, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 11, name: 'Dish 11', price: 170, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 12, name: 'Dish 12', price: 240, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 13, name: 'Dish 13', price: 260, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 14, name: 'Dish 14', price: 280, image: 'https://via.placeholder.com/150', quantity: 0 },
    { id: 15, name: 'Dish 15', price: 300, image: 'https://via.placeholder.com/150', quantity: 0 },
  ];

  const addToCart = (dish: Dish) => {
    const updatedCart = [...cart];
    const existingDish = updatedCart.find(d => d.id === dish.id);
    if (existingDish) {
      existingDish.quantity++;
    } else {
      updatedCart.push({ ...dish, quantity: 1 });
    }
    setCart(updatedCart);
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter(dish => dish.id !== id);
    setCart(updatedCart);
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map(dish => {
      if (dish.id === id) {
        dish.quantity++;
      }
      return dish;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map(dish => {
      if (dish.id === id && dish.quantity > 0) {
        dish.quantity--;
      }
      return dish;
    });
    setCart(updatedCart);
  };

  const getTotalBill = () => {
    return cart.reduce((total, dish) => total + dish.price * dish.quantity, 0);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied to clipboard: ${text}`);
  };

  const handleWhatsAppOrder = () => {
    const totalBill = getTotalBill();
    const message = `Order details:\n`;
    const orderDetails = cart.map(dish => `${dish.name}: ${dish.quantity}\n`).join('');
    const totalPriceMessage = `\nTotal Price: PKR ${totalBill}`;

    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
      `${message}${orderDetails}${totalPriceMessage}`
    )}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Restaurant Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dishes.map(dish => (
          <div key={dish.id} className="border p-4 rounded shadow-lg flex flex-col items-center">
            <img src={dish.image} alt={dish.name} className="w-full h-32 object-cover mb-4" />
            <h2 className="text-xl font-bold">{dish.name}</h2>
            <p className="text-gray-600">PKR {dish.price}</p>
            {cart.find(item => item.id === dish.id) ? (
              <div className="flex mt-2 space-x-2">
                <button
                  onClick={() => increaseQuantity(dish.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
                >
                  +
                </button>
                <span className="text-xl">
                  {cart.find(item => item.id === dish.id)?.quantity || 0}
                </span>
                <button
                  onClick={() => decreaseQuantity(dish.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                >
                  -
                </button>
              </div>
            ) : (
              <button
                onClick={() => addToCart(dish)}
                className="bg-blue-500 text-white mt-2 px-4 py-2 rounded hover:bg-blue-700 w-full"
              >
                Add to Cart
              </button>
            )}
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="mt-8">
          <button
            onClick={handleWhatsAppOrder}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Order via WhatsApp
          </button>
          <button
            onClick={() => copyToClipboard(`Total Bill: PKR ${getTotalBill()}`)}
            className="bg-blue-500 text-white px-4 py-2 ml-4 rounded hover:bg-blue-700"
          >
            Copy Total Bill
          </button>
        </div>
      )}
    </div>
  );
};

export default Menu;
