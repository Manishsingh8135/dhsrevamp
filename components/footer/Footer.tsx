import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-300 min-h-screen flex flex-col justify-between">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/hero/hero1.jpg"
                alt="DHS REVAMP Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                DHS REVAMP
              </h2>
            </div>
            <p className="text-lg leading-relaxed">
              Transforming homes across the US with our expert revamp services. We bring your vision to life.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
                >
                  <Icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 border-b-2 border-blue-500 pb-2 inline-block">
              Our Services
            </h3>
            <ul className="space-y-3">
              {['Kitchen', 'Bathroom', 'Exterior', 'Interior', 'Sunrooms', 'Additions'].map((service) => (
                <li key={service}>
                  <Link href={`/services/${service.toLowerCase()}`} className="hover:text-blue-400 transition-colors duration-300 ease-in-out flex items-center">
                    <span className="mr-2">→</span> {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 border-b-2 border-purple-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase()}`} className="hover:text-purple-400 transition-colors duration-300 ease-in-out flex items-center">
                    <span className="mr-2">•</span> {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 border-b-2 border-green-500 pb-2 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-green-400 mr-3" />
                <span>123 Renovation St, Hometown, US 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-green-400 mr-3" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-green-400 mr-3" />
                <span>info@dhsrevamp.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black bg-opacity-50 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 DHS REVAMP. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Proudly serving homeowners across the United States
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;