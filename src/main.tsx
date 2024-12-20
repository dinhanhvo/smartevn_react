import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'primereact/resources/themes/saga-blue/theme.css';  // Theme mặc định
import 'primereact/resources/primereact.min.css';          // PrimeReact CSS
import 'primeicons/primeicons.css';                        // PrimeIcons
import 'primeflex/primeflex.css';


import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
