import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-serif mb-2">Sulthan Fragrance</h3>
            <p className="text-sm">Luxury in every scent</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Contact Us</a>
          </div>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-gold transition-colors" />
            <Instagram className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-gold transition-colors" />
            <Twitter className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-gold transition-colors" />
          </div>
        </div>
        <div className="text-center mt-8 text-xs md:text-sm">
          &copy; 2024 Sulthan Fragrance. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
