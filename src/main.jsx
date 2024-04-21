import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import './index.css'
import Diretoria from './routes/diretoria/Diretoria.jsx'
import Elenco from './routes/elenco/Elenco.jsx'
import Jogos from './routes/jogos/Jogos.jsx'
import Admin from './routes/admin/Admin.jsx' 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sobre",
        element: <About />
      },
      {
        path: "/diretoria",
        element: <Diretoria />
      },
      {
        path: "/elenco",
        element: <Elenco />
      },
      {
        path: "/jogos",
        element: <Jogos />
      },
      {
        path: "/admin/loginCadastro",
        element: <Admin />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
