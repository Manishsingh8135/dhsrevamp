"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaTools, FaPaintBrush, FaCalendarCheck, FaRuler, FaLightbulb } from 'react-icons/fa';

// Extended service data
const serviceData = {
  name: "Kitchen Remodeling",
  description: "Transform your kitchen into a stunning, functional space that reflects your style and meets your needs.",
  heroImage: "/assets/kitchen/kitchen1.jpeg",
  overview: "Our kitchen remodeling service is designed to breathe new life into the heart of your home. We combine aesthetics with functionality, creating spaces that are not just beautiful but also highly efficient and tailored to your lifestyle.",
  keyFeatures: [
    { icon: FaCheckCircle, title: "Custom Cabinetry", description: "Bespoke storage solutions designed to maximize space and complement your style." },
    { icon: FaTools, title: "High-End Appliances", description: "Integration of top-tier appliances for a kitchen that's as functional as it is beautiful." },
    { icon: FaPaintBrush, title: "Exquisite Finishes", description: "Premium countertops, backsplashes, and fixtures that elevate your kitchen's aesthetics." },
    { icon: FaCalendarCheck, title: "Efficient Management", description: "Streamlined project management ensuring timely completion and minimal disruption." },
    { icon: FaRuler, title: "Ergonomic Design", description: "Thoughtful layout planning for a kitchen that's a joy to work and socialize in." },
    { icon: FaLightbulb, title: "Smart Lighting", description: "Innovative lighting solutions to create ambiance and improve functionality." }
  ],
  galleryImages: [
    { src: "/assets/interiors/interior1.jpg", alt: "Modern living room with minimalist design" },
    { src: "/assets/interiors/interior2.jpg", alt: "Cozy bedroom with warm lighting" },
    { src: "/assets/interiors/interior3.jpg", alt: "Spacious kitchen with island and high-end appliances" },
    { src: "/assets/interiors/interior4.jpg", alt: "Elegant dining room with chandelier" },
    { src: "/assets/interiors/interior5.jpg", alt: "Luxurious bathroom with freestanding tub" },
    { src: "/assets/interiors/interior6.jpg", alt: "Home office with built-in shelving" },
    
    // Add more images as needed
  ],
};

const ServicePage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-gray-300 min-h-screen">
      <HeroBanner name={serviceData.name} description={serviceData.description} image={serviceData.heroImage} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ServiceOverview overview={serviceData.overview} />
        <KeyFeatures features={serviceData.keyFeatures} />
        <ShowcaseGallery images={serviceData.galleryImages} />
      </main>
    </div>
  );
};

const HeroBanner: React.FC<{ name: string; description: string; image: string }> = ({ name, description, image }) => (
  <div className="relative h-[70vh] flex items-center justify-center text-center">
    <Image src={image} layout="fill" objectFit="cover" alt={name} className="absolute inset-0" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
    <div className="relative z-10 px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
        {name}
      </h1>
      <p className="text-xl md:text-2xl font-serif italic max-w-2xl mx-auto text-white">
        {description}
      </p>
    </div>
  </div>
);

const ServiceOverview: React.FC<{ overview: string }> = ({ overview }) => (
  <section className="mb-20">
    <p className="text-lg md:text-xl font-serif italic text-gray-300 mb-8 leading-relaxed">
      {overview}
    </p>
  </section>
);

const KeyFeatures: React.FC<{ features: typeof serviceData.keyFeatures }> = ({ features }) => (
  <section className="mb-20">
    <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      Key Features of Our Kitchen Remodeling
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <feature.icon className="text-5xl text-purple-400 mb-4" />
          <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const ShowcaseGallery: React.FC<{ images: typeof serviceData.galleryImages }> = ({ images }) => (
  <section className="mb-20">
    <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      Our Kitchen Transformations
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <motion.div 
          key={index}
          className="relative group overflow-hidden rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Image 
            src={image.src} 
            alt={image.alt}
            width={600}
            height={400}
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <p className="text-white p-4 font-serif italic">{image.alt}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicePage;