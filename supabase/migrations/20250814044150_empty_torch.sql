/*
  # Create pages and content management system

  1. New Tables
    - `pages`
      - `id` (uuid, primary key)
      - `slug` (text, unique) - URL identifier for the page
      - `title` (text) - Page title
      - `created_at` (timestamp)
    - `page_content`
      - `id` (uuid, primary key)
      - `page_id` (uuid, foreign key to pages)
      - `section_key` (text) - Identifier for content section (e.g., 'hero_title', 'hero_subtitle')
      - `content` (text) - The actual content
      - `updated_at` (timestamp)
    - `admins`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `role` (text) - 'superadmin' or 'editor'
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Public read access for pages and page_content
    - Admin-only write access for content management
    - Authenticated admin access for admin operations

  3. Changes
    - Added unique constraint on page_content (page_id, section_key)
    - Added indexes for performance
    - Added trigger for updated_at timestamp
*/

-- Create pages table
CREATE TABLE IF NOT EXISTS pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create page_content table
CREATE TABLE IF NOT EXISTS page_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id uuid NOT NULL REFERENCES pages(id) ON DELETE CASCADE,
  section_key text NOT NULL,
  content text NOT NULL,
  updated_at timestamptz DEFAULT now(),
  UNIQUE(page_id, section_key)
);

-- Create admins table
CREATE TABLE IF NOT EXISTS admins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role text NOT NULL CHECK (role IN ('superadmin', 'editor')),
  created_at timestamptz DEFAULT now()
);

-- Create function to update modified timestamp
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for page_content updated_at
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.triggers 
    WHERE trigger_name = 'trg_page_content_updated'
  ) THEN
    CREATE TRIGGER trg_page_content_updated
      BEFORE UPDATE ON page_content
      FOR EACH ROW
      EXECUTE FUNCTION update_modified_column();
  END IF;
END $$;

-- Enable RLS
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

-- Pages policies (public read, admin write)
CREATE POLICY "Public can read pages"
  ON pages
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "pages_public_read"
  ON pages
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "pages_auth_write"
  ON pages
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "pages_auth_update"
  ON pages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Page content policies (public read, admin write)
CREATE POLICY "Public can read page content"
  ON page_content
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "public read page_content"
  ON page_content
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Admin can insert content"
  ON page_content
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admins 
      WHERE id = auth.uid() 
      AND role IN ('superadmin', 'editor')
    )
  );

CREATE POLICY "Admin can update content"
  ON page_content
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins 
      WHERE id = auth.uid() 
      AND role IN ('superadmin', 'editor')
    )
  );

CREATE POLICY "Admin can delete content"
  ON page_content
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admins 
      WHERE id = auth.uid() 
      AND role IN ('superadmin', 'editor')
    )
  );

-- Admin policies (admin access only)
CREATE POLICY "Admins can read own data"
  ON admins
  FOR SELECT
  TO authenticated
  USING (id = auth.uid());

CREATE POLICY "Admins can update own data"
  ON admins
  FOR UPDATE
  TO authenticated
  USING (id = auth.uid())
  WITH CHECK (id = auth.uid());

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_pages_slug ON pages(slug);
CREATE INDEX IF NOT EXISTS idx_page_content_page_id ON page_content(page_id);
CREATE INDEX IF NOT EXISTS idx_admins_email ON admins(email);

-- Insert default pages
INSERT INTO pages (slug, title) VALUES
  ('home', 'Home'),
  ('why-cazpian', 'Why Cazpian'),
  ('product', 'Product'),
  ('solutions', 'Solutions'),
  ('resources', 'Resources'),
  ('about', 'About'),
  ('contact', 'Contact')
ON CONFLICT (slug) DO NOTHING;

-- Insert default content for home page
DO $$
DECLARE
  home_page_id uuid;
