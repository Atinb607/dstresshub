import { renderNavbar, initNavbar } from '../components/navbar.js'
import { renderFooter } from '../components/footer.js'
import { sectionHeader } from '../components/section-header.js'
import { initRevealAnimations } from '../utils/animations.js'
import { refreshCursorHovers } from '../components/cursor.js'

export async function resourcesPage() {
  const html = `
    ${renderNavbar()}
    
    <section class="careers-hero" style="min-height: 400px; height: 50vh;">
      <div class="careers-hero-bg"></div>
      <div class="careers-hero-inner">
        <div class="hero-eyebrow reveal d1">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-text">Knowledge Hub</span>
        </div>
        <h1 class="reveal d2">Articles & <em>Resources</em></h1>
        <p class="hero-sub reveal d3">Insights on stress management, the science of laughter, and workplace wellbeing.</p>
      </div>
    </section>

    <section style="background:var(--bg-light); padding:120px 0;">
      <div class="max-w">
        <div style="text-align:center; color:var(--text-muted); font-size:1.2rem; font-family:'Cormorant Garamond',serif; font-style:italic;" class="reveal up">
          Our blog and resources hub is currently being curated.<br/>Please check back soon for articles on wellness and laughter therapy.
        </div>
      </div>
    </section>

    ${renderFooter()}
  `

  const init = () => {
    initNavbar()
    initRevealAnimations()
    refreshCursorHovers()
  }

  return { html, init }
}
