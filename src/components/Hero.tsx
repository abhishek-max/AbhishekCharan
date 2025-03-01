import React from 'react';
import { ArrowDown, Download, Mail, Briefcase } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const scrollToProjects = () => {
    setActiveSection('projects');
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    setActiveSection('contact');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-6 inline-block rounded-full p-1 bg-white/10 backdrop-blur-sm">
          <img
            // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
            src="/MyPhoto.jpg"
            alt="Abhishek Charan"
            className="w-32 h-32 rounded-full object-cover border-4 border-white/30"
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
          Abhishek Charan
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-blue-100 animate-fadeIn animation-delay-200">
          Tech Enthusiast | Financial Analyst | AI/ML Developer
        </p>
        <p className="max-w-2xl mx-auto text-lg text-blue-100 mb-8 animate-fadeIn animation-delay-400">
          MBA student with 5 years of experience in technology and financial services, 
          passionate about creating innovative solutions and managing investment portfolios.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn animation-delay-600">
          <a
            href="/resume.pdf"
            className="flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={18} className="mr-2" />
            Download Resume
          </a>
          <button
            onClick={scrollToContact}
            className="flex items-center justify-center bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            <Mail size={18} className="mr-2" />
            Contact Me
          </button>
          <button
            onClick={scrollToProjects}
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-md font-medium transition-colors duration-300"
          >
            <Briefcase size={18} className="mr-2" />
            View Projects
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => {
            setActiveSection('about');
            const element = document.getElementById('about');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors duration-300"
        >
          <ArrowDown size={24} className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;