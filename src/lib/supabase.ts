import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export interface Page {
  id: string;
  slug: string;
  title: string;
  created_at: string;
}

export interface PageContent {
  id: string;
  page_id: string;
  section_key: string;
  content: string;
  updated_at: string;
}

export interface Admin {
  id: string;
  email: string;
  role: 'superadmin' | 'editor';
  created_at: string;
}

// Content management functions
export const getPageContent = async (slug: string): Promise<{ [key: string]: string }> => {
  const { data: page } = await supabase
    .from('pages')
    .select('id')
    .eq('slug', slug)
    .single();

  if (!page) return {};

  const { data: content } = await supabase
    .from('page_content')
    .select('section_key, content')
    .eq('page_id', page.id);

  if (!content) return {};

  return content.reduce((acc, item) => {
    acc[item.section_key] = item.content;
    return acc;
  }, {} as { [key: string]: string });
};

export const updatePageContent = async (slug: string, sectionKey: string, content: string): Promise<boolean> => {
  try {
    const { data: page } = await supabase
      .from('pages')
      .select('id')
      .eq('slug', slug)
      .single();

    if (!page) return false;

    const { error } = await supabase
      .from('page_content')
      .upsert({
        page_id: page.id,
        section_key: sectionKey,
        content: content
      });

    return !error;
  } catch {
    return false;
  }
};

export const getAllPagesContent = async (): Promise<{ [slug: string]: { [key: string]: string } }> => {
  const { data: pages } = await supabase
    .from('pages')
    .select(`
      slug,
      page_content (
        section_key,
        content
      )
    `);

  if (!pages) return {};

  return pages.reduce((acc, page) => {
    acc[page.slug] = (page.page_content as any[]).reduce((contentAcc, item) => {
      contentAcc[item.section_key] = item.content;
      return contentAcc;
    }, {});
    return acc;
  }, {} as { [slug: string]: { [key: string]: string } });
};

// Admin authentication functions
export const signInAdmin = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) throw error;

  // Check if user is an admin
  const { data: adminData } = await supabase
    .from('admins')
    .select('*')
    .eq('id', data.user.id)
    .single();

  if (!adminData) {
    await supabase.auth.signOut();
    throw new Error('Access denied: Not an admin user');
  }

  return { user: data.user, admin: adminData };
};

export const signOutAdmin = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getCurrentAdmin = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) return null;

  const { data: adminData } = await supabase
    .from('admins')
    .select('*')
    .eq('id', user.id)
    .single();

  return adminData ? { user, admin: adminData } : null;
};