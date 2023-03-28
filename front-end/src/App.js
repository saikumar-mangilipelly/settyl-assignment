import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css';
import Dashboard from './components/dashboard/Dashboard'
import Emppage from './components/Emppage/Emppage'
import Offcanvas from './components/offcanvasnav/Offcanvas'
function App() {
  return (
    <>    
      <Offcanvas/>
      <Routes>
        <Route path='/' element={<Emppage/>}/>
        <Route path='/dashboard' element={<Dashboard />} />           
      </Routes> 
      <ToastContainer/>     
    </>
  )
}

export default App
