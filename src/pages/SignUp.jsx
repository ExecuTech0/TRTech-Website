import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import bgLogo from '../assets/background_logo.png'
import trLogo from '../assets/trtech_logo.png'

// ============================================================
// EDIT THESE to change sizes and layout of the Sign Up page
// ============================================================
const styles = {
  containerBg: 'rgba(255,255,255,0.7)',
  containerRadius: '30px',
  logoWidth: 'w-56',
  welcomeFontSize: '22px',
  cardWidth: '420px',
}

export default function SignUp({ onNavigate }) {
  const [users, setUsers] = useLocalStorage('users', [])
  const [form, setForm] = useState({
    fullName: '', address: '', contactNo: '', email: '',
    username: '', password: '', confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) return setError('Passwords do not match.')
    if (users.find((u) => u.username === form.username)) return setError('Username already taken.')
    const { confirmPassword, ...userData } = form
    setUsers([...users, userData])
    alert('Account created! You can now log in.')
    onNavigate('login')
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

        {/* ── RIGHT: Sign up card ── */}
        <div
          className="bg-white rounded-2xl shadow-lg flex flex-col gap-4 px-8 py-10 w-full"
          style={{ maxWidth: styles.cardWidth }}
        >
          <h2 className="text-3xl font-semibold text-center">Sign Up</h2>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <form onSubmit={handleSignUp} className="flex flex-col gap-3">
            {[
              { name: 'fullName',        placeholder: 'Full name',        type: 'text' },
              { name: 'address',         placeholder: 'Address',          type: 'text' },
              { name: 'contactNo',       placeholder: 'Contact no.',      type: 'text' },
              { name: 'email',           placeholder: 'Email',            type: 'email' },
              { name: 'username',        placeholder: 'Username',         type: 'text' },
              { name: 'password',        placeholder: 'Password',         type: 'password' },
              { name: 'confirmPassword', placeholder: 'Confirm Password', type: 'password' },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ))}

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full text-base font-semibold mt-1"
            >
              Sign up
            </button>
          </form>

          <div className="border-t pt-4 flex items-center justify-center gap-3 flex-wrap">
            <span className="text-base text-gray-500">Already have an account?</span>
            <button
              onClick={() => onNavigate('login')}
              className="bg-blue-500 hover:bg-blue-600 text-white text-base px-5 py-2 rounded-full"
            >
              Log In
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
