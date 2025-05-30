import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Interested in transforming your home with NestWave? Contact us today to learn more about our smart home solutions.
              </p>
              
              <div className="bg-teal-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">Why Choose NestWave?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-teal-100 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle size={16} className="text-teal-700" />
                    </span>
                    <span className="text-gray-700">Professional installation and setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle size={16} className="text-teal-700" />
                    </span>
                    <span className="text-gray-700">24/7 customer support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle size={16} className="text-teal-700" />
                    </span>
                    <span className="text-gray-700">Flexible pricing plans for every budget</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-teal-100 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle size={16} className="text-teal-700" />
                    </span>
                    <span className="text-gray-700">Seamless integration with existing devices</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl shadow-md p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 max-w-sm">
                    Your message has been received. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
                  
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-teal-500`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-teal-500`}
                      placeholder="Your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none`}
                      placeholder="Tell us how we can help you"
                    />
                    {errors.message && (
                      <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;