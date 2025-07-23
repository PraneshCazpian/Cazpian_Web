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
}

interface PageContent {
  id: string;
  title: string;
  content: string;
  isPublished: boolean;
  lastModified: Date;
}

interface AdminContextType {
  user: AdminUser | null;
  isAuthenticated: boolean;
  siteConfig: SiteConfig;
  menuItems: MenuItem[];
  pageContent: PageContent[];
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateSiteConfig: (config: Partial<SiteConfig>) => void;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => void;
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  deleteMenuItem: (id: string) => void;
  updatePageContent: (id: string, content: Partial<PageContent>) => void;
  addPageContent: (content: Omit<PageContent, 'id' | 'lastModified'>) => void;
  deletePageContent: (id: string) => void;
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
    primaryColor: '#3B82F6', // Blue-600 - matches the lighter blue from logo
    secondaryColor: '#6366F1', // Indigo-500 - middle transition color
    accentColor: '#8B5CF6', // Purple-500 - matches the deeper purple from logo
    backgroundColor: '#F8FAFC', // Slate-50 - lighter, cleaner background
    darkMode: false,
    heroTitle: 'Experience Unmatched Lakehouse Performance with Cazpian AI',
    heroSubtitle: 'An open, intelligent, and lightning-fast data platform built for today\'s most demanding analytics and AI workloads.',
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
        { id: '2-1', title: 'Cazpian Cloud (Managed)', path: '/product#cloud', isVisible: true },
        { id: '2-2', title: 'Cazpian Enterprise (Self-Hosted)', path: '/product#enterprise', isVisible: true },
        { id: '2-3', title: 'Cazpian Community Edition (Free)', path: '/product#community', isVisible: true }
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
        { id: '3-3', title: 'Real-Time Operations ', path: '/solutions#community', isVisible: true }
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

  return (
    <AdminContext.Provider
      value={{
        user,
        isAuthenticated,
        siteConfig,
        menuItems,
        pageContent,
        login,
        logout,
        updateSiteConfig,
        updateMenuItem,
        addMenuItem,
        deleteMenuItem,
        updatePageContent,
        addPageContent,
        deletePageContent
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};