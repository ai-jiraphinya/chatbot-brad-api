import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChatBot from './pages/ChatBot'
import Home from './pages/Home'

export default function App() {
  return (
    <React.Fragment>
      {/* Adding React Router DOM */}
      <Router>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<ChatBot />} path='/chatbot' />
        </Routes>
      </Router>
    </React.Fragment>
  )
}
