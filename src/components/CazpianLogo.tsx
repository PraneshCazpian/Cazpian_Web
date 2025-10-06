import React from 'react';
import { Link } from 'react-router-dom';

interface CazpianLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const CazpianLogo: React.FC<CazpianLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-18 h-18',
    lg: 'w-18 h-18'
  };

  return (
    <Link 
      to="/" 
      className={`${sizeClasses[size]} ${className} block hover:opacity-80 transition-opacity duration-200 focus:outline-none rounded-lg`}
      aria-label="Go to Cazpian home page"
    >
      <img 
        src="/cazpian_logo.svg" 
        alt="Cazpian Logo" 
        className="w-full h-full object-contain"
        draggable={false}
      />
    </Link>
  );
};

export default CazpianLogo;