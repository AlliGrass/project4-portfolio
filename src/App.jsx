import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // change hashrouter  =>  browser router
import Desk from './pages/Desk'
import MainMonitor from './pages/MainMonitor'
import LeftMonitor from './pages/LeftMonitor'
import RightMonitor from './pages/RightMonitor'

import Layout from './Layout'

import { ThemeProvider } from './Contexts/ThemeContext'

import './App.css'

const App = () => {
  
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Desk/>} />   */}
        
          <Route element={<Layout />}>
            <Route path='/' element={<MainMonitor />} />
            <Route path='/left' element={<LeftMonitor />} />
            <Route path='/right' element={<RightMonitor />} />
          </Route>
        
        </Routes>
      </Router>
    </ThemeProvider>  
  )
}

export default App
