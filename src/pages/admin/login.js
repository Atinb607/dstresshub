import { signIn, getSession } from '../../supabase.js'
import { navigate } from '../../router.js'

export async function adminLoginPage() {
  const session = await getSession()
  if (session) {
    navigate('/admin/jobs')
    return { html: '' }
  }

  const html = `
    <div class="admin-page">
      <div class="admin-login">
        <div class="login-card">
          <h1>DStress<span>Hub</span></h1>
          <p class="login-sub">Sign in to manage job listings</p>
          <form id="admin-login-form">
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" id="login-email" required placeholder="admin@dstresshub.com">
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" id="login-password" required placeholder="••••••••">
            </div>
            <button type="submit" class="btn-gold" style="width:100%; margin-top:16px;">Sign In</button>
            <div id="login-error" class="login-error" style="display:none;"></div>
          </form>
        </div>
      </div>
    </div>
  `

  const init = () => {
    const form = document.getElementById('admin-login-form')
    if (!form) return

    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      const email = document.getElementById('login-email').value
      const pass = document.getElementById('login-password').value
      const errEl = document.getElementById('login-error')
      const btn = form.querySelector('button')

      btn.textContent = 'Signing in...'
      btn.disabled = true
      errEl.style.display = 'none'

      const { error } = await signIn(email, pass)
      
      if (error) {
        errEl.textContent = error.message || 'Invalid login credentials'
        errEl.style.display = 'block'
        btn.textContent = 'Sign In'
        btn.disabled = false
      } else {
        navigate('/admin/jobs')
      }
    })
  }

  return { html, init }
}
