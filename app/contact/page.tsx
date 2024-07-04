"use client"
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Contact Information
const contactInfo = {
  address: "Los Angeles, Orange County, Riverside 7581 Silver St. Buena Park, CA",
  phone: "714-822-1242",
  email: "danielhsim@dhsrevamp.com",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26547.555145307888!2d-118.01652837302250!3d33.839914535101505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2af74e1344a3%3A0x76973c0c998025!2sBuena%20Park%2C%20CA%2090620!5e0!3m2!1sen!2sus!4v1619749392202!5m2!1sen!2sus",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=7581+Silver+St+Buena+Park+CA"
};

const ContactPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-gray-300">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <ContactInfo info={contactInfo} />
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <Map mapUrl={contactInfo.mapUrl} />
        </div>
      </main>
    </div>
  );
};

const Header: React.FC = () => (
  <header className="py-20 text-center">
    <motion.h1 
      className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Get in Touch
    </motion.h1>
    <motion.p 
      className="text-xl md:text-2xl font-serif italic text-gray-300 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Let's bring your dream home to life. We're here to answer your questions and start your renovation journey.
    </motion.p>
  </header>
);

interface ContactItemProps {
  icon: React.ElementType;
  content: string;
  href: string;
  ariaLabel: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, content, href, ariaLabel }) => (
  <motion.div 
    className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="text-4xl text-purple-400 mb-4" />
    <a 
      href={href}
      className="font-serif italic hover:text-purple-400 transition-colors duration-300"
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  </motion.div>
);

const ContactInfo: React.FC<{ info: typeof contactInfo }> = ({ info }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    <ContactItem
      icon={FaMapMarkerAlt}
      content={info.address}
      href={info.googleMapsUrl}
      ariaLabel="Open in Google Maps"
    />
    <ContactItem
      icon={FaPhone}
      content={info.phone}
      href={`tel:${info.phone}`}
      ariaLabel="Call us"
    />
    <ContactItem
      icon={FaEnvelope}
      content={info.email}
      href={`mailto:${info.email}`}
      ariaLabel="Send us an email"
    />
  </div>
);

const Map: React.FC<{ mapUrl: string }> = ({ mapUrl }) => (
  <motion.div 
    className="rounded-lg overflow-hidden shadow-lg h-full relative"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <iframe 
      src={mapUrl} 
      width="100%" 
      height="100%" 
      style={{ border: 0, minHeight: "400px" }} 
      allowFullScreen 
      loading="lazy"
      className="grayscale contrast-125"
    ></iframe>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-600/30 mix-blend-overlay pointer-events-none"></div>
  </motion.div>
);

const ContactForm: React.FC = () => (
  <motion.div 
    className="bg-gray-800 p-8 rounded-lg shadow-lg"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      Send Us a Message
    </h2>
    <form className="space-y-6">
      <div className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 transition duration-300" />
        <input type="email" placeholder="Email" className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 transition duration-300" />
        <input type="text" placeholder="Subject" className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 transition duration-300" />
        <textarea placeholder="Message" rows={6} className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 transition duration-300 resize-none"></textarea>
      </div>
      <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
        Send Message
      </button>
    </form>
  </motion.div>
);

export default ContactPage;