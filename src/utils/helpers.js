/**
 * Utility helpers
 */

/**
 * Generate a URL-safe slug from text
 * "Senior Wellness Coach" → "senior-wellness-coach"
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function generateSlug(text) {
  return slugify(text)
}

/**
 * Format a date string
 */
export function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

/**
 * Debounce a function
 */
export function debounce(fn, delay = 200) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Encode text for use in a WhatsApp URL
 */
export function waLink(message) {
  return `https://wa.me/9464663405?text=${encodeURIComponent(message)}`
}

/**
 * Show a toast notification (used in admin dashboard)
 */
export function toast(message, type = 'success') {
  const existing = document.getElementById('toast-notification')
  if (existing) existing.remove()

  const el = document.createElement('div')
  el.id = 'toast-notification'
  el.className = `toast toast-${type}`
  el.textContent = message
  document.body.appendChild(el)

  requestAnimationFrame(() => el.classList.add('show'))
  setTimeout(() => {
    el.classList.remove('show')
    setTimeout(() => el.remove(), 300)
  }, 3000)
}
