import React from 'react';
import { ShoppingCart, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-black bg-opacity-90 text-white py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-serif">Sulthan Fragrance</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Products</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">About</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <Search className="w-6 h-6 cursor-pointer hover:text-gold transition-colors" />
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-gold transition-colors" />
          <User className="w-6 h-6 cursor-pointer hover:text-gold transition-colors" />
        </div>
      </div>
    </header>
  );
};

export default Header;