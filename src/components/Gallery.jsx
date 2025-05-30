import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Smart home living room",
      caption: "Transform your living space with intelligent lighting and climate control"
    },
    {
      src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "NestWave mobile app interface",
      caption: "Control your entire home ecosystem from our intuitive mobile app"
    },
    {
      src: "https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Smart home security system",
      caption: "Advanced security features provide peace of mind 24/7"
    },
    {
      src: "https://images.pexels.com/photos/4473784/pexels-photo-4473784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Energy monitoring dashboard",
      caption: "Track and optimize your energy usage with detailed analytics"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience NestWave in Action
          </h2>
          <p className="text-xl text-gray-600">
            See how our intelligent system transforms everyday living
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={images[currentIndex].src} 
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-lg">{images[currentIndex].caption}</p>
            </div>
          </div>
          
          <button 
            onClick={goToPrevious}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="text-gray-800" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="text-gray-800" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-teal-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;