import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mui from './Mui.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mui />
  </StrictMode>,
)
