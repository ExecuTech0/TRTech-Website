import { useState } from 'react'
import ServiceCard from '../components/ServiceCard'
import AuthModal from '../components/AuthModal'
import RequestModal from '../components/RequestModal'
import SuccessModal from '../components/SuccessModal'

import fiCleaning from '../assets/Fi_cleaning.png'
import cvt from '../assets/cvt.png'
import afr from '../assets/afr.png'
import ecuScan from '../assets/ecu_scan.png'
import ecuMap from '../assets/ecu_mapping.png'
import engineOverhaul from '../assets/enginge_ovehaul.png'
import engineRefresh from '../assets/enginge_refresh.png'
import carb from '../assets/carb.png'
import changeOil from '../assets/change_oil.png'
import generalCheck from '../assets/general_check.png'
import compression from '../assets/compression.png'
import generalWiring from '../assets/general_wiring.png'
import bullrace from '../assets/bullrace.png'
import bearing from '../assets/bearing.png'
import brake from '../assets/brake.png'
import performance from '../assets/performance.png'
import racing from '../assets/racing.png'
import horn from '../assets/horn.png'
import showPrep from '../assets/show_prep.png'
import unitEngine from '../assets/unit_engine.png'
import suspension from '../assets/suspension.png'
import magneto from '../assets/magneto.png'

const services = [
  { name: 'Fi Services',                            fee: '₱1,000.00', img: fiCleaning },
  { name: 'FI Cleaning Package',                    fee: '₱1,000.00', img: fiCleaning },
  { name: 'CVT Cleaning Package',                   fee: '₱1,000.00', img: cvt },
  { name: 'AFR Adjustments',                        fee: '₱1,000.00', img: afr },
  { name: 'ECU Scanning',                           fee: '₱1,000.00', img: ecuScan },
  { name: 'ECU Remapping',                          fee: '₱1,000.00', img: ecuMap },
  { name: 'Engine Overhaul',                        fee: '₱1,000.00', img: engineOverhaul },
  { name: 'Engine Refresh',                         fee: '₱1,000.00', img: engineRefresh },
  { name: 'Carb Tune-Up',                           fee: '₱1,000.00', img: carb },
  { name: 'Change Oil Service',                     fee: '₱1,000.00', img: changeOil },
  { name: 'General Check Up',                       fee: '₱1,000.00', img: generalCheck },
  { name: 'Compression Test',                       fee: '₱1,000.00', img: compression },
  { name: 'General Wirings',                        fee: '₱1,000.00', img: generalWiring },
  { name: 'Bullrace Replacement',                   fee: '₱1,000.00', img: bullrace },
  { name: 'Bearing Replacement',                    fee: '₱1,000.00', img: bearing },
  { name: 'Brake Cleaning',                         fee: '₱1,000.00', img: brake },
  { name: 'Performance Upgrade',                    fee: '₱1,000.00', img: performance },
  { name: 'Racing Parts',                           fee: '₱1,000.00', img: racing },
  { name: 'Horn and Auxiliary Lights Installation', fee: '₱1,000.00', img: horn },
  { name: 'Show Prep',                              fee: '₱1,000.00', img: showPrep },
  { name: 'Unit-Engine',                            fee: '₱1,000.00', img: unitEngine },
  { name: 'Suspension Tuning',                      fee: '₱1,000.00', img: suspension },
  { name: 'Magneto Cleaning and Repaint',           fee: '₱1,000.00', img: magneto },
]

export default function Services({ onNavigate, user }) {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleRequest = (serviceName) => {
    if (!user) {
      setShowAuthModal(true)
    } else {
      setSelectedService(serviceName)
    }
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
      {selectedService && !showSuccess && (
        <RequestModal
          serviceName={selectedService}
          user={user}
          onClose={() => setSelectedService(null)}
          onSuccess={() => { setSelectedService(null); setShowSuccess(true) }}
        />
      )}
      {showSuccess && (
        <SuccessModal onClose={() => setShowSuccess(false)} />
      )}
      <div className="bg-red-600 py-8 text-center">
        <h2 className="text-white text-2xl font-bold tracking-widest" style={{ fontFamily: 'Roboto, sans-serif' }}>OUR SERVICES</h2>
        <p className="text-white text-sm mt-2 max-w-xl mx-auto">
          We provide a wide range of motorcycle services from fuel injection maintenance to full performance builds.
          Whether you're a daily rider, a touring enthusiast, or a racer — we've got you covered.
        </p>
      </div>
      <div className="bg-white py-12 px-6 md:px-16 flex flex-wrap gap-8 justify-center">
        {[...services].sort((a, b) => a.name.localeCompare(b.name)).map((service) => (
          <ServiceCard key={service.name} name={service.name} fee={service.fee} img={service.img} onRequest={() => handleRequest(service.name)} />
        ))}
      </div>

      {/* Remove old services offered list */}
    </div>
  )
}
