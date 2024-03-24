import React from "react"
import NavBar from './pages/Reusable/Navbar/NavBar'
import Footer from "./pages/Reusable/Footer/Footer"
import { Outlet } from "react-router-dom"
function App() {

  return (
    <div className='overflow-hidden app '>
      <NavBar />
      <div className="min-h-[92vh] h-[92vh]   overflow-x-hidden overflow-y-scroll relative">
      <Outlet />
      <Footer/>
      </div>
    </div>
  )
}

export default App
