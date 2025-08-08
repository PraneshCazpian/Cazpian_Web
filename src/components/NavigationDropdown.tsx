import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Brain, 
  DollarSign, 
  Shield, 
  Layers,
  Cloud,
  Server,
  Users,
  BarChart3,
  Zap,
  Database,
  Link as LinkIcon,
  BookOpen,
  Play,
  FileText,
  Calendar,
  Bell,
  MessageCircle,
  Building,
  Briefcase,
  Handshake,
  Newspaper,
  Phone,
  Heart,
  Factory,
  ShoppingCart
} from 'lucide-react';

interface MenuItem {
  id: string;
  title: string;
  path: string;
  isVisible: boolean;
}

interface NavigationDropdownProps {
  title: string;
  items: MenuItem[];
}

const NavigationDropdown: React.FC<NavigationDropdownProps> = ({ title, items }) => {
  // Icon mapping for different menu items
  const getIcon = (title: string, path: string) => {
    const iconClass = "h-5 w-5 text-indigo-600 dark:text-indigo-400";
    
    // Why Cazpian icons
    if (path.includes('open-data')) return <Globe className={iconClass} />;
    if (path.includes('ai-performance')) return <Brain className={iconClass} />;
    if (path.includes('cost-optimization')) return <DollarSign className={iconClass} />;
    if (path.includes('governance')) return <Shield className={iconClass} />;
    if (path.includes('deployment')) return <Layers className={iconClass} />;
    
    // Product icons
    if (path.includes('cloud')) return <Cloud className={iconClass} />;
    if (path.includes('enterprise')) return <Server className={iconClass} />;
    if (path.includes('community')) return <Users className={iconClass} />;
    if (path.includes('semantic-fabric')) return <Brain className={iconClass} />;
    if (path.includes('hypersql')) return <Zap className={iconClass} />;
    if (path.includes('data-catalog')) return <Database className={iconClass} />;
    if (path.includes('connector-hub')) return <LinkIcon className={iconClass} />;
    
    // Solutions icons
    if (path.includes('analytics')) return <BarChart3 className={iconClass} />;
    if (path.includes('self-service-bi')) return <Users className={iconClass} />;
    if (path.includes('data-science')) return <Brain className={iconClass} />;
    if (path.includes('real-time')) return <Zap className={iconClass} />;
    if (path.includes('financial')) return <Building className={iconClass} />;
    if (path.includes('healthcare')) return <Heart className={iconClass} />;
    if (path.includes('manufacturing')) return <Factory className={iconClass} />;
    if (path.includes('retail')) return <ShoppingCart className={iconClass} />;
    
    // Resources icons
    if (path.includes('Documentation')) return <BookOpen className={iconClass} />;
    if (path.includes('Tutorials')) return <Play className={iconClass} />;
    if (path.includes('Blog')) return <FileText className={iconClass} />;
    if (path.includes('Webinars')) return <Calendar className={iconClass} />;
    if (path.includes('Release')) return <Bell className={iconClass} />;
    if (path.includes('Community')) return <MessageCircle className={iconClass} />;
    
    // About icons
    if (path.includes('Company')) return <Building className={iconClass} />;
    if (path.includes('Team')) return <Users className={iconClass} />;
    if (path.includes('Careers')) return <Briefcase className={iconClass} />;
    if (path.includes('Partners')) return <Handshake className={iconClass} />;
    if (path.includes('Newsroom')) return <Newspaper className={iconClass} />;
    if (path.includes('Contact')) return <Phone className={iconClass} />;
    
    // Default icon
    return <Globe className={iconClass} />;
  };

  const getDescription = (title: string, path: string) => {
    // Why Cazpian descriptions
    if (path.includes('open-data')) return 'Built on Apache Iceberg, Arrow, and Polaris for complete freedom';
    if (path.includes('ai-performance')) return 'Natural language queries and automatic optimization';
    if (path.includes('cost-optimization')) return 'Scale compute and storage independently';
    if (path.includes('governance')) return 'Built-in security and governance at every layer';
    if (path.includes('deployment')) return 'Deploy your way - cloud, hybrid, or on-premise';
    
    // Product descriptions
    if (path.includes('cloud')) return 'Fully managed lakehouse in minutes on AWS or Azure';
    if (path.includes('enterprise')) return 'Self-hosted on your infrastructure with full control';
    if (path.includes('community')) return 'Free forever with core capabilities';
    if (path.includes('semantic-fabric')) return 'AI-powered context for self-service analytics';
    if (path.includes('hypersql')) return 'High-speed engine for fast, reliable analytics';
    if (path.includes('data-catalog')) return 'Single source of truth for all data assets';
    if (path.includes('connector-hub')) return 'Seamlessly connect to any data source';
    
    // Solutions descriptions
    if (path.includes('analytics')) return 'Turn slow dashboards into instant insights';
    if (path.includes('self-service-bi')) return 'Empower stakeholders with governed data access';
    if (path.includes('data-science')) return 'ML-ready datasets at scale with collaboration';
    if (path.includes('real-time')) return 'Stream, detect, and respond in real-time';
    if (path.includes('financial')) return 'Compliance-ready with full auditability';
    if (path.includes('healthcare')) return 'Secure PHI handling with predictive care';
    if (path.includes('manufacturing')) return 'Predict failures and optimize operations';
    if (path.includes('retail')) return 'Real-time inventory and customer insights';
    
    // Resources descriptions
    if (path.includes('Documentation')) return 'Step-by-step guides and API references';
    if (path.includes('Tutorials')) return 'Guided labs and code samples';
    if (path.includes('Blog')) return 'Engineering insights and customer stories';
    if (path.includes('Webinars')) return 'Live demos and expert sessions';
    if (path.includes('Release')) return 'Latest features and roadmap updates';
    if (path.includes('Community')) return 'Connect with fellow developers';
    
    // About descriptions
    if (path.includes('Company')) return 'Our mission and values';
    if (path.includes('Team')) return 'Meet the minds behind Cazpian';
    if (path.includes('Careers')) return 'Join our high-impact team';
    if (path.includes('Partners')) return 'Grow with our ecosystem';
    if (path.includes('Newsroom')) return 'Latest announcements and media';
    if (path.includes('Contact')) return 'Get in touch with our team';
    
    return 'Learn more about this feature';
  };

  const getSectionTitle = (title: string) => {
    switch (title) {
      case 'Why Cazpian':
        return 'DISCOVER';
      case 'Product':
        return 'BUILD';
      case 'Solutions':
        return 'IMPLEMENT';
      case 'Resources':
        return 'LEARN';
      case 'About':
        return 'CONNECT';
      default:
        return 'EXPLORE';
    }
  };

  return (
    <div className="absolute top-full left-0 mt-2 w-96 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl py-6 z-50 backdrop-blur-sm pointer-events-auto">
      {/* Section Header */}
      <div className="px-6 pb-4 border-b border-gray-100 dark:border-gray-700">
        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          {getSectionTitle(title)}
        </h3>
      </div>
      
      {/* Menu Items */}
      <div className="py-2">
        {items.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="flex items-start space-x-4 px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 group"
          >
            <div className="flex-shrink-0 mt-0.5">
              {getIcon(item.title, item.path)}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                {getDescription(item.title, item.path)}
              </p>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Footer CTA */}
      <div className="px-6 pt-4 border-t border-gray-100 dark:border-gray-700">
        <Link
          to="/book-meeting"
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default NavigationDropdown;