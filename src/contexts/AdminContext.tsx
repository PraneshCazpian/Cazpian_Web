import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'editor';
}

interface SiteConfig {
  siteName: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  darkMode: boolean;
  heroTitle: string;
  heroSubtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  footerText: string;
  socialLinks: {
    linkedin: string;
    github: string;
    twitter: string;
  };
  contactEmail: string;
  phone: string;
  address: string;
}

interface MenuItem {
  id: string;
  title: string;
  path: string;
  submenu?: MenuItem[];
  isVisible: boolean;
  isSectionHeader?: boolean;
}

interface PageContent {
  id: string;
  title: string;
  content: string;
  isPublished: boolean;
  lastModified: Date;
}

interface ResourceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  links: string[];
}

interface FeaturedContent {
  id: string;
  type: string;
  title: string;
  description: string;
  readTime: string;
  category: string;
}

interface LearningPath {
  id: string;
  title: string;
  description: string;
  steps: {
    id: string;
    number: number;
    title: string;
    status: 'completed' | 'current' | 'upcoming';
  }[];
}

interface TrustedLogo {
  id: string;
  name: string;
  imagePath: string;
  description: string;
}

interface TrustedLogosContent {
  headerText: string;
  logos: TrustedLogo[];
}

interface ResourcesPageContent {
  heroTitle: string;
  heroSubtitle: string;
  featuredContent: FeaturedContent[];
  resources: ResourceItem[];
  learningPaths: LearningPath[];
  communitySection: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
      buttonText: string;
    }[];
  };
  ctaSection: {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

interface SolutionItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface IndustryItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface UseCaseItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
}

