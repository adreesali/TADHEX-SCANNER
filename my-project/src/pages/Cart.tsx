// import React, { useState } from 'react';
// import { ProductType } from '../types';

// interface CartProps {
//   cart: ProductType[];
//   increaseQuantity: (id: number) => void;
//   decreaseQuantity: (id: number) => void;
//   removeFromCart: (id: number) => void;
// }

// const Cart: React.FC<CartProps> = ({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) => {
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');

//   const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

//   const handleWhatsAppOrder = () => {
//     if (!name || !phone || !address) {
//       alert("Please fill in all the fields");
//       return;
//     }

//     const message = `Order Details:\n\n`;
//     const orderItems = cart.map(item => `*${item.title}* - PKR ${item.price.toLocaleString()} x ${item.quantity}`).join('\n');
//     const totalBill = `\n\nTotal Bill: *PKR ${totalPrice.toLocaleString()}*\n\n`;
//     const customerDetails = `Customer Details:\nName: ${name}\nPhone: ${phone}\nAddress: ${address}`;
//     const whatsappMessage = `${message}${orderItems}${totalBill}${customerDetails}`;
//     const whatsappLink = `https://wa.me/923305687300?text=${encodeURIComponent(whatsappMessage)}`;
//     window.open(whatsappLink, '_blank');
//   };

//   return (
//     <div className="flex flex-col items-center p-4">
//       <h1 className="text-3xl font-bold mb-6">Cart</h1>
//       <div className="w-full max-w-md">
//         {cart.length === 0 ? (
//           <p>Your cart is empty</p>
//         ) : (
//           <>
//             {cart.map((product, index) => (
//               <div key={index} className="bg-white dark:bg-gray-800 p-4 mb-2 rounded shadow flex justify-between items-center space-x-4">
//                 <img src={product.imageUrl} alt={product.title} className="w-16 h-16 object-cover rounded" />
//                 <div className="flex-1">
//                   <div className="font-semibold">{product.title}</div>
//                   <div>PKR {product.price.toLocaleString()} x {product.quantity}</div>
//                 </div>
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => decreaseQuantity(product.id)}
//                     className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
//                   >
//                     -
//                   </button>
//                   <button
//                     onClick={() => increaseQuantity(product.id)}
//                     className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
//                   >
//                     +
//                   </button>
//                   <button
//                     onClick={() => removeFromCart(product.id)}
//                     className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <div className="text-xl font-bold mt-4">Total: PKR {totalPrice.toLocaleString()}</div>

//             {/* User Details Input */}
//             <div className="mt-4 space-y-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>

//             <button
//               onClick={handleWhatsAppOrder}
//               className="bg-green-500 text-white mt-4 px-4 py-2 rounded hover:bg-green-700 w-full"
//             >
//               Send Order to WhatsApp
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Cart;







import React, { useState } from 'react';
import { ProductType } from '../types';

interface CartProps {
  cart: ProductType[];
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleWhatsAppOrder = () => {
    if (!name || !phone || !address) {
      setError("Please fill in all the fields.");
      return;
    }

    setError("");

    const message = `*Order Details:*\n\n`;
    const orderItems = cart.map(item => `• **${item.title}** - PKR ${item.price.toLocaleString()} x ${item.quantity}`).join('\n');
    const totalBill = `\n\n*Total Bill:* PKR ${totalPrice.toLocaleString()}\n\n`;
    const customerDetails = `*Customer Details:*\n\n**Name:** ${name}\n**Phone:** ${phone}\n**Address:** ${address}`;
    const whatsappMessage = `${message}${orderItems}${totalBill}${customerDetails}`;
    const whatsappLink = `https://wa.me/923305687300?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      <div className="w-full max-w-md">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map((product, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 mb-2 rounded shadow flex justify-between items-center space-x-4">
                <img src={product.imageUrl} alt={product.title} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{product.title}</div>
                  <div>PKR {product.price.toLocaleString()} x {product.quantity}</div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    -
                  </button>
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <div className="text-xl font-bold mt-4">Total: PKR {totalPrice.toLocaleString()}</div>

            {/* User Details Input */}
            <div className="mt-4 space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Error Message */}
            {error && <div className="text-red-500 mt-2">{error}</div>}

            <button
              onClick={handleWhatsAppOrder}
              className="bg-green-500 text-white mt-4 px-4 py-2 rounded hover:bg-green-700 w-full"
            >
              Send Order to WhatsApp
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;

