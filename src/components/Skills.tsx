import React from 'react';
import { Code, Database, BarChart, Brain, Clock, Target } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: "Python", proficiency: 90 },
    { name: "JavaScript", proficiency: 85 },
    { name: "SQL", proficiency: 80 },
    { name: "Firebase", proficiency: 75 },
    { name: "Workday", proficiency: 85 },
    { name: "Power BI", proficiency: 80 },
    { name: "C", proficiency: 70 },
    { name: "Excel", proficiency: 95 },
  ];

  const softSkills = [
    { name: "Analytical Thinking", icon: <Brain size={20} className="text-blue-600" /> },
    { name: "Time Management", icon: <Clock size={20} className="text-blue-600" /> },
    { name: "Adaptability", icon: <Target size={20} className="text-blue-600" /> },
    { name: "Attention to Detail", icon: <Target size={20} className="text-blue-600" /> },
    { name: "Problem Solving", icon: <Brain size={20} className="text-blue-600" /> },
    { name: "Communication", icon: <Target size={20} className="text-blue-600" /> },
    { name: "Leadership", icon: <Target size={20} className="text-blue-600" /> },
    { name: "Teamwork", icon: <Target size={20} className="text-blue-600" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Code size={24} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Technical Skills</h3>
              </div>

              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-blue-600 font-medium">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Technical Domains</h4>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                    <Database size={18} className="text-blue-600 mr-2" />
                    <span className="text-gray-700">Database Management</span>
                  </div>
                  <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                    <Code size={18} className="text-blue-600 mr-2" />
                    <span className="text-gray-700">Web Development</span>
                  </div>
                  <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                    <BarChart size={18} className="text-blue-600 mr-2" />
                    <span className="text-gray-700">Data Analysis</span>
                  </div>
                  <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                    <Brain size={18} className="text-blue-600 mr-2" />
                    <span className="text-gray-700">AI/ML Development</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Brain size={24} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Soft Skills</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-300"
                  >
                    <div className="flex items-center">
                      {skill.icon}
                      <h4 className="text-gray-800 font-medium ml-3">{skill.name}</h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Skill Development Approach</h4>
                <p className="text-gray-700">
                  I believe in continuous skill development through practical application, structured learning, 
                  and challenging myself with new projects. My approach combines formal education, self-directed 
                  learning, and real-world problem-solving to ensure my skills remain relevant and effective in 
                  a rapidly evolving technological landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;