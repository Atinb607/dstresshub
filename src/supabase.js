import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = (supabaseUrl && supabaseKey && supabaseKey !== 'your-anon-key-here')
  ? createClient(supabaseUrl, supabaseKey)
  : null

/**
 * Check if Supabase is configured and available
 */
export function isSupabaseReady() {
  return supabase !== null
}

/* ---- Jobs API ---- */

export async function getPublishedJobs() {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('status', 'published')
    .order('created_at', { ascending: false })
  if (error) { console.error('Error fetching jobs:', error); return [] }
  return data || []
}

export async function getJobBySlug(slug) {
  if (!supabase) return null
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()
  if (error) { console.error('Error fetching job:', error); return null }
  return data
}

export async function getJobById(id) {
  if (!supabase) return null
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', id)
    .single()
  if (error) { console.error('Error fetching job by ID:', error); return null }
  return data
}

export async function getAllJobs() {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) { console.error('Error fetching all jobs:', error); return [] }
  return data || []
}

export async function createJob(job) {
  if (!supabase) return null
  const { data, error } = await supabase
    .from('jobs')
    .insert([job])
    .select()
    .single()
  if (error) { console.error('Error creating job:', error); return null }
  return data
}

export async function updateJob(id, updates) {
  if (!supabase) return null
  const { data, error } = await supabase
    .from('jobs')
    .update(updates)
    .eq('id', id)
    .select()
    .single()
  if (error) { console.error('Error updating job:', error); return null }
  return data
}

export async function deleteJob(id) {
  if (!supabase) return false
  const { error } = await supabase
    .from('jobs')
    .delete()
    .eq('id', id)
  if (error) { console.error('Error deleting job:', error); return false }
  return true
}

/* ---- Auth API ---- */

export async function signIn(email, password) {
  if (!supabase) return { error: { message: 'Supabase not configured' } }
  return await supabase.auth.signInWithPassword({ email, password })
}

export async function signOut() {
  if (!supabase) return
  await supabase.auth.signOut()
}

export async function getSession() {
  if (!supabase) return null
  const { data: { session } } = await supabase.auth.getSession()
  return session
}

/* ---- Leads API ---- */

export async function submitLead(lead) {
  if (!supabase) return null
  const { data, error } = await supabase
    .from('leads')
    .insert([lead])
    .select()
    .single()
  if (error) { console.error('Error submitting lead:', error); return null }
  return data
}
