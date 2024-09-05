import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' //Default

//import {App, App2 as QualquerCoisa} from './App.jsx' //export sem Default - e renomear a variavel
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
