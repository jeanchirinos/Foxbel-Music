import { BsFillMoonFill } from 'react-icons/bs'

export default function ThemeSwitcher() {
  function toggleTheme() {
    const html = document.documentElement.classList

    localStorage.theme = html.contains('dark') ? 'light' : 'dark'
    html.toggle('dark')
  }

  return (
    <button onClick={toggleTheme} aria-label='Cambiar tema'>
      <BsFillMoonFill size={16} style={{ color: 'var(--opposite)' }} />
    </button>
  )
}
