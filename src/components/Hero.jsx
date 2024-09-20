import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1615963244664-5b845b2025ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center px-4">
      <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-lg">
        <h2 className="text-3xl md:text-5xl font-serif mb-4">Discover Your Signature Scent</h2>
        <p className="text-lg md:text-xl mb-8">Indulge in the luxury of Sulthan Fragrance</p>
        <Button className="bg-gold text-black hover:bg-[#d4af37] transition-colors text-sm md:text-base px-6 py-3">
          Explore Collection
        </Button>
      </div>
    </section>
  );
};

export default Hero;
