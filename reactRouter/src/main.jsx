import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import User from './Components/User/User.jsx'
import Instagram from './Components/Instagram/Instagram.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path :"About",
        element: <About />
      },
      {
        path: "ContactUs",
        element: <ContactUs />
      },
      {
        path: "user/:userId",
        element: <User />
      },
      {
        path: "ContactUs",
        element: <ContactUs />
      },
      {
        path: "Instagram",
        element: <Instagram />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
