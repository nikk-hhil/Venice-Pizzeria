"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Predefined circles to ensure consistent rendering
  const circles = [
    { width: 26, height: 20, top: 15, left: 10, delay: 0.5, duration: 20 },
    { width: 18, height: 24, top: 60, left: 70, delay: 1.5, duration: 18 },
    { width: 22, height: 22, top: 25, left: 50, delay: 2.5, duration: 22 },
    { width: 28, height: 18, top: 80, left: 20, delay: 3.5, duration: 19 },
    { width: 16, height: 26, top: 50, left: 85, delay: 1.0, duration: 21 },
    { width: 20, height: 20, top: 70, left: 40, delay: 0.2, duration: 17 }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-red-700 to-red-900 text-white overflow-hidden">
      {/* Modern background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {isClient && (
          <div className="absolute inset-0 opacity-30">
            {circles.map((circle, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-red-500"
                style={{
                  width: `${circle.width}rem`,
                  height: `${circle.height}rem`,
                  top: `${circle.top}%`,
                  left: `${circle.left}%`,
                  opacity: 0.3,
                  filter: 'blur(40px)',
                  animation: `float ${circle.duration}s infinite ease-in-out`,
                  animationDelay: `${circle.delay}s`,
                  maxWidth: '100vw', // Add this to prevent overflow
                  overflow: 'hidden' // Add this to prevent overflow
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="container mx-auto px-4 py-32 md:py-48 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            staggerChildren: 0.2 
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-100 to-yellow-300 font-serif tracking-tight leading-tight"
            >
            Venice <span className="italic text-white drop-shadow-md">Pizzeria</span>
            </motion.h1>
          
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 font-light italic tracking-wide text-yellow-100/90 drop-shadow-md"
              >
              Experience the taste of Venice in every bite
              </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              href="/menu"
              className="group bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-10 rounded-full transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                View Our Menu
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            
            <Link
              href="/order"
              className="group bg-white hover:bg-gray-100 text-red-700 font-bold py-4 px-10 rounded-full transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                Order Online
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="absolute bottom-10 left-0 right-0 mx-auto text-center animate-bounce"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Add CSS animation for floating effect */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default Hero;