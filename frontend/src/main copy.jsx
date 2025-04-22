import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Checkout from './components/Checkout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Checkout />
  </StrictMode>,
)
