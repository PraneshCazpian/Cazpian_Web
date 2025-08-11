-- Tables
create table if not exists public.pages (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone
);

create table if not exists public.page_sections (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.pages(id) on delete cascade,
  section_key text not null,
  content_type text not null check (content_type in ('text','html','image','json')),
  content_value text not null,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone,
  unique(page_id, section_key)
);

create table if not exists public.admins (
  id uuid primary key, -- matches auth.users.id
  email text unique not null,
  role text not null default 'admin' check (role in ('admin')),
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.pages enable row level security;
alter table public.page_sections enable row level security;
alter table public.admins enable row level security;

-- Policies: public read pages/page_sections
create policy "Allow anon read pages" on public.pages for select
  to anon using (true);
create policy "Allow auth read pages" on public.pages for select
  to authenticated using (true);

create policy "Allow anon read sections" on public.page_sections for select
  to anon using (true);
create policy "Allow auth read sections" on public.page_sections for select
  to authenticated using (true);

-- Admins can write
create policy "Admins write pages" on public.pages for insert to authenticated
  with check (exists (select 1 from public.admins a where a.id = auth.uid() and a.role = 'admin'));
create policy "Admins update pages" on public.pages for update to authenticated
  using (exists (select 1 from public.admins a where a.id = auth.uid() and a.role = 'admin'))
  with check (exists (select 1 from public.admins a where a.id = auth.uid() and a.role = 'admin'));
create policy "Admins delete pages" on public.pages for delete to authenticated
  using (exists (select 1 from public.admins a where a.id = auth.uid() and a.role = 'admin'));

create policy "Admins write sections" on public.page_sections for insert to authenticated
  with check (exists (select 1 from public.admins a where a.id = auth.uid() and a.role = 'admin'));
create policy "Admins update sections" on public.page_sections for update to authenticated
  using (exists (select 1 from public.admins a where a.id = auth.uid() and a.role = 'admin'))
  with check (exists (select 1 from public.admins a where a.id = auth.uid() and a.role = 'admin'));
create policy "Admins delete sections" on public.page_sections for delete to authenticated
  using (exists (select 1 from public.admins a where a.id = auth.uid() and a.role = 'admin'));

-- Admins self-access
create policy "Admins manage admins" on public.admins
  for select using (auth.uid() is not null and exists (select 1 from public.admins a where a.id = auth.uid() and a.role = 'admin'))
  with check (auth.uid() is not null and exists (select 1 from public.admins a where a.id = auth.uid() and a.role = 'admin'));

-- Helper seed (optional): insert initial pages and sections
-- insert into public.pages (slug, title) values ('home','Home') on conflict (slug) do nothing;
-- with p as (select id from public.pages where slug = 'home')
-- insert into public.page_sections (page_id, section_key, content_type, content_value)
-- select p.id, 'hero.title', 'text', 'Transform Data into Decisions Faster with Cazpian AI Lakehouse' from p
-- on conflict (page_id, section_key) do nothing;


