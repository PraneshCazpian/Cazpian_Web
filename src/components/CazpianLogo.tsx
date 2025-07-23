import React from 'react';

interface CazpianLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const CazpianLogo: React.FC<CazpianLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="cazpianGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        
        {/* Main cube structure */}
        <g transform="translate(10, 15)">
          {/* Top face */}
          <path
            d="M40 10 L70 25 L40 40 L10 25 Z"
            fill="url(#cazpianGradient)"
            opacity="0.9"
          />
          
          {/* Left face */}
          <path
            d="M10 25 L40 40 L40 70 L10 55 Z"
            fill="url(#cazpianGradient)"
            opacity="0.7"
          />
          
          {/* Right face */}
          <path
            d="M40 40 L70 25 L70 55 L40 70 Z"
            fill="url(#cazpianGradient)"
            opacity="0.8"
          />
          
          {/* Inner geometric pattern */}
          <path
            d="M25 30 L55 20 L55 35 L40 40 L25 35 Z"
            fill="white"
            opacity="0.3"
          />
          
          <path
            d="M25 35 L40 40 L40 55 L25 50 Z"
            fill="white"
            opacity="0.2"
          />
          
          <path
            d="M40 40 L55 35 L55 50 L40 55 Z"
            fill="white"
            opacity="0.25"
          />
        </g>
      </svg>
    </div>
  );
};

export default CazpianLogo;