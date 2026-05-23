import { useState } from 'react'
import AuthModal from '../components/AuthModal'

export default function Contacts({ onNavigate, user }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [showAuthModal, setShowAuthModal] = useState(false)

  const handleFocus = () => {
    if (!user) setShowAuthModal(true)
  }

  const handleSend = (e) => {
    e.preventDefault()
    if (!user) { setShowAuthModal(true); return }
    alert('Message sent! We will get back to you soon.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="flex flex-col">

      {showAuthModal && (
        <AuthModal
          onLogin={() => { setShowAuthModal(false); onNavigate('login') }}
          onSignup={() => { setShowAuthModal(false); onNavigate('signup') }}
          onClose={() => setShowAuthModal(false)}
        />
      )}

      <div className="bg-red-600 py-10 text-center">
        <h2 className="text-white text-3xl font-bold tracking-widest mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>CONTACT</h2>
        <p className="text-white text-sm">
          You can Contact us if you need anything and let us<br />
          know just fill the form.
        </p>
      </div>

      <div className="bg-white py-16 px-6 md:px-32 flex flex-col md:flex-row gap-16 md:gap-32">

        {/* Form */}
        <form onSubmit={handleSend} className="flex flex-col gap-8 w-full md:w-80">
          <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} onFocus={handleFocus} disabled={!user} required
            className={`border-b border-gray-300 py-3 text-gray-700 text-base focus:outline-none focus:border-gray-600 bg-transparent ${!user ? 'cursor-not-allowed opacity-50' : ''}`} />
          <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} onFocus={handleFocus} disabled={!user} required
            className={`border-b border-gray-300 py-3 text-gray-700 text-base focus:outline-none focus:border-gray-600 bg-transparent ${!user ? 'cursor-not-allowed opacity-50' : ''}`} />
          <textarea placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} onFocus={handleFocus} disabled={!user} required rows={4}
            className={`border-b border-gray-300 py-3 text-gray-700 text-base focus:outline-none focus:border-gray-600 bg-transparent resize-none ${!user ? 'cursor-not-allowed opacity-50' : ''}`} />
          <div className="flex justify-end">
            <button type="submit" className="bg-green-400 hover:bg-green-500 text-white font-bold px-10 py-3 rounded-full text-base transition">Send</button>
          </div>
        </form>

        {/* Info + map */}
        <div className="flex flex-col gap-5 flex-1">
          <div className="flex items-center gap-3 text-gray-700 text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
            <span>Guanzon-Tuto Street, Brgy. 2, Gingoog City</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>0 966 054 9863</span>
          </div>
          <div className="flex items-center gap-3 text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
            <a href="https://www.facebook.com/TRTechPH" target="_blank" rel="noopener noreferrer" className="text-gray-700 underline hover:text-blue-600 transition">
              https://www.facebook.com/TRTechPH
            </a>
          </div>
          <iframe title="TRTech Location"
            src="https://www.google.com/maps?q=Guanzon-Tuto+Street,+Brgy.+2,+Gingoog+City,+Misamis+Oriental,+Philippines&output=embed"
            width="100%" height="450" style={{ border: 0, borderRadius: '8px' }} allowFullScreen="" loading="lazy" />
        </div>

      </div>
    </div>
  )
}
