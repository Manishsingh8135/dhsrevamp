import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Company Information
const companyInfo = {
  name: "DHS REVAMP",
  logo: "/assets/hero/hero1.jpg",
  description: "Transforming homes across the US with our expert revamp services. We bring your vision to life.",
  socialMedia: [
    { icon: FaFacebookF, link: "https://www.facebook.com/dhsrevamp" },
    { icon: FaInstagram, link: "https://www.instagram.com/dhsrevamp/" },
    // { icon: FaTwitter, link: "#" },
    // { icon: FaLinkedinIn, link: "#" },
  ]
};

// Services
const services = [
  'Kitchen', 'Bathroom', 'Exterior', 'Interior', 'Sunrooms', 'Additions'
];

// Quick Links
const quickLinks = [
  'Home', 'About', 'Services', 'Projects', 'Contact'
];

// Contact Information
const contactInfo = {
  address: "Los Angeles, Orange County, Riverside 7581 Silver St. Buena Park, CA",
  phone: "714-822-1242",
  email: "danielhsim@dhsrevamp.com"
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 min-h-screen flex flex-col justify-between">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <CompanySection info={companyInfo} />
          <ServicesSection services={services} />
          <QuickLinksSection links={quickLinks} />
          <ContactSection info={contactInfo} />
        </div>
      </div>
      <CopyrightSection />
    </footer>
  );
};

// Company Section Component
const CompanySection: React.FC<{ info: typeof companyInfo }> = ({ info }) => (
  <div className="space-y-6">
    <div className="flex items-center space-x-4">
      <Image src={info.logo} alt={`${info.name} Logo`} width={60} height={60} className="rounded-full" />
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {info.name}
      </h2>
    </div>
    <p className="text-lg leading-relaxed font-serif italic">{info.description}</p>
    <div className="flex space-x-4">
      {info.socialMedia.map((social, index) => (
        <a
          key={index}
          href={social.link}
          className="text-gray-400 hover:text-purple-400 transition-colors duration-300 ease-in-out"
        >
          <social.icon className="text-2xl" />
        </a>
      ))}
    </div>
  </div>
);

// Services Section Component
const ServicesSection: React.FC<{ services: string[] }> = ({ services }) => (
  <div>
    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 border-b-2 border-purple-500 pb-2 inline-block">
      Our Services
    </h3>
    <ul className="space-y-3">
      {services.map((service) => (
        <li key={service}>
          <Link href={`/services/${service.toLowerCase()}`} className="hover:text-purple-400 transition-colors duration-300 ease-in-out flex items-center font-serif italic">
            <span className="mr-2">→</span> {service}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Quick Links Section Component
const QuickLinksSection: React.FC<{ links: string[] }> = ({ links }) => (
  <div>
    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 border-b-2 border-pink-500 pb-2 inline-block">
      Quick Links
    </h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <Link href={`/${link.toLowerCase()}`} className="hover:text-pink-400 transition-colors duration-300 ease-in-out flex items-center font-serif italic">
            <span className="mr-2">•</span> {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Contact Section Component
const ContactSection: React.FC<{ info: typeof contactInfo }> = ({ info }) => (
  <div>
    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6 border-b-2 border-purple-500 pb-2 inline-block">
      Contact Us
    </h3>
    <ul className="space-y-4">
      <li className="flex items-center font-serif italic">
        <FaMapMarkerAlt className="text-purple-400 mr-3" />
        <span>{info.address}</span>
      </li>
      <li className="flex items-center font-serif italic">
        <FaPhone className="text-purple-400 mr-3" />
        <span>{info.phone}</span>
      </li>
      <li className="flex items-center font-serif italic">
        <FaEnvelope className="text-purple-400 mr-3" />
        <span>{info.email}</span>
      </li>
    </ul>
  </div>
);

// Copyright Section Component
const CopyrightSection: React.FC = () => (
  <div className="bg-black bg-opacity-50 py-6">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <p className="font-serif italic">© 2024 DHS REVAMP. All rights reserved.</p>
      <p className="mt-2 md:mt-0 font-serif italic">
        Proudly serving homeowners across the United States
      </p>
    </div>
  </div>
);

export default Footer;