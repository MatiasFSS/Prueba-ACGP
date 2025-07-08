import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LibrosApp } from './LibrosApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LibrosApp/>
  </StrictMode>
)
