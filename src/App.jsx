import React from "react"
import NavBar from './pages/Reusable/NavBar'
import { Outlet } from "react-router-dom"
function App() {

  return (
    <div className='overflow-hidden  app'>
      <NavBar />
      <Outlet/>
    </div>
  )
}

export default App
