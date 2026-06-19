import { renderNavbar, initNavbar } from '../components/navbar.js'
import { renderFooter } from '../components/footer.js'
import { sectionHeader } from '../components/section-header.js'
import { initRevealAnimations } from '../utils/animations.js'
import { refreshCursorHovers } from '../components/cursor.js'
import { waLink } from '../utils/helpers.js'
import { updateSEO, injectBreadcrumbs } from '../utils/seo.js'

export async function caseStudiesPage() {
  const html = `
    ${renderNavbar()}
    
    <section class="careers-hero" style="min-height: 400px; height: 50vh;">
      <div class="careers-hero-bg"></div>
      <div class="careers-hero-inner">
        <div class="hero-eyebrow reveal d1">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">Impact & Results</span>
        </div>
        <h1 class="reveal d2">Case <em>Studies</em></h1>
        <p class="hero-sub reveal d3">Discover how organizations have transformed their culture through our programs.</p>
      </div>
    </section>

    <section class="case-section" style="background:var(--bg-dark);">
      <div class="case-grid">
        <!-- Case 1 -->
        <div class="case-card reveal up d1">
          <div class="case-card-header">
            <span class="case-org">Global Tech Corp</span>
            <span class="case-type">IT & Software</span>
          </div>
          <div class="case-card-body" style="background:var(--bg-mid);">
            <div class="case-label">The Challenge</div>
            <p class="case-text" style="color:var(--text-light)">High burnout rates, missed deadlines, and poor cross-departmental communication following a major restructuring.</p>
            <div class="case-label">The Solution</div>
            <p class="case-text" style="color:var(--text-light)">A 12-week comprehensive program including bi-weekly virtual laughter sessions and leadership emotional regulation workshops.</p>
            <div class="case-label">The Results</div>
            <div class="case-results">
              <span class="case-result" style="background:var(--bg-dark);color:var(--gold);">↓ 40% Reported Stress</span>
              <span class="case-result" style="background:var(--bg-dark);color:var(--gold);">↑ 25% Productivity</span>
            </div>
          </div>
        </div>

        <!-- Case 2 -->
        <div class="case-card reveal up d2">
          <div class="case-card-header">
            <span class="case-org">City Hospital</span>
            <span class="case-type">Healthcare</span>
          </div>
          <div class="case-card-body" style="background:var(--bg-mid);">
            <div class="case-label">The Challenge</div>
            <p class="case-text" style="color:var(--text-light)">Severe compassion fatigue and emotional exhaustion among frontline nursing staff.</p>
            <div class="case-label">The Solution</div>
            <p class="case-text" style="color:var(--text-light)">Integration of 15-minute "Laughter Breaks" at shift changes, plus monthly deep-relaxation retreats.</p>
            <div class="case-label">The Results</div>
            <div class="case-results">
              <span class="case-result" style="background:var(--bg-dark);color:var(--gold);">↓ Absenteeism</span>
              <span class="case-result" style="background:var(--bg-dark);color:var(--gold);">Improved Patient Care Ratings</span>
            </div>
          </div>
        </div>

        <!-- Case 3 -->
        <div class="case-card reveal up d3">
          <div class="case-card-header">
            <span class="case-org">Creative Agency</span>
            <span class="case-type">Media & Design</span>
          </div>
          <div class="case-card-body" style="background:var(--bg-mid);">
            <div class="case-label">The Challenge</div>
            <p class="case-text" style="color:var(--text-light)">Creative blocks, intense pitch stress, and a highly competitive internal culture hindering collaboration.</p>
            <div class="case-label">The Solution</div>
            <p class="case-text" style="color:var(--text-light)">Monthly in-person "Play & Joy" workshops designed to break down ego barriers and stimulate creative thinking.</p>
            <div class="case-label">The Results</div>
            <div class="case-results">
              <span class="case-result" style="background:var(--bg-dark);color:var(--gold);">Enhanced Collaboration</span>
              <span class="case-result" style="background:var(--bg-dark);color:var(--gold);">↑ Pitch Win Rate</span>
            </div>
          </div>
        </div>
      </div>
      
      <div style="text-align:center; margin-top:80px;" class="reveal up">
        <a href="/corporate" data-link class="btn-gold">Transform Your Team</a>
      </div>
    </section>

    ${renderFooter()}
  `

  const init = () => {
    updateSEO({
      title: 'Case Studies | DeStress Hub Success Stories',
      description: 'Discover how DeStress Hub has transformed workplace wellness across organizations. Real case studies showcasing the impact of laughter therapy and corporate wellness programs.',
      path: '/case-studies'
    })
    injectBreadcrumbs([{ name: 'Home', url: '/' }, { name: 'Case Studies' }])
    initNavbar()
    initRevealAnimations()
    refreshCursorHovers()
  }

  return { html, init }
}
