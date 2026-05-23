export default function ServiceCard({ name, fee, img, onRequest }) {
  return (
    <div className="bg-gray-100 rounded-2xl p-5 flex flex-col gap-3 w-72 shadow-sm hover:shadow-md transition">
      <img
        src={img}
        alt={name}
        className="w-full h-48 object-cover rounded-xl"
      />
      <h3 className="text-gray-900 font-bold text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>
        {name}
      </h3>
      <p className="text-green-600 font-semibold text-sm">Fee: {fee}</p>
      <button
        onClick={onRequest}
        className="text-white font-semibold py-2.5 rounded-full text-sm transition"
        style={{ backgroundColor: '#FD0000' }}
      >
        Request service
      </button>
    </div>
  )
}
