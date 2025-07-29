import React, { useState } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import ResourcesEditor from '../../components/ResourcesEditor';
import { 
  BarChart3, 
  Settings, 
  FileText, 
  Menu as MenuIcon, 
  Palette,
  Globe,
  LogOut,
  Eye,
  Edit3,
  Plus,
  Trash2,
  Save,
  X,
  BookOpen,
  Users,
  MessageSquare,
  TrendingUp,
  Activity,
  Mail,
  Search,
  Bell,
  ChevronDown
} from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout, siteConfig, updateSiteConfig, menuItems, updateMenuItem, addMenuItem, deleteMenuItem } = useAdmin();
  const [activeTab, setActiveTab] = useState('overview');
  const [editingConfig, setEditingConfig] = useState(false);
  const [tempConfig, setTempConfig] = useState(siteConfig);
  const [newMenuItem, setNewMenuItem] = useState({ title: '', path: '', isVisible: true });

  const handleSaveConfig = () => {
    updateSiteConfig(tempConfig);
    setEditingConfig(false);
  };

  const handleCancelConfig = () => {
    setTempConfig(siteConfig);
    setEditingConfig(false);
  };

  const handleAddMenuItem = () => {
    if (newMenuItem.title && newMenuItem.path) {
      addMenuItem(newMenuItem);
      setNewMenuItem({ title: '', path: '', isVisible: true });
    }
  };

  const stats = [
    {
      title: 'Page Views',
      value: '12,453',
      change: '+12% from last month',
      icon: <BarChart3 className="h-6 w-6" />,
      positive: true
    },
    {
      title: 'Visitors',
      value: '8,921',
      change: '+8% from last month',
      icon: <Users className="h-6 w-6" />,
      positive: true
    },
    {
      title: 'Contact Forms',
      value: '0',
      change: 'Total submissions',
      icon: <MessageSquare className="h-6 w-6" />,
      positive: null
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+0.3% from last month',
      icon: <TrendingUp className="h-6 w-6" />,
      positive: true
    }
  ];

  const quickActions = [
    { title: 'Content Management', icon: <Settings className="h-5 w-5" /> },
    { title: 'Contact Forms', icon: <Mail className="h-5 w-5" /> },
    { title: 'Analytics', icon: <Activity className="h-5 w-5" /> }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'content', label: 'Content', icon: <FileText className="h-4 w-4" /> },
    { id: 'resources', label: 'Resources', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'menu', label: 'Navigation', icon: <MenuIcon className="h-4 w-4" /> },
    { id: 'theme', label: 'Theme', icon: <Palette className="h-4 w-4" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Welcome back, admin!</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <Bell className="h-5 w-5" />
              </button>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Eye className="h-4 w-4" />
                <span className="text-sm">View Site</span>
              </a>
              <button
                onClick={logout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-6">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-purple-50 text-purple-600 border border-purple-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <BarChart3 className="h-5 w-5" />
                  <span>Dashboard</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('content')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === 'content'
                      ? 'bg-purple-50 text-purple-600 border border-purple-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <FileText className="h-5 w-5" />
                  <span>Content</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('resources')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === 'resources'
                      ? 'bg-purple-50 text-purple-600 border border-purple-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <BookOpen className="h-5 w-5" />
                  <span>Resources</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('menu')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === 'menu'
                      ? 'bg-purple-50 text-purple-600 border border-purple-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <MenuIcon className="h-5 w-5" />
                  <span>Navigation</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('theme')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === 'theme'
                      ? 'bg-purple-50 text-purple-600 border border-purple-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Palette className="h-5 w-5" />
                  <span>Theme</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-purple-50 text-purple-600 border border-purple-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-gray-600">{stat.icon}</div>
                      <div className="text-gray-400">
                        <BarChart3 className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.title}</div>
                    </div>
                    <div className={`text-sm ${
                      stat.positive === true ? 'text-green-600' : 
                      stat.positive === false ? 'text-red-600' : 'text-gray-500'
                    }`}>
                      {stat.change}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {quickActions.map((action, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-purple-600">{action.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900">{action.title}</h3>
                    </div>
                    <button
                      onClick={() => {
                        if (action.title === 'Content Management') setActiveTab('content');
                        if (action.title === 'Analytics') setActiveTab('overview');
                      }}
                      className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                    >
                      Manage →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content Management Tab */}
          {activeTab === 'content' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Settings className="h-6 w-6 text-gray-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Website Content</h2>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-3">
                    <Eye className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Quick Preview</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Content Form */}
                <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hero Title
                      </label>
                      <input
                        type="text"
                        value={editingConfig ? tempConfig.heroTitle : siteConfig.heroTitle}
                        onChange={(e) => editingConfig && setTempConfig({ ...tempConfig, heroTitle: e.target.value })}
                        readOnly={!editingConfig}
                        className={`w-full px-4 py-3 border rounded-lg ${
                          editingConfig 
                            ? 'border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500' 
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hero Subtitle
                      </label>
                      <textarea
                        value={editingConfig ? tempConfig.heroSubtitle : siteConfig.heroSubtitle}
                        onChange={(e) => editingConfig && setTempConfig({ ...tempConfig, heroSubtitle: e.target.value })}
                        readOnly={!editingConfig}
                        rows={3}
                        className={`w-full px-4 py-3 border rounded-lg ${
                          editingConfig 
                            ? 'border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500' 
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Primary CTA Text
                        </label>
                        <input
                          type="text"
                          value={editingConfig ? tempConfig.ctaPrimary : siteConfig.ctaPrimary}
                          onChange={(e) => editingConfig && setTempConfig({ ...tempConfig, ctaPrimary: e.target.value })}
                          readOnly={!editingConfig}
                          className={`w-full px-4 py-3 border rounded-lg ${
                            editingConfig 
                              ? 'border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500' 
                              : 'border-gray-200 bg-gray-50'
                          }`}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Secondary CTA Text
                        </label>
                        <input
                          type="text"
                          value={editingConfig ? tempConfig.ctaSecondary : siteConfig.ctaSecondary}
                          onChange={(e) => editingConfig && setTempConfig({ ...tempConfig, ctaSecondary: e.target.value })}
                          readOnly={!editingConfig}
                          className={`w-full px-4 py-3 border rounded-lg ${
                            editingConfig 
                              ? 'border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500' 
                              : 'border-gray-200 bg-gray-50'
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={editingConfig ? tempConfig.siteName : siteConfig.siteName}
                        onChange={(e) => editingConfig && setTempConfig({ ...tempConfig, siteName: e.target.value })}
                        readOnly={!editingConfig}
                        className={`w-full px-4 py-3 border rounded-lg ${
                          editingConfig 
                            ? 'border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500' 
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      />
                    </div>

                    {editingConfig ? (
                      <div className="flex space-x-3">
                        <button
                          onClick={handleSaveConfig}
                          className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                        >
                          <Save className="h-4 w-4" />
                          <span>Update Content</span>
                        </button>
                        <button
                          onClick={handleCancelConfig}
                          className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <X className="h-4 w-4" />
                          <span>Cancel</span>
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setEditingConfig(true)}
                        className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        <Edit3 className="h-4 w-4" />
                        <span>Edit Content</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Preview Panel */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Eye className="h-5 w-5 text-gray-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Quick Preview</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Hero Title:</p>
                      <p className="text-sm font-medium text-gray-900">
                        {editingConfig ? tempConfig.heroTitle : siteConfig.heroTitle}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-2">CTA Buttons:</p>
                      <div className="flex space-x-2">
                        <button className="bg-purple-600 text-white px-3 py-1 rounded text-xs">
                          {editingConfig ? tempConfig.ctaPrimary : siteConfig.ctaPrimary}
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-xs">
                          {editingConfig ? tempConfig.ctaSecondary : siteConfig.ctaSecondary}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Quick Actions</h4>
                    <div className="space-y-2">
                      <button
                        onClick={() => setActiveTab('menu')}
                        className="w-full text-left text-sm text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Edit Navigation Menu
                      </button>
                      <button className="w-full text-left text-sm text-gray-600 hover:text-purple-600 transition-colors">
                        Manage Blog Posts
                      </button>
                      <button className="w-full text-left text-sm text-gray-600 hover:text-purple-600 transition-colors">
                        SEO Settings
                      </button>
                      <button
                        onClick={() => setActiveTab('theme')}
                        className="w-full text-left text-sm text-gray-600 hover:text-purple-600 transition-colors"
                      >
                        Theme Customization
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Menu Tab */}
          {activeTab === 'menu' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Navigation Management</h2>
              </div>

              {/* Add New Menu Item */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Menu Item</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Menu Title"
                    value={newMenuItem.title}
                    onChange={(e) => setNewMenuItem({ ...newMenuItem, title: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <input
                    type="text"
                    placeholder="Path (e.g., /new-page)"
                    value={newMenuItem.path}
                    onChange={(e) => setNewMenuItem({ ...newMenuItem, path: e.target.value })}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    onClick={handleAddMenuItem}
                    className="flex items-center justify-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Item</span>
                  </button>
                </div>
              </div>

              {/* Menu Items List */}
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div>
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-500">{item.path}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            item.isVisible 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {item.isVisible ? 'Visible' : 'Hidden'}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateMenuItem(item.id, { isVisible: !item.isVisible })}
                          className="text-indigo-600 hover:text-indigo-700"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => deleteMenuItem(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    {item.submenu && item.submenu.length > 0 && (
                      <div className="mt-4 ml-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <div key={subItem.id} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                            <div>
                              <span className="text-sm text-gray-700">{subItem.title}</span>
                              <span className="text-xs text-gray-500 ml-2">{subItem.path}</span>
                            </div>
                            <button
                              onClick={() => updateMenuItem(subItem.id, { isVisible: !subItem.isVisible })}
                              className={`text-xs px-2 py-1 rounded ${
                                subItem.isVisible 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {subItem.isVisible ? 'Visible' : 'Hidden'}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Theme Tab */}
          {activeTab === 'theme' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Theme Customization</h2>
                {editingConfig ? (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSaveConfig}
                      className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Save className="h-4 w-4" />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={handleCancelConfig}
                      className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <X className="h-4 w-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setEditingConfig(true)}
                    className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <Palette className="h-4 w-4" />
                    <span>Edit Theme</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Color
                  </label>
                  <div className="flex items-center space-x-3">
                    {editingConfig ? (
                      <input
                        type="color"
                        value={tempConfig.primaryColor}
                        onChange={(e) => setTempConfig({ ...tempConfig, primaryColor: e.target.value })}
                        className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                      />
                    ) : (
                      <div
                        className="w-12 h-10 rounded border border-gray-300"
                        style={{ backgroundColor: siteConfig.primaryColor }}
                      ></div>
                    )}
                    <span className="text-gray-900 font-mono">
                      {editingConfig ? tempConfig.primaryColor : siteConfig.primaryColor}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Secondary Color
                  </label>
                  <div className="flex items-center space-x-3">
                    {editingConfig ? (
                      <input
                        type="color"
                        value={tempConfig.secondaryColor}
                        onChange={(e) => setTempConfig({ ...tempConfig, secondaryColor: e.target.value })}
                        className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                      />
                    ) : (
                      <div
                        className="w-12 h-10 rounded border border-gray-300"
                        style={{ backgroundColor: siteConfig.secondaryColor }}
                      ></div>
                    )}
                    <span className="text-gray-900 font-mono">
                      {editingConfig ? tempConfig.secondaryColor : siteConfig.secondaryColor}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Accent Color
                  </label>
                  <div className="flex items-center space-x-3">
                    {editingConfig ? (
                      <input
                        type="color"
                        value={tempConfig.accentColor}
                        onChange={(e) => setTempConfig({ ...tempConfig, accentColor: e.target.value })}
                        className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                      />
                    ) : (
                      <div
                        className="w-12 h-10 rounded border border-gray-300"
                        style={{ backgroundColor: siteConfig.accentColor }}
                      ></div>
                    )}
                    <span className="text-gray-900 font-mono">
                      {editingConfig ? tempConfig.accentColor : siteConfig.accentColor}
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Background Color
                  </label>
                  <div className="flex items-center space-x-3">
                    {editingConfig ? (
                      <input
                        type="color"
                        value={tempConfig.backgroundColor}
                        onChange={(e) => setTempConfig({ ...tempConfig, backgroundColor: e.target.value })}
                        className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                      />
                    ) : (
                      <div
                        className="w-12 h-10 rounded border border-gray-300"
                        style={{ backgroundColor: siteConfig.backgroundColor }}
                      ></div>
                    )}
                    <span className="text-gray-900 font-mono">
                      {editingConfig ? tempConfig.backgroundColor : siteConfig.backgroundColor}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Color Presets</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                  {[
                    { name: 'Indigo', primary: '#6366F1', secondary: '#06B6D4', accent: '#8B5CF6', bg: '#F0F9FF' },
                    { name: 'Ocean', primary: '#0EA5E9', secondary: '#06B6D4', accent: '#8B5CF6', bg: '#F0F9FF' },
                    { name: 'Sunset', primary: '#F59E0B', secondary: '#EF4444', accent: '#8B5CF6', bg: '#FFFBEB' },
                    { name: 'Forest', primary: '#059669', secondary: '#0D9488', accent: '#7C3AED', bg: '#F0FDF4' },
                    { name: 'Purple', primary: '#7C3AED', secondary: '#A855F7', accent: '#06B6D4', bg: '#FAF5FF' },
                    { name: 'Rose', primary: '#E11D48', secondary: '#F43F5E', accent: '#8B5CF6', bg: '#FFF1F2' },
                    { name: 'Emerald', primary: '#10B981', secondary: '#059669', accent: '#6366F1', bg: '#ECFDF5' },
                    { name: 'Slate', primary: '#475569', secondary: '#64748B', accent: '#8B5CF6', bg: '#F8FAFC' }
                  ].map((preset) => (
                    <button
                      key={preset.name}
                      onClick={() => editingConfig && setTempConfig({
                        ...tempConfig,
                        primaryColor: preset.primary,
                        secondaryColor: preset.secondary,
                        accentColor: preset.accent,
                        backgroundColor: preset.bg
                      })}
                      disabled={!editingConfig}
                      className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="flex space-x-1 mb-2">
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: preset.primary }}></div>
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: preset.secondary }}></div>
                        <div className="w-4 h-4 rounded" style={{ backgroundColor: preset.accent }}></div>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{preset.name}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <div>
              <ResourcesEditor />
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Site Settings</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site Name
                    </label>
                    {editingConfig ? (
                      <input
                        type="text"
                        value={tempConfig.siteName}
                        onChange={(e) => setTempConfig({ ...tempConfig, siteName: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    ) : (
                      <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                        {siteConfig.siteName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Email
                    </label>
                    {editingConfig ? (
                      <input
                        type="email"
                        value={tempConfig.contactEmail}
                        onChange={(e) => setTempConfig({ ...tempConfig, contactEmail: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    ) : (
                      <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                        {siteConfig.contactEmail}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    {editingConfig ? (
                      <input
                        type="tel"
                        value={tempConfig.phone}
                        onChange={(e) => setTempConfig({ ...tempConfig, phone: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    ) : (
                      <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                        {siteConfig.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    {editingConfig ? (
                      <textarea
                        value={tempConfig.address}
                        onChange={(e) => setTempConfig({ ...tempConfig, address: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        rows={2}
                      />
                    ) : (
                      <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                        {siteConfig.address}
                      </p>
                    )}
                  </div>
                </div>

                {!editingConfig && (
                  <div className="flex justify-end">
                    <button
                      onClick={() => setEditingConfig(true)}
                      className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                      <Edit3 className="h-4 w-4" />
                      <span>Edit Settings</span>
                    </button>
                  </div>
                )}

                {editingConfig && (
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={handleSaveConfig}
                      className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Save className="h-4 w-4" />
                      <span>Save Changes</span>
                    </button>
                    <button
                      onClick={handleCancelConfig}
                      className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <X className="h-4 w-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;