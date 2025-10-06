import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootLayout from './RootLayout/RootLayout'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootLayout></RootLayout>
  </StrictMode>,
)
