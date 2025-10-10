import Image from 'next/image';

export default function MitraHero() {
  return (
    <section className="w-full text-white relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image dengan ratio 1440 x 589 */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/Bg/bgmitra.png"
          alt="Background Mitra"
          width={1440}
          height={589}
          className="w-full h-full object-cover"
          priority
          quality={75}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-20">
          <div className="flex items-center justify-center lg:justify-end">
            {/* Content Container */}
            <div className="w-full lg:w-2/3 xl:w-1/2 text-center lg:text-left space-y-6 lg:space-y-8">
              {/* Main Heading */}
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg">
                  Ayo, jadi <span className="bg-[#00ACF8] text-[#FFFFFF] inline-block px-3 py-2 rounded-lg mt-2 drop-shadow-md">mitra</span> Akualita Academy!
                </h1>
                
                <div className="space-y-3 lg:space-y-4">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white drop-shadow-md leading-relaxed">
                    Mulai perjalananmu bersama Akualita Academy Affiliate!
                  </p>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white drop-shadow-md leading-relaxed">
                    Buka peluang baru untuk tumbuh bersama kami tanpa batas hanya dari rumah.
                  </p>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 text-white mt-8 lg:mt-12">
                {/* Box 1 - Komisi */}
                <div className="flex flex-col items-center lg:items-start bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-3 lg:mb-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#00ACF8] rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 lg:w-7 lg:h-7 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 lg:mb-3 text-center lg:text-left drop-shadow-md">Komisi Puluhan Juta</h3>
                  <p className="text-xs sm:text-sm lg:text-base font-light text-center lg:text-left drop-shadow-sm leading-relaxed">
                    Nikmati peluang komisi dari setiap pendaftaran training & sertifikasi, 
                    komisi yang didapat bisa mencapai puluhan juta.
                  </p>
                </div>

                {/* Box 2 - Dukungan */}
                <div className="flex flex-col items-center lg:items-start bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-3 lg:mb-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#00ACF8] rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 lg:w-7 lg:h-7 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 lg:mb-3 text-center lg:text-left drop-shadow-md">Didampingi Tim Kami</h3>
                  <p className="text-xs sm:text-sm lg:text-base font-light text-center lg:text-left drop-shadow-sm leading-relaxed">
                    Akses materi promosi & panduan langsung dari tim Akualita Academy 
                    untuk membantumu strategi pemasaranmu.
                  </p>
                </div>

                {/* Box 3 - Kemudahan */}
                <div className="flex flex-col items-center lg:items-start bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 hover:bg-white/20 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                  <div className="mb-3 lg:mb-4">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#00ACF8] rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 lg:w-7 lg:h-7 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 lg:mb-3 text-center lg:text-left drop-shadow-md">Komisi Cepat & Mudah</h3>
                  <p className="text-xs sm:text-sm lg:text-base font-light text-center lg:text-left drop-shadow-sm leading-relaxed">
                    Bagikan link referral-mu untuk ajak teman atau perusahaan ikut training 
                    Akualita dan nikmati komisi instan.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start pt-6 lg:pt-8">
                <a 
                  href="https://wa.me/+6281127011818" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-[#05E089] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg md:text-xl"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Daftar Sekarang!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
