
import { useState, useEffect } from 'react';

const BackgroundCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    '/lovable-uploads/27b1b0f9-43f4-418f-b7e0-605fe7f69c62.png',
    '/lovable-uploads/18f0cfe7-8703-4d1e-8185-271ad0082c5b.png',
    '/lovable-uploads/bf760cc8-c2d3-4970-9a1a-52feae4e7fd0.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={image}
            alt={`Background ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/60"></div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundCarousel;
