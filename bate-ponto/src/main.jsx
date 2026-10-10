import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BtnMenu from './components/Btn-menu/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BtnMenu></BtnMenu>
  </StrictMode>,
)
