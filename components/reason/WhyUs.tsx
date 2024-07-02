'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const WhyChooseUs = () => {
  const [activeSection, setActiveSection] = useState(0);

  const reasons = [
    {
      title: "Expertise",
      description: "With over 20 years of experience, our team of skilled professionals brings unparalleled knowledge to every project.",
      image: "/assets/hero/hero1.jpg" // Replace with actual image path
    },
    {
      title: "Quality",
      description: "We use only the finest materials and cutting-edge techniques to ensure your home renovation exceeds expectations.",
      image: "/assets/hero/hero1.jpg" // Replace with actual image path
    },
    {
      title: "Customer-Centric",
      description: "Your vision is our priority. We work closely with you at every step to bring your dream home to life.",
      image: "/assets/hero/hero1.jpg" // Replace with actual image path
    },
    {
      title: "Reliability",
      description: "Count on us for timely project completion and transparent communication throughout the process.",
      image: "/assets/hero/hero1.jpg" // Replace with actual image path
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const newActiveSection = Math.round(window.scrollY / window.innerHeight);
      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-gray-900 text-white">
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: activeSection === index ? 1 : 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full md:w-2/5 mb-8 md:mb-0 md:pr-8">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {reason.title}
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {reason.description}
            </motion.p>
          </div>
          <motion.div 
            className="w-full md:w-3/5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Image
              src={reason.image}
              alt={reason.title}
              width={800}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default WhyChooseUs;