import { useState, useEffect } from 'react';

const BackgroundCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [prevVideoIndex, setPrevVideoIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const backgroundVideos = [
    '/lovable-uploads/Video slide 1.mp4',
    '/lovable-uploads/Video slide 2.mp4',
    '/lovable-uploads/Video slide 3.mp4'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevVideoIndex(currentVideoIndex);
      setCurrentVideoIndex((prevIndex) =>
        (prevIndex + 1) % backgroundVideos.length
      );
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentVideoIndex, backgroundVideos.length]);

  return (
    <div className="absolute inset-0 w-full h-screen overflow-hidden">
      {backgroundVideos.map((video, index) => {
        const isActive = index === currentVideoIndex;
        const wasActive = index === prevVideoIndex;

        return (
          <video
            key={index}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
            ${isActive ? 'opacity-100' : wasActive && isTransitioning ? 'opacity-0' : 'opacity-0'}`}
          />
        );
      })}

      {/* Top full tint overlay */}
      <div className="absolute inset-0 bg-background/40"></div>

      {/* Bottom gradient fade-out overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-background"></div>
    </div>
  );
};

export default BackgroundCarousel;
