import { useEffect, useMemo, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { PageRecord, PageSectionRecord, PageContentMap } from '../types/cms';

interface UsePageContentResult<T = PageContentMap> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function usePageContent<T = PageContentMap>(slug: string): UsePageContentResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContent = useMemo(() => async () => {
    setLoading(true);
    setError(null);
    try {
      const { data: page, error: pageError } = await supabase
        .from<PageRecord>('pages')
        .select('id, slug, title, created_at, updated_at')
        .eq('slug', slug)
        .single();
      if (pageError) throw pageError;
      if (!page) throw new Error('Page not found');

      const { data: sections, error: sectionError } = await supabase
        .from<PageSectionRecord>('page_sections')
        .select('id, page_id, section_key, content_type, content_value, created_at, updated_at')
        .eq('page_id', page.id);
      if (sectionError) throw sectionError;

      const mapped: Record<string, unknown> = {};
      (sections || []).forEach((s) => {
        if (s.content_type === 'json') {
          try {
            mapped[s.section_key] = JSON.parse(s.content_value);
          } catch {
            mapped[s.section_key] = s.content_value;
          }
        } else {
          mapped[s.section_key] = s.content_value;
        }
      });

      setData(mapped as T);
    } catch (e: any) {
      setError(e?.message ?? 'Failed to load content');
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  return {
    data,
    loading,
    error,
    refetch: fetchContent,
  };
}


