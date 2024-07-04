"use client"
import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Initial Consultation",
    description: "We meet to discuss your vision, budget, and timeline. Our experts assess your space and provide initial recommendations."
  },
  {
    title: "Material Selection",
    description: "Browse our curated collection of high-quality materials. We guide you in choosing options that match your style and budget."
  },
  {
    title: "Project Design",
    description: "Our designers create detailed plans and 3D renderings of your project, allowing you to visualize the final result before work begins."
  },
  {
    title: "Demolition Phase",
    description: "We carefully remove existing structures and prepare the space for renovation, ensuring minimal disruption to your home."
  },
  {
    title: "Inspect the Unexpected",
    description: "Our team thoroughly examines the exposed areas, addressing any unforeseen issues to prevent future problems."
  },
  {
    title: "Rough Work Phase",
    description: "We install essential systems like electrical, plumbing, and HVAC, laying the foundation for your renovated space."
  },
  {
    title: "Finish Work Phase",
    description: "Our skilled craftsmen install finishes, cabinetry, and fixtures, bringing your design to life with meticulous attention to detail."
  },
  {
    title: "Final Walkthrough",
    description: "We conduct a comprehensive inspection with you, ensuring every aspect of the project meets our high standards and your expectations."
  }
];

const ServiceProcessTimeline = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Our Renovation Process
        </h2>
        <div className="relative">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="mb-8 flex"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{step.title}</h3>
                <p className="text-gray-400 font-serif italic">{step.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-purple-500 opacity-20" style={{ transform: 'translateX(-50%)' }} />
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessTimeline;