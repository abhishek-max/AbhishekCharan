import React from 'react';
import { Award, FileText, Code, Zap, Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "Winner of Hack-A-Day 2020",
      organization: "ACM",
      description: "Led a team to victory in this 24-hour hackathon, developing an innovative solution for community healthcare tracking.",
      icon: <Trophy size={24} className="text-yellow-500" />
    },
    {
      title: "Shortlisted in 9th Project Innovation Contest 2020",
      organization: "ICDCIT 2020",
      description: "Project was recognized among top innovations for its novel approach to distributed computing challenges.",
      icon: <Award size={24} className="text-yellow-500" />
    },
    {
      title: "First Runner-up in Droid Blitz",
      organization: "JISTech 2K19",
      description: "Secured second place in this competitive Android development contest with an innovative mobile application.",
      icon: <Code size={24} className="text-yellow-500" />
    },
    {
      title: "Published Paper at ICDCIT 2020",
      organization: "International Conference",
      description: "Research paper on Distributed Computing was published and presented at this prestigious international conference.",
      icon: <FileText size={24} className="text-yellow-500" />
    },
    {
      title: "Karate Practitioner",
      organization: "Yellow Belt",
      description: "Achieved Yellow Belt certification in Karate, demonstrating discipline, focus, and physical prowess.",
      icon: <Zap size={24} className="text-yellow-500" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
                    <p className="text-blue-600">{achievement.organization}</p>
                  </div>
                </div>
                <p className="text-gray-700">{achievement.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8 shadow-inner">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <Trophy size={64} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Continuous Achievement</h3>
                <p className="text-gray-700">
                  Beyond these formal recognitions, I consistently strive for excellence in all my endeavors. 
                  My commitment to continuous learning and improvement has allowed me to deliver exceptional 
                  results across technical projects, financial services, and academic pursuits. I believe that 
                  true achievement comes from the consistent application of knowledge, skills, and dedication 
                  to create meaningful impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;