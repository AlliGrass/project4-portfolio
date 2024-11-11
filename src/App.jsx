// import { useState } from 'react'
// import Link from 'react-router-dom'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'



// import { Navbar } from './components'

import Desk from './pages/Desk'
import MainMonitor from './pages/MainMonitor'
import LeftMonitor from './pages/LeftMonitor'
import RightMonitor from './pages/RightMonitor'

import Layout from './Layout'





import './App.css'



function App() {
  

  return (

    <Router>
      <Routes>
        <Route path='/' element={<Desk/>} />  
        <Route element={<Layout />}>
          <Route path='/main' element={<MainMonitor />} />
          <Route path='/left' element={<LeftMonitor />} />
          <Route path='/right' element={<RightMonitor />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
