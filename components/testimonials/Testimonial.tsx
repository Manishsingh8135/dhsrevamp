'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/testimonials/sarah.jpg",
    quote: "DHS REVAMP transformed our outdated kitchen into a modern masterpiece. Their attention to detail is unmatched!"
  },
  {
    name: "Michael Chen",
    role: "Real Estate Investor",
    image: "/testimonials/michael.jpg",
    quote: "I've worked with many renovation companies, but DHS REVAMP stands out for their professionalism and quality. They've significantly increased the value of my properties."
  },
  {
    name: "Emily Rodriguez",
    role: "Interior Designer",
    image: "/testimonials/emily.jpg",
    quote: "As a designer, I have high standards. DHS REVAMP not only met but exceeded them. Their craftsmanship is impeccable, and they're a joy to collaborate with."
  },
  {
    name: "David Thompson",
    role: "Retired Couple",
    image: "/testimonials/david.jpg",
    quote: "DHS REVAMP made our dream of an accessible, stylish bathroom a reality. Their understanding of our needs as seniors was impressive."
  },
  {
    name: "Aisha Patel",
    role: "First-Time Homebuyer",
    image: "/testimonials/aisha.jpg",
    quote: "I was nervous about renovating my first home, but DHS REVAMP guided me through every step. The result is beyond what I imagined possible within my budget."
  },
  {
    name: "Robert Gonzalez",
    role: "Restaurant Owner",
    image: "/testimonials/robert.jpg",
    quote: "The commercial kitchen renovation by DHS REVAMP has revolutionized our restaurant's efficiency. Their expertise in commercial spaces is truly valuable."
  },
  {
    name: "Lisa Chang",
    role: "Tech Executive",
    image: "/testimonials/lisa.jpg",
    quote: "DHS REVAMP's smart home integration in our whole-house renovation has brought our living space into the future. Their tech-savvy approach is refreshing."
  },
  {
    name: "James Wilson",
    role: "Environmentalist",
    image: "/testimonials/james.jpg",
    quote: "I appreciate DHS REVAMP's commitment to eco-friendly renovations. They helped us create a sustainable, energy-efficient home without compromising on style."
  },
  {
    name: "Olivia Foster",
    role: "Growing Family",
    image: "/testimonials/olivia.jpg",
    quote: "DHS REVAMP didn't just renovate our house; they created a home that grows with our family. Their foresight in design has made our space both functional and beautiful."
  },
  {
    name: "Hassan Al-Farsi",
    role: "Luxury Homeowner",
    image: "/testimonials/hassan.jpg",
    quote: "The level of luxury and customization DHS REVAMP brought to our home renovation is extraordinary. They truly understand high-end finishes and unique design elements."
  }
];

const TestimonialShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {/* <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                /> */}
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-purple-300">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 font-serif italic leading-relaxed">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialShowcase;