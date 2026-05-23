import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Contacts from './pages/Contacts'
import About from './pages/About'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function AppContent() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser)
    navigate('/')
  }

  const handleLogout = () => {
    setUser(null)
    navigate('/login')
  }

  return (
    <Routes>
      <Route path="/login" element={<Login onNavigate={(page) => navigate(`/${page}`)} onLogin={handleLogin} />} />
      <Route path="/signup" element={<SignUp onNavigate={(page) => navigate(`/${page}`)} />} />
      <Route path="/*" element={
        <div className="min-h-screen flex flex-col">
          <Navbar onNavigate={(page) => navigate(`/${page}`)} user={user} onLogout={handleLogout} />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home onNavigate={(page) => navigate(`/${page}`)} user={user} />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/services" element={<Services onNavigate={(page) => navigate(`/${page}`)} user={user} />} />
              <Route path="/contacts" element={<Contacts onNavigate={(page) => navigate(`/${page}`)} user={user} />} />
              <Route path="/about" element={<About onNavigate={(page) => navigate(`/${page}`)} user={user} />} />
            </Routes>
          </div>
          <Footer />
        </div>
      } />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
