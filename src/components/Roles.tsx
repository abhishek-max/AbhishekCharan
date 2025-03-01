import React from 'react';
import { Users, Award, Briefcase } from 'lucide-react';

const Roles: React.FC = () => {
  const roles = [
    {
      title: "IT Associate, Student Council",
      organization: "Army Institute of Management, Kolkata",
      period: "2024 - Present",
      description: "Responsible for managing IT infrastructure and digital initiatives for the student council, ensuring smooth technological operations for student activities and events.",
      icon: <Briefcase size={24} className="text-blue-600" />
    },
    {
      title: "Team Leader",
      organization: "Hack-A-Day Hackathon 2020",
      description: "Led a team of four developers to create an innovative healthcare tracking solution that won first place in this competitive 24-hour hackathon.",
      icon: <Users size={24} className="text-blue-600" />
    },
    {
      title: "Project Leader",
      organization: "Multiple Tech Competitions",
      description: "Served as team leader in various technical competitions at prestigious institutions including IIT Kharagpur and JIS Tech, guiding teams through complex technical challenges.",
      icon: <Award size={24} className="text-blue-600" />
    }
  ];

  return (
    <section id="roles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Roles & Responsibilities</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {roles.map((role, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{role.title}</h3>
                      <p className="text-blue-600">{role.organization}</p>
                      {role.period && (
                        <p className="text-gray-600 text-sm mt-1">{role.period}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700">{role.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Leadership Philosophy</h3>
            <p className="mb-6">
              My approach to leadership is centered on empowering team members, fostering collaboration, 
              and driving results through clear communication and strategic thinking. I believe in leading 
              by example and creating an environment where innovation and excellence can flourish.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Team Empowerment</h4>
                <p className="text-blue-100 text-sm">
                  Enabling team members to take ownership and develop their skills through mentorship and support.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Strategic Vision</h4>
                <p className="text-blue-100 text-sm">
                  Setting clear goals and developing actionable plans to achieve meaningful outcomes.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Adaptive Problem-Solving</h4>
                <p className="text-blue-100 text-sm">
                  Approaching challenges with flexibility and creativity to find effective solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roles;