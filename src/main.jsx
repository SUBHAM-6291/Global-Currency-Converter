import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InputBox from './Components/Input.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    
    <InputBox/>
  </StrictMode>,
)
