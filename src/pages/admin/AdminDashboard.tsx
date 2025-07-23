import React, { useState } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import { 
  BarChart3, 
  Settings, 
  FileText, 
  Menu as MenuIcon, 
  Users, 
  Palette,
  Globe,
  LogOut,
  Home,
  Eye,
  Edit3,
  Plus,
  Trash2,
  Save,
  X
} from 'lucide-react';

const AdminDashboard = () => {
  const { user, logout, siteConfig, updateSiteConfig, menuItems, updateMenuItem, addMenuItem, deleteMenuItem } = useAdmin();
  const [activeTab, setActiveTab] = useState('overview');
  const [editingConfig, setEditingConfig] = useState(false);
  const [tempConfig, setTempConfig] = useState(siteConfig);
  const [editingMenuItem, setEditingMenuItem] = useState<string | null>(null);
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

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'content', label: 'Content', icon: <FileText className="h-4 w-4" /> },
    { id: 'menu', label: 'Navigation', icon: <MenuIcon className="h-4 w-4" /> },
    { id: 'theme', label: 'Theme', icon: <Palette className="h-4 w-4" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Cazpian Admin
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Eye className="h-4 w-4" />
                <span>View Site</span>
              </a>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 dark:text-gray-300">Welcome, {user?.username}</span>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
              <ul className="space-y-2">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Dashboard Overview</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-blue-100">Total Pages</p>
                          <p className="text-2xl font-bold">8</p>
                        </div>
                        <FileText className="h-8 w-8 text-blue-200" />
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-green-100">Menu Items</p>
                          <p className="text-2xl font-bold">{menuItems.length}</p>
                        </div>
                        <MenuIcon className="h-8 w-8 text-green-200" />
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-100">Theme Mode</p>
                          <p className="text-2xl font-bold">{siteConfig.darkMode ? 'Dark' : 'Light'}</p>
                        </div>
                        <Palette className="h-8 w-8 text-purple-200" />
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-orange-100">Site Status</p>
                          <p className="text-2xl font-bold">Live</p>
                        </div>
                        <Globe className="h-8 w-8 text-orange-200" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                      <div className="space-y-3">
                        <button
                          onClick={() => setActiveTab('content')}
                          className="w-full flex items-center space-x-3 p-3 bg-white dark:bg-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors"
                        >
                          <Edit3 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                          <span className="text-gray-900 dark:text-white">Edit Homepage Content</span>
                        </button>
                        <button
                          onClick={() => setActiveTab('theme')}
                          className="w-full flex items-center space-x-3 p-3 bg-white dark:bg-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors"
                        >
                          <Palette className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                          <span className="text-gray-900 dark:text-white">Customize Theme</span>
                        </button>
                        <button
                          onClick={() => setActiveTab('menu')}
                          className="w-full flex items-center space-x-3 p-3 bg-white dark:bg-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors"
                        >
                          <MenuIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                          <span className="text-gray-900 dark:text-white">Manage Navigation</span>
                        </button>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">Site configuration updated</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">New menu item added</span>
                        </div>
                        <div className="flex items-center space-x-3 text-sm">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-600 dark:text-gray-300">Theme colors updated</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Content Tab */}
              {activeTab === 'content' && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Content Management</h2>
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
                        <Edit3 className="h-4 w-4" />
                        <span>Edit Content</span>
                      </button>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Hero Title
                        </label>
                        {editingConfig ? (
                          <textarea
                            value={tempConfig.heroTitle}
                            onChange={(e) => setTempConfig({ ...tempConfig, heroTitle: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                            rows={3}
                          />
                        ) : (
                          <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            {siteConfig.heroTitle}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Hero Subtitle
                        </label>
                        {editingConfig ? (
                          <textarea
                            value={tempConfig.heroSubtitle}
                            onChange={(e) => setTempConfig({ ...tempConfig, heroSubtitle: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                            rows={3}
                          />
                        ) : (
                          <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            {siteConfig.heroSubtitle}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Primary CTA Button
                        </label>
                        {editingConfig ? (
                          <input
                            type="text"
                            value={tempConfig.ctaPrimary}
                            onChange={(e) => setTempConfig({ ...tempConfig, ctaPrimary: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          />
                        ) : (
                          <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            {siteConfig.ctaPrimary}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Secondary CTA Button
                        </label>
                        {editingConfig ? (
                          <input
                            type="text"
                            value={tempConfig.ctaSecondary}
                            onChange={(e) => setTempConfig({ ...tempConfig, ctaSecondary: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          />
                        ) : (
                          <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            {siteConfig.ctaSecondary}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Menu Tab */}
              {activeTab === 'menu' && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Navigation Management</h2>
                  </div>

                  {/* Add New Menu Item */}
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Add New Menu Item</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        type="text"
                        placeholder="Menu Title"
                        value={newMenuItem.title}
                        onChange={(e) => setNewMenuItem({ ...newMenuItem, title: e.target.value })}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-600 dark:text-white"
                      />
                      <input
                        type="text"
                        placeholder="Path (e.g., /new-page)"
                        value={newMenuItem.path}
                        onChange={(e) => setNewMenuItem({ ...newMenuItem, path: e.target.value })}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-600 dark:text-white"
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
                      <div key={item.id} className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">{item.title}</h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">{item.path}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                item.isVisible 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                              }`}>
                                {item.isVisible ? 'Visible' : 'Hidden'}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateMenuItem(item.id, { isVisible: !item.isVisible })}
                              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => deleteMenuItem(item.id)}
                              className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        
                        {item.submenu && item.submenu.length > 0 && (
                          <div className="mt-4 ml-4 space-y-2">
                            {item.submenu.map((subItem) => (
                              <div key={subItem.id} className="flex items-center justify-between bg-gray-50 dark:bg-gray-600 p-2 rounded">
                                <div>
                                  <span className="text-sm text-gray-700 dark:text-gray-300">{subItem.title}</span>
                                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{subItem.path}</span>
                                </div>
                                <button
                                  onClick={() => updateMenuItem(subItem.id, { isVisible: !subItem.isVisible })}
                                  className={`text-xs px-2 py-1 rounded ${
                                    subItem.isVisible 
                                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
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
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Theme Customization</h2>
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
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Primary Color
                      </label>
                      <div className="flex items-center space-x-3">
                        {editingConfig ? (
                          <input
                            type="color"
                            value={tempConfig.primaryColor}
                            onChange={(e) => setTempConfig({ ...tempConfig, primaryColor: e.target.value })}
                            className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                          />
                        ) : (
                          <div
                            className="w-12 h-10 rounded border border-gray-300 dark:border-gray-600"
                            style={{ backgroundColor: siteConfig.primaryColor }}
                          ></div>
                        )}
                        <span className="text-gray-900 dark:text-white font-mono">
                          {editingConfig ? tempConfig.primaryColor : siteConfig.primaryColor}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Secondary Color
                      </label>
                      <div className="flex items-center space-x-3">
                        {editingConfig ? (
                          <input
                            type="color"
                            value={tempConfig.secondaryColor}
                            onChange={(e) => setTempConfig({ ...tempConfig, secondaryColor: e.target.value })}
                            className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                          />
                        ) : (
                          <div
                            className="w-12 h-10 rounded border border-gray-300 dark:border-gray-600"
                            style={{ backgroundColor: siteConfig.secondaryColor }}
                          ></div>
                        )}
                        <span className="text-gray-900 dark:text-white font-mono">
                          {editingConfig ? tempConfig.secondaryColor : siteConfig.secondaryColor}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Accent Color
                      </label>
                      <div className="flex items-center space-x-3">
                        {editingConfig ? (
                          <input
                            type="color"
                            value={tempConfig.accentColor}
                            onChange={(e) => setTempConfig({ ...tempConfig, accentColor: e.target.value })}
                            className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                          />
                        ) : (
                          <div
                            className="w-12 h-10 rounded border border-gray-300 dark:border-gray-600"
                            style={{ backgroundColor: siteConfig.accentColor }}
                          ></div>
                        )}
                        <span className="text-gray-900 dark:text-white font-mono">
                          {editingConfig ? tempConfig.accentColor : siteConfig.accentColor}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Background Color
                      </label>
                      <div className="flex items-center space-x-3">
                        {editingConfig ? (
                          <input
                            type="color"
                            value={tempConfig.backgroundColor}
                            onChange={(e) => setTempConfig({ ...tempConfig, backgroundColor: e.target.value })}
                            className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
                          />
                        ) : (
                          <div
                            className="w-12 h-10 rounded border border-gray-300 dark:border-gray-600"
                            style={{ backgroundColor: siteConfig.backgroundColor }}
                          ></div>
                        )}
                        <span className="text-gray-900 dark:text-white font-mono">
                          {editingConfig ? tempConfig.backgroundColor : siteConfig.backgroundColor}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Color Presets</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { name: 'Ocean', primary: '#0EA5E9', secondary: '#06B6D4', accent: '#8B5CF6', bg: '#F0F9FF' },
                        { name: 'Sunset', primary: '#F59E0B', secondary: '#EF4444', accent: '#8B5CF6', bg: '#FFFBEB' },
                        { name: 'Forest', primary: '#059669', secondary: '#0D9488', accent: '#7C3AED', bg: '#F0FDF4' },
                        { name: 'Purple', primary: '#7C3AED', secondary: '#A855F7', accent: '#06B6D4', bg: '#FAF5FF' }
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
                          className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-indigo-300 dark:hover:border-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <div className="flex space-x-1 mb-2">
                            <div className="w-4 h-4 rounded" style={{ backgroundColor: preset.primary }}></div>
                            <div className="w-4 h-4 rounded" style={{ backgroundColor: preset.secondary }}></div>
                            <div className="w-4 h-4 rounded" style={{ backgroundColor: preset.accent }}></div>
                          </div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{preset.name}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Site Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Site Name
                        </label>
                        {editingConfig ? (
                          <input
                            type="text"
                            value={tempConfig.siteName}
                            onChange={(e) => setTempConfig({ ...tempConfig, siteName: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          />
                        ) : (
                          <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            {siteConfig.siteName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Contact Email
                        </label>
                        {editingConfig ? (
                          <input
                            type="email"
                            value={tempConfig.contactEmail}
                            onChange={(e) => setTempConfig({ ...tempConfig, contactEmail: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          />
                        ) : (
                          <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            {siteConfig.contactEmail}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number
                        </label>
                        {editingConfig ? (
                          <input
                            type="tel"
                            value={tempConfig.phone}
                            onChange={(e) => setTempConfig({ ...tempConfig, phone: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                          />
                        ) : (
                          <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                            {siteConfig.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Address
                        </label>
                        {editingConfig ? (
                          <textarea
                            value={tempConfig.address}
                            onChange={(e) => setTempConfig({ ...tempConfig, address: e.target.value })}
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                            rows={2}
                          />
                        ) : (
                          <p className="text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
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
      </div>
    </div>
  );
};

export default AdminDashboard;