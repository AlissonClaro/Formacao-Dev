import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.js'
import App from './App.jsx' //Default

//import {App, App2 as QualquerCoisa} from './App.jsx' //export sem Default - e renomear a variavel


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
