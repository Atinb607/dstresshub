import { getJobById, createJob, updateJob, getSession, signOut } from '../../supabase.js'
import { navigate } from '../../router.js'
import { toast, generateSlug } from '../../utils/helpers.js'

export async function adminJobFormPage(params) {
  const session = await getSession()
  if (!session) {
    navigate('/admin')
    return { html: '' }
  }

  const isEdit = !!params?.id
  let job = null
  if (isEdit) {
    job = await getJobById(params.id)
    if (!job) {
      toast('Job not found', 'error')
      navigate('/admin/jobs')
      return { html: '' }
    }
  }

  const escapeHtml = (unsafe) => {
    return (unsafe || '').replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
  }

  const renderListFields = (id, items = []) => {
    if (items.length === 0) items = ['']
    return items.map(item => `
      <div class="list-field-item">
        <input type="text" name="${id}[]" value="${escapeHtml(item)}">
        <button type="button" class="remove-btn">×</button>
      </div>
    `).join('')
  }

  const html = `
    <div class="admin-page">
      <div class="admin-layout">
        <div class="admin-sidebar">
          <div class="admin-sidebar-logo">DStress<span>Hub</span></div>
          <div class="admin-sidebar-nav">
            <a href="/admin/jobs" data-link>Job Listings</a>
            <a href="/admin/jobs/new" data-link class="${!isEdit ? 'active' : ''}">Create Job</a>
            <a href="/" data-link target="_blank">View Live Site</a>
          </div>
          <div class="admin-sidebar-footer">
            <button id="sign-out-btn" class="admin-btn" style="width:100%;text-align:left;border:none;">Sign Out</button>
          </div>
        </div>
        
        <div class="admin-content">
          <div class="admin-header">
            <h1>${isEdit ? 'Edit Job' : 'Create New Job'}</h1>
            <a href="/admin/jobs" data-link class="admin-btn">Cancel</a>
          </div>
          
          <form id="job-form" class="job-form">
            <div class="form-group">
              <label>Job Title *</label>
              <input type="text" id="title" required value="${escapeHtml(job?.title)}">
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label>Department</label>
                <input type="text" id="department" value="${escapeHtml(job?.department)}" placeholder="e.g. Facilitation">
              </div>
              <div class="form-group">
                <label>Location *</label>
                <input type="text" id="location" required value="${escapeHtml(job?.location || 'Remote, India')}">
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Employment Type *</label>
                <select id="employment_type" required>
                  <option value="Full-time" ${job?.employment_type === 'Full-time' ? 'selected' : ''}>Full-time</option>
                  <option value="Part-time" ${job?.employment_type === 'Part-time' ? 'selected' : ''}>Part-time</option>
                  <option value="Contract" ${job?.employment_type === 'Contract' ? 'selected' : ''}>Contract</option>
                  <option value="Freelance" ${job?.employment_type === 'Freelance' ? 'selected' : ''}>Freelance</option>
                </select>
              </div>
              <div class="form-group">
                <label>Experience Required</label>
                <input type="text" id="experience" value="${escapeHtml(job?.experience_required)}" placeholder="e.g. 2-4 years">
              </div>
            </div>

            <div class="form-group">
              <label>Salary Range</label>
              <input type="text" id="salary" value="${escapeHtml(job?.salary_range)}" placeholder="e.g. ₹4,00,000 - ₹6,00,000">
            </div>

            <div class="form-group">
              <label>Overview / Description</label>
              <textarea id="description" required>${escapeHtml(job?.description)}</textarea>
            </div>

            <div class="form-group">
              <label>Responsibilities</label>
              <div class="list-field" id="responsibilities-list">
                ${renderListFields('responsibilities', job?.responsibilities)}
              </div>
              <button type="button" class="add-item-btn" data-target="responsibilities-list">+ Add Responsibility</button>
            </div>

            <div class="form-group">
              <label>Requirements</label>
              <div class="list-field" id="requirements-list">
                ${renderListFields('requirements', job?.requirements)}
              </div>
              <button type="button" class="add-item-btn" data-target="requirements-list">+ Add Requirement</button>
            </div>

            <div class="form-group">
              <label>Benefits</label>
              <div class="list-field" id="benefits-list">
                ${renderListFields('benefits', job?.benefits)}
              </div>
              <button type="button" class="add-item-btn" data-target="benefits-list">+ Add Benefit</button>
            </div>

            <div class="form-group">
              <label>Google Form Link (For Applications)</label>
              <input type="url" id="google_form_link" value="${escapeHtml(job?.google_form_link)}" placeholder="https://forms.gle/...">
            </div>

            <div class="form-group">
              <label>Status</label>
              <select id="status">
                <option value="draft" ${job?.status === 'draft' ? 'selected' : ''}>Draft (Hidden)</option>
                <option value="published" ${job?.status === 'published' ? 'selected' : ''}>Published (Visible)</option>
              </select>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn-gold">Save Job</button>
              <a href="/admin/jobs" data-link class="btn-outline" style="color:var(--text-dark); border-color:var(--cream-dark);">Cancel</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  `

  const init = () => {
    // Dynamic List Fields Logic
    document.querySelectorAll('.add-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.target
        const container = document.getElementById(targetId)
        const name = targetId.split('-')[0]
        const div = document.createElement('div')
        div.className = 'list-field-item'
        div.innerHTML = `
          <input type="text" name="${name}[]" value="">
          <button type="button" class="remove-btn">×</button>
        `
        container.appendChild(div)
        attachRemoveEvent(div.querySelector('.remove-btn'))
      })
    })

    const attachRemoveEvent = (btn) => {
      btn.addEventListener('click', () => btn.closest('.list-field-item').remove())
    }
    document.querySelectorAll('.remove-btn').forEach(attachRemoveEvent)

    const form = document.getElementById('job-form')
    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      const submitBtn = form.querySelector('button[type="submit"]')
      submitBtn.textContent = 'Saving...'
      submitBtn.disabled = true

      const getListValues = (name) => {
        const inputs = document.querySelectorAll(`input[name="${name}[]"]`)
        return Array.from(inputs).map(i => i.value.trim()).filter(v => v)
      }

      const jobData = {
        title: document.getElementById('title').value.trim(),
        department: document.getElementById('department').value.trim(),
        location: document.getElementById('location').value.trim(),
        employment_type: document.getElementById('employment_type').value,
        experience_required: document.getElementById('experience').value.trim(),
        salary_range: document.getElementById('salary').value.trim(),
        description: document.getElementById('description').value.trim(),
        responsibilities: getListValues('responsibilities'),
        requirements: getListValues('requirements'),
        benefits: getListValues('benefits'),
        google_form_link: document.getElementById('google_form_link').value.trim(),
        status: document.getElementById('status').value
      }

      let res
      if (isEdit) {
        res = await updateJob(params.id, jobData)
      } else {
        jobData.slug = generateSlug(jobData.title)
        res = await createJob(jobData)
      }

      if (res) {
        toast('Job saved successfully', 'success')
        navigate('/admin/jobs')
      } else {
        toast('Failed to save job. Check console.', 'error')
        submitBtn.textContent = 'Save Job'
        submitBtn.disabled = false
      }
    })

    const soBtn = document.getElementById('sign-out-btn')
    if (soBtn) {
      soBtn.addEventListener('click', async () => {
        await signOut()
        navigate('/admin')
      })
    }
  }

  return { html, init }
}
