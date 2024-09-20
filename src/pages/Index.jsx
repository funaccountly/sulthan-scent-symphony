import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import AboutUs from '../components/AboutUs';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f4e9] to-[#f1e8d4] text-gray-800">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <AboutUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