interface SolutionsPageContent {
  heroTitle: string;
  heroSubtitle: string;
  solutions: SolutionItem[];
  industries: IndustryItem[];
  useCases: UseCaseItem[];
  ctaSection: {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

interface AdminContextType {
  user: AdminUser | null;
  isAuthenticated: boolean;
  siteConfig: SiteConfig;
  menuItems: MenuItem[];
  pageContent: PageContent[];
  resourcesContent: ResourcesPageContent;
  solutionsContent: SolutionsPageContent;
  trustedLogosContent: TrustedLogosContent;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateSiteConfig: (config: Partial<SiteConfig>) => void;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => void;
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  deleteMenuItem: (id: string) => void;
  updatePageContent: (id: string, content: Partial<PageContent>) => void;
  addPageContent: (content: Omit<PageContent, 'id' | 'lastModified'>) => void;
  deletePageContent: (id: string) => void;
  updateResourcesContent: (content: Partial<ResourcesPageContent>) => void;
  updateResourceItem: (id: string, item: Partial<ResourceItem>) => void;
  addResourceItem: (item: Omit<ResourceItem, 'id'>) => void;
  deleteResourceItem: (id: string) => void;
  updateFeaturedContent: (id: string, content: Partial<FeaturedContent>) => void;
  addFeaturedContent: (content: Omit<FeaturedContent, 'id'>) => void;
  deleteFeaturedContent: (id: string) => void;
  updateLearningPath: (id: string, path: Partial<LearningPath>) => void;
  addLearningPath: (path: Omit<LearningPath, 'id'>) => void;
  deleteLearningPath: (id: string) => void;
  updateSolutionsContent: (content: Partial<SolutionsPageContent>) => void;
  updateSolutionItem: (id: string, item: Partial<SolutionItem>) => void;
  addSolutionItem: (item: Omit<SolutionItem, 'id'>) => void;
  deleteSolutionItem: (id: string) => void;
  updateIndustryItem: (id: string, item: Partial<IndustryItem>) => void;
  addIndustryItem: (item: Omit<IndustryItem, 'id'>) => void;
  deleteIndustryItem: (id: string) => void;
  updateUseCaseItem: (id: string, item: Partial<UseCaseItem>) => void;
  addUseCaseItem: (item: Omit<UseCaseItem, 'id'>) => void;
  deleteUseCaseItem: (id: string) => void;
  updateTrustedLogosContent: (content: Partial<TrustedLogosContent>) => void;
  updateTrustedLogo: (id: string, logo: Partial<TrustedLogo>) => void;
  addTrustedLogo: (logo: Omit<TrustedLogo, 'id'>) => void;
  deleteTrustedLogo: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [siteConfig, setSiteConfig] = useState<SiteConfig>({
    siteName: 'Cazpian',
    logo: '/Logo.png',
    primaryColor: '#6366F1', // Indigo-500 - new primary color
    secondaryColor: '#06B6D4', // Cyan - updated secondary
    accentColor: '#8B5CF6', // Purple-500 - matches the deeper purple from logo
    backgroundColor: '#F0F9FF', // Sky Blue 50 - updated background
    darkMode: false,
    heroTitle: 'Transform Data into Decisions Faster with Cazpian AI Lakehouse ',
    heroSubtitle: 'An enterprise-grade, open data platform engineered for next-gen analytics and AI applications.',
    ctaPrimary: 'Start Free',
    ctaSecondary: 'Book a Demo',
    footerText: '© 2025 Cazpian. All rights reserved.',
    socialLinks: {
      linkedin: '#',
      github: '#',
      twitter: '#'
    },
    contactEmail: 'hello@cazpian.com',
    phone: '+1 (555) 123-4567',
    address: '123 Data Street, San Francisco, CA 94105'
  });

  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: '1',
      title: 'Why Cazpian',
      path: '/why-cazpian',
      isVisible: true,
      submenu: [
        { id: '1-1', title: 'Open Data Architecture', path: '/why-cazpian#open-data', isVisible: true },
        { id: '1-2', title: 'AI-Driven Performance', path: '/why-cazpian#ai-performance', isVisible: true },
        { id: '1-3', title: 'Cost Optimization', path: '/why-cazpian#cost-optimization', isVisible: true },
        { id: '1-4', title: 'Governance & Security', path: '/why-cazpian#governance', isVisible: true },
        { id: '1-5', title: 'Deployment Flexibility', path: '/why-cazpian#deployment', isVisible: true }
      ]
    },
    {
      id: '2',
      title: 'Product',
      path: '/product',
      isVisible: true,
      submenu: [
        { id: '2-1', title: 'Cazpian Cloud (Managed)', path: '/cazpian-cloud', isVisible: true },
        { id: '2-2', title: 'Cazpian Enterprise (Self-Hosted)', path: '/cazpian-enterprise', isVisible: true },
        { id: '2-3', title: 'Cazpian Agent Studio (Free)', path: '/agent-studio', isVisible: true }
      ]
    },
    {
      id: '3',
      title: 'Solutions',
      path: '/solutions',
      isVisible: true,
      submenu: [
        { id: '3-1', title: 'Analytics Acceleration', path: '/solutions#cloud', isVisible: true },
        { id: '3-2', title: 'Self-Service BI', path: '/solutions#enterprise', isVisible: true },
        { id: '3-3', title: 'Data Science & ML', path: '/solutions#community', isVisible: true },
        { id: '3-4', title: 'Real-Time Operations', path: '/solutions#community', isVisible: true },
        { id: '3-5', title: 'Organized for clarity', path: '/solutions#organized', isVisible: true, isSectionHeader: true },
        { id: '3-6', title: 'By Use Case', path: '/solutions/use-case', isVisible: true },
        { id: '3-7', title: 'By Industry', path: '/solutions/industry', isVisible: true },
        { id: '3-8', title: 'By User Role', path: '/solutions/user-role', isVisible: true }
      ]
    },
    {
      id: '4',
      title: 'Resources',
      path: '/resources',
      isVisible: true,
      submenu: [
        { id: '4-1', title: 'Documentation & API', path: '/resources#Documentation', isVisible: true },
        { id: '4-2', title: 'Tutorials & Quickstarts', path: '/resources#Tutorials', isVisible: true },
        { id: '4-3', title: 'Blog & Engineering', path: '/resources#Blog', isVisible: true },
        { id: '4-4', title: 'Webinars & Events', path: '/resources#Webinars', isVisible: true },
        { id: '4-5', title: 'Release Notes', path: '/resources#Release', isVisible: true },
        { id: '4-6', title: 'Community Slack', path: '/resources#Community', isVisible: true }
      ]
    },
    {
      id: '5',
      title: 'About',
      path: '/about',
      isVisible: true,
      submenu: [
        { id: '5-1', title: 'Company', path: '/product#cloud', isVisible: true },
        { id: '5-2', title: 'Team', path: '/product#enterprise', isVisible: true },
        { id: '5-3', title: 'Careers', path: '/product#community', isVisible: true },
        { id: '5-4', title: 'Partners', path: '/product#Partners ', isVisible: true },
        { id: '5-5', title: 'Newsroom', path: '/product#Newsroom', isVisible: true },
        { id: '5-6', title: 'Contact & Support ', path: '/product#Contact', isVisible: true }
      ]
    }
  ]);

  const [pageContent, setPageContent] = useState<PageContent[]>([
    {
      id: '1',
      title: 'Home Page',
      content: 'Homepage content...',
      isPublished: true,
      lastModified: new Date()
    }
  ]);

  const [resourcesContent, setResourcesContent] = useState<ResourcesPageContent>({
    heroTitle: 'Resources & Learning',
    heroSubtitle: 'Everything you need to succeed with Cazpian—from quick starts to deep technical guides.',
    featuredContent: [
      {
        id: '1',
        type: 'Tutorial',
        title: 'Building Your First Data Pipeline',
        description: 'Learn how to set up a complete data pipeline from ingestion to analytics in under 30 minutes.',
        readTime: '15 min read',
        category: 'Getting Started'
      },
      {
        id: '2',
        type: 'Blog Post',
        title: 'Why We Built Cazpian on Open Standards',
        description: 'The technical and strategic decisions behind our open architecture approach.',
        readTime: '8 min read',
        category: 'Engineering'
      },
      {
        id: '3',
        type: 'Webinar',
        title: 'AI-Driven Analytics: Beyond Traditional BI',
        description: 'Discover how AI transforms data exploration and insight generation.',
        readTime: '45 min watch',
        category: 'Product Demo'
      }
    ],
    resources: [
      {
        id: 'documentation',
        icon: 'BookOpen',
        title: 'Documentation & API',
        description: 'Step-by-step product documentation, sample scripts, and architecture references. Find clear explanations for every API, connector, and capability. From first query to full deployment—we\'ve got you covered. Docs that accelerate, not frustrate.',
        links: ['API Reference', 'Getting Started', 'Architecture Guide', 'Best Practices']
      },
      {
        id: 'tutorials',
        icon: 'Play',
        title: 'Tutorials & Quickstarts',
        description: 'Launch your first Cazpian workload in minutes. Guided labs, notebooks, and code samples make adoption smooth. From zero to value—quick. Perfect for new teams and seasoned devs alike.',
        links: ['5-Minute Quickstart', 'Data Pipeline Tutorial', 'ML Workflow Guide', 'Integration Examples']
      },
      {
        id: 'blog',
        icon: 'FileText',
        title: 'Blog & Engineering',
        description: 'Insights from our engineers, customers, and data community. Explore new features, performance strategies, and architecture deep dives. Not just thought leadership—real, applied knowledge. Stay informed, stay sharp.',
        links: ['Latest Posts', 'Engineering Deep Dives', 'Customer Stories', 'Industry Insights']
      },
      {
        id: 'webinars',
        icon: 'Calendar',
        title: 'Webinars & Events',
        description: 'Join live demos, product deep dives, and AMAs with the Cazpian team. Learn from industry experts and customer success stories. Can\'t attend live? Access our event library on-demand. Data learning, on your schedule.',
        links: ['Upcoming Events', 'On-Demand Library', 'Product Demos', 'Customer Webinars']
      },
      {
        id: 'release-notes',
        icon: 'Bell',
        title: 'Release Notes',
        description: 'Track what\'s new, what\'s fixed, and what\'s coming next. Our roadmap is public and shaped by user feedback. Stay ahead of the curve with transparent product development. You\'re not just using the product—you help build it.',
        links: ['Latest Release', 'Roadmap', 'Feature Requests', 'Bug Reports']
      },
      {
        id: 'community',
        icon: 'MessageCircle',
        title: 'Community Slack',
        description: 'Join our open Slack community for support, feedback, and collaboration. Ask questions, share ideas, and connect with engineers directly. Feature requests are welcomed—and often shipped. The best ideas start in conversation.',
        links: ['Join Slack', 'Community Guidelines', 'Support Channels', 'Feature Discussions']
      }
    ],
    learningPaths: [
      {
        id: 'data-engineer',
        title: 'Data Engineer Path',
        description: 'Master data pipeline development, optimization, and deployment with Cazpian.',
        steps: [
          { id: '1', number: 1, title: 'Data Ingestion Fundamentals', status: 'completed' },
          { id: '2', number: 2, title: 'Pipeline Orchestration', status: 'current' },
          { id: '3', number: 3, title: 'Advanced Optimization', status: 'upcoming' }
        ]
      },
      {
        id: 'data-analyst',
        title: 'Data Analyst Path',
        description: 'Learn to explore, analyze, and visualize data with Cazpian\'s intuitive tools.',
        steps: [
          { id: '1', number: 1, title: 'Data Exploration Basics', status: 'completed' },
          { id: '2', number: 2, title: 'SQL & Query Building', status: 'current' },
          { id: '3', number: 3, title: 'Advanced Analytics', status: 'upcoming' }
        ]
      }
    ],
    communitySection: {
      title: 'Join Our Community',
      subtitle: 'Connect with other users, share knowledge, and get help',
      items: [
        {
          id: 'slack',
          title: 'Slack Community',
          description: 'Join 5,000+ members for real-time discussions and support',
          buttonText: 'Join Slack'
        },
        {
          id: 'github',
          title: 'GitHub Discussions',
          description: 'Technical discussions, feature requests, and bug reports',
          buttonText: 'Visit GitHub'
        },
        {
          id: 'office-hours',
          title: 'Office Hours',
          description: 'Weekly Q&A sessions with the Cazpian team',
          buttonText: 'Register'
        }
      ]
    },
    ctaSection: {
      title: 'Ready to Start Learning?',
      subtitle: 'Choose your learning path and begin your journey with Cazpian today.',
      primaryButton: 'Start Free Trial',
      secondaryButton: 'Join Community'
    }
  });

  const [solutionsContent, setSolutionsContent] = useState<SolutionsPageContent>({
    heroTitle: 'Solutions for Every Use Case',
    heroSubtitle: 'From analytics acceleration to industry-specific applications, Cazpian powers data-driven success across teams and sectors.',
    solutions: [
      {
        id: 'analytics',
        icon: 'BarChart3',
        title: 'Analytics Acceleration',
        description: 'Turn slow dashboards into instant insights. Cazpian\'s engine reduces query latency while its semantic layer removes complexity. BI teams gain speed without data duplication. Modern analytics, minus the workarounds.'
      },
      {
        id: 'self-service-bi',
        icon: 'Users',
        title: 'Self-Service BI',
        description: 'Empower every stakeholder with governed access to data. Business users get intuitive tools while IT keeps oversight. Semantic models ensure accuracy across teams. Faster decisions, fewer bottlenecks.'
      },
      {
        id: 'data-science',
        icon: 'Brain',
        title: 'Data Science & ML',
        description: 'Prepare, explore, and train ML-ready datasets at scale. Collaborate across teams with versioned data and notebook integration. Cazpian supports the entire ML lifecycle—from experimentation to production. No more silos between science and data.'
      },
      {
        id: 'real-time',
        icon: 'Zap',
        title: 'Real-Time Operations',
        description: 'Stream, detect, and respond—all in real-time. Cazpian handles both streaming and batch workloads in a unified platform. Power anomaly detection, alerts, and live metrics with up-to-date data. Act now, not hours later.'
      }
    ],
    industries: [
      {
        id: 'financial',
        icon: 'Building2',
        title: 'Financial Services',
        description: 'Ensure compliance with full auditability and lineage tracking. Analyze real-time transactions for fraud, risk, and exposure. Fine-grained security and high-speed queries support trading, ops, and compliance teams. Secure speed, built for finance.'
      },
      {
        id: 'healthcare',
        icon: 'Heart',
        title: 'Healthcare',
        description: 'Integrate EHR, claims, and IoT data for better patient outcomes. Govern PHI with strict access control and audit logs. Accelerate research and predictive care with secure ML pipelines. Healthcare-ready by design.'
      },
      {
        id: 'manufacturing',
        icon: 'Factory',
        title: 'Manufacturing',
        description: 'Unify machine data, supply chain events, and sensor logs. Predict failures, optimize yield, and minimize downtime. Cazpian enables smarter factories through streaming and batch analytics. Operational intelligence, built in.'
      },
      {
        id: 'retail',
        icon: 'ShoppingCart',
        title: 'Retail',
        description: 'Analyze inventory, POS, and customer behavior in real-time. Enable personalized experiences and demand forecasting from a single platform. Cazpian connects and enriches retail data without siloed systems. Boost margin and customer loyalty together.'
      },
      {
        id: 'public-sector',
        icon: 'Shield',
        title: 'Public Sector',
        description: 'Support transparency, efficiency, and secure data collaboration. Open standards simplify procurement and long-term support. Multi-agency isolation and policy enforcement ensure compliance. Deliver services powered by clean, governed data.'
      }
    ],
    useCases: [
      {
        id: 'data-warehouse-modernization',
        title: 'Data Warehouse Modernization',
        description: 'Migrate from legacy data warehouses to a modern lakehouse architecture. Reduce costs, improve performance, and unlock new capabilities with open standards.',
        benefits: ['50% cost reduction', '10x faster queries', 'Zero vendor lock-in']
      },
      {
        id: 'real-time-analytics',
        title: 'Real-Time Analytics',
        description: 'Build real-time dashboards and alerts that respond to events as they happen. Stream data from multiple sources and analyze it instantly.',
        benefits: ['Sub-second latency', 'Unified streaming & batch', 'Automatic scaling']
      },
      {
        id: 'self-service-analytics',
        title: 'Self-Service Analytics',
        description: 'Empower business users with governed access to data. Let them explore and analyze without waiting for IT or writing complex SQL.',
        benefits: ['Natural language queries', 'Role-based access', 'Audit trails']
      },
      {
        id: 'machine-learning-operations',
        title: 'Machine Learning Operations',
        description: 'Streamline the entire ML lifecycle from data preparation to model deployment. Collaborate across teams with versioned data and reproducible workflows.',
        benefits: ['Feature engineering', 'Model versioning', 'Production deployment']
      }
    ],
    ctaSection: {
      title: 'Ready to Solve Your Data Challenges?',
      subtitle: 'Join thousands of teams who\'ve already transformed their data operations with Cazpian.',
      primaryButton: 'Start Free Trial',
      secondaryButton: 'Schedule Demo'
    }
  });

  const [trustedLogosContent, setTrustedLogosContent] = useState<TrustedLogosContent>({
    headerText: 'Trusted by teams using',
    logos: [
      {
        id: '1',
        name: 'Apache Iceberg',
        imagePath: '/apache-iceberg.svg',
        description: 'Open table format for large datasets'
      },
      {
        id: '2',
        name: 'Apache Arrow',
        imagePath: '/apachearrow.svg',
        description: 'Columnar memory format for analytics'
      },
      {
        id: '3',
        name: 'Apache Polaris',
        imagePath: '/polaris.svg',
        description: 'Data lakehouse query engine'
      },
      {
        id: '4',
        name: 'Kubernetes',
        imagePath: '/kubernetes.svg',
        description: 'Container orchestration platform'
      },
      {
        id: '5',
        name: 'Microsoft Azure',
        imagePath: '/azure.svg',
        description: 'Cloud computing platform'
      },
      {
        id: '6',
        name: 'AWS',
        imagePath: '/aws.svg',
        description: 'Amazon Web Services cloud platform'
      }
    ]
  });

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('adminUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
    }

    // Load saved configurations
    const savedConfig = localStorage.getItem('siteConfig');
    if (savedConfig) {
      setSiteConfig(JSON.parse(savedConfig));
    }

    const savedMenuItems = localStorage.getItem('menuItems');
    if (savedMenuItems) {
      setMenuItems(JSON.parse(savedMenuItems));
    }

    const savedPageContent = localStorage.getItem('pageContent');
    if (savedPageContent) {
      setPageContent(JSON.parse(savedPageContent));
    }

    const savedResourcesContent = localStorage.getItem('resourcesContent');
    if (savedResourcesContent) {
      setResourcesContent(JSON.parse(savedResourcesContent));
    }

    const savedTrustedLogosContent = localStorage.getItem('trustedLogosContent');
    if (savedTrustedLogosContent) {
      setTrustedLogosContent(JSON.parse(savedTrustedLogosContent));
    }

    const savedSolutionsContent = localStorage.getItem('solutionsContent');
    if (savedSolutionsContent) {
      setSolutionsContent(JSON.parse(savedSolutionsContent));
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simple authentication - in production, this would be a real API call
    if (username === 'admin' && password === 'admin123') {
      const adminUser: AdminUser = {
        id: '1',
        username: 'admin',
        email: 'admin@cazpian.com',
        role: 'admin'
      };
      setUser(adminUser);
      setIsAuthenticated(true);
      localStorage.setItem('adminUser', JSON.stringify(adminUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('adminUser');
  };

  const updateSiteConfig = (config: Partial<SiteConfig>) => {
    const newConfig = { ...siteConfig, ...config };
    setSiteConfig(newConfig);
    localStorage.setItem('siteConfig', JSON.stringify(newConfig));
  };

  const updateMenuItem = (id: string, item: Partial<MenuItem>) => {
    const updateMenuRecursively = (items: MenuItem[]): MenuItem[] => {
      return items.map(menuItem => {
        if (menuItem.id === id) {
          return { ...menuItem, ...item };
        }
        if (menuItem.submenu) {
          return { ...menuItem, submenu: updateMenuRecursively(menuItem.submenu) };
        }
        return menuItem;
      });
    };

    const newMenuItems = updateMenuRecursively(menuItems);
    setMenuItems(newMenuItems);
    localStorage.setItem('menuItems', JSON.stringify(newMenuItems));
  };

  const addMenuItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = {
      ...item,
      id: Date.now().toString()
    };
    const newMenuItems = [...menuItems, newItem];
    setMenuItems(newMenuItems);
    localStorage.setItem('menuItems', JSON.stringify(newMenuItems));
  };

  const deleteMenuItem = (id: string) => {
    const deleteMenuRecursively = (items: MenuItem[]): MenuItem[] => {
      return items.filter(item => {
        if (item.id === id) return false;
        if (item.submenu) {
          item.submenu = deleteMenuRecursively(item.submenu);
        }
        return true;
      });
    };

    const newMenuItems = deleteMenuRecursively(menuItems);
    setMenuItems(newMenuItems);
    localStorage.setItem('menuItems', JSON.stringify(newMenuItems));
  };

  const updatePageContent = (id: string, content: Partial<PageContent>) => {
    const newPageContent = pageContent.map(page =>
      page.id === id
        ? { ...page, ...content, lastModified: new Date() }
        : page
    );
    setPageContent(newPageContent);
    localStorage.setItem('pageContent', JSON.stringify(newPageContent));
  };

  const addPageContent = (content: Omit<PageContent, 'id' | 'lastModified'>) => {
    const newPage: PageContent = {
      ...content,
      id: Date.now().toString(),
      lastModified: new Date()
    };
    const newPageContent = [...pageContent, newPage];
    setPageContent(newPageContent);
    localStorage.setItem('pageContent', JSON.stringify(newPageContent));
  };

  const deletePageContent = (id: string) => {
    const newPageContent = pageContent.filter(page => page.id !== id);
    setPageContent(newPageContent);
    localStorage.setItem('pageContent', JSON.stringify(newPageContent));
  };

  // Resources Content Management Functions
  const updateResourcesContent = (content: Partial<ResourcesPageContent>) => {
    const newContent = { ...resourcesContent, ...content };
    setResourcesContent(newContent);
    localStorage.setItem('resourcesContent', JSON.stringify(newContent));
  };

  const updateResourceItem = (id: string, item: Partial<ResourceItem>) => {
    const newResources = resourcesContent.resources.map(resource =>
      resource.id === id ? { ...resource, ...item } : resource
    );
    updateResourcesContent({ resources: newResources });
  };

  const addResourceItem = (item: Omit<ResourceItem, 'id'>) => {
    const newItem: ResourceItem = {
      ...item,
      id: Date.now().toString()
    };
    const newResources = [...resourcesContent.resources, newItem];
    updateResourcesContent({ resources: newResources });
  };

  const deleteResourceItem = (id: string) => {
    const newResources = resourcesContent.resources.filter(resource => resource.id !== id);
    updateResourcesContent({ resources: newResources });
  };

  const updateFeaturedContent = (id: string, content: Partial<FeaturedContent>) => {
    const newFeaturedContent = resourcesContent.featuredContent.map(featured =>
      featured.id === id ? { ...featured, ...content } : featured
    );
    updateResourcesContent({ featuredContent: newFeaturedContent });
  };

  const addFeaturedContent = (content: Omit<FeaturedContent, 'id'>) => {
    const newItem: FeaturedContent = {
      ...content,
      id: Date.now().toString()
    };
    const newFeaturedContent = [...resourcesContent.featuredContent, newItem];
    updateResourcesContent({ featuredContent: newFeaturedContent });
  };

  const deleteFeaturedContent = (id: string) => {
    const newFeaturedContent = resourcesContent.featuredContent.filter(featured => featured.id !== id);
    updateResourcesContent({ featuredContent: newFeaturedContent });
  };

  const updateLearningPath = (id: string, path: Partial<LearningPath>) => {
    const newLearningPaths = resourcesContent.learningPaths.map(learningPath =>
      learningPath.id === id ? { ...learningPath, ...path } : learningPath
    );
    updateResourcesContent({ learningPaths: newLearningPaths });
  };

  const addLearningPath = (path: Omit<LearningPath, 'id'>) => {
    const newItem: LearningPath = {
      ...path,
      id: Date.now().toString()
    };
    const newLearningPaths = [...resourcesContent.learningPaths, newItem];
    updateResourcesContent({ learningPaths: newLearningPaths });
  };

  const deleteLearningPath = (id: string) => {
    const newLearningPaths = resourcesContent.learningPaths.filter(learningPath => learningPath.id !== id);
    updateResourcesContent({ learningPaths: newLearningPaths });
  };

  // Trusted Logos Content Management Functions
  const updateTrustedLogosContent = (content: Partial<TrustedLogosContent>) => {
    const newContent = { ...trustedLogosContent, ...content };
    setTrustedLogosContent(newContent);
    localStorage.setItem('trustedLogosContent', JSON.stringify(newContent));
  };

  const updateTrustedLogo = (id: string, logo: Partial<TrustedLogo>) => {
    const newLogos = trustedLogosContent.logos.map(trustedLogo =>
      trustedLogo.id === id ? { ...trustedLogo, ...logo } : trustedLogo
    );
    updateTrustedLogosContent({ logos: newLogos });
  };

  const addTrustedLogo = (logo: Omit<TrustedLogo, 'id'>) => {
    const newItem: TrustedLogo = {
      ...logo,
      id: Date.now().toString()
    };
    const newLogos = [...trustedLogosContent.logos, newItem];
    updateTrustedLogosContent({ logos: newLogos });
  };

  const deleteTrustedLogo = (id: string) => {
    const newLogos = trustedLogosContent.logos.filter(logo => logo.id !== id);
    updateTrustedLogosContent({ logos: newLogos });
  };

  // Solutions Content Management Functions
  const updateSolutionsContent = (content: Partial<SolutionsPageContent>) => {
    const newContent = { ...solutionsContent, ...content };
    setSolutionsContent(newContent);
    localStorage.setItem('solutionsContent', JSON.stringify(newContent));
  };

  const updateSolutionItem = (id: string, item: Partial<SolutionItem>) => {
    const newSolutions = solutionsContent.solutions.map(solution =>
      solution.id === id ? { ...solution, ...item } : solution
    );
    updateSolutionsContent({ solutions: newSolutions });
  };

  const addSolutionItem = (item: Omit<SolutionItem, 'id'>) => {
    const newItem: SolutionItem = {
      ...item,
      id: Date.now().toString()
    };
    const newSolutions = [...solutionsContent.solutions, newItem];
    updateSolutionsContent({ solutions: newSolutions });
  };

  const deleteSolutionItem = (id: string) => {
    const newSolutions = solutionsContent.solutions.filter(solution => solution.id !== id);
    updateSolutionsContent({ solutions: newSolutions });
  };

  const updateIndustryItem = (id: string, item: Partial<IndustryItem>) => {
    const newIndustries = solutionsContent.industries.map(industry =>
      industry.id === id ? { ...industry, ...item } : industry
    );
    updateSolutionsContent({ industries: newIndustries });
  };

  const addIndustryItem = (item: Omit<IndustryItem, 'id'>) => {
    const newItem: IndustryItem = {
      ...item,
      id: Date.now().toString()
    };
    const newIndustries = [...solutionsContent.industries, newItem];
    updateSolutionsContent({ industries: newIndustries });
  };

  const deleteIndustryItem = (id: string) => {
    const newIndustries = solutionsContent.industries.filter(industry => industry.id !== id);
    updateSolutionsContent({ industries: newIndustries });
  };

  const updateUseCaseItem = (id: string, item: Partial<UseCaseItem>) => {
    const newUseCases = solutionsContent.useCases.map(useCase =>
      useCase.id === id ? { ...useCase, ...item } : useCase
    );
    updateSolutionsContent({ useCases: newUseCases });
  };

  const addUseCaseItem = (item: Omit<UseCaseItem, 'id'>) => {
    const newItem: UseCaseItem = {
      ...item,
      id: Date.now().toString()
    };
    const newUseCases = [...solutionsContent.useCases, newItem];
    updateSolutionsContent({ useCases: newUseCases });
  };

  const deleteUseCaseItem = (id: string) => {
    const newUseCases = solutionsContent.useCases.filter(useCase => useCase.id !== id);
    updateSolutionsContent({ useCases: newUseCases });
  };

  return (
    <AdminContext.Provider
      value={{
        user,
        isAuthenticated,
        siteConfig,
        menuItems,
        pageContent,
        resourcesContent,
        solutionsContent,
        trustedLogosContent,
        login,
        logout,
        updateSiteConfig,
        updateMenuItem,
        addMenuItem,
        deleteMenuItem,
        updatePageContent,
        addPageContent,
        deletePageContent,
        updateResourcesContent,
        updateResourceItem,
        addResourceItem,
        deleteResourceItem,
        updateFeaturedContent,
        addFeaturedContent,
        deleteFeaturedContent,
        updateLearningPath,
        addLearningPath,
        deleteLearningPath,
        updateSolutionsContent,
        updateSolutionItem,
        addSolutionItem,
        deleteSolutionItem,
        updateIndustryItem,
        addIndustryItem,
        deleteIndustryItem,
        updateUseCaseItem,
        addUseCaseItem,
        deleteUseCaseItem,
        updateTrustedLogosContent,
        updateTrustedLogo,
        addTrustedLogo,
        deleteTrustedLogo
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};