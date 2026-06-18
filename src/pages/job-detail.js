import { renderNavbar, initNavbar } from '../components/navbar.js'
import { renderFooter } from '../components/footer.js'
import { initRevealAnimations } from '../utils/animations.js'
import { refreshCursorHovers } from '../components/cursor.js'
import { getJobBySlug } from '../supabase.js'
import { waLink } from '../utils/helpers.js'

export async function jobDetailPage(params) {
  const job = await getJobBySlug(params.slug)

  if (!job) {
    return {
      html: `
        ${renderNavbar()}
        <div class="job-detail-page" style="display:flex;align-items:center;justify-content:center;text-align:center;">
          <div>
            <h1 style="font-family:'Cormorant Garamond',serif;font-size:3rem;color:var(--gold);margin-bottom:16px;">Job Not Found</h1>
            <p style="color:var(--text-muted);margin-bottom:32px;">The position you're looking for doesn't exist or is no longer available.</p>
            <a href="/careers" data-link class="btn-outline">Back to Careers</a>
          </div>
        </div>
        ${renderFooter()}
      `,
      init: () => { initNavbar(); refreshCursorHovers(); }
    }
  }

  const renderList = (items) => {
    if (!items || items.length === 0) return ''
    return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`
  }

  const applyLink = job.google_form_link || waLink(`Hi! I'm interested in applying for the ${job.title} position.`)

  const html = `
    ${renderNavbar()}
    
    <div class="job-detail-page">
      <div class="job-detail-inner">
        <a href="/careers" data-link class="job-detail-back reveal d1">← Back to Careers</a>
        
        <div class="job-detail-header reveal up d2">
          <h1>${job.title}</h1>
          <div class="job-detail-badges">
            <span class="job-badge type">${job.employment_type}</span>
            <span class="job-badge location">${job.location}</span>
            ${job.department ? `<span class="job-badge location">${job.department}</span>` : ''}
            ${job.experience_required ? `<span class="job-badge location">${job.experience_required}</span>` : ''}
          </div>
        </div>

        ${job.description ? `
        <div class="job-detail-section reveal up">
          <h3>Overview</h3>
          <p>${job.description.replace(/\n/g, '<br/>')}</p>
        </div>` : ''}

        ${job.responsibilities && job.responsibilities.length > 0 ? `
        <div class="job-detail-section reveal up">
          <h3>Responsibilities</h3>
          ${renderList(job.responsibilities)}
        </div>` : ''}

        ${job.requirements && job.requirements.length > 0 ? `
        <div class="job-detail-section reveal up">
          <h3>Requirements</h3>
          ${renderList(job.requirements)}
        </div>` : ''}

        ${job.benefits && job.benefits.length > 0 ? `
        <div class="job-detail-section reveal up">
          <h3>Benefits</h3>
          ${renderList(job.benefits)}
        </div>` : ''}

        ${job.salary_range ? `
        <div class="job-detail-section reveal up">
          <h3>Salary Range</h3>
          <p>${job.salary_range}</p>
        </div>` : ''}

        <div class="reveal up" style="margin-top:56px; border-top:1px solid rgba(245,240,232,.1); padding-top:40px;">
          <a href="${applyLink}" target="_blank" class="job-apply-btn">Apply Now →</a>
        </div>
      </div>
    </div>

    ${renderFooter()}
  `

  const init = () => {
    initNavbar()
    initRevealAnimations()
    refreshCursorHovers()
  }

  return { html, init }
}
