import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import AuthPage from './pages/AuthPage.jsx'
import UserPage from './pages/UserPage.jsx'
import NoPage from './pages/NoPage.jsx'

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={Layout}>
          <Route index element={Home} />
          <Route path='auth' element={AuthPage} />
          <Route path='user' element={UserPage} />
          <Route path='*' element={NoPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App