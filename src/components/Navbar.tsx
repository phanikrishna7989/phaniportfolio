import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'dark'
            ? 'bg-black/90 backdrop-blur-sm'
            : 'bg-white/90 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.span 
            className="text-xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
          >
            Phani Krishna
          </motion.span>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              {['Projects', 'Certifications', 'Education', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  className={`${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-black'
                  } transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </motion.button>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;