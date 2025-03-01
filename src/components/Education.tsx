import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'Master of Business Administration (MBA)',
      institution: 'Army Institute of Management',
      location: 'Kolkata',
      period: '2024 - 2026',
      ongoing: true,
    },
    {
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'Calcutta Institute of Engineering and Management (CIEM)',
      location: 'Kolkata',
      period: '2018 - 2022',
      percentage: '81.3%',
      specialization: 'Computer Science',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Behala High School',
      location: 'Kolkata',
      period: '2016 - 2018',
      percentage: '65.2%',
    },
    {
      degree: 'Secondary Education',
      institution: 'Behala High School',
      location: 'Kolkata',
      period: '2013 - 2016',
      percentage: '76.8%',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {/* Education items */}
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className={`relative mb-12 md:mb-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left md:ml-auto'
                } md:w-1/2`}
              >
                <div 
                  className={`bg-white p-6 rounded-lg shadow-lg mb-8 md:mb-16 ${
                    index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
                  } relative z-10 transition-transform duration-300 hover:transform hover:-translate-y-2`}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} mb-3`}>
                    <GraduationCap size={24} className="text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-gray-800">{item.degree}</h3>
                  </div>
                  <h4 className="text-lg font-medium text-gray-700 mb-2">
                    {item.institution}, {item.location}
                  </h4>
                  {item.specialization && (
                    <p className="text-gray-600 mb-2">Specialization: {item.specialization}</p>
                  )}
                  <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} mb-2`}>
                    <Calendar size={16} className="text-blue-500 mr-2" />
                    <p className="text-gray-600">{item.period}</p>
                  </div>
                  {item.percentage && (
                    <p className={`text-blue-600 font-medium ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      Percentage: {item.percentage}
                    </p>
                  )}
                  {item.ongoing && (
                    <div className="mt-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        Currently Pursuing
                      </span>
                    </div>
                  )}
                </div>

                {/* Timeline dot */}
                <div className="absolute top-6 left-0 md:left-auto md:top-6 md:right-0 md:translate-x-0 transform translate-y-0 md:translate-y-0 z-10">
                  <div className={`w-6 h-6 rounded-full bg-blue-600 border-4 border-white ${
                    index % 2 === 0 ? 'md:-right-3' : 'md:-left-3'
                  } absolute`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;