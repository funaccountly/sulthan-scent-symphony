import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center px-4">
      <div className="text-center text-white">
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