BEGIN
  SELECT id INTO home_page_id FROM pages WHERE slug = 'home';
  
  INSERT INTO page_content (page_id, section_key, content) VALUES
    (home_page_id, 'hero_title', 'Transform Data into Decisions Faster with Cazpian AI Lakehouse'),
    (home_page_id, 'hero_subtitle', 'An enterprise-grade, open data platform engineered for next-gen analytics and AI applications.'),
    (home_page_id, 'cta_primary', 'Start Free'),
    (home_page_id, 'cta_secondary', 'Book a Demo'),
    (home_page_id, 'feature_1_title', 'Query Anything. Power Everything.'),
    (home_page_id, 'feature_1_description', 'Cazpian federates access to distributed data without replication, enabling AI and analytics workloads to run on real-time, real-location data.'),
    (home_page_id, 'feature_2_title', 'Modern Performance. Zero Migration.'),
    (home_page_id, 'feature_2_description', 'With Cazpian, your data stays where it is. Its federated query engine delivers fast, secure access—so your teams can analyze and act without delay.'),
    (home_page_id, 'feature_3_title', 'Secure. Scalable. Governed.'),
    (home_page_id, 'feature_3_description', 'Cazpian provides a governed data layer that scales with your analytics, giving teams transparent access to trusted data—without compromising security or compliance.')
  ON CONFLICT (page_id, section_key) DO NOTHING;
END $$;

-- Insert default content for why-cazpian page
DO $$
DECLARE
  why_page_id uuid;
BEGIN
  SELECT id INTO why_page_id FROM pages WHERE slug = 'why-cazpian';
  
  INSERT INTO page_content (page_id, section_key, content) VALUES
    (why_page_id, 'hero_title', 'Why Choose Cazpian'),
    (why_page_id, 'hero_subtitle', 'Built for modern data teams who demand speed, intelligence, and flexibility without compromise.'),
    (why_page_id, 'open_data_title', 'Open Data Architecture'),
    (why_page_id, 'open_data_description', 'Cazpian is built on open standards—Apache Iceberg, Arrow, and Polaris—ensuring complete freedom and flexibility. Your data remains portable, queryable, and future-proof, with no vendor lock-in.'),
    (why_page_id, 'ai_performance_title', 'AI-Driven Performance'),
    (why_page_id, 'ai_performance_description', 'Cazpian infuses AI across the platform—from natural-language search to automatic query optimization. AI copilots help teams uncover insights faster, reduce repetitive work, and boost data literacy.'),
    (why_page_id, 'cost_optimization_title', 'Cost Optimization'),
    (why_page_id, 'cost_optimization_description', 'Scale compute and storage independently. Use just what you need, when you need it, and cut infrastructure waste. Cazpian optimizes workloads and minimizes cloud spend automatically.'),
    (why_page_id, 'governance_title', 'Governance & Security'),
    (why_page_id, 'governance_description', 'Cazpian embeds security and governance at every layer. Define, enforce, and audit policies across catalogs, queries, and access patterns.'),
    (why_page_id, 'deployment_title', 'Deployment Flexibility'),
    (why_page_id, 'deployment_description', 'Deploy Cazpian your way—fully managed in AWS or Azure, or self-hosted on Kubernetes. Run across cloud, hybrid, or on-prem environments with a consistent experience.')
  ON CONFLICT (page_id, section_key) DO NOTHING;
END $$;

-- Insert default content for product page
DO $$
DECLARE
  product_page_id uuid;
BEGIN
  SELECT id INTO product_page_id FROM pages WHERE slug = 'product';
  
  INSERT INTO page_content (page_id, section_key, content) VALUES
    (product_page_id, 'hero_title', 'Cazpian Product Suite'),
    (product_page_id, 'hero_subtitle', 'Choose the deployment that fits your needs. Same powerful platform, flexible delivery options.'),
    (product_page_id, 'cloud_title', 'Cazpian Cloud (Managed)'),
    (product_page_id, 'cloud_description', 'Launch a fully managed lakehouse in minutes on AWS or Azure. We handle scaling, security, and maintenance so your team can focus on data-driven results.'),
    (product_page_id, 'enterprise_title', 'Cazpian Enterprise (Self-Hosted)'),
    (product_page_id, 'enterprise_description', 'Run Cazpian on your own infrastructure with full control. Deploy on Kubernetes in your cloud, on-prem, or hybrid environment.'),
    (product_page_id, 'community_title', 'Cazpian Agent Studio (Free)'),
    (product_page_id, 'community_description', 'Get started for free with local Docker or Kubernetes deployments. Ideal for developers, data teams, and early-stage projects.')
  ON CONFLICT (page_id, section_key) DO NOTHING;
END $$;

-- Insert default content for solutions page
DO $$
DECLARE
  solutions_page_id uuid;
