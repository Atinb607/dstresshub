import { renderNavbar, initNavbar } from '../components/navbar.js'
import { renderFooter } from '../components/footer.js'
import { sectionHeader } from '../components/section-header.js'
import { initRevealAnimations } from '../utils/animations.js'
import { refreshCursorHovers } from '../components/cursor.js'
import { getPublishedJobs } from '../supabase.js'
import { waLink } from '../utils/helpers.js'
import { updateSEO, injectBreadcrumbs } from '../utils/seo.js'


export async function careersPage() {
  // Fetch jobs dynamically
  const jobs = await getPublishedJobs()

  const renderJobs = () => {
    if (jobs.length === 0) {
      return `
        <div class="jobs-empty reveal up">
          <p style="margin-bottom:16px;">We don't have open positions right now, but we're always looking for passionate people. Drop us a message!</p>
          <a href="${waLink('Hi! I am interested in future opportunities at DeStressHub.')}" target="_blank" class="btn-outline">Say Hello</a>
        </div>
      `
    }

    let jobsHtml = '<div class="jobs-grid">'
    jobs.forEach((job, idx) => {
      const delay = `d${(idx % 4) + 1}`
      jobsHtml += `
        <div class="job-card reveal up ${delay}">
          <h3>${job.title}</h3>
          <div class="job-meta">
            <span class="job-tag">${job.employment_type}</span>
            <span class="job-tag">${job.location}</span>
            <span class="job-tag">${job.department || 'General'}</span>
          </div>
          <a href="/careers/job/${job.slug}" data-link class="card-link" style="margin-top:auto;">View & Apply →</a>
        </div>
      `
    })
    jobsHtml += '</div>'
    return jobsHtml
  }

  const html = `
    ${renderNavbar()}
    
    <!-- Hero -->
    <section class="careers-hero">
      <div class="careers-hero-bg"></div>
      <div class="careers-hero-inner">
        <div class="hero-eyebrow reveal d1">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">Join Our Mission</span>
        </div>
        <h1 class="reveal d2">Join <em>DeStressHub</em></h1>
        <p class="hero-sub reveal d3">Help us build happier, healthier workplaces through wellness, laughter, and emotional wellbeing.</p>
        <a href="#positions" class="btn-gold reveal d4">View Open Positions</a>
      </div>
    </section>

    <!-- Why Work With Us -->
    <section class="why-section">
      <div class="max-w reveal up">
        ${sectionHeader({ tag: 'Why DeStressHub', title: 'More than a job,<br/><em>a purpose.</em>', theme: 'light' })}
      </div>
      <div class="why-grid">
        <div class="why-card reveal up d1">
          <div class="why-icon">🌱</div>
          <h3>Meaningful Impact</h3>
          <p>Help transform lives through science-backed wellness programs.</p>
        </div>
        <div class="why-card reveal up d2">
          <div class="why-icon">🏠</div>
          <h3>Flexible Work Culture</h3>
          <p>Remote and hybrid opportunities. We trust you to do great work.</p>
        </div>
        <div class="why-card reveal up d3">
          <div class="why-icon">📈</div>
          <h3>Growth Opportunities</h3>
          <p>Continuous training, mentorship, and career development pathways.</p>
        </div>
        <div class="why-card reveal up d4">
          <div class="why-icon">💚</div>
          <h3>Wellness First</h3>
          <p>We practice what we teach. Your wellbeing is our priority.</p>
        </div>
      </div>
    </section>

    <!-- Positions -->
    <section class="positions-section" id="positions">
      <div class="positions-inner">
        <div class="reveal up">
          ${sectionHeader({ tag: 'Open Positions', title: 'Find your role<br/><em>at DeStressHub.</em>', theme: 'dark' })}
        </div>
        ${renderJobs()}
      </div>
    </section>

    <!-- Hiring Process -->
    <section class="hiring-section">
      <div class="max-w">
        <div class="reveal up" style="text-align:center; display:flex; flex-direction:column; align-items:center; margin-bottom:80px;">
          ${sectionHeader({ tag: 'Our Process', title: 'From application<br/><em>to offer.</em>', theme: 'dark' })}
        </div>
        <div class="how-steps">
          <div class="how-step reveal up d1">
            <div class="step-n">01</div>
            <div class="step-icon">📝</div>
            <div class="step-title">Apply Online</div>
            <div class="step-desc">Submit your application via our quick Google Form.</div>
          </div>
          <div class="how-step reveal up d2">
            <div class="step-n">02</div>
            <div class="step-icon">👋</div>
            <div class="step-title">Initial Screening</div>
            <div class="step-desc">A brief chat to align on culture and expectations.</div>
          </div>
          <div class="how-step reveal up d3">
            <div class="step-n">03</div>
            <div class="step-icon">🎙️</div>
            <div class="step-title">Interview Round</div>
            <div class="step-desc">Meet the team and discuss your skills in depth.</div>
          </div>
          <div class="how-step reveal up d4">
            <div class="step-n">04</div>
            <div class="step-icon">🎉</div>
            <div class="step-title">Offer Letter</div>
            <div class="step-desc">Welcome to the DeStressHub family!</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="emp-testi-section">
      <div class="max-w">
        <div class="reveal up" style="text-align:center; display:flex; flex-direction:column; align-items:center; margin-bottom:64px;">
          ${sectionHeader({ tag: 'Our Team', title: 'What our team<br/><em>has to say.</em>', theme: 'dark' })}
        </div>
        <div class="testi-grid">
          <div class="testi-card reveal up d1">
            <div class="testi-text">"Joining DeStressHub was the best career decision. Every day I help people rediscover joy, that's incredibly fulfilling."</div>
            <div class="testi-author">
              <div class="testi-avatar">A</div>
              <div>
                <div class="testi-name">Ananya R.</div>
                <div class="testi-role">Wellness Facilitator</div>
              </div>
            </div>
          </div>
          <div class="testi-card reveal up d2">
            <div class="testi-text">"The flexibility and trust here is unmatched. I work remotely and still feel deeply connected to the mission."</div>
            <div class="testi-author">
              <div class="testi-avatar">K</div>
              <div>
                <div class="testi-name">Karan D.</div>
                <div class="testi-role">Program Coordinator</div>
              </div>
            </div>
          </div>
          <div class="testi-card reveal up d3">
            <div class="testi-text">"I started as a fresher and the team invested in my growth. Now I lead corporate workshops independently."</div>
            <div class="testi-author">
              <div class="testi-avatar">M</div>
              <div>
                <div class="testi-name">Meera T.</div>
                <div class="testi-role">Senior Facilitator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="careers-faq-section">
      <div class="max-w">
        <div class="reveal up" style="margin-bottom:64px;">
          ${sectionHeader({ tag: 'Questions', title: 'Frequently asked<br/><em>questions.</em>', theme: 'dark' })}
        </div>
        <div class="faq-list reveal up">
          <div class="faq-item">
            <div class="faq-q">Are freshers eligible? <span class="faq-icon">+</span></div>
            <div class="faq-a"><p>Absolutely. We value enthusiasm and willingness to learn. Training and mentorship are provided for all new team members.</p></div>
          </div>
          <div class="faq-item">
            <div class="faq-q">Will training be provided? <span class="faq-icon">+</span></div>
            <div class="faq-a"><p>Yes. Every team member goes through our comprehensive laughter therapy certification and facilitation training program.</p></div>
          </div>
        </div>
      </div>
    </section>

    ${renderFooter()}
  `

  const init = () => {
    updateSEO({
      title: 'Careers at DeStress Hub | Join Our Wellness Team',
      description: 'Join DeStress Hub and help build happier, healthier workplaces. Explore open positions in wellness facilitation, program coordination, and more.',
      path: '/careers'
    })
    injectBreadcrumbs([{ name: 'Home', url: '/' }, { name: 'Careers' }])

    initNavbar()
    initRevealAnimations()
    refreshCursorHovers()

    // FAQ Accordion
    document.querySelectorAll('.faq-q').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.parentElement
        const isOpen = item.classList.contains('open')
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'))
        if (!isOpen) item.classList.add('open')
      })
    })
  }

  return { html, init }
}
