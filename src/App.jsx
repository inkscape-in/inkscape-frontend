import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* <Route path="/about" element={<AboutPage />} /> */}
      {/* Add your other routes here */}
      {/* Catch-all route for 404 */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
  )
}

export default App
