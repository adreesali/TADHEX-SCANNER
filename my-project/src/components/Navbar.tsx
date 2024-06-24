import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  cartItemCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center w-full">
      <div>
        <Link to="/" className="text-2xl">TADHEX Scanner</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/links" className="hover:text-gray-300">Links</Link>
        <Link to="/shop" className="hover:text-gray-300">Shop</Link>
        <Link to="/cart" className="hover:text-gray-300 relative">
          Cart {cartItemCount > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2">{cartItemCount}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
