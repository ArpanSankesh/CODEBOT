import React, { useState } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import RefreshHandler from './Components/refreshHandler'


const App = () => {
const [isAuthenticated, setIsAuthenticated]  = useState(false)

  const PrivateRoute = ({ element }) => {
return isAuthenticated ? element : <Navigate to="/login" />
  }
  return (
    <div>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>} />
      <Route path="/home" element={<PrivateRoute element={<Home/>}/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </div>
  )
}

export default App