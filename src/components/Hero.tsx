"use client";

import { motion } from "framer-motion";
import Link from "next/link";
 // Make sure Button.tsx exists in your components folder

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-red-700 to-red-900 text-white">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Authentic Italian Pizza
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience the taste of Venice in every bite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition duration-300 text-center"
            >
              View Our Menu
            </Link>
            <Link
              href="/order"
              className="bg-white hover:bg-gray-100 text-red-700 font-bold py-3 px-8 rounded-full transition duration-300 text-center"
            >
              Order Online
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;