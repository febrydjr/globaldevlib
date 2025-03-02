
import React, { useState, useEffect } from 'react';

interface AnimatedHeaderProps {
  title: string;
  items: string[];
  className?: string;
}

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({ 
  title, 
  items, 
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className={`relative ${className}`}>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
        {title}{' '}
        <span className="relative inline-block overflow-hidden h-[1.25em] w-[max-content] align-bottom">
          {items.map((item, index) => (
            <span
              key={item}
              className={`absolute inset-0 transition-all duration-500 ease-in-out flex items-center ${
                index === currentIndex 
                  ? 'opacity-100 transform-none' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                {item}
              </span>
            </span>
          ))}
        </span>
      </h1>
    </div>
  );
};

export default AnimatedHeader;
