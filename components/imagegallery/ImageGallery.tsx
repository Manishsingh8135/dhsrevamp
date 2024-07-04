"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";

const LayoutGridDemo = () => {
  return (
    <div className="min-h-screen py-20 w-full bg-gradient-to-b from-gray-900 to-gray-800">
      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          Transform Your Space
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
          Discover the possibilities for your home with our expert renovations
        </p>
      </header>
      <LayoutGrid cards={cards} />
    </div>
  );
};

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Modern Kitchen Elegance</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Experience culinary perfection in this sleek, modern kitchen. With state-of-the-art appliances and a minimalist design, it&apos;s the perfect space for both gourmet cooking and casual dining.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Luxurious Bathroom Retreat</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Transform your daily routine into a spa-like experience with this opulent bathroom. Featuring a freestanding tub, walk-in shower, and high-end fixtures, it&apos;s the ultimate relaxation zone.
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Cozy Living Room Haven</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Create lasting memories in this warm and inviting living room. With comfortable seating, a fireplace, and plenty of natural light, it&apos;s the perfect space for family gatherings and quiet evenings alike.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Stunning Exterior Makeover</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Enhance your home&apos;s curb appeal with our expert exterior renovations. From modern facades to traditional charm, we&apos;ll transform your house into the envy of the neighborhood.
      </p>
    </div>
  );
};

const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Serene Bedroom Sanctuary</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Escape to your own personal oasis with this tranquil bedroom design. Soft colors, plush fabrics, and ambient lighting create the perfect atmosphere for restful nights and lazy mornings.
      </p>
    </div>
  );
};

const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Gourmet Outdoor Kitchen</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Take your entertaining to the next level with this fully-equipped outdoor kitchen. Perfect for barbecues, al fresco dining, and creating unforgettable moments under the stars.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 h-[400px]",
    thumbnail: "/assets/kitchen/kitchen4.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 h-[400px]",
    thumbnail: "/assets/bathrooms/bathroom1.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1 h-[400px]",
    thumbnail: "/assets/interiors/interior1.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 h-[400px]",
    thumbnail: "/assets/exteriors/exterior1.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2 h-[400px]",
    thumbnail: "/assets/interiors/interior3.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "col-span-1 h-[400px]",
    thumbnail: "/assets/exteriors/exterior2.jpg",
  },
];

export default LayoutGridDemo;