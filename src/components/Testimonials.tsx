"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria G.",
      review: "Best pizza in town! Their Margherita reminds me of the ones I used to eat in Naples. Authentic Italian taste and fantastic service.",
      rating: 5,
    },
    {
      id: 2,
      name: "James T.",
      review: "Venice Pizzeria has become our Friday night tradition. Great food, reasonable prices, and the staff always remembers our usual order.",
      rating: 5,
    },
    {
      id: 3,
      name: "Sarah L.",
      review: "The wood-fired crust makes all the difference. I've tried many pizzerias in the area, and Venice stands out for quality and flavor.",
      rating: 5,
    },
    {
      id: 4,
      name: "Michael R.",
      review: "Ordered delivery and the pizza was still hot and perfect when it arrived. Their online ordering system is easy to use too!",
      rating: 4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
      <div className="text-center mb-12">
  <h2 className="text-3xl font-extrabold mb-2 bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent tracking-tight transform hover:scale-105 transition-transform duration-300">What Our Customers Say</h2>
  <p className="text-gray-600 max-w-2xl mx-auto font-manrope text-lg">
    Don't just take our word for it - hear from our satisfied customers.
  </p>
</div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  {/* Rating stars */}
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[activeIndex].rating 
                            ? "text-yellow-500" 
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 italic">"{testimonials[activeIndex].review}"</p>
                
                <p className="font-bold text-red-700">— {testimonials[activeIndex].name}</p>
              </motion.div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            >
              <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            >
              <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  activeIndex === index ? "bg-red-700" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;