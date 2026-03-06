import Home from './modules/Home'
import About from './modules/About'
import NoPage from './modules/NoPage'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import Navigation from './modules/Navigation'

function App() {
  return (
    <div className="main">
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />   
      </Routes>
    </div>
  )
}

export default App
