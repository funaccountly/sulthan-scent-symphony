import React from 'react';
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Royal Oud", price: "$299", image: "/perfume1.jpg" },
  { id: 2, name: "Midnight Rose", price: "$249", image: "/perfume2.jpg" },
  { id: 3, name: "Golden Sands", price: "$279", image: "/perfume3.jpg" },
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">Featured Fragrances</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-[#f8f4e9] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gold text-lg mb-4">{product.price}</p>
              <Button className="w-full bg-black text-white hover:bg-gray-800 transition-colors">
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;