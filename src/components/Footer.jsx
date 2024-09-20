import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-serif mb-2">Sulthan Fragrance</h3>
          <p className="text-sm">Luxury in every scent</p>
        </div>
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gold transition-colors">Contact Us</a>
        </div>
        <div className="flex space-x-4">
          <Facebook className="w-6 h-6 cursor-pointer hover:text-gold transition-colors" />
          <Instagram className="w-6 h-6 cursor-pointer hover:text-gold transition-colors" />
          <Twitter className="w-6 h-6 cursor-pointer hover:text-gold transition-colors" />
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        &copy; 2024 Sulthan Fragrance. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;