'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const reasons = [
    {
      title: "Unparalleled Expertise",
      description: "With over two decades of experience, our team of skilled professionals brings a wealth of knowledge to every project, ensuring exceptional results.",
      image: "/assets/kitchen/kitchen1.jpeg",
      icon: "🏆"
    },
    {
      title: "Premium Quality",
      description: "We source only the finest materials and employ cutting-edge techniques, guaranteeing that your home renovation not only meets but exceeds your expectations.",
      image: "/assets/interiors/interior2.jpg",
      icon: "✨"
    },
    {
      title: "Customer-Centric Approach",
      description: "Your vision is our mission. We collaborate closely with you throughout the process, ensuring that every detail aligns perfectly with your dream home aspirations.",
      image: "/assets/exteriors/exterior2.jpg",
      icon: "🤝"
    },
    {
      title: "Unwavering Reliability",
      description: "Count on us for timely project completion, transparent communication, and a commitment to excellence that sets us apart in the industry.",
      image: "/assets/interiors/interior3.jpg",
      icon: "🕰️"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            Why Choose DHS REVAMP?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-serif italic">
            Discover the DHS REVAMP difference and see why we&apos;re the trusted choice for home transformations
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-pink-900 opacity-80 z-0"></div>
              <div className="relative z-10 p-8">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {reason.title}
                </h3>
                <p className="text-gray-300 font-serif italic mb-6">
                  {reason.description}
                </p>
                <motion.div
                  className="absolute inset-0 z-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.2 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={reason.image}
                    alt={reason.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;