import React, { useState, useEffect } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { 
  Edit3, 
  Save, 
  X, 
  ChevronDown, 
  ChevronUp,
  RefreshCw,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

interface ContentEditorProps {
  pageSlug: string;
  pageName: string;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ pageSlug, pageName }) => {
  const { allPagesContent, updateContent, refreshContent, loadingContent } = useAdmin();
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [tempContent, setTempContent] = useState<{ [key: string]: string }>({});
  const [expandedSections, setExpandedSections] = useState<string[]>(['hero']);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const pageContent = allPagesContent[pageSlug] || {};

  useEffect(() => {
    setTempContent(pageContent);
  }, [pageContent]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveStatus('idle');
    
    try {
      const promises = Object.entries(tempContent).map(([key, value]) => 
        updateContent(pageSlug, key, value)
      );
      
      const results = await Promise.all(promises);
      const allSuccessful = results.every(result => result);
      
      if (allSuccessful) {
        setSaveStatus('success');
        setEditingSection(null);
        setTimeout(() => setSaveStatus('idle'), 3000);
      } else {
        setSaveStatus('error');
      }
    } catch (error) {
      console.error('Failed to save content:', error);
      setSaveStatus('error');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setTempContent(pageContent);
    setEditingSection(null);
    setSaveStatus('idle');
  };

  const handleRefresh = async () => {
    await refreshContent();
  };

  // Define content sections for each page
  const getContentSections = () => {
    switch (pageSlug) {
      case 'home':
        return [
          { key: 'hero_title', label: 'Hero Title', section: 'hero' },
          { key: 'hero_subtitle', label: 'Hero Subtitle', section: 'hero', type: 'textarea' },
          { key: 'cta_primary', label: 'Primary CTA Button', section: 'hero' },
          { key: 'cta_secondary', label: 'Secondary CTA Button', section: 'hero' },
          { key: 'feature_1_title', label: 'Feature 1 Title', section: 'features' },
          { key: 'feature_1_description', label: 'Feature 1 Description', section: 'features', type: 'textarea' },
          { key: 'feature_2_title', label: 'Feature 2 Title', section: 'features' },
          { key: 'feature_2_description', label: 'Feature 2 Description', section: 'features', type: 'textarea' },
          { key: 'feature_3_title', label: 'Feature 3 Title', section: 'features' },
          { key: 'feature_3_description', label: 'Feature 3 Description', section: 'features', type: 'textarea' }
        ];
      case 'why-cazpian':
        return [
          { key: 'hero_title', label: 'Hero Title', section: 'hero' },
          { key: 'hero_subtitle', label: 'Hero Subtitle', section: 'hero', type: 'textarea' },
          { key: 'open_data_title', label: 'Open Data Title', section: 'features' },
          { key: 'open_data_description', label: 'Open Data Description', section: 'features', type: 'textarea' },
          { key: 'ai_performance_title', label: 'AI Performance Title', section: 'features' },
          { key: 'ai_performance_description', label: 'AI Performance Description', section: 'features', type: 'textarea' },
          { key: 'cost_optimization_title', label: 'Cost Optimization Title', section: 'features' },
          { key: 'cost_optimization_description', label: 'Cost Optimization Description', section: 'features', type: 'textarea' },
          { key: 'governance_title', label: 'Governance Title', section: 'features' },
          { key: 'governance_description', label: 'Governance Description', section: 'features', type: 'textarea' },
          { key: 'deployment_title', label: 'Deployment Title', section: 'features' },
          { key: 'deployment_description', label: 'Deployment Description', section: 'features', type: 'textarea' }
        ];
      case 'product':
        return [
          { key: 'hero_title', label: 'Hero Title', section: 'hero' },
          { key: 'hero_subtitle', label: 'Hero Subtitle', section: 'hero', type: 'textarea' },
          { key: 'cloud_title', label: 'Cloud Product Title', section: 'products' },
          { key: 'cloud_description', label: 'Cloud Product Description', section: 'products', type: 'textarea' },
          { key: 'enterprise_title', label: 'Enterprise Product Title', section: 'products' },
          { key: 'enterprise_description', label: 'Enterprise Product Description', section: 'products', type: 'textarea' },
          { key: 'community_title', label: 'Community Product Title', section: 'products' },
          { key: 'community_description', label: 'Community Product Description', section: 'products', type: 'textarea' }
        ];
      case 'solutions':
        return [
          { key: 'hero_title', label: 'Hero Title', section: 'hero' },
          { key: 'hero_subtitle', label: 'Hero Subtitle', section: 'hero', type: 'textarea' },
          { key: 'analytics_title', label: 'Analytics Title', section: 'solutions' },
          { key: 'analytics_description', label: 'Analytics Description', section: 'solutions', type: 'textarea' },
          { key: 'self_service_title', label: 'Self-Service BI Title', section: 'solutions' },
          { key: 'self_service_description', label: 'Self-Service BI Description', section: 'solutions', type: 'textarea' },
          { key: 'data_science_title', label: 'Data Science Title', section: 'solutions' },
          { key: 'data_science_description', label: 'Data Science Description', section: 'solutions', type: 'textarea' },
          { key: 'real_time_title', label: 'Real-Time Title', section: 'solutions' },
          { key: 'real_time_description', label: 'Real-Time Description', section: 'solutions', type: 'textarea' }
        ];
      case 'resources':
        return [
          { key: 'hero_title', label: 'Hero Title', section: 'hero' },
          { key: 'hero_subtitle', label: 'Hero Subtitle', section: 'hero', type: 'textarea' },
          { key: 'documentation_title', label: 'Documentation Title', section: 'resources' },
          { key: 'documentation_description', label: 'Documentation Description', section: 'resources', type: 'textarea' },
          { key: 'tutorials_title', label: 'Tutorials Title', section: 'resources' },
          { key: 'tutorials_description', label: 'Tutorials Description', section: 'resources', type: 'textarea' },
          { key: 'blog_title', label: 'Blog Title', section: 'resources' },
          { key: 'blog_description', label: 'Blog Description', section: 'resources', type: 'textarea' }
        ];
      case 'about':
        return [
          { key: 'hero_title', label: 'Hero Title', section: 'hero' },
          { key: 'hero_subtitle', label: 'Hero Subtitle', section: 'hero', type: 'textarea' },
          { key: 'company_title', label: 'Company Title', section: 'sections' },
          { key: 'company_description', label: 'Company Description', section: 'sections', type: 'textarea' },
          { key: 'team_title', label: 'Team Title', section: 'sections' },
          { key: 'team_description', label: 'Team Description', section: 'sections', type: 'textarea' },
          { key: 'careers_title', label: 'Careers Title', section: 'sections' },
          { key: 'careers_description', label: 'Careers Description', section: 'sections', type: 'textarea' }
        ];
      case 'contact':
        return [
          { key: 'hero_title', label: 'Hero Title', section: 'hero' },
          { key: 'hero_subtitle', label: 'Hero Subtitle', section: 'hero', type: 'textarea' },
          { key: 'form_title', label: 'Form Title', section: 'contact' },
          { key: 'contact_email', label: 'Contact Email', section: 'contact' },
          { key: 'contact_phone', label: 'Contact Phone', section: 'contact' },
          { key: 'contact_address', label: 'Contact Address', section: 'contact' }
        ];
      default:
        return [];
    }
  };

  const contentSections = getContentSections();
  const sectionGroups = contentSections.reduce((acc, item) => {
    if (!acc[item.section]) acc[item.section] = [];
    acc[item.section].push(item);
    return acc;
  }, {} as { [key: string]: typeof contentSections });

  const getSectionTitle = (sectionKey: string) => {
    const titles: { [key: string]: string } = {
      hero: 'Hero Section',
      features: 'Features Section',
      products: 'Products Section',
      solutions: 'Solutions Section',
      resources: 'Resources Section',
      sections: 'Content Sections',
      contact: 'Contact Information'
    };
    return titles[sectionKey] || sectionKey;
  };

  if (loadingContent) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        <span className="ml-3 text-gray-600 dark:text-gray-300">Loading content...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{pageName} Page Editor</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Edit content for the {pageName.toLowerCase()} page</p>
        </div>
        <div className="flex items-center space-x-3">
          {saveStatus === 'success' && (
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">Saved successfully</span>
            </div>
          )}
          {saveStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-600">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">Save failed</span>
            </div>
          )}
          <button
            onClick={handleRefresh}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            <span className="text-sm">Refresh</span>
          </button>
          {editingSection ? (
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                <Save className="h-4 w-4" />
                <span>{saving ? 'Saving...' : 'Save Changes'}</span>
              </button>
              <button
                onClick={handleCancel}
                className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditingSection('all')}
              className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Edit3 className="h-4 w-4" />
              <span>Edit Content</span>
            </button>
          )}
        </div>
      </div>

      {/* Content Sections */}
      {Object.entries(sectionGroups).map(([sectionKey, fields]) => (
        <div key={sectionKey} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <button
            onClick={() => toggleSection(sectionKey)}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {getSectionTitle(sectionKey)}
            </h3>
            {expandedSections.includes(sectionKey) ? 
              <ChevronUp className="h-5 w-5 text-gray-500" /> : 
              <ChevronDown className="h-5 w-5 text-gray-500" />
            }
          </button>
          
          {expandedSections.includes(sectionKey) && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
              {fields.map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      value={tempContent[field.key] || ''}
                      onChange={(e) => setTempContent({ ...tempContent, [field.key]: e.target.value })}
                      disabled={!editingSection}
                      className={`w-full px-3 py-2 border rounded-lg transition-colors ${
                        editingSection 
                          ? 'border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white' 
                          : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400'
                      }`}
                      rows={3}
                      placeholder={`Enter ${field.label.toLowerCase()}...`}
                    />
                  ) : (
                    <input
                      type="text"
                      value={tempContent[field.key] || ''}
                      onChange={(e) => setTempContent({ ...tempContent, [field.key]: e.target.value })}
                      disabled={!editingSection}
                      className={`w-full px-3 py-2 border rounded-lg transition-colors ${
                        editingSection 
                          ? 'border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white' 
                          : 'border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400'
                      }`}
                      placeholder={`Enter ${field.label.toLowerCase()}...`}
                    />
                  )}
                  {!editingSection && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Current: {pageContent[field.key] || 'Not set'}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Preview Section */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Content Preview</h3>
        <div className="space-y-3">
          {Object.entries(tempContent).slice(0, 3).map(([key, value]) => (
            <div key={key} className="flex items-start space-x-3">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 min-w-0 flex-shrink-0 w-32">
                {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}:
              </span>
              <span className="text-sm text-gray-900 dark:text-white truncate">
                {value || 'Not set'}
              </span>
            </div>
          ))}
          {Object.keys(tempContent).length > 3 && (
            <p className="text-xs text-gray-500 dark:text-gray-400">
              ...and {Object.keys(tempContent).length - 3} more fields
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;