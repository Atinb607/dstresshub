-- ============================================================
-- DeStressHub — Supabase Database Schema
-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor)
-- ============================================================

-- Jobs table for the careers/recruitment system
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  department TEXT,
  location TEXT,
  employment_type TEXT DEFAULT 'Full-time'
    CHECK (employment_type IN ('Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance')),
  experience_required TEXT,
  salary_range TEXT,
  description TEXT,
  responsibilities TEXT[] DEFAULT '{}',
  requirements TEXT[] DEFAULT '{}',
  benefits TEXT[] DEFAULT '{}',
  google_form_link TEXT,
  status TEXT DEFAULT 'draft'
    CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Auto-update the updated_at timestamp on every UPDATE
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_jobs_updated_at
  BEFORE UPDATE ON jobs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- Row Level Security (RLS)
-- ============================================================

ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

-- Anyone (including anonymous visitors) can read published jobs
CREATE POLICY "Public can read published jobs"
  ON jobs
  FOR SELECT
  USING (status = 'published');

-- Authenticated users (admins) have full CRUD access
CREATE POLICY "Authenticated users have full access"
  ON jobs
  FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- ============================================================
-- Indexes for performance
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_jobs_slug ON jobs (slug);
CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs (status);
CREATE INDEX IF NOT EXISTS idx_jobs_created_at ON jobs (created_at DESC);

-- ============================================================
-- Leads table for the Free Stress Audit form
-- ============================================================

CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT,
  phone TEXT,
  organization TEXT,
  team_size TEXT,
  industry TEXT,
  challenges TEXT[] DEFAULT '{}',
  source TEXT DEFAULT 'stress-audit',
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Anyone can insert a lead (form submission)
CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated users can read leads
CREATE POLICY "Authenticated users can read leads"
  ON leads
  FOR SELECT
  USING (auth.role() = 'authenticated');
