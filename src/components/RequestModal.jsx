import { useState } from 'react'

export default function RequestModal({ serviceName, user, onClose, onSuccess }) {
  const [form, setForm] = useState({
    fullName: user?.fullName || '',
    contactNumber: user?.contactNo || '',
    address: user?.address || '',
    motorcycle: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSuccess()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-end px-6 pt-5">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl font-bold">✕</button>
        </div>

        <div className="px-8 pb-8 flex flex-col gap-5">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Roboto, sans-serif' }}>Request a Service</h2>
            <p className="text-gray-400 text-sm mt-1">Fill in the details below and we'll get back to you shortly.</p>
            {serviceName && <p className="text-red-500 text-sm font-semibold mt-1">Service: {serviceName}</p>}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">Full Name <span className="text-red-500">*</span></label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input type="text" placeholder="Enter your full name" value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })} required
                  className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400" />
              </div>
            </div>

            {/* Contact Number */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">Contact Number <span className="text-red-500">*</span></label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <input type="text" placeholder="e.g. +63 9XX XXX XXX" value={form.contactNumber}
                  onChange={(e) => setForm({ ...form, contactNumber: e.target.value })} required
                  className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400" />
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">Address <span className="text-red-500">*</span></label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </span>
                <input type="text" placeholder="Enter your full address here" value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })} required
                  className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400" />
              </div>
            </div>

            {/* Motorcycle */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">Motorcycle <span className="text-red-500">*</span></label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </span>
                <input type="text" placeholder="Motorcycle type" value={form.motorcycle}
                  onChange={(e) => setForm({ ...form, motorcycle: e.target.value })} required
                  className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400" />
              </div>
            </div>

            {/* Additional message */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-gray-700">Additional message (optional)</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
                <textarea placeholder="Tell us more about the issue or the service need..." value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4}
                  className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 resize-none" />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-2">
              <button type="button" onClick={onClose}
                className="flex-1 border-2 border-gray-800 text-gray-800 font-bold py-3 rounded-xl text-base hover:bg-gray-50 transition">
                Cancel
              </button>
              <button type="submit"
                className="flex-1 text-white font-bold py-3 rounded-xl text-base transition"
                style={{ backgroundColor: '#FD0000' }}>
                Submit Request
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
