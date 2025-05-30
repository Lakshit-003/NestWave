import React from 'react';
import { Home, BarChart2, Zap, Leaf, ShieldCheck, Smartphone } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 group hover:-translate-y-1">
      <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-4 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Home size={28} />,
      title: "Smart Automation",
      description: "Seamlessly automate your home systems based on your preferences and daily routines."
    },
    {
      icon: <BarChart2 size={28} />,
      title: "Energy Insights",
      description: "Track and analyze your energy usage with detailed reports and recommendations."
    },
    {
      icon: <Zap size={28} />,
      title: "Efficient Control",
      description: "Control lighting, climate, and entertainment systems with voice commands or our intuitive app."
    },
    {
      icon: <Leaf size={28} />,
      title: "Eco-Friendly",
      description: "Reduce your carbon footprint with intelligent energy-saving optimizations."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Enhanced Security",
      description: "Protect your home with advanced security features and real-time monitoring."
    },
    {
      icon: <Smartphone size={28} />,
      title: "Remote Access",
      description: "Monitor and control your home from anywhere using our mobile application."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Intelligent Features for Modern Living
          </h2>
          <p className="text-xl text-gray-600">
            NestWave adapts to your lifestyle, making your home more comfortable, efficient, and secure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;