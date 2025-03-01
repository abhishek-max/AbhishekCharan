import React, { useState } from 'react';
import { Smartphone, Clock, Code, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: "Track My Stock",
      status: "Ongoing",
      description: "Android application designed for Indian stock market investors to track their investments and get real-time market updates.",
      features: [
        "Real-time stock tracking with NSE/BSE APIs",
        "Portfolio management and performance analytics",
        "Customizable watchlists and alerts",
        "Technical analysis tools and indicators"
      ],
      technologies: ["React Native", "Firebase", "RESTful APIs", "Chart.js"],
      icon: <Smartphone size={24} className="text-blue-600" />
    },
    {
      title: "AI-Powered Attendance System",
      description: "Facial recognition-based attendance system for educational institutions and corporate environments.",
      features: [
        "Automated attendance tracking using facial recognition",
        "Real-time reporting and analytics",
        "Integration with existing student/employee databases",
        "Mobile app for administrators"
      ],
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask", "React"],
      icon: <Code size={24} className="text-blue-600" />
    },
    {
      title: "Backend Payment Solution for NGO",
      description: "Secure payment processing system developed for a non-profit organization to handle donations and transactions.",
      features: [
        "Secure payment gateway integration",
        "Donor management system",
        "Automated receipts and acknowledgments",
        "Analytics dashboard for donation tracking"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Payment Gateway APIs"],
      icon: <Code size={24} className="text-blue-600" />
    },
    {
      title: "Dr. Money - Health & Wealth Solutions",
      description: "Next.js website providing integrated health and financial wellness solutions for users.",
      features: [
        "Personalized financial planning tools",
        "Health expense tracking and management",
        "Educational resources on health-finance relationship",
        "Interactive calculators and planners"
      ],
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "Chart.js"],
      icon: <Code size={24} className="text-blue-600" />
    },
    {
      title: "ERP Android App for Inventory Management",
      description: "Enterprise Resource Planning application focused on inventory management for small businesses.",
      features: [
        "Real-time inventory tracking",
        "Barcode/QR code scanning",
        "Purchase order management",
        "Sales and inventory analytics"
      ],
      technologies: ["Java", "Android SDK", "SQLite", "RESTful APIs"],
      icon: <Smartphone size={24} className="text-blue-600" />
    },
    {
      title: "Offline Automatic Video Editing Software",
      description: "Desktop application for automated video editing without requiring internet connectivity.",
      features: [
        "AI-powered scene detection and editing",
        "Automated color correction and audio enhancement",
        "Template-based editing for quick results",
        "Batch processing capabilities"
      ],
      technologies: ["Python", "OpenCV", "FFmpeg", "PyQt"],
      icon: <Code size={24} className="text-blue-600" />
    },
    {
      title: "Sathi - Anonymous Support Platform",
      description: "Platform providing anonymous peer support for mental health and personal challenges.",
      features: [
        "Anonymous messaging and support groups",
        "Resource library for self-help",
        "Moderated discussions and safety features",
        "Optional professional counselor connections"
      ],
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      icon: <Code size={24} className="text-blue-600" />
    },
    {
      title: "Website for Blooming Buds Education Center",
      description: "Comprehensive website for an educational institution with student and parent portals.",
      features: [
        "Course catalog and registration system",
        "Student progress tracking",
        "Parent-teacher communication platform",
        "Online assignment submission and grading"
      ],
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript"],
      icon: <Code size={24} className="text-blue-600" />
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Project */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="bg-blue-600 px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {projects[activeProject].icon}
                  <h3 className="text-xl font-bold text-white ml-3">{projects[activeProject].title}</h3>
                </div>
                {projects[activeProject].status && (
                  <div className="flex items-center">
                    <Clock size={16} className="text-white mr-2" />
                    <span className="text-white font-medium">{projects[activeProject].status}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">{projects[activeProject].description}</p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Features:</h4>
              <ul className="space-y-2 mb-6">
                {projects[activeProject].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeProject].technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-8">
                <button 
                  onClick={prevProject}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ChevronLeft size={20} className="mr-1" />
                  Previous Project
                </button>
                <button 
                  onClick={nextProject}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Next Project
                  <ChevronRight size={20} className="ml-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeProject === index ? 'ring-2 ring-blue-600' : ''
                }`}
                onClick={() => setActiveProject(index)}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {project.icon}
                    <h3 className="text-lg font-semibold text-gray-800 ml-3">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;