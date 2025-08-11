export type ContentType = 'text' | 'html' | 'image' | 'json';

export interface PageRecord {
  id: string;
  slug: string;
  title: string | null;
  created_at: string;
  updated_at: string | null;
}

export interface PageSectionRecord {
  id: string;
  page_id: string;
  section_key: string;
  content_type: ContentType;
  content_value: string; // may contain JSON string for complex content
  created_at: string;
  updated_at: string | null;
}

export type PageContentMap = Record<string, unknown>;


