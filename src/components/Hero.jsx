import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      <div className="text-center text-white">
        <h2 className="text-5xl font-serif mb-4">Discover Your Signature Scent</h2>
        <p className="text-xl mb-8">Indulge in the luxury of Sulthan Fragrance</p>
        <Button className="bg-gold text-black hover:bg-[#d4af37] transition-colors">
          Explore Collection
        </Button>
      </div>
    </section>
  );
};

export default Hero;