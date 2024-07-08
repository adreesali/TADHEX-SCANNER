
// import React, { useState } from 'react';
// import { FaMoneyBillWave, FaUniversity, FaFacebook, FaInstagram, FaTiktok, FaCopy } from 'react-icons/fa';
<<<<<<< HEAD

// const circleImageUrl = 'https://scontent.flhe4-2.fna.fbcdn.net/v/t39.30808-6/448991353_1101738484925907_7942184885917395523_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE8rtXm4OVHY9fY9U7tSb1MqxSMAtn1X7yrFIwC2fVfvFrLVB0Nm2Y0CZ8DlPav3Z_SCfz1F1dRCNXCjA5UL0dd&_nc_ohc=IeaWN2CxGaYQ7kNvgGQQ1vT&_nc_zt=23&_nc_ht=scontent.flhe4-2.fna&oh=00_AYAbJ4OGjE_7W_HvrBk-chEmsQaq4DLP5EhJQELuTTM9TA&oe=6688E7F7';

// const accounts = [
//   { type: 'EasyPaisa', number: '03305697300', icon: <FaMoneyBillWave className="text-green-500 text-2xl" /> },
//   { type: 'Bank Account', number: '23010108747944', icon: <FaUniversity className="text-blue-500 text-2xl" /> },
//   { type: 'Facebook', url: 'https://facebook.com/yourprofile', icon: <FaFacebook className="text-blue-700 text-2xl" /> },
//   { type: 'Instagram', url: 'https://instagram.com/yourprofile', icon: <FaInstagram className="text-pink-500 text-2xl" /> },
//   { type: 'TikTok', url: 'https://tiktok.com/@yourprofile', icon: <FaTiktok className="text-red-500 text-2xl" /> },
// ];

// const Links: React.FC = () => {
//   const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

//   const copyToClipboard = (text: string, index: number) => {
//     navigator.clipboard.writeText(text);
//     setCopiedIndex(index);
//     setTimeout(() => setCopiedIndex(null), 2000);
//   };

//   return (
//     <div className="max-w-5xl mx-auto mt-8">
//       <header className="flex flex-col items-center text-center mb-8">
//         <img 
//           src={circleImageUrl} 
//           alt="Profile" 
//           className="w-24 h-24 rounded-full shadow-lg mb-4"
//         />
//         <h1 className="text-2xl font-bold">Transforming Visions into Reality</h1>
//       </header>
//       <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {accounts.map((account, index) => (
//           <div key={index} className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center">
//             <div className="flex items-center mb-2">
//               {account.icon}
//               <span className="ml-2 text-lg font-medium">{account.type}</span>
//             </div>
//             {account.number && (
//               <div className="flex items-center justify-center w-full my-2">
//                 <span className="text-gray-600 dark:text-gray-400 mr-2 text-sm">{account.number}</span>
//                 <button
//                   className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
//                   onClick={() => copyToClipboard(account.number, index)}
//                 >
//                   <FaCopy className="text-gray-500 text-sm" />
//                 </button>
//                 {copiedIndex === index && <span className="ml-2 text-green-500 text-sm">Copied!</span>}
//               </div>
//             )}
//             {account.url && (
//               <a href={account.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 text-sm">
//                 Visit Profile
//               </a>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Links;







import React, { useState } from 'react';
import { FaMoneyBillWave, FaUniversity, FaFacebook, FaInstagram, FaTiktok, FaCopy } from 'react-icons/fa';
=======
>>>>>>> 5fbe7bb (adreesa)

// const circleImageUrl = 'https://scontent.flhe4-2.fna.fbcdn.net/v/t39.30808-6/448991353_1101738484925907_7942184885917395523_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE8rtXm4OVHY9fY9U7tSb1MqxSMAtn1X7yrFIwC2fVfvFrLVB0Nm2Y0CZ8DlPav3Z_SCfz1F1dRCNXCjA5UL0dd&_nc_ohc=IeaWN2CxGaYQ7kNvgGQQ1vT&_nc_zt=23&_nc_ht=scontent.flhe4-2.fna&oh=00_AYAbJ4OGjE_7W_HvrBk-chEmsQaq4DLP5EhJQELuTTM9TA&oe=6688E7F7';



// interface Products {
//   id: number;
//   title: string;
//   price: number;
//   imgUrl: string;
// }

