import React from 'react';

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
    <div className={`${sizeClasses[size]} ${className}`}>
      <img 
        src="/cazpian_logo.svg" 
        alt="Cazpian Logo" 
        className="w-full h-full object-contain"
        draggable={false}
      />
    </div>
  );
};

export default CazpianLogo;