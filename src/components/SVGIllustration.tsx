import React from 'react';

interface SVGIllustrationProps {
  name: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
  animated?: boolean;
  hoverEffect?: boolean;
  onClick?: () => void;
}

const SVGIllustration: React.FC<SVGIllustrationProps> = ({
  name,
  className = '',
  width = 200,
  height = 200,
  color = 'currentColor',
  animated = false,
  hoverEffect = false,
  onClick
}) => {
  const getSVGPath = (svgName: string) => {
    const svgMap: Record<string, string> = {
      'data-analysis': '/Vector/data-analysis-not-css.svg',
      'data-report': '/Vector/data-report-not-css.svg',
      'development': '/Vector/development-not-css.svg',
      'development-alt': '/Vector/development.svg',
      'strategic-consulting': '/Vector/strategic-consulting-not-css.svg',
      'user-research': '/Vector/user-research-not-css.svg',
      'visual-data': '/Vector/visual-data-not-css.svg',
      'research-paper': '/Vector/research-paper-not-css.svg',
      'information': '/Vector/information--.svg',
      'google-sitemap': '/Vector/google-sitemap-not-css.svg',
      'tab': '/Vector/-tab-not-css.svg',
      'data': '/Vector/data-.svg'
    };

    return svgMap[svgName] || `/Vector/${svgName}.svg`;
  };

  const getAnimationClasses = () => {
    if (!animated) return '';
    
    return 'animate-pulse hover:animate-none transition-all duration-300';
  };

  const getHoverClasses = () => {
    if (!hoverEffect) return '';
    
    return 'hover:scale-110 hover:rotate-2 transition-transform duration-300 cursor-pointer';
  };

  return (
    <div
      className={`inline-block ${getAnimationClasses()} ${getHoverClasses()} ${className}`}
      onClick={onClick}
      style={{ width, height }}
    >
      <img
        src={getSVGPath(name)}
        alt={`${name} illustration`}
        className="w-full h-full object-contain"
        style={{ filter: color !== 'currentColor' ? `brightness(0) saturate(100%) invert(1) sepia(1) saturate(10000%) hue-rotate(${color})` : undefined }}
      />
    </div>
  );
};

export default SVGIllustration;