// const accounts = [
//   { type: 'EasyPaisa', number: '03305697300', icon: <FaMoneyBillWave className="text-green-500 text-2xl" /> },
//   { type: 'Bank Account', number: '23010108747944', icon: <FaUniversity className="text-blue-500 text-2xl" /> },
//   { type: 'Facebook', url: 'https://facebook.com/yourprofile', icon: <FaFacebook className="text-blue-700 text-2xl" /> },
//   { type: 'Instagram', url: 'https://instagram.com/yourprofile', icon: <FaInstagram className="text-pink-500 text-2xl" /> },
//   { type: 'TikTok', url: 'https://tiktok.com/@yourprofile', icon: <FaTiktok className="text-red-500 text-2xl" /> },
// ]; 

// const Links: React.FC = () => { 
//   const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

//   const copyToClipboard = (text: string, index: number) => {
//     navigator.clipboard.writeText(text);
//     setCopiedIndex(index);
//     setTimeout(() => setCopiedIndex(null), 2000);
//   };


//   const [products, setProducts] = useState([]);
//   const [copiedIndex, setCopiedIndex] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:5000/products')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   const copyToClipboard = (text, index) => {
//     navigator.clipboard.writeText(text).then(() => {
//       setCopiedIndex(index);
//       setTimeout(() => setCopiedIndex(null), 2000);
//     });
//   };

//   return (
//     <div className="max-w-5xl mx-auto mt-8">
//       <header className="flex flex-col items-center text-center mb-8">
//         <img 
//           src={circleImageUrl} 
//           alt="Profile" 
//           className="w-24 h-24 rounded-full shadow-lg mb-4"
//         />
//         <h1 className="text-2xl font-bold">Transforming Visions into Reality</h1>
//       </header>
//       <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {products.map((product, index) => (
//           <div key={index} className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center">
//             <div className="flex items-center mb-2">
//               <span className="ml-2 text-lg font-medium">{product.title}</span>
//             </div>
//             {product.price && (
//               <div className="flex items-center justify-center w-full my-2">
//                 <span className="text-gray-600 dark:text-gray-400 mr-2 text-sm">${product.price}</span>
//                 <button
//                   className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
//                   onClick={() => copyToClipboard(product.price.toString(), index)}
//                 >
//                   <FaCopy className="text-gray-500 text-sm" />
//                 </button>
//                 {copiedIndex === index && <span className="ml-2 text-green-500 text-sm">Copied!</span>}
//               </div>
//             )}
//             {product.imgUrl && (
//               <img src={product.imgUrl} alt={product.title} className="w-full h-40 object-cover rounded-lg mt-2" />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Links;








import React, { useEffect, useState } from 'react';
import { FaCopy } from 'react-icons/fa';

interface Product {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
}

const Links: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const accounts = [
      { type: 'EasyPaisa', number: '03305697300', icon: <FaMoneyBillWave className="text-green-500 text-2xl" /> },
      { type: 'Bank Account', number: '23010108747944', icon: <FaUniversity className="text-blue-500 text-2xl" /> },
      { type: 'Facebook', url: 'https://facebook.com/yourprofile', icon: <FaFacebook className="text-blue-700 text-2xl" /> },
      { type: 'Instagram', url: 'https://instagram.com/yourprofile', icon: <FaInstagram className="text-pink-500 text-2xl" /> },
      { type: 'TikTok', url: 'https://tiktok.com/@yourprofile', icon: <FaTiktok className="text-red-500 text-2xl" /> },
    ]; 
    
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data: Product[]) => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <header className="flex flex-col items-center text-center mb-8">
        <img 
          src="path_to_your_image.jpg" // Replace with your actual image path or URL
          alt="Profile" 
          className="w-24 h-24 rounded-full shadow-lg mb-4"
        />
        <h1 className="text-2xl font-bold">Transforming Visions into Reality</h1>
      </header>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <div key={product.id} className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center">
            <div className="flex items-center mb-2">
              <span className="ml-2 text-lg font-medium">{product.title}</span>
            </div>
            <div className="flex items-center justify-center w-full my-2">
              <span className="text-gray-600 dark:text-gray-400 mr-2 text-sm">${product.price}</span>
              <button
                className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                onClick={() => copyToClipboard(product.price.toString(), index)}
              >
                <FaCopy className="text-gray-500 text-sm" />
              </button>
              {copiedIndex === index && <span className="ml-2 text-green-500 text-sm">Copied!</span>}
            </div>
            {product.imgUrl && (
              <img src={product.imgUrl} alt={product.title} className="w-full h-40 object-cover rounded-lg mt-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
