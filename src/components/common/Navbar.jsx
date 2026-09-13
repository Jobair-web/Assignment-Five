import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import logoText from '../../assets/logo-text.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left / Mobile Menu Icon + Logo */}
          <div className="flex items-center gap-3">
            <button 
              className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <a href="#home" className="flex items-center">
              <img 
                src={logoText} 
                alt="Dev Stack Logo" 
                className="h-8 sm:h-9 w-auto object-contain" 
              />
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#home" className="text-gray-900 font-semibold hover:text-gray-900">Home</a>
            <a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          </nav>

          {/* Right Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="text" className="hidden sm:inline-flex">Sign In</Button>
            <Button variant="text" className="sm:hidden text-xs px-2">Sign In</Button>
            <Button variant="primary" className="text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5">Sign Up</Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-4 space-y-3">
          <a href="#home" className="block text-gray-900 font-medium py-1">Home</a>
          <a href="#technologies" className="block text-gray-600 font-medium py-1">Technologies</a>
          <a href="#projects" className="block text-gray-600 font-medium py-1">Projects</a>
          <a href="#about" className="block text-gray-600 font-medium py-1">About</a>
          <a href="#contact" className="block text-gray-600 font-medium py-1">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Navbar;