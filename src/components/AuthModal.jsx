export default function AuthModal({ onLogin, onSignup, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-2xl shadow-2xl px-10 py-8 flex flex-col items-center gap-5 w-80">
        <h2 className="text-xl font-bold text-gray-800 text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Login Required
        </h2>
        <p className="text-gray-500 text-sm text-center">
          You need to be logged in to request a service. Please log in or sign up to continue.
        </p>
        <div className="flex gap-3 w-full">
          <button
            onClick={onLogin}
            className="flex-1 text-white font-bold py-2.5 rounded-full text-sm transition"
            style={{ backgroundColor: '#FD0000' }}
          >
            Log In
          </button>
          <button
            onClick={onSignup}
            className="flex-1 bg-white font-bold py-2.5 rounded-full text-sm border-2 transition hover:bg-gray-50"
            style={{ color: '#FD0000', borderColor: '#FD0000' }}
          >
            Sign Up
          </button>
        </div>
        <button onClick={onClose} className="text-gray-400 text-xs hover:text-gray-600 transition">
          Maybe later
        </button>
      </div>
    </div>
  )
}
