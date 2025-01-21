import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import PageNotFound from './pages/PageNotFound'
import AboutUs from './pages/AboutUs';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutUs />} />
      {/* <Route path="/about" element={<AboutPage />} /> */}

      {/* Catch-all route for 404 */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
  )
}

export default App
