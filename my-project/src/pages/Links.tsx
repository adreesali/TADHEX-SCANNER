import React, { useState } from 'react';
import { FaMoneyBillWave, FaUniversity, FaFacebook, FaInstagram, FaTiktok, FaCopy } from 'react-icons/fa';

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
    <div className="max-w-5xl mx-auto mt-8 grid gap-4 grid-cols- md:grid-cols-2 lg:grid-cols-3">
      {accounts.map((account, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center">
          <div className="flex items-center mb-2">
            {account.icon}
            <span className="ml-2 text-lg font-medium">{account.type}</span>
          </div>
          {account.number && (
            <div className="flex items-center justify-center w-full my-2">
              <span className="text-gray-600 dark:text-gray-400 mr-2 text-sm">{account.number}</span>
              <button
                className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                onClick={() => copyToClipboard(account.number, index)}
              >
                <FaCopy className="text-gray-500 text-sm" />
              </button>
              {copiedIndex === index && <span className="ml-2 text-green-500 text-sm">Copied!</span>}
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
  );
}

export default Links;
