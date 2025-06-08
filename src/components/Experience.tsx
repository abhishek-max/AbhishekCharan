import React from 'react';
import { Briefcase, Users, ShoppingBag, CheckCircle, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Angel One Experience */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 transition-transform duration-300 hover:transform hover:-translate-y-2">
            <div className="bg-blue-600 px-6 py-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex items-center mb-2 md:mb-0">
                  <Briefcase size={24} className="text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">Angel One Ltd.</h3>
                </div>
                <span className="text-blue-100 font-medium">2019 - Present</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Working as a financial services professional managing client portfolios and providing investment guidance.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Achievements:</h4>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Users size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      <span className="font-medium">Portfolio Management:</span> Successfully managed over 300 client portfolios with a remarkable 95% client satisfaction rate.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <TrendingUp size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      <span className="font-medium">Client Engagement:</span> 75.9% of clients actively trade under my guidance, demonstrating strong trust and relationship building.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      <span className="font-medium">Investment Strategy:</span> Developed personalized investment strategies aligned with client goals and risk profiles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 360DigiTMG Experience */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 transition-transform duration-300 hover:transform hover:-translate-y-2">
            <div className="bg-blue-600 px-6 py-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex items-center mb-2 md:mb-0">
                  <Briefcase size={24} className="text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">360DigiTMG</h3>
                </div>
                <span className="text-blue-100 font-medium">Jan 2025 - Feb 2025</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Conducted ETL and built predictive models and improving operational efficiency with actionable insights.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Achievements:</h4>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Users size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      <span className="font-medium">ETL Operations:</span> Performed ETL on 2,500+ machine sensor records, converting unstructured logs into clean, structured datasets to support predictive maintenance analytics and ensure model-readiness.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <TrendingUp size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      <span className="font-medium">Predictive Modeling:</span> Delivered model with 92% accuracy, reducing false positives by 20% and minimizing downtime.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      <span className="font-medium">Business Insight Communication:</span> Synthesized and presented analytical findings to stakeholders, translating model outputs into actionable business recommendations for process and maintenance optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Online Seller Experience */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2">
            <div className="bg-blue-600 px-6 py-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex items-center mb-2 md:mb-0">
                  <ShoppingBag size={24} className="text-white mr-3" />
                  <h3 className="text-xl font-bold text-white">Online Seller (Proprietorship Firm)</h3>
                </div>
                <span className="text-blue-100 font-medium">2022 - 2023</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                Managed an e-commerce business selling products across multiple online marketplaces.
              </p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Achievements:</h4>
              
              <div className="space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <ShoppingBag size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      <span className="font-medium">Order Processing:</span> Successfully processed over 500 orders across Amazon, Flipkart, and Meesho platforms.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <TrendingUp size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      <span className="font-medium">Quality Control:</span> Maintained a 20-25% order return rate, which is within industry standards for the product categories.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      <span className="font-medium">Business Operations:</span> Handled all aspects of the business including inventory management, customer service, and logistics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;