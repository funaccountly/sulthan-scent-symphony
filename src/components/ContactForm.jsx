import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <section className="py-12 md:py-20 bg-[#f8f4e9]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 md:mb-12">Get in Touch</h2>
        <form className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg">
          <div className="mb-4 md:mb-6">
            <Input type="text" placeholder="Your Name" className="w-full" />
          </div>
          <div className="mb-4 md:mb-6">
            <Input type="email" placeholder="Your Email" className="w-full" />
          </div>
          <div className="mb-4 md:mb-6">
            <Textarea placeholder="Your Message" className="w-full h-24 md:h-32" />
          </div>
          <Button className="w-full bg-gold text-black hover:bg-[#d4af37] transition-colors text-sm md:text-base">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
