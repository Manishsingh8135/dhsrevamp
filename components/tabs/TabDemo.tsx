"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

// Separate data structure for services
const servicesData = [
  {
    title: "Kitchens",
    value: "Kitchens",
    heading: "Gourmet Kitchens",
    description: "Transform your culinary space into a masterpiece of design and functionality. Our expert craftsmanship brings your dream kitchen to life, blending innovative technology with timeless elegance.",
    image: "/assets/kitchen/kitchen1.jpeg",
    imageAlt: "Modern Kitchen"
  },
  {
    title: "Bathrooms",
    value: "Bathrooms",
    heading: "Luxurious Bathrooms",
    description: "Indulge in the ultimate spa-like retreat within your own home. Our bespoke bathroom designs combine opulence with functionality, creating a sanctuary for relaxation and rejuvenation.",
    image: "/assets/bathrooms/bathroom1.jpg",
    imageAlt: "Luxury Bathroom"
  },
  {
    title: "Interiors",
    value: "Interiors",
    heading: "Inspiring Interiors",
    description: "Elevate your living spaces with our exquisite interior designs. We craft harmonious environments that reflect your unique style, seamlessly blending aesthetics with functionality.",
    image: "/assets/interiors/interior1.jpg",
    imageAlt: "Modern Living Room"
  },
  {
    title: "Exteriors",
    value: "Exteriors",
    heading: "Striking Exteriors",
    description: "Make a lasting impression with our stunning exterior renovations. From modern facades to timeless classics, we enhance your home's curb appeal while ensuring durability and energy efficiency.",
    image: "/assets/exteriors/exterior1.jpg",
    imageAlt: "Modern House Exterior"
  },
  {
    title: "Sunrooms",
    value: "Sunrooms",
    heading: "Radiant Sunrooms",
    description: "Bring the outdoors in with our custom sunroom designs. Create a bright, versatile space that connects you with nature while providing comfort and style in all seasons.",
    image: "/assets/interiors/interior3.jpg",
    imageAlt: "Modern Sunroom"
  },
  {
    title: "Additions",
    value: "Additions",
    heading: "Seamless Additions",
    description: "Expand your living space with our thoughtfully designed home additions. We seamlessly integrate new structures with your existing home, enhancing both functionality and value.",
    image: "/assets/interiors/interior4.jpg",
    imageAlt: "Modern Home Addition"
  },
];

// Separate component for service content
const ServiceContent: React.FC<{service: typeof servicesData[0]}> = ({ service }) => (
  <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-gray-900 to-gray-800">
    <h3 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
      {service.heading}
    </h3>
    <p className="text-lg md:text-xl mb-6 max-w-2xl font-serif italic leading-relaxed">
      {service.description}
    </p>
    <Image
      src={service.image}
      alt={service.imageAlt}
      width={1000}
      height={1000}
      className="object-cover object-center h-[60%] md:h-[70%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  </div>
);

export function TabsDemo() {
  const tabs = servicesData.map(service => ({
    title: service.title,
    value: service.value,
    content: <ServiceContent service={service} />
  }));

  return (
    <div  id='services' className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6">
            Our Signature Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-serif italic">
            Discover the artistry of home transformation through our bespoke renovation services.
          </p>
        </header>
        <div className="h-[40rem] md:h-[50rem] [perspective:1000px] relative flex flex-col w-full items-start justify-start">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
}

export default TabsDemo;