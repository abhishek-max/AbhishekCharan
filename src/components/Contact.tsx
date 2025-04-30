import React, { useState } from 'react';
import { Mail, Linkedin, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormStatus('success');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Reset status after 5 seconds
    setTimeout(() => setFormStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
              <p className="text-gray-700 mb-8">
                I'm always open to discussing new projects, opportunities, or partnerships. 
                Feel free to reach out using any of the methods below, and I'll get back to you as soon as possible.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Mail size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Email</h4>
                    <a 
                      href="mailto:abhishek2893a@aim.ac.in" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      abhishek2893a@aim.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Linkedin size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/about-abhishek-charan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      linkedin.com/in/about-abhishek-charan
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Phone size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                    <a 
                      href="tel:+918617429183" 
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      +91 6289648259
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Availability</h4>
                <p className="text-gray-700">
                  I'm currently pursuing my MBA at Army Institute of Management, Kolkata, but I'm available for:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Freelance projects and consulting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Part-time opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Collaboration on innovative ideas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">Speaking engagements</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
                
                {formStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
                    There was an error sending your message. Please try again later.
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;