import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from 'styles/globalStyles'
import App from './App'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
)
