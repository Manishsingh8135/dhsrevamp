"use client"
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CTASection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/cta-background.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y
        }}
      />
      <div className="absolute inset-0 bg-black opacity-60 z-10" />
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Transform Your Home?
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl mb-8 font-serif italic text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Let's bring your vision to life. Contact us today for a free consultation.
        </motion.p>
        <motion.button
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg font-semibold py-3 px-8 rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default CTASection;