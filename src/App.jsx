import React from 'react'
import "./App.css"
import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation();
  const shouldShow = ![
    "/sign-in",
    "/sign-up",
    "/contact",
    "/quiz"
  ].includes(location.pathname);

  return (
    <>
      <Navbar/>
        <Outlet/>
      {shouldShow && <Footer/>}
    </>
  )
}

export default App
