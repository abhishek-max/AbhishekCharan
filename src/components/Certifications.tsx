import React, { useState } from 'react';
import { Award, CheckCircle, FileBadge2, Clock, ChevronRight, ChevronLeft } from 'lucide-react';


const Certifications: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const certifications = [
    {
      title: "Business Analysis Fundamentals",
      issuer: "Microsoft",
      description: "Comprehensive certification covering essential business analysis methodologies, requirements gathering, and solution assessment techniques.",
      skills: ["Requirements Analysis", "Process Modeling", "Stakeholder Management"],
      icon: <FileBadge2 size={24} className="text-blue-600" />,
      status: "Completed",
      imageLocation: "/Business Analysis Fundamentals.png"
    },
    {
      title: "NISM-Series-V-A: Mutual Fund Distributors",
      issuer: "National Institute of Securities Markets",
      description: "Certification for professionals in the mutual funds distribution sector, covering regulatory and operational aspects of mutual fund sales and service.",
      skills: ["Mutual Funds", "Financial Products", "Regulatory Compliance"],
      icon: <FileBadge2 size={24} className="text-blue-600" />,
      status: "Completed",
      imageLocation: "/NISM V.png"
    },
    {
      title: "Workday Certification",
      issuer: "Workday Inc.",
      description: "Professional certification in Workday's enterprise management cloud solutions, focusing on human capital management and financial applications.",
      skills: ["HCM", "Financial Management", "Cloud Solutions"],
      icon: <FileBadge2 size={24} className="text-blue-600" />,
      status: "Completed",
      imageLocation: "/Coursera Workday Basic.png"
    },
    {
      title: "Power BI & Python Data Visualization",
      issuer: "Microsoft & Python Institute",
      description: "Dual certification in data visualization techniques using Microsoft Power BI and Python libraries for creating impactful visual analytics.",
      skills: ["Data Visualization", "Dashboard Creation", "Python Libraries"],
      icon: <FileBadge2 size={24} className="text-blue-600" />,
      status: "Ongoing",
      imageLocation: "/Python Certificate.jpeg"
    },
    {
      title: "Microsoft Excel - Advanced Level",
      issuer: "Microsoft",
      description: "Advanced certification in Microsoft Excel, covering complex functions, data modeling, automation, and business intelligence features.",
      skills: ["Advanced Functions", "Pivot Tables", "Data Analysis"],
      icon: <FileBadge2 size={24} className="text-blue-600" />,
      status: "Completed",
      imageLocation: "/Data for Business Analysts Using Microsoft Excel.png"
    }
  ];

    const nextProject = () => {
    setActiveProject((prev) => (prev === certifications.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? certifications.length - 1 : prev - 1));
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Project */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="bg-blue-600 px-6 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  {certifications[activeProject].icon}
                  <h3 className="text-xl font-bold text-white ml-3">{certifications[activeProject].title}</h3>
                </div>
                {certifications[activeProject].status && (
                  <div className="flex items-center">
                    <Clock size={16} className="text-white mr-2" />
                    <span className="text-white font-medium">{certifications[activeProject].status}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">{certifications[activeProject].description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-start-1">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Skills:</h4>
                  <ul className="space-y-2 mb-6">
                    {certifications[activeProject].skills.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-end-3">
                  <div className="w-64 h-40 md:w-56 md:h-40 overflow-hidden border-8 border-gray-200 shadow-xl">
                  <img 
                    // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80" 
                    src={certifications[activeProject].imageLocation}
                    alt="Loading ..." 
                    className="w-full h-full object-cover"
                  />
                </div>
                </div>
              </div>

              
              {/* <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {certifications[activeProject].technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div> */}
              
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="bg-blue-600 p-4 flex items-center">
                  <Award size={24} className="text-white" />
                  <h3 className="text-lg font-semibold text-white ml-3 truncate">{cert.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-blue-600 font-medium mb-4">{cert.issuer}</p>
                  <p className="text-gray-700 mb-4">{cert.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Skills:</h4>
                    <div className="space-y-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-2" />
                          <span className="text-gray-700 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700">
              These certifications represent my commitment to continuous professional development and 
              expertise across financial services, technology, and business analysis domains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;