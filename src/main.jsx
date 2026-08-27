import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CalendlyProvider } from './context/CalendlyContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CalendlyProvider>
        <App />
      </CalendlyProvider>
    </BrowserRouter>
  </StrictMode>,
)

