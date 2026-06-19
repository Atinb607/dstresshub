import { renderNavbar, initNavbar } from '../components/navbar.js'
import { renderFooter } from '../components/footer.js'
import { sectionHeader } from '../components/section-header.js'
import { initRevealAnimations, initCounterAnimations } from '../utils/animations.js'
import { refreshCursorHovers } from '../components/cursor.js'
import { waLink } from '../utils/helpers.js'
import { updateSEO, injectBreadcrumbs } from '../utils/seo.js'


export async function corporatePage() {
  const html = `
    ${renderNavbar()}
    
    <section class="corp-hero">
      <div class="corp-hero-bg"></div>
      <div class="corp-hero-inner">
        <div class="hero-eyebrow reveal d1">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">Corporate Solutions</span>
        </div>
        <h1 class="reveal d2">Transform Your<br/><em>Workplace Culture.</em></h1>
        <p class="hero-sub reveal d3">Empower your team with science-backed laughter therapy to reduce burnout, improve emotional intelligence, and foster genuine connection.</p>
        <a href="#enquiry" class="btn-gold reveal d4">Request a Proposal</a>
      </div>
    </section>

    <!-- Trust Stats -->
    <div class="stats-strip">
      <div class="stats-grid">
        <div class="stat-item reveal up">
          <div class="stat-number"><span data-count="30" data-suffix="%">0</span></div>
          <div class="stat-label">Reduction in Stress</div>
        </div>
        <div class="stat-item reveal up d1">
          <div class="stat-number"><span data-count="45" data-suffix="%">0</span></div>
          <div class="stat-label">Increase in Morale</div>
        </div>
        <div class="stat-item reveal up d2">
          <div class="stat-number"><span data-count="50" data-suffix="+">0</span></div>
          <div class="stat-label">Corporate Clients</div>
        </div>
        <div class="stat-item reveal up d3">
          <div class="stat-number">4.9/5</div>
          <div class="stat-label">Average Rating</div>
        </div>
      </div>
    </div>

    <!-- Programs -->
    <section class="corp-programs-section">
      <div class="max-w">
        <div class="reveal up" style="margin-bottom:64px;">
          ${sectionHeader({ tag: 'Our Offerings', title: 'Tailored programs for<br/><em>modern teams.</em>', theme: 'dark' })}
        </div>
        <div class="corp-grid">
          <div class="corp-card reveal up d1">
            <div class="corp-icon">🏢</div>
            <h3>Lunch & Learn Sessions</h3>
            <p>A quick, 45-minute interactive session to introduce the science of laughter and provide immediate stress relief during the workday.</p>
          </div>
          <div class="corp-card reveal up d2">
            <div class="corp-icon">🤝</div>
            <h3>Team Building Workshops</h3>
            <p>Half-day programs designed to break down silos, improve communication, and build psychological safety through shared joy.</p>
          </div>
          <div class="corp-card reveal up d3">
            <div class="corp-icon">👑</div>
            <h3>Leadership Retreats</h3>
            <p>Equip managers with emotional regulation tools to lead with empathy, manage team stress, and prevent collective burnout.</p>
          </div>
          <div class="corp-card reveal up d1">
            <div class="corp-icon">📅</div>
            <h3>Ongoing Wellness Programs</h3>
            <p>Weekly or monthly sessions integrated into your company's wellness calendar for sustained emotional wellbeing.</p>
          </div>
          <div class="corp-card reveal up d2">
            <div class="corp-icon">🌐</div>
            <h3>Virtual Remote Sessions</h3>
            <p>Engage distributed teams with high-energy online laughter sessions that combat screen fatigue and isolation.</p>
          </div>
          <div class="corp-card reveal up d3">
            <div class="corp-icon">🎨</div>
            <h3>Custom Engagements</h3>
            <p>Have a specific goal? We design bespoke programs tailored to your organizational challenges and culture.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Enquiry Form -->
    <section class="corp-enquiry-section" id="enquiry">
      <div class="max-w">
        <div class="reveal up" style="text-align:center;">
          ${sectionHeader({ tag: 'Enquiry', title: 'Ready to bring joy to<br/><em>your organization?</em>', theme: 'light' })}
        </div>
        
        <form class="corp-enquiry-form reveal up d2" id="corp-form">
          <div class="form-group">
            <label>Full Name</label>
            <input type="text" id="c-name" required placeholder="John Doe">
          </div>
          <div class="form-group">
            <label>Company Name</label>
            <input type="text" id="c-company" required placeholder="Acme Corp">
          </div>
          <div class="form-group">
            <label>Work Email</label>
            <input type="email" id="c-email" required placeholder="john@acmecorp.com">
          </div>
          <div class="form-group">
            <label>Phone Number (WhatsApp)</label>
            <input type="tel" id="c-phone" required placeholder="+91 98765 43210">
          </div>
          <div class="form-group">
            <label>Estimated Team Size</label>
            <select id="c-size">
              <option value="10-50">10-50 Employees</option>
              <option value="51-200">51-200 Employees</option>
              <option value="200-500">200-500 Employees</option>
              <option value="500+">500+ Employees</option>
            </select>
          </div>
          <div class="form-group">
            <label>Message / Requirements</label>
            <textarea id="c-msg" placeholder="Tell us about your team and goals..."></textarea>
          </div>
          <button type="submit" class="btn-gold" style="width:100%; justify-content:center;">Submit Enquiry</button>
        </form>
      </div>
    </section>

    ${renderFooter()}
  `

  const init = () => {
    updateSEO({
      title: 'Corporate Wellness Programs | DeStress Hub',
      description: 'Transform your workplace with DeStress Hub corporate wellness programs. Laughter therapy, stress management workshops, emotional intelligence training, and employee engagement initiatives for teams of all sizes.',
      path: '/corporate'
    })
    injectBreadcrumbs([{ name: 'Home', url: '/' }, { name: 'Corporate Wellness' }])

    initNavbar()
    initRevealAnimations()
    initCounterAnimations()
    refreshCursorHovers()

    const form = document.getElementById('corp-form')
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        const name = document.getElementById('c-name').value
        const company = document.getElementById('c-company').value
        const size = document.getElementById('c-size').value
        const msg = document.getElementById('c-msg').value

        const waText = `Hi DeStressHub! I'd like to request a Corporate Proposal.
*Name:* ${name}
*Company:* ${company}
*Team Size:* ${size}
*Message:* ${msg}`

        window.open(waLink(waText), '_blank')
        form.reset()
      })
    }
  }

  return { html, init }
}
