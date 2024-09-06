import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.js'
import Home from './pages/Home/Index.jsx' // <- Não precisa colocar o Index.jsx so coloquei para tirar o Erro TS

//import App' //Default

//import {App, App2 as QualquerCoisa} from './App.jsx' //export sem Default - e renomear a variavel


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>,
)
