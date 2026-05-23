import shopImg from '../assets/shop.png'

export default function About() {
  return (
    <div className="flex flex-col">

      <div className="bg-red-600 py-10 text-center">
        <h2 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>About</h2>
        <p className="text-white text-sm">
          This is about TRTech. Here you will be able to see the<br />
          information about the owner and the shop.
        </p>
      </div>

      {/* Shop history */}
      <div className="bg-white px-6 md:px-24 py-12 flex flex-col lg:flex-row gap-10 items-start">
        <img src={shopImg} alt="TRTech Shop" className="rounded-lg object-cover w-full lg:shrink-0" style={{ maxWidth: '529px', height: 'auto', aspectRatio: '529/337' }} />
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-900 font-bold" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '32px' }}>Shop history</h3>
          <p className="text-gray-700 text-justify leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            TRTech is a motorcycle service shop established in Gingoog City and owned by
            Sarah Mae Ramasola. Since its establishment, the shop has focused on providing
            quality services for enhancing and maintaining motorcycle performance.
          </p>
          <p className="text-gray-700 text-justify leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            TRTech currently operates as a single-branch business located in Gingoog City,
            serving local motorcycle owners who rely on their vehicles for daily transportation.
            The shop offers services such as tune-ups, oil changes, and other maintenance
            solutions to ensure motorcycles remain safe, efficient, and in good condition.
          </p>
          <p className="text-gray-700 text-justify leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            Through its commitment to quality service and customer satisfaction, TRTech
            continues to grow as a trusted motorcycle service provider in the community.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white px-6 md:px-24 pb-16 flex flex-col gap-8">
        <div>
          <h3 className="text-gray-900 font-black mb-2" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '32px' }}>SHOP MISSION</h3>
          <p className="text-gray-700 text-justify leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            TRTech is committed to providing reliable and high-quality motorcycle maintenance
            services by ensuring efficient service processes, adopting digital solutions for
            appointment management, and delivering customer satisfaction through timely,
            organized, and professional service.
          </p>
        </div>
        <div>
          <h3 className="text-gray-900 font-black mb-2" style={{ fontFamily: 'Roboto, sans-serif', fontSize: '32px' }}>SHOP VISION</h3>
          <p className="text-gray-700 text-justify leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '20px' }}>
            TRTech envisions becoming a leading and trusted motorcycle service provider in Gingoog
            City, known for delivering efficient, organized, and high-quality maintenance services
            through the use of modern technology and customer-centered solutions.
          </p>
        </div>
      </div>

    </div>
  )
}
