"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";

export function TabsDemo() {
  const tabs = [
    {
      title: "Kitchens",
      value: "Kitchens",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-gray-900 to-gray-800">
          <h3 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Gourmet Kitchens</h3>
          <p className="text-lg md:text-xl mb-6 max-w-2xl font-serif italic leading-relaxed">
            Transform your culinary space into a masterpiece of design and functionality. Our expert craftsmanship brings your dream kitchen to life, blending innovative technology with timeless elegance.
          </p>
          <Image
            src="/assets/kitchen/kitchen1.jpeg"
            alt="Modern Kitchen"
            width={1000}
            height={1000}
            className="object-cover object-center h-[60%] md:h-[70%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Bathrooms",
      value: "Bathrooms",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-gray-900 to-gray-800">
          <h3 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Luxurious Bathrooms</h3>
          <p className="text-lg md:text-xl mb-6 max-w-2xl font-serif italic leading-relaxed">
            Indulge in the ultimate spa-like retreat within your own home. Our bespoke bathroom designs combine opulence with functionality, creating a sanctuary for relaxation and rejuvenation.
          </p>
          <Image
            src="/assets/bathrooms/bathroom1.jpg"
            alt="Luxury Bathroom"
            width={1000}
            height={1000}
            className="object-cover object-center h-[60%] md:h-[70%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Interiors",
      value: "Interiors",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-gray-900 to-gray-800">
          <h3 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Inspiring Interiors</h3>
          <p className="text-lg md:text-xl mb-6 max-w-2xl font-serif italic leading-relaxed">
            Elevate your living spaces with our exquisite interior designs. We craft harmonious environments that reflect your unique style, seamlessly blending aesthetics with functionality.
          </p>
          <Image
            src="/assets/interiors/interior1.jpg"
            alt="Modern Living Room"
            width={1000}
            height={1000}
            className="object-cover object-center h-[60%] md:h-[70%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Exteriors",
      value: "Exteriors",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-gray-900 to-gray-800">
          <h3 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Striking Exteriors</h3>
          <p className="text-lg md:text-xl mb-6 max-w-2xl font-serif italic leading-relaxed">
            Make a lasting impression with our stunning exterior renovations. From modern facades to timeless classics, we enhance your home's curb appeal while ensuring durability and energy efficiency.
          </p>
          <Image
            src="/assets/exteriors/exterior1.jpg"
            alt="Modern House Exterior"
            width={1000}
            height={1000}
            className="object-cover object-center h-[60%] md:h-[70%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Sunrooms",
      value: "Sunrooms",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-gray-900 to-gray-800">
          <h3 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Radiant Sunrooms</h3>
          <p className="text-lg md:text-xl mb-6 max-w-2xl font-serif italic leading-relaxed">
            Bring the outdoors in with our custom sunroom designs. Create a bright, versatile space that connects you with nature while providing comfort and style in all seasons.
          </p>
          <Image
            src="/assets/interiors/interior3.jpg"
            alt="Modern Sunroom"
            width={1000}
            height={1000}
            className="object-cover object-center h-[60%] md:h-[70%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
    {
      title: "Additions",
      value: "Additions",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-gray-900 to-gray-800">
          <h3 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Seamless Additions</h3>
          <p className="text-lg md:text-xl mb-6 max-w-2xl font-serif italic leading-relaxed">
            Expand your living space with our thoughtfully designed home additions. We seamlessly integrate new structures with your existing home, enhancing both functionality and value.
          </p>
          <Image
            src="/assets/interiors/interior4.jpg"
            alt="Modern Home Addition"
            width={1000}
            height={1000}
            className="object-cover object-center h-[60%] md:h-[70%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
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