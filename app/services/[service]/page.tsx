"use client"
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ServiceData, kitchenData } from '@/data/services';
import { motion, AnimatePresence } from 'framer-motion';
import React, {useState} from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { bathroomData } from '@/data/bathroomData';
import { exteriorData } from '@/data/exteriorData';
import { interiorData } from '@/data/interiorData';

const serviceDataMap: { [key: string]: ServiceData } = {
  kitchen: kitchenData,
  bathroom: bathroomData,
  exterior: exteriorData,
  interior: interiorData,
  // Add other services here
};

export default function ServicePage({ params }: { params: { service: string } }) {
  const serviceData = serviceDataMap[params.service];

  if (!serviceData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <HeroSection data={serviceData} />
      <main className="container mx-auto py-16 px-4">
        <ServiceIntro data={serviceData} />
        <KeyFeatures features={serviceData.features} />
        <ProcessSteps steps={serviceData.processSteps} />
        <Benefits benefits={serviceData.benefits} />
        <Gallery images={serviceData.gallery} />
        <ExpandableFAQ faq={serviceData.faq} />
        <Testimonials testimonials={serviceData.testimonials} />
        <ComparisonTable comparisonData={serviceData.comparisonData} />
        <CostEstimator />
      </main>
    </div>
  );
}

const HeroSection = ({ data }: { data: ServiceData }) => (
  <header className="relative h-screen flex items-center justify-center">
    <Image
      src={data.heroImage}
      alt={data.title}
      fill
      style={{ objectFit: 'cover' }}
      className="absolute inset-0"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    <div className="relative z-10 text-center px-4">
      <motion.h1 
        className="text-6xl md:text-8xl font-bold mb-4 text-white font-creepster"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {data.title}
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {data.description}
      </motion.p>
    </div>
  </header>
);

const KeyFeatures = ({ features }: { features: string[] }) => (
  <section className="mb-20">
    <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white font-creepster">Key Features</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div 
          key={index} 
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <p className="text-lg text-gray-300">{feature}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const ServiceIntro = ({ data }: { data: ServiceData }) => (
    <section className="mb-20">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-6 text-center text-white font-creepster"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Elevating {data.title} with Unmatched Remodeling Services
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-300 leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Welcome to Revamp DHS Construction, where we redefine {data.title.toLowerCase()} spaces with our exceptional remodeling services in Los Angeles and Orange County. As a premier construction and renovation company, we take pride in transforming {data.title.toLowerCase()} into functional and aesthetically pleasing areas that reflect your lifestyle and preferences.
      </motion.p>
      <motion.p 
        className="text-lg text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our approach goes beyond the conventional, aiming to create {data.title.toLowerCase()} that are both stylish and highly functional. Whether you're envisioning a modern haven or a classic, timeless space, our team of experts collaborates with you to bring your dream {data.title.toLowerCase()} to life.
      </motion.p>
    </section>
  );
  

const ProcessSteps = ({ steps }: { steps: { title: string; description: string }[] }) => (
  <section className="mb-20">
    <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white font-creepster">Our Process</h2>
    <div className="space-y-12">
      {steps.map((step, index) => (
        <motion.div 
          key={index} 
          className="flex items-start"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
            {index + 1}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-100">{step.title}</h3>
            <p className="text-gray-400">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Gallery = ({ images }: { images: { src: string; alt: string }[] }) => (
  <section className="mb-20">
    <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white font-creepster">Gallery</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image, index) => (
        <motion.div 
          key={index} 
          className="relative h-80 rounded-lg overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <p className="text-white p-4">{image.alt}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Testimonials = ({ testimonials }: { testimonials: { name: string; quote: string }[] }) => (
  <section className="mb-20">
    <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white font-creepster">What Our Clients Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.blockquote 
          key={index} 
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <p className="mb-4 italic text-lg text-gray-300">"{testimonial.quote}"</p>
          <footer className="font-semibold text-gray-400">- {testimonial.name}</footer>
        </motion.blockquote>
      ))}
    </div>
  </section>
);


const CostEstimator = () => {
  const [roomSize, setRoomSize] = React.useState(100);
  const [quality, setQuality] = React.useState('standard');

  const calculateCost = () => {
    const baseCost = roomSize * 100;
    const qualityMultiplier = quality === 'premium' ? 1.5 : 1;
    return baseCost * qualityMultiplier;
  };

  return (
    <section className="mb-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white font-creepster">Cost Estimator</h2>
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Room Size (sq ft)</label>
          <input
            type="range"
            min="50"
            max="500"
            value={roomSize}
            onChange={(e) => setRoomSize(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-gray-100">{roomSize} sq ft</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Quality</label>
          <select
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="w-full bg-gray-700 text-gray-100 p-2 rounded"
          >
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
          </select>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">Estimated Cost: ${calculateCost().toLocaleString()}</p>
        </div>
      </div>
    </section>
  );
};


const Benefits = ({ benefits }: { benefits: string[] }) => (
    <section className="mb-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white font-creepster">Benefits of Our Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p className="text-lg text-gray-300">
              <span className="text-purple-400 mr-2">✓</span>
              {benefit}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
  
  const ExpandableFAQ = ({ faq }: { faq: { question: string; answer: string }[] }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
    return (
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white font-creepster">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faq.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden">
              <button
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <span className="text-xl font-semibold text-gray-100">{item.question}</span>
                {expandedIndex === index ? <FaMinus className="text-purple-400" /> : <FaPlus className="text-purple-400" />}
              </button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-300">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const ComparisonTable = ({ comparisonData }: { comparisonData: { feature: string; us: string; others: string }[] }) => (
    <section className="mb-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white font-creepster">How We Compare</h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-4 text-left text-white">Feature</th>
              <th className="p-4 text-left text-white">Us</th>
              <th className="p-4 text-left text-white">Others</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="p-4 text-gray-300">{row.feature}</td>
                <td className="p-4 text-purple-400">{row.us}</td>
                <td className="p-4 text-gray-500">{row.others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );