import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "NISM-Series-V-A: Mutual Fund Distributors",
      issuer: "National Institute of Securities Markets",
      description: "Certification for professionals in the mutual funds distribution sector, covering regulatory and operational aspects of mutual fund sales and service.",
      skills: ["Mutual Funds", "Financial Products", "Regulatory Compliance"]
    },
    {
      title: "Workday Certification",
      issuer: "Workday Inc.",
      description: "Professional certification in Workday's enterprise management cloud solutions, focusing on human capital management and financial applications.",
      skills: ["HCM", "Financial Management", "Cloud Solutions"]
    },
    {
      title: "Business Analysis Fundamentals",
      issuer: "Microsoft",
      description: "Comprehensive certification covering essential business analysis methodologies, requirements gathering, and solution assessment techniques.",
      skills: ["Requirements Analysis", "Process Modeling", "Stakeholder Management"]
    },
    {
      title: "Power BI & Python Data Visualization",
      issuer: "Microsoft & Python Institute",
      description: "Dual certification in data visualization techniques using Microsoft Power BI and Python libraries for creating impactful visual analytics.",
      skills: ["Data Visualization", "Dashboard Creation", "Python Libraries"]
    },
    {
      title: "Microsoft Excel - Advanced Level",
      issuer: "Microsoft",
      description: "Advanced certification in Microsoft Excel, covering complex functions, data modeling, automation, and business intelligence features.",
      skills: ["Advanced Functions", "Pivot Tables", "Macros", "Data Analysis"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
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