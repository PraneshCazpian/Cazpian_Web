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
  ShoppingCart,
  ArrowRight
} from 'lucide-react';

interface MenuItem {
  id: string;
  title: string;
  path: string;
  isVisible: boolean;
  isSectionHeader?: boolean;
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
    if (path.includes('use-case')) return <Briefcase className={iconClass} />;
    if (path.includes('industry')) return <Factory className={iconClass} />;
    if (path.includes('user-role')) return <Users className={iconClass} />;
    
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
    if (path.includes('use-case')) return 'Find solutions tailored to your specific business needs';
    if (path.includes('industry')) return 'Industry-specific solutions and compliance frameworks';
    if (path.includes('user-role')) return 'Role-based solutions for different team members';
    
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

  const getSectionColor = () => {
    // All dropdowns now use the same background color as "Why Cazpian"
    return 'from-blue-500/10 to-indigo-500/10';
  };

  return (
    <div 
      className="w-[40rem] xl:w-[44rem] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-2xl shadow-gray-900/10 dark:shadow-black/30 py-6 overflow-hidden animate-in fade-in-0 slide-in-from-top-2 duration-200 dropdown-container"
      style={{
        transform: 'translateZ(0)', // Force hardware acceleration
        willChange: 'opacity, transform' // Optimize for animations
      }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getSectionColor()} opacity-50`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Section Header */}
        <div className="px-4 xl:px-6 pb-4 border-b border-gray-200/50 dark:border-gray-700/50">
          <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            {getSectionTitle(title)}
          </h3>
        </div>
        
                {/* Menu Items */}
        <div className="py-4">
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column - Main Solutions */}
            <div className="space-y-0">
              {items.filter(item => 
                !item.isSectionHeader && 
                item.title !== 'By Use Case' && 
                item.title !== 'By Industry' && 
                item.title !== 'By User Role'
              ).map((item, index) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className="group flex items-start space-x-4 xl:space-x-5 px-6 xl:px-7 py-4 xl:py-5 hover:bg-gray-50/80 dark:hover:bg-gray-800/80 transition-all duration-200 relative overflow-hidden dropdown-item hardware-accelerated"
                  style={{ 
                    animationDelay: `${index * 30}ms`,
                    transform: 'translateZ(0)' // Force hardware acceleration
                  }}
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-indigo-500/10 transition-all duration-200"></div>
                  
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-0.5 relative z-10">
                    <div className="p-2 xl:p-2.5 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 group-hover:bg-indigo-100/50 dark:group-hover:bg-indigo-900/20 transition-all duration-200">
                      {getIcon(item.title, item.path)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0 relative z-10">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                        {item.title}
                      </h4>
                      <ArrowRight className="h-3 w-3 xl:h-4 xl:w-4 text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-200 opacity-0 group-hover:opacity-100" />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                      {getDescription(item.title, item.path)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Right Column - Organized for Clarity Section */}
            <div className="border-l border-gray-200/50 dark:border-gray-700/50">
              {items.filter(item => item.isSectionHeader).map((item, index) => (
                                 <div
                   key={item.id}
                   className="px-6 xl:px-7 py-4 xl:py-5"
                   style={{ 
                     animationDelay: `${index * 30}ms`,
                     transform: 'translateZ(0)' // Force hardware acceleration
                   }}
                 >
                   <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider border-b border-gray-200/50 dark:border-gray-700/50 pb-3 mb-5">
                     {item.title}
                   </h4>
                  
                  {/* Organized for Clarity Menu Items */}
                  {items.filter(subItem => 
                    subItem.title === 'By Use Case' || 
                    subItem.title === 'By Industry' || 
                    subItem.title === 'By User Role'
                  ).map((subItem, subIndex) => (
                    <Link
                      key={subItem.id}
                      to={subItem.path}
                                             className="group flex items-start space-x-4 xl:space-x-5 py-3 xl:py-4 hover:bg-gray-50/80 dark:hover:bg-gray-800/80 transition-all duration-200 relative overflow-hidden rounded-lg px-4"
                      style={{ 
                        animationDelay: `${(index + subIndex + 1) * 30}ms`,
                        transform: 'translateZ(0)' // Force hardware acceleration
                      }}
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0 mt-0.5 relative z-10">
                        <div className="p-2 xl:p-2.5 rounded-lg bg-gray-100/50 dark:bg-gray-800/50 group-hover:bg-indigo-100/50 dark:group-hover:bg-indigo-900/20 transition-all duration-200">
                          {getIcon(subItem.title, subItem.path)}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0 relative z-10">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">
                          {subItem.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                          {getDescription(subItem.title, subItem.path)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer CTA */}
        <div className="px-4 xl:px-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
          <Link
            to="/book-meeting"
            className="group flex items-center justify-center w-full px-3 xl:px-4 py-2.5 xl:py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 hardware-accelerated"
            style={{ transform: 'translateZ(0)' }} // Force hardware acceleration
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-xl transition-all duration-200"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationDropdown;