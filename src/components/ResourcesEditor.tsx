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
  BookOpen,
  Play,
  FileText,
  Calendar,
  Bell,
  MessageCircle
} from 'lucide-react';

const ResourcesEditor = () => {
  const { 
    resourcesContent, 
    updateResourcesContent
  } = useAdmin();

  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [tempContent, setTempContent] = useState(resourcesContent);
  const [expandedSections, setExpandedSections] = useState<string[]>(['hero']);

  const iconOptions = [
    { value: 'BookOpen', label: 'Book Open', icon: <BookOpen className="h-4 w-4" /> },
    { value: 'Play', label: 'Play', icon: <Play className="h-4 w-4" /> },
    { value: 'FileText', label: 'File Text', icon: <FileText className="h-4 w-4" /> },
    { value: 'Calendar', label: 'Calendar', icon: <Calendar className="h-4 w-4" /> },
    { value: 'Bell', label: 'Bell', icon: <Bell className="h-4 w-4" /> },
    { value: 'MessageCircle', label: 'Message Circle', icon: <MessageCircle className="h-4 w-4" /> }
  ];

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleSave = () => {
    updateResourcesContent(tempContent);
    setEditingSection(null);
  };

  const handleCancel = () => {
    setTempContent(resourcesContent);
    setEditingSection(null);
  };

  const addNewResource = () => {
    const newResource = {
      id: Date.now().toString(),
      icon: 'BookOpen',
      title: 'New Resource',
      description: 'Description for the new resource...',
      links: ['Link 1', 'Link 2']
    };
    setTempContent({
      ...tempContent,
      resources: [...tempContent.resources, newResource]
    });
  };

  const addNewFeaturedContent = () => {
    const newFeatured = {
      id: Date.now().toString(),
      type: 'Tutorial',
      title: 'New Featured Content',
      description: 'Description for the new featured content...',
      readTime: '5 min read',
      category: 'Getting Started'
    };
    setTempContent({
      ...tempContent,
      featuredContent: [...tempContent.featuredContent, newFeatured]
    });
  };

  const addNewLearningPath = () => {
    const newPath = {
      id: Date.now().toString(),
      title: 'New Learning Path',
      description: 'Description for the new learning path...',
      steps: [
        { id: '1', number: 1, title: 'Step 1', status: 'completed' as const },
        { id: '2', number: 2, title: 'Step 2', status: 'current' as const }
      ]
    };
    setTempContent({
      ...tempContent,
      learningPaths: [...tempContent.learningPaths, newPath]
    });
  };

  const updateResource = (id: string, field: string, value: string | string[]) => {
    setTempContent({
      ...tempContent,
      resources: tempContent.resources.map(resource =>
        resource.id === id ? { ...resource, [field]: value } : resource
      )
    });
  };

  const updateFeatured = (id: string, field: string, value: string) => {
    setTempContent({
      ...tempContent,
      featuredContent: tempContent.featuredContent.map(featured =>
        featured.id === id ? { ...featured, [field]: value } : featured
      )
    });
  };

  const updateLearningPathItem = (pathId: string, field: string, value: string | Array<{ id: string; number: number; title: string; status: 'completed' | 'current' | 'upcoming' }>) => {
    setTempContent({
      ...tempContent,
      learningPaths: tempContent.learningPaths.map(path =>
        path.id === pathId ? { ...path, [field]: value } : path
      )
    });
  };

  const deleteResource = (id: string) => {
    setTempContent({
      ...tempContent,
      resources: tempContent.resources.filter(resource => resource.id !== id)
    });
  };

  const deleteFeatured = (id: string) => {
    setTempContent({
      ...tempContent,
      featuredContent: tempContent.featuredContent.filter(featured => featured.id !== id)
    });
  };

  const deleteLearningPath = (id: string) => {
    setTempContent({
      ...tempContent,
      learningPaths: tempContent.learningPaths.filter(path => path.id !== id)
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Resources Page Editor</h2>
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
            <span>Edit Resources</span>
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

      {/* Featured Content Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center p-4">
          <button
            onClick={() => toggleSection('featured')}
            className="flex justify-between items-center text-left flex-1"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Featured Content</h3>
            {expandedSections.includes('featured') ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {editingSection && (
            <button
              onClick={addNewFeaturedContent}
              className="ml-4 flex items-center space-x-2 bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <Plus className="h-4 w-4" />
              <span>Add New</span>
            </button>
          )}
        </div>
        
        {expandedSections.includes('featured') && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            {tempContent.featuredContent.map((featured, index) => (
              <div key={featured.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Featured Content #{index + 1}</h4>
                  {editingSection && (
                    <button
                      onClick={() => deleteFeatured(featured.id)}
                      className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Type</label>
                    <input
                      type="text"
                      value={featured.type}
                      onChange={(e) => updateFeatured(featured.id, 'type', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                    <input
                      type="text"
                      value={featured.category}
                      onChange={(e) => updateFeatured(featured.id, 'category', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                    <input
                      type="text"
                      value={featured.title}
                      onChange={(e) => updateFeatured(featured.id, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Read Time</label>
                    <input
                      type="text"
                      value={featured.readTime}
                      onChange={(e) => updateFeatured(featured.id, 'readTime', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                    <textarea
                      value={featured.description}
                      onChange={(e) => updateFeatured(featured.id, 'description', e.target.value)}
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

      {/* Resources Grid Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center p-4">
          <button
            onClick={() => toggleSection('resources')}
            className="flex justify-between items-center text-left flex-1"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Resources Grid</h3>
            {expandedSections.includes('resources') ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {editingSection && (
            <button
              onClick={addNewResource}
              className="ml-4 flex items-center space-x-2 bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <Plus className="h-4 w-4" />
              <span>Add New</span>
            </button>
          )}
        </div>
        
        {expandedSections.includes('resources') && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            {tempContent.resources.map((resource, index) => (
              <div key={resource.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Resource #{index + 1}</h4>
                  {editingSection && (
                    <button
                      onClick={() => deleteResource(resource.id)}
                      className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Icon</label>
                    <select
                      value={resource.icon}
                      onChange={(e) => updateResource(resource.id, 'icon', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    >
                      {iconOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                    <input
                      type="text"
                      value={resource.title}
                      onChange={(e) => updateResource(resource.id, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                    <textarea
                      value={resource.description}
                      onChange={(e) => updateResource(resource.id, 'description', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                      rows={3}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Links (comma-separated)</label>
                    <input
                      type="text"
                      value={resource.links.join(', ')}
                      onChange={(e) => updateResource(resource.id, 'links', e.target.value.split(',').map(link => link.trim()))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Learning Paths Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center p-4">
          <button
            onClick={() => toggleSection('learning')}
            className="flex justify-between items-center text-left flex-1"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Learning Paths</h3>
            {expandedSections.includes('learning') ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {editingSection && (
            <button
              onClick={addNewLearningPath}
              className="ml-4 flex items-center space-x-2 bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <Plus className="h-4 w-4" />
              <span>Add New</span>
            </button>
          )}
        </div>
        
        {expandedSections.includes('learning') && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            {tempContent.learningPaths.map((path, index) => (
              <div key={path.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white">Learning Path #{index + 1}</h4>
                  {editingSection && (
                    <button
                      onClick={() => deleteLearningPath(path.id)}
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
                      value={path.title}
                      onChange={(e) => updateLearningPathItem(path.id, 'title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                    <textarea
                      value={path.description}
                      onChange={(e) => updateLearningPathItem(path.id, 'description', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                      rows={3}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Steps</label>
                  {path.steps.map((step, stepIndex) => (
                    <div key={step.id} className="flex items-center space-x-2 mb-2">
                      <input
                        type="text"
                        value={step.title}
                        onChange={(e) => {
                          const newSteps = [...path.steps];
                          newSteps[stepIndex] = { ...step, title: e.target.value };
                          updateLearningPathItem(path.id, 'steps', newSteps);
                        }}
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                      />
                      <select
                        value={step.status}
                        onChange={(e) => {
                          const newSteps = [...path.steps];
                          newSteps[stepIndex] = { ...step, status: e.target.value as 'completed' | 'current' | 'upcoming' };
                          updateLearningPathItem(path.id, 'steps', newSteps);
                        }}
                        className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="completed">Completed</option>
                        <option value="current">Current</option>
                        <option value="upcoming">Upcoming</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Community Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <button
          onClick={() => toggleSection('community')}
          className="w-full flex justify-between items-center p-4 text-left"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Community Section</h3>
          {expandedSections.includes('community') ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
        
        {expandedSections.includes('community') && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Section Title
              </label>
              <input
                type="text"
                value={tempContent.communitySection.title}
                onChange={(e) => setTempContent({
                  ...tempContent,
                  communitySection: { ...tempContent.communitySection, title: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Section Subtitle
              </label>
              <input
                type="text"
                value={tempContent.communitySection.subtitle}
                onChange={(e) => setTempContent({
                  ...tempContent,
                  communitySection: { ...tempContent.communitySection, subtitle: e.target.value }
                })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            {tempContent.communitySection.items.map((item, index) => (
              <div key={item.id} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Community Item #{index + 1}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => {
                        const newItems = [...tempContent.communitySection.items];
                        newItems[index] = { ...item, title: e.target.value };
                        setTempContent({
                          ...tempContent,
                          communitySection: { ...tempContent.communitySection, items: newItems }
                        });
                      }}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Button Text</label>
                    <input
                      type="text"
                      value={item.buttonText}
                      onChange={(e) => {
                        const newItems = [...tempContent.communitySection.items];
                        newItems[index] = { ...item, buttonText: e.target.value };
                        setTempContent({
                          ...tempContent,
                          communitySection: { ...tempContent.communitySection, items: newItems }
                        });
                      }}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                    <textarea
                      value={item.description}
                      onChange={(e) => {
                        const newItems = [...tempContent.communitySection.items];
                        newItems[index] = { ...item, description: e.target.value };
                        setTempContent({
                          ...tempContent,
                          communitySection: { ...tempContent.communitySection, items: newItems }
                        });
                      }}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                      rows={2}
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

export default ResourcesEditor; 