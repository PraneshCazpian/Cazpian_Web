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
  BarChart3,
  Users,
  Brain,
  Zap,
  Building2,
  Heart,
  Factory,
  ShoppingCart,
  Shield
} from 'lucide-react';

const SolutionsEditor = () => {
  const { 
    solutionsContent, 
    updateSolutionsContent
  } = useAdmin();

  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [tempContent, setTempContent] = useState(solutionsContent);
  const [expandedSections, setExpandedSections] = useState<string[]>(['hero']);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});

  const iconOptions = [
    { value: 'BarChart3', label: 'Bar Chart 3', icon: <BarChart3 className="h-4 w-4" /> },
    { value: 'Users', label: 'Users', icon: <Users className="h-4 w-4" /> },
    { value: 'Brain', label: 'Brain', icon: <Brain className="h-4 w-4" /> },
    { value: 'Zap', label: 'Zap', icon: <Zap className="h-4 w-4" /> },
    { value: 'Building2', label: 'Building 2', icon: <Building2 className="h-4 w-4" /> },
    { value: 'Heart', label: 'Heart', icon: <Heart className="h-4 w-4" /> },
    { value: 'Factory', label: 'Factory', icon: <Factory className="h-4 w-4" /> },
    { value: 'ShoppingCart', label: 'Shopping Cart', icon: <ShoppingCart className="h-4 w-4" /> },
    { value: 'Shield', label: 'Shield', icon: <Shield className="h-4 w-4" /> }
  ];

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const toggleDropdown = (dropdownId: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdownId]: !prev[dropdownId]
    }));
  };

  const handleSave = () => {
    updateSolutionsContent(tempContent);
    setEditingSection(null);
  };

  const handleCancel = () => {
    setTempContent(solutionsContent);
    setEditingSection(null);
  };

  const addNewSolution = () => {
    const newSolution = {
      id: Date.now().toString(),
      icon: 'BarChart3',
      title: 'New Solution',
      description: 'Description for the new solution...'
    };
    setTempContent({
      ...tempContent,
      solutions: [...tempContent.solutions, newSolution]
    });
  };

  const addNewIndustry = () => {
    const newIndustry = {
      id: Date.now().toString(),
      icon: 'Building2',
      title: 'New Industry',
      description: 'Description for the new industry...'
    };
    setTempContent({
      ...tempContent,
      industries: [...tempContent.industries, newIndustry]
    });
  };

  const addNewUseCase = () => {
    const newUseCase = {
      id: Date.now().toString(),
      title: 'New Use Case',
      description: 'Description for the new use case...',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    };
    setTempContent({
      ...tempContent,
      useCases: [...tempContent.useCases, newUseCase]
    });
  };

  const updateSolution = (id: string, field: string, value: string) => {
    setTempContent({
      ...tempContent,
      solutions: tempContent.solutions.map(solution =>
        solution.id === id ? { ...solution, [field]: value } : solution
      )
    });
  };

  const updateIndustry = (id: string, field: string, value: string) => {
    setTempContent({
      ...tempContent,
      industries: tempContent.industries.map(industry =>
        industry.id === id ? { ...industry, [field]: value } : industry
      )
    });
  };

  const updateUseCase = (id: string, field: string, value: string | string[]) => {
    setTempContent({
      ...tempContent,
      useCases: tempContent.useCases.map(useCase =>
        useCase.id === id ? { ...useCase, [field]: value } : useCase
      )
    });
  };

  const deleteSolution = (id: string) => {
    setTempContent({
      ...tempContent,
      solutions: tempContent.solutions.filter(solution => solution.id !== id)
    });
  };

  const deleteIndustry = (id: string) => {
    setTempContent({
      ...tempContent,
      industries: tempContent.industries.filter(industry => industry.id !== id)
    });
  };

  const deleteUseCase = (id: string) => {
    setTempContent({
      ...tempContent,
      useCases: tempContent.useCases.filter(useCase => useCase.id !== id)
    });
  };

  const IconDropdown = ({ 
    value, 
    onChange, 
    dropdownId 
  }: { 
    value: string; 
    onChange: (value: string) => void; 
    dropdownId: string;
  }) => {
    const selectedOption = iconOptions.find(option => option.value === value);
    
    return (
      <div className="relative">
        <button
          type="button"
          onClick={() => toggleDropdown(dropdownId)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white flex items-center justify-between"
        >
          <div className="flex items-center space-x-2">
            {selectedOption?.icon}
            <span>{selectedOption?.label}</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </button>
        
        {openDropdowns[dropdownId] && (
          <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-auto">
            {iconOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  toggleDropdown(dropdownId);
                }}
                className="w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center space-x-2"
              >
                {option.icon}
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Solutions Page Editor</h2>
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
            <span>Edit Solutions</span>
          </button>
        )}
      </div>

      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <button
          onClick={() => toggleSection('hero')}
          className="w-full flex justify-between items-center p-4 text-left"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Hero Section</h3>
          {expandedSections.includes('hero') ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
        
        {expandedSections.includes('hero') && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Hero Title
              </label>
              <input
                type="text"
                value={tempContent.heroTitle}
                onChange={(e) => setTempContent({ ...tempContent, heroTitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Hero Subtitle
              </label>
              <textarea
                value={tempContent.heroSubtitle}
                onChange={(e) => setTempContent({ ...tempContent, heroSubtitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                rows={3}
              />
            </div>
          </div>
        )}
      </div>

      {/* Solutions Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center p-4">
          <button
            onClick={() => toggleSection('solutions')}
            className="flex justify-between items-center text-left flex-1"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Core Solutions</h3>
            {expandedSections.includes('solutions') ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {editingSection && (
            <button
              onClick={addNewSolution}
              className="ml-4 flex items-center space-x-2 bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <Plus className="h-4 w-4" />
              <span>Add New</span>
            </button>
          )}
        </div>
        
        {expandedSections.includes('solutions') && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            {tempContent.solutions.map((solution, index) => (
              <div key={solution.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Solution #{index + 1}</h4>
                  {editingSection && (
                    <button
                      onClick={() => deleteSolution(solution.id)}
                      className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Icon</label>
                    <IconDropdown
                      value={solution.icon}
                      onChange={(value) => updateSolution(solution.id, 'icon', value)}
                      dropdownId={`solution-${solution.id}`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                    <input
                      type="text"
                      value={solution.title}
                      onChange={(e) => updateSolution(solution.id, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                    <textarea
                      value={solution.description}
                      onChange={(e) => updateSolution(solution.id, 'description', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Industries Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center p-4">
          <button
            onClick={() => toggleSection('industries')}
            className="flex justify-between items-center text-left flex-1"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Industry Solutions</h3>
            {expandedSections.includes('industries') ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {editingSection && (
            <button
              onClick={addNewIndustry}
              className="ml-4 flex items-center space-x-2 bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <Plus className="h-4 w-4" />
              <span>Add New</span>
            </button>
          )}
        </div>
        
        {expandedSections.includes('industries') && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            {tempContent.industries.map((industry, index) => (
              <div key={industry.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Industry #{index + 1}</h4>
                  {editingSection && (
                    <button
                      onClick={() => deleteIndustry(industry.id)}
                      className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Icon</label>
                    <IconDropdown
                      value={industry.icon}
                      onChange={(value) => updateIndustry(industry.id, 'icon', value)}
                      dropdownId={`industry-${industry.id}`}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                    <input
                      type="text"
                      value={industry.title}
                      onChange={(e) => updateIndustry(industry.id, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                    <textarea
                      value={industry.description}
                      onChange={(e) => updateIndustry(industry.id, 'description', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Use Cases Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center p-4">
          <button
            onClick={() => toggleSection('useCases')}
            className="flex justify-between items-center text-left flex-1"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Common Use Cases</h3>
            {expandedSections.includes('useCases') ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {editingSection && (
            <button
              onClick={addNewUseCase}
              className="ml-4 flex items-center space-x-2 bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <Plus className="h-4 w-4" />
              <span>Add New</span>
            </button>
          )}
        </div>
        
        {expandedSections.includes('useCases') && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            {tempContent.useCases.map((useCase, index) => (
              <div key={useCase.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Use Case #{index + 1}</h4>
                  {editingSection && (
                    <button
                      onClick={() => deleteUseCase(useCase.id)}
                      className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                    <input
                      type="text"
                      value={useCase.title}
                      onChange={(e) => updateUseCase(useCase.id, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                    <textarea
                      value={useCase.description}
                      onChange={(e) => updateUseCase(useCase.id, 'description', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                      rows={3}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Benefits (comma-separated)</label>
                    <input
                      type="text"
                      value={useCase.benefits.join(', ')}
                      onChange={(e) => updateUseCase(useCase.id, 'benefits', e.target.value.split(',').map(benefit => benefit.trim()))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <button
          onClick={() => toggleSection('cta')}
          className="w-full flex justify-between items-center p-4 text-left"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">CTA Section</h3>
          {expandedSections.includes('cta') ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
        
        {expandedSections.includes('cta') && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                CTA Title
              </label>
              <input
                type="text"
                value={tempContent.ctaSection.title}
                onChange={(e) => setTempContent({
                  ...tempContent,
                  ctaSection: { ...tempContent.ctaSection, title: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                CTA Subtitle
              </label>
              <input
                type="text"
                value={tempContent.ctaSection.subtitle}
                onChange={(e) => setTempContent({
                  ...tempContent,
                  ctaSection: { ...tempContent.ctaSection, subtitle: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Primary Button Text
                </label>
                <input
                  type="text"
                  value={tempContent.ctaSection.primaryButton}
                  onChange={(e) => setTempContent({
                    ...tempContent,
                    ctaSection: { ...tempContent.ctaSection, primaryButton: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Secondary Button Text
                </label>
                <input
                  type="text"
                  value={tempContent.ctaSection.secondaryButton}
                  onChange={(e) => setTempContent({
                    ...tempContent,
                    ctaSection: { ...tempContent.ctaSection, secondaryButton: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolutionsEditor; 