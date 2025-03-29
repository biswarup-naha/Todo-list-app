import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import AuthPage from './pages/AuthPage.jsx'
import UserPage from './pages/UserPage.jsx'
import NoPage from './pages/NoPage.jsx'

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App