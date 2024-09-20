import React, { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black bg-opacity-90 text-white py-4 px-6 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-serif">Sulthan Fragrance</h1>
        <nav className={`absolute top-full left-0 w-full bg-black bg-opacity-90 md:relative md:w-auto md:bg-transparent ${isMenuOpen ? 'block' : 'hidden'} md:block transition-all duration-300 ease-in-out`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li><a href="#" className="block hover:text-gold transition-colors">Home</a></li>
            <li><a href="#" className="block hover:text-gold transition-colors">Products</a></li>
            <li><a href="#" className="block hover:text-gold transition-colors">About</a></li>
            <li><a href="#" className="block hover:text-gold transition-colors">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 cursor-pointer hover:text-gold transition-colors" />
          <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gold transition-colors" />
          <User className="w-5 h-5 cursor-pointer hover:text-gold transition-colors" />
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
