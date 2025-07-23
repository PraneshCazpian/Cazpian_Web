import React from 'react';

interface CazpianLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const CazpianLogo: React.FC<CazpianLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <img 
        src="/Logo.png" 
        alt="Cazpian Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default CazpianLogo;