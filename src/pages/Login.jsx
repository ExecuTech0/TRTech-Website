import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import bgLogo from '../assets/background_logo.png'
import trLogo from '../assets/trtech_logo.png'

// ============================================================
// EDIT THESE to change sizes and layout of the Login page
// ============================================================
const styles = {
  containerWidth: '60%',
  containerMinHeight: '75vh',
  containerRadius: '30px',
  containerBg: 'rgba(255,255,255,0.7)',
  logoWidth: 'w-56',
  welcomeFontSize: '22px',
  cardWidth: '420px',
  cardMinHeight: '380px',
}

export default function Login({ onNavigate, onLogin }) {
  const [users] = useLocalStorage('users', [])
  const [form, setForm] = useState({ username: '', password: '' })
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    const match = users.find(
      (u) => u.username === form.username && u.password === form.password
    )
    match ? onLogin(match) : setError('Invalid username or password.')
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8"
      style={{
        backgroundImage: `url(${bgLogo})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000',
      }}
    >
      {/* ── WHITE CONTAINER ── */}
      <div
        className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full gap-8 px-6 py-10 lg:px-16 lg:py-14"
        style={{
          backgroundColor: styles.containerBg,
          maxWidth: '900px',
          width: '100%',
          borderRadius: styles.containerRadius,
        }}
      >
        {/* ── LEFT: Logo + welcome text ── */}
        <div className="flex flex-col items-center lg:items-start gap-3 text-center lg:text-left">
          <img src={trLogo} alt="TRTech" className={styles.logoWidth} />
          <p className="text-gray-800 font-medium" style={{ fontSize: styles.welcomeFontSize }}>
            Welcome to TRTech<br />
            where we maintain<br />
            and enhance your<br />
            motorcycle vehicle.
          </p>
        </div>

        {/* ── RIGHT: Login card ── */}
        <div
          className="bg-white rounded-2xl shadow-lg flex flex-col gap-5 px-8 py-10 w-full"
          style={{ maxWidth: styles.cardWidth, minHeight: styles.cardMinHeight }}
        >
          <h2 className="text-3xl font-semibold text-center">Log in</h2>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full text-base font-semibold"
            >
              Log In
            </button>
          </form>

          <div className="border-t pt-4 flex items-center justify-center gap-3 flex-wrap">
            <span className="text-base text-gray-500">Don't have an account?</span>
            <button
              onClick={() => onNavigate('signup')}
              className="bg-blue-500 hover:bg-blue-600 text-white text-base px-5 py-2 rounded-full"
            >
              Sign up
            </button>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="text-sm text-gray-400 hover:text-gray-600 text-center underline transition"
          >
            View website first
          </button>
        </div>

      </div>
    </div>
  )
}
