import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src="/about-us.jpg" alt="About Sulthan Fragrance" className="rounded-lg shadow-2xl" />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-4xl font-serif mb-6">Our Story</h2>
          <p className="text-lg mb-6">
            Sulthan Fragrance was born from a passion for exquisite scents and a desire to bring luxury to every moment. 
            Since our inception in 1995, we have been crafting premium fragrances that capture the essence of elegance and sophistication.
          </p>
          <p className="text-lg">
            Our master perfumers blend the finest ingredients from around the world, creating unique scents that leave a lasting impression. 
            Experience the art of perfumery with Sulthan Fragrance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;