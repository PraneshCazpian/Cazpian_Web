import { useState, useEffect } from 'react';
import { getPageContent } from '../lib/supabase';

export const usePageContent = (slug: string) => {
  const [content, setContent] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const pageContent = await getPageContent(slug);
        setContent(pageContent);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [slug]);

  const updateContent = (sectionKey: string, newContent: string) => {
    setContent(prev => ({
      ...prev,
      [sectionKey]: newContent
    }));
  };

  return { content, loading, error, updateContent };
};