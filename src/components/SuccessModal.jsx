export default function SuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm px-10 py-12 flex flex-col items-center gap-4">

        {/* Tools icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24" viewBox="0 0 64 64" fill="#FD0000">
          <path d="M59.41 52.59l-28-28a14 14 0 00-19.8-19.8l8.8 8.8-5.66 5.66-8.8-8.8a14 14 0 0019.8 19.8l28 28a2 2 0 002.83-2.83z"/>
          <path d="M4.59 52.59a2 2 0 002.83 2.83l18-18-2.83-2.83z"/>
        </svg>

        <h2 className="text-2xl font-bold text-gray-900 text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Thanks for submitting!
        </h2>
        <p className="text-gray-600 text-base text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
          We'll get back to you shortly
        </p>

        <button
          onClick={onClose}
          className="mt-2 text-white font-bold px-10 py-2.5 rounded-full text-base transition"
          style={{ backgroundColor: '#FD0000' }}
        >
          Done
        </button>
      </div>
    </div>
  )
}
