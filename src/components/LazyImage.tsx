import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  fallback?: string;
  onLoad?: () => void;
  onError?: () => void;
  placeholder?: React.ReactNode;
  animation?: 'fade' | 'slide' | 'zoom' | 'none';
  delay?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  fallback,
  onLoad,
  onError,
  placeholder,
  animation = 'fade',
  delay = 0
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setTimeout(() => {
      setIsLoaded(true);
      onLoad?.();
    }, delay);
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const getAnimationClasses = () => {
    switch (animation) {
      case 'fade':
        return 'animate-in fade-in duration-500';
      case 'slide':
        return 'animate-in slide-in-from-bottom-4 duration-500';
      case 'zoom':
        return 'animate-in zoom-in duration-500';
      default:
        return '';
    }
  };

  const getPlaceholder = () => {
    if (placeholder) return placeholder;
    
    return (
      <div className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg">
        <div className="animate-pulse">
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
    );
  };

  if (hasError && fallback) {
    return (
      <img
        src={fallback}
        alt={alt}
        className={className}
        width={width}
        height={height}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {!isInView && getPlaceholder()}
      
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } ${getAnimationClasses()}`}
          onLoad={handleLoad}
          onError={handleError}
          style={{ width, height }}
        />
      )}
    </div>
  );
};

export default LazyImage; 