import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import './index.css'
import HomePage from './components/HomePage.jsx'
import Clients from './components/Clients.jsx'
import Info from './components/Info.jsx'
import AboutClients from './components/AboutClients.jsx'
import Questions from './components/Questions.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HomePage />
    <Clients />
    <Info />
    <AboutClients />
    <Questions />
  </React.StrictMode>,
)
