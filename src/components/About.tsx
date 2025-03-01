import React from 'react';
import { MapPin, Mail, Linkedin, User, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Abhishek Charan</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <MapPin size={20} className="text-blue-600 mr-3" />
                <span className="text-gray-700">Kolkata, West Bengal</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-blue-600 mr-3" />
                <a href="mailto:abhishek2893a@aim.ac.in" className="text-gray-700 hover:text-blue-600 transition-colors">
                  abhishek2893a@aim.ac.in
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin size={20} className="text-blue-600 mr-3" />
                <a 
                  href="https://linkedin.com/in/about-abhishek-charan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  linkedin.com/in/about-abhishek-charan
                </a>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-start mb-3">
                <User size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Career Objective</h4>
                  <p className="text-gray-700">
                    MBA student with 5 years of experience in JavaScript, React Native, Python, AI/ML, and financial services, 
                    currently managing investment portfolios at Angel One Ltd.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <Briefcase size={20} className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Professional Summary</h4>
                  <p className="text-gray-700">
                    I am a dedicated professional with a strong background in technology and financial services. 
                    My expertise spans across software development, investment portfolio management, and AI/ML applications. 
                    Currently pursuing an MBA to enhance my business acumen while leveraging my technical skills to drive innovation 
                    and create value for organizations and clients alike.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-gray-200 shadow-xl">
                <img 
                  // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" 
                  src="/MyPhoto.jpg"
                  alt="Abhishek Charan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg">
                <span className="font-semibold">5+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;