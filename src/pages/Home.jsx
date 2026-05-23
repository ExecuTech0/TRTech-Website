import heroBg from '../assets/logo3.png'

// ============================================================
// EDIT THESE to change sizes, colors, fonts on the Home page
// ============================================================
const styles = {
  // Hero section
  heroMinHeight: '480px',
  heroOverlay: 'bg-black/50',           // darkness of the overlay (0=transparent, 100=black)
  heroHeading: 'text-3xl md:text-4xl',  // heading size
  heroParagraph: 'text-base',           // paragraph size

  // Info bar
  infoBarText: 'text-xs md:text-sm',

  // Section headings
  sectionHeading: 'text-2xl md:text-3xl',

  // Service cards
  cardHeading: 'text-base',
  cardDesc: 'text-sm',

  // Colors
  accentColor: '#FD0000',
}

export default function Home({ onNavigate }) {
  return (
    <div className="flex flex-col">

      {/* ── HERO SECTION ── */}
      <div
        className="relative flex items-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: styles.heroMinHeight,   // ← change hero height here
        }}
      >
        {/* Dark overlay */}
        <div className={`absolute inset-0 ${styles.heroOverlay}`} />

        {/* Hero content */}
        <div className="relative z-10 px-6 md:px-16 py-16 max-w-xl">
          <h1
            className={`text-white ${styles.heroHeading} font-bold leading-snug mb-3 animate-fade-slide-up delay-100`}
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Welcome to TRTech<br />Your trusted motorcycle service
          </h1>
          <p
            className={`text-white ${styles.heroParagraph} mb-6 animate-fade-slide-up delay-300`}
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            At TRTech, we commit to provide reliable and high quality motor cycle maintenance
            services by ensuring efficient service processes and professional service.
          </p>
          {/* Let's start button — navigates to Services page */}
          <button
            onClick={() => onNavigate('services')}
            className="text-white font-semibold px-10 py-4 rounded-full text-lg animate-fade-slide-up delay-500"
            style={{
              backgroundColor: styles.accentColor,  // ← button color
              animationName: 'fadeSlideUp, pulse-glow',
              animationDuration: '0.8s, 1.8s',
              animationDelay: '0.5s, 1.3s',
              animationFillMode: 'forwards, none',
              animationIterationCount: '1, infinite',
              animationTimingFunction: 'ease, ease-in-out',
            }}
          >
            Let's start
          </button>
        </div>
      </div>

      {/* ── INFO BAR ── */}
      <div className={`bg-black text-white flex flex-col md:flex-row items-center justify-around px-6 md:px-8 py-4 gap-2 ${styles.infoBarText} font-semibold tracking-wide text-center`}>
        <span>KINDLY VISIT US AT GUANZON-TUTO STREET, BRGY. 2, GINGOOG CITY</span>
        <span>BUSINESS HOURS: MONDAY TO SATURDAY @ 9:00AM - 5:00PM</span>
      </div>

      {/* ── ABOUT SECTION ── */}
      <div className="bg-white py-12 px-6 md:px-16 text-center">
        <h2
          className={`${styles.sectionHeading} font-bold text-gray-900 mb-4`}
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          About TRTech
        </h2>
        <p className="text-gray-600 text-base max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
          TRTech is a trusted motorcycle service center based in Gingoog City, specializing in
          fuel injection services, ECU tuning, performance upgrades, and preventive maintenance.
        </p>
      </div>

      {/* ── WHAT WE OFFER SECTION ── */}
      <div className="bg-gray-50 py-12 px-6 md:px-16">
        <h2
          className={`${styles.sectionHeading} font-bold text-center text-gray-900 mb-8`}
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          What We Offer
        </h2>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            { title: 'Fi Services', desc: 'Full fuel injection diagnostics and servicing for FI units.' },
            { title: 'Racing ECU Tuning', desc: 'High-performance ECU tuning optimized for racing builds.' },
            { title: 'Stock ECU Remap', desc: 'Remap your stock ECU for better throttle response and power.' },
            { title: 'Dyno Tuning', desc: "Precision dyno tuning to maximize your motorcycle's output." },
            { title: 'ApiTech PH Performance Upgrade', desc: 'Authorized ApiTech PH performance upgrades and installs.' },
            { title: 'Preventive Maintenance (FI Units)', desc: 'Scheduled maintenance to keep your FI unit in top shape.' },
            { title: 'Engine Build — Daily, Touring & Race', desc: 'Custom engine builds tailored for daily use, touring, or full race specs.' },
            { title: 'Scooter Engine — Pang Gilid Build', desc: 'Specialized scooter engine builds for side-by-side racing.' },
            { title: 'Underbone Build', desc: 'Performance underbone builds for competitive and street use.' },
            { title: 'FI Cleaning Package', desc: 'Complete FI system cleaning for optimal fuel delivery.' },
            { title: 'CVT Cleaning Package', desc: 'Full CVT belt and pulley cleaning service.' },
            { title: 'AFR Adjustments', desc: 'Air-fuel ratio tuning for optimal performance and efficiency.' },
            { title: 'ECU Scanning', desc: 'Full ECU diagnostic scan and error code reading.' },
            { title: 'Engine Overhaul', desc: 'Complete engine teardown, inspection and rebuild.' },
            { title: 'Carb Tune-Up', desc: 'Carburetor cleaning and precision tuning.' },
            { title: 'Change Oil Service', desc: 'Engine oil and filter replacement service.' },
            { title: 'General Check Up', desc: 'Full motorcycle inspection and health assessment.' },
            { title: 'Compression Test', desc: 'Engine compression testing for accurate diagnosis.' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition">
              {/* Red dot accent */}
              <div className="w-3 h-3 rounded-full mb-3" style={{ backgroundColor: styles.accentColor }} />
              <h3
                className={`text-gray-900 font-bold ${styles.cardHeading} mb-2`}
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                {item.title}
              </h3>
              <p className={`text-gray-500 ${styles.cardDesc} leading-relaxed`}>{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-base mt-6 font-medium">...and many more services available</p>
      </div>

    </div>
  )
}