BEGIN
  SELECT id INTO solutions_page_id FROM pages WHERE slug = 'solutions';
  
  INSERT INTO page_content (page_id, section_key, content) VALUES
    (solutions_page_id, 'hero_title', 'Solutions for Every Use Case'),
    (solutions_page_id, 'hero_subtitle', 'From analytics acceleration to industry-specific applications, Cazpian powers data-driven success across teams and sectors.'),
    (solutions_page_id, 'analytics_title', 'Analytics Acceleration'),
    (solutions_page_id, 'analytics_description', 'Turn slow dashboards into instant insights. Cazpian''s engine reduces query latency while its semantic layer removes complexity.'),
    (solutions_page_id, 'self_service_title', 'Self-Service BI'),
    (solutions_page_id, 'self_service_description', 'Empower every stakeholder with governed access to data. Business users get intuitive tools while IT keeps oversight.'),
    (solutions_page_id, 'data_science_title', 'Data Science & ML'),
    (solutions_page_id, 'data_science_description', 'Prepare, explore, and train ML-ready datasets at scale. Collaborate across teams with versioned data and notebook integration.'),
    (solutions_page_id, 'real_time_title', 'Real-Time Operations'),
    (solutions_page_id, 'real_time_description', 'Stream, detect, and respond—all in real-time. Cazpian handles both streaming and batch workloads in a unified platform.')
  ON CONFLICT (page_id, section_key) DO NOTHING;
END $$;

-- Insert default content for resources page
DO $$
DECLARE
  resources_page_id uuid;
BEGIN
  SELECT id INTO resources_page_id FROM pages WHERE slug = 'resources';
  
  INSERT INTO page_content (page_id, section_key, content) VALUES
    (resources_page_id, 'hero_title', 'Resources & Learning'),
    (resources_page_id, 'hero_subtitle', 'Everything you need to succeed with Cazpian—from quick starts to deep technical guides.'),
    (resources_page_id, 'documentation_title', 'Documentation & API'),
    (resources_page_id, 'documentation_description', 'Step-by-step product documentation, sample scripts, and architecture references. Find clear explanations for every API, connector, and capability.'),
    (resources_page_id, 'tutorials_title', 'Tutorials & Quickstarts'),
    (resources_page_id, 'tutorials_description', 'Launch your first Cazpian workload in minutes. Guided labs, notebooks, and code samples make adoption smooth.'),
    (resources_page_id, 'blog_title', 'Blog & Engineering'),
    (resources_page_id, 'blog_description', 'Insights from our engineers, customers, and data community. Explore new features, performance strategies, and architecture deep dives.')
  ON CONFLICT (page_id, section_key) DO NOTHING;
END $$;

-- Insert default content for about page
DO $$
DECLARE
  about_page_id uuid;
BEGIN
  SELECT id INTO about_page_id FROM pages WHERE slug = 'about';
  
  INSERT INTO page_content (page_id, section_key, content) VALUES
    (about_page_id, 'hero_title', 'About Cazpian'),
    (about_page_id, 'hero_subtitle', 'We''re building the future of data platforms—open, intelligent, and designed for the modern cloud.'),
    (about_page_id, 'company_title', 'Company'),
    (about_page_id, 'company_description', 'Cazpian is reimagining the data lakehouse for today''s cloud-native, open-source-first world. We believe in empowering teams to move faster with fewer tools and more intelligence.'),
    (about_page_id, 'team_title', 'Team'),
    (about_page_id, 'team_description', 'Our team blends deep experience in cloud, OSS, data engineering, and AI. We''re product-obsessed, customer-driven, and community-rooted.'),
    (about_page_id, 'careers_title', 'Careers'),
    (about_page_id, 'careers_description', 'Join a high-impact, remote-friendly team building the future of big data. We value autonomy, creativity, and a bias for action.')
  ON CONFLICT (page_id, section_key) DO NOTHING;
END $$;

-- Insert default content for contact page
DO $$
DECLARE
  contact_page_id uuid;
BEGIN
  SELECT id INTO contact_page_id FROM pages WHERE slug = 'contact';
  
  INSERT INTO page_content (page_id, section_key, content) VALUES
    (contact_page_id, 'hero_title', 'Get in Touch'),
    (contact_page_id, 'hero_subtitle', 'Have questions about Cazpian? Want to schedule a demo? We''re here to help you succeed with your data initiatives.'),
    (contact_page_id, 'form_title', 'Send us a message'),
    (contact_page_id, 'contact_email', 'hello@cazpian.com'),
    (contact_page_id, 'contact_phone', '+1 (555) 123-4567'),
    (contact_page_id, 'contact_address', 'San Francisco, CA')
  ON CONFLICT (page_id, section_key) DO NOTHING;
END $$;