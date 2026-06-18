import { renderNavbar, initNavbar } from '../components/navbar.js'
import { renderFooter } from '../components/footer.js'
import { refreshCursorHovers } from '../components/cursor.js'

export async function notFoundPage() {
  const html = `
    ${renderNavbar()}
    <div style="min-height:100vh; background:var(--bg-dark); display:flex; align-items:center; justify-content:center; text-align:center; padding:0 24px;">
      <div>
        <h1 style="font-family:'Cormorant Garamond',serif; font-size:6rem; color:var(--gold); line-height:1;">404</h1>
        <h2 style="font-family:'Cormorant Garamond',serif; font-size:2rem; font-weight:300; color:var(--text-light); margin-bottom:16px;">Page Not Found</h2>
        <p style="color:var(--text-muted); margin-bottom:32px;">The page you are looking for doesn't exist or has been moved.</p>
        <a href="/" data-link class="btn-gold">Return Home</a>
      </div>
    </div>
    ${renderFooter()}
  `

  const init = () => {
    initNavbar()
    refreshCursorHovers()
  }

  return { html, init }
}
