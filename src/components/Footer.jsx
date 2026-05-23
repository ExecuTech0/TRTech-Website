export default function Footer() {
  return (
    <footer className="bg-black text-white px-16 py-5 mt-auto">
      <div className="border-t border-gray-800 pt-5 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} TRTech. All rights reserved.
      </div>
    </footer>
  )
}
