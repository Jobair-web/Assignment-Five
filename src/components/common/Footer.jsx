import React from 'react';
import logoText from '../../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-xs text-gray-500 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center">
              <img 
                src={logoText} 
                alt="Dev Stack Logo" 
                className="h-8 w-auto object-contain" 
              />
            </div>
            <p className="max-w-xs text-gray-400 leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-4 text-gray-400 font-medium pt-2">
              <a href="#github" className="hover:text-gray-600">GitHub</a>
              <a href="#twitter" className="hover:text-gray-600">Twitter</a>
              <a href="#linkedin" className="hover:text-gray-600">LinkedIn</a>
            </div>
          </div>

          {/* Link Groups */}
          <div>
            <h4 className="font-bold text-gray-800 uppercase tracking-wider mb-3">Product</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-700">Home</a></li>
              <li><a href="#technologies" className="hover:text-gray-700">Technologies</a></li>
              <li><a href="#projects" className="hover:text-gray-700">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-gray-700">About</a></li>
              <li><a href="#contact" className="hover:text-gray-700">Contact</a></li>
              <li><a href="#careers" className="hover:text-gray-700">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 uppercase tracking-wider mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#privacy" className="hover:text-gray-700">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-gray-700">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400">
          <p>© {new Date().getFullYear()} DevStack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-gray-600">Privacy</a>
            <a href="#terms" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;