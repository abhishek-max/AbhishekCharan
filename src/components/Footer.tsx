import React from 'react';
import { Mail, Linkedin, Phone, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Abhishek Charan</h2>
            <p className="text-gray-400">Tech Enthusiast | Financial Analyst | AI/ML Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:abhishek2893a@aim.ac.in" 
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/about-abhishek-charan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="tel:+916289648259" 
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Abhishek Charan. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            Back to Top <ArrowUp size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;