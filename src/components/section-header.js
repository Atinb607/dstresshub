/**
 * Reusable section header component
 * @param {Object} opts
 * @param {string} opts.tag - Small label text (e.g. "Our Philosophy")
 * @param {string} opts.title - Main heading HTML (supports <em>, <br/>)
 * @param {string} [opts.description] - Optional paragraph below heading
 * @param {'dark'|'light'} [opts.theme='dark'] - Color scheme
 */
export function sectionHeader({ tag, title, description = '', theme = 'dark' }) {
  const tagColor = theme === 'light' ? 'var(--olive)' : 'var(--gold)'
  const lineColor = theme === 'light' ? 'var(--olive)' : 'var(--gold)'
  const titleColor = theme === 'light' ? 'var(--text-dark)' : 'var(--text-light)'
  const descColor = theme === 'light' ? 'var(--text-body)' : 'var(--text-muted)'

  return `
    <div class="section-tag">
      <div class="line" style="background:${lineColor}"></div>
      <span style="color:${tagColor}">${tag}</span>
    </div>
    <h2 style="color:${titleColor}">${title}</h2>
    ${description ? `<p style="color:${descColor};font-size:.95rem;font-weight:300;line-height:1.8;max-width:560px;margin-top:16px;">${description}</p>` : ''}
  `
}
