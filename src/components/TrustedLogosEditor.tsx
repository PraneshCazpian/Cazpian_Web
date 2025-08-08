import React, { useState } from 'react';
import { useAdmin } from '../contexts/AdminContext';
import { 
  Edit3, 
  Save, 
  X, 
  Plus, 
  Trash2, 
  ChevronDown, 
  ChevronUp,
  Image
} from 'lucide-react';

const TrustedLogosEditor = () => {
  const { 
    trustedLogosContent, 
    updateTrustedLogosContent
  } = useAdmin();

  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [tempContent, setTempContent] = useState(trustedLogosContent);
  const [expandedSections, setExpandedSections] = useState<string[]>(['header']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleSave = () => {
    updateTrustedLogosContent(tempContent);
    setEditingSection(null);
  };

  const handleCancel = () => {
    setTempContent(trustedLogosContent);
    setEditingSection(null);
  };

  const addNewLogo = () => {
    const newLogo = {
      id: Date.now().toString(),
      name: 'New Logo',
      imagePath: '/new-logo.svg',
      description: 'Description for the new logo...'
    };
    setTempContent({
      ...tempContent,
      logos: [...tempContent.logos, newLogo]
    });
  };

  const updateLogo = (id: string, field: string, value: string) => {
    setTempContent({
      ...tempContent,
      logos: tempContent.logos.map(logo =>
        logo.id === id ? { ...logo, [field]: value } : logo
      )
    });
  };

  const deleteLogo = (id: string) => {
    setTempContent({
      ...tempContent,
      logos: tempContent.logos.filter(logo => logo.id !== id)
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trusted Logos Editor</h2>
        {editingSection ? (
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>Save All Changes</span>
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
            <span>Edit Trusted Logos</span>
          </button>
        )}
      </div>

      {/* Header Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <button
          onClick={() => toggleSection('header')}
          className="w-full flex justify-between items-center p-4 text-left"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Header Section</h3>
          {expandedSections.includes('header') ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
        
        {expandedSections.includes('header') && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Header Text
              </label>
              <input
                type="text"
                value={tempContent.headerText}
                onChange={(e) => setTempContent({ ...tempContent, headerText: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>
        )}
      </div>

      {/* Logos Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center p-4">
          <button
            onClick={() => toggleSection('logos')}
            className="flex justify-between items-center text-left flex-1"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Trusted Logos</h3>
            {expandedSections.includes('logos') ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {editingSection && (
            <button
              onClick={addNewLogo}
              className="ml-4 flex items-center space-x-2 bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <Plus className="h-4 w-4" />
              <span>Add New</span>
            </button>
          )}
        </div>
        
        {expandedSections.includes('logos') && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            {tempContent.logos.map((logo, index) => (
              <div key={logo.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Logo #{index + 1}</h4>
                  {editingSection && (
                    <button
                      onClick={() => deleteLogo(logo.id)}
                      className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      value={logo.name}
                      onChange={(e) => updateLogo(logo.id, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Image Path</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={logo.imagePath}
                        onChange={(e) => updateLogo(logo.id, 'imagePath', e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                        placeholder="/path/to/image.svg"
                      />
                      <Image className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                    <textarea
                      value={logo.description}
                      onChange={(e) => updateLogo(logo.id, 'description', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                      rows={2}
                    />
                  </div>
                </div>
                {editingSection && (
                  <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                        <Image className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{logo.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{logo.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrustedLogosEditor; 