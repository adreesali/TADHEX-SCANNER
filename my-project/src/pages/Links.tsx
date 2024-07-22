


// import React, { useState } from 'react';
// import { FaMoneyBillWave, FaUniversity, FaFacebook, FaInstagram, FaTiktok, FaCopy } from 'react-icons/fa';

// const circleImageUrl = 'https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/449128968_122181765698024161_2400663540130122988_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEKi5wADKg_YZLJVISFXcFISIWu4QebO-1Iha7hB5s77Shl9AuT3NJ9Ucnw0-5tP0dU9paleiBczCoHL4jOPXf4&_nc_ohc=jhPsesSXkYMQ7kNvgEJDGvi&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&oh=00_AYC3XiqA217qzJH1kUTviEfjcAXflpg_EcmCoTtfTAY8qA&oe=66A41B2F';

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
// // hi adrees
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

const circleImageUrl = 'https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/449128968_122181765698024161_2400663540130122988_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEKi5wADKg_YZLJVISFXcFISIWu4QebO-1Iha7hB5s77Shl9AuT3NJ9Ucnw0-5tP0dU9paleiBczCoHL4jOPXf4&_nc_ohc=jhPsesSXkYMQ7kNvgEJDGvi&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&oh=00_AYC3XiqA217qzJH1kUTviEfjcAXflpg_EcmCoTtfTAY8qA&oe=66A41B2F';

const accounts = [
  { type: 'EasyPaisa', number: '03305697300', icon: <FaMoneyBillWave className="text-green-500 text-2xl" /> },
  { type: 'Bank Account', number: '23010108747944', icon: <FaUniversity className="text-blue-500 text-2xl" /> },
  { type: 'Facebook', url: 'https://facebook.com/yourprofile', icon: <FaFacebook className="text-blue-700 text-2xl" /> },
  { type: 'Instagram', url: 'https://instagram.com/yourprofile', icon: <FaInstagram className="text-pink-500 text-2xl" /> },
  { type: 'TikTok', url: 'https://tiktok.com/@yourprofile', icon: <FaTiktok className="text-red-500 text-2xl" /> },
];

const Links: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto mt-8">
      <header className="flex flex-col items-center text-center mb-8">
        <img 
          src={circleImageUrl} 
          alt="Profile" 
          className="w-24 h-24 rounded-full shadow-lg mb-4"
        />
        <h1 className="text-2xl font-bold">Transforming Visions into Reality</h1>
      </header>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {accounts.map((account, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center">
            <div className="flex items-center mb-2">
              {account.icon}
              <span className="ml-2 text-lg font-medium">{account.type}</span>
            </div>
            {account.number && (
              <div className="flex flex-col items-center justify-center w-full my-2">
                <span className="text-gray-600 dark:text-gray-400 text-sm">{account.number}</span>
                <button
                  className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 mt-1"
                  onClick={() => copyToClipboard(account.number, index)}
                >
                  <FaCopy className="text-gray-500 text-sm" />
                </button>
                {copiedIndex === index && <span className="text-green-500 text-sm">Copied!</span>}
                {(account.type === 'EasyPaisa' || account.type === 'Bank Account') && (
                  <span className="text-red-500 text-sm mt-1">Account Title: Adrees Ali</span>
                )}
              </div>
            )}
            {account.url && (
              <a href={account.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 text-sm">
                Visit Profile
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Links;
