import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/footer/Footer'


function App() {
  const location = useLocation();

  // Verifica se a rota atual é 'admin' ou 'admin/inserindoDados'
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Renderiza o NavBar e o Footer condicionalmente
  return (
    <>
      {!isAdminRoute && <NavBar />}
      <Outlet />
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
