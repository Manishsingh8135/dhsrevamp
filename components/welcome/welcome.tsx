"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export function LampDemoMain() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-purple-400 to-pink-600 py-4 bg-clip-text text-center text-4xl font-extrabold tracking-tight text-transparent md:text-7xl"
      >
        Welcome to <br /> DHS REVAMP
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 text-center text-xl font-serif italic text-gray-300 max-w-lg"
      >
        Transforming homes, elevating lives. Your vision, our expertise.
      </motion.p>
    </LampContainer>
  );
}