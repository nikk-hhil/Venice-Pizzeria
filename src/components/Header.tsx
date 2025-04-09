"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  // Effect to detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial scroll check
    handleScroll();
    
    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`${hasScrolled ? 'bg-red-900 shadow-lg py-2' : 'bg-gradient-to-r from-red-800 to-red-600 py-4'} 
        fixed w-full z-50 transition-all duration-500 ease-in-out`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo and name */}
        <Link href="/" className="flex items-center space-x-2 group">
          {/* Animated logo */}
          <div className="relative h-12 w-12 bg-white rounded-full flex items-center justify-center text-red-700 font-bold text-xl overflow-hidden
                        transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
            <div className="absolute inset-0 bg-yellow-300 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
            <span className="relative z-10 font-serif tracking-tight">VP</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold font-serif tracking-wide transition-colors duration-300 group-hover:text-yellow-300">Venice</span>
            <span className="text-xs text-yellow-300 font-medium -mt-1">Pizzeria</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {[
            { path: "/", label: "Home" },
            { path: "/menu", label: "Menu" },
            { path: "/contact", label: "Contact" }
          ].map((item) => (
            <Link 
              key={item.path}
              href={item.path} 
              className={`relative py-2 px-1 font-medium transition-colors duration-300
                        ${pathname === item.path ? 'text-yellow-300' : 'text-white hover:text-yellow-200'}`}
            >
              <span className="relative z-10">{item.label}</span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 transform transition-transform duration-300 ease-out
                              ${pathname === item.path ? 'scale-x-100' : 'scale-x-0 origin-left hover:scale-x-100'}`}></span>
            </Link>
          ))}
        </nav>

        {/* Order button on desktop */}
        <div className="hidden md:block">
          <Link
            href="/order"
            className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold py-2 px-4 rounded-full 
                    transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'translate-y-2'}`}></span>
            <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="bg-red-800 px-4 py-2 shadow-inner">
          <div className="flex flex-col space-y-3 py-3">
            {[
              { path: "/", label: "Home" },
              { path: "/menu", label: "Menu" },
              { path: "/contact", label: "Contact" }
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`pl-2 border-l-2 transition-all duration-300 transform ${
                  pathname === item.path 
                    ? 'text-yellow-300 border-yellow-300 translate-x-1' 
                    : 'text-white border-transparent hover:text-yellow-200 hover:border-yellow-200 hover:translate-x-1'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/order"
              className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold py-2 px-4 rounded-full 
                      transition-all duration-300 hover:shadow-lg mt-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;