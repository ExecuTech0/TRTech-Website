import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import trLogo from '../assets/trtech_logo.png'
import homeIcon from '../assets/home.png'
import servicesIcon from '../assets/services.png'
import contactsIcon from '../assets/contacts.png'
import aboutIcon from '../assets/about.png'

export default function Navbar({ onNavigate, user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const current = location.pathname.slice(1) || 'home'

  const links = [
    { key: 'home',     label: 'Home',     icon: homeIcon },
    { key: 'services', label: 'Services', icon: servicesIcon },
    { key: 'contacts', label: 'Contacts', icon: contactsIcon },
    { key: 'about',    label: 'About',    icon: aboutIcon },
  ]

  return (
    <>
      <nav className="bg-black sticky top-0 z-50 animate-nav-fade-down">
        <div className="flex items-center justify-between px-6 py-3">

          {/* Hamburger — mobile/tablet only */}
          <button
            className="lg:hidden text-white text-2xl w-8"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Logo */}
          <img
            src={trLogo}
            alt="TRTech"
            className="h-12 cursor-pointer mx-auto lg:mx-0"
            onClick={() => { onNavigate('home'); setMenuOpen(false) }}
          />

          {/* Desktop nav links + auth */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <button
                key={link.key}
                onClick={() => onNavigate(link.key)}
                className={`flex items-center gap-2 font-semibold text-sm transition hover:text-red-400 ${current === link.key ? 'text-red-400' : 'text-white'}`}
              >
                <img src={link.icon} alt={link.label} className="h-4 w-4" />
                {link.label}
              </button>
            ))}
            <div className="w-px h-6 bg-white opacity-20" />
            {user ? (
              <>
                <span className="text-white text-sm">Hi, {user.fullName || user.username}</span>
                <button onClick={onLogout} className="text-white font-bold px-5 py-1.5 rounded-lg text-sm" style={{ backgroundColor: '#FD0000' }}>Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => onNavigate('login')} className="text-white font-bold px-5 py-1.5 rounded-lg text-sm" style={{ backgroundColor: '#FD0000' }}>Login</button>
                <div className="w-px h-6 bg-white opacity-40" />
                <button onClick={() => onNavigate('signup')} className="bg-white font-bold px-5 py-1.5 rounded-lg text-sm" style={{ color: '#FD0000' }}>Sign up</button>
              </>
            )}
          </div>

          {/* Spacer to balance hamburger */}
          <div className="lg:hidden w-8" />
        </div>
      </nav>

      {/* ── Sidebar overlay — starts below navbar ── */}
      {menuOpen && (
        <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden flex" style={{ top: '66px' }}>

          {/* Sidebar panel */}
          <div className="bg-black w-72 h-full flex flex-col px-6 py-6 gap-6 overflow-y-auto animate-slide-in-left">

            {/* Nav links */}
            {links.map((link) => (
              <button
                key={link.key}
                onClick={() => { onNavigate(link.key); setMenuOpen(false) }}
                className={`flex items-center gap-4 text-xl font-bold transition ${current === link.key ? 'text-red-500' : 'text-white'}`}
              >
                <img src={link.icon} alt={link.label} className="h-8 w-8" />
                {link.label}
              </button>
            ))}

            {/* User section */}
            <div className="flex items-center gap-4 mt-2">
              <div className="h-10 w-10 rounded-full bg-gray-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="text-white text-xl font-bold">
                {user ? (user.fullName || user.username) : 'User'}
              </span>
            </div>

            {/* Auth buttons */}
            <div className="flex flex-col gap-3 mt-auto pt-6">
              {user ? (
                <button onClick={() => { onLogout(); setMenuOpen(false) }} className="text-white font-bold py-3 rounded-xl text-base" style={{ backgroundColor: '#FD0000' }}>Logout</button>
              ) : (
                <>
                  <button onClick={() => { onNavigate('login'); setMenuOpen(false) }} className="text-white font-bold py-3 rounded-xl text-base" style={{ backgroundColor: '#FD0000' }}>Login</button>
                  <button onClick={() => { onNavigate('signup'); setMenuOpen(false) }} className="bg-white text-black font-bold py-3 rounded-xl text-base">Sign up</button>
                </>
              )}
            </div>
          </div>

          {/* Click outside to close */}
          <div className="flex-1 bg-black/50" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </>
  )
}
