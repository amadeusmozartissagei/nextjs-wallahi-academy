import Image from 'next/image';

export default function MitraSteps() {
  return (
    <section className="pt-0 md:pt-6 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul */}
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-br from-[#05E089] to-[#00ACF8] leading-snug p-10">
          3 Langkah Mudah Menjadi Mitra Akualita Academy
        </h2>

        {/* Grid Langkah */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-[#1F2756] bg-white">
          
          {/* Step 1 */}
          <div className="border-2 border-gray-200 p-6 rounded-xl transition duration-300 flex flex-col items-center text-center hover:bg-[#E6F8FE] hover:shadow-lg hover:-translate-y-1 hover:border-b-4 hover:border-[#00ACF8]">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl flex items-center justify-center mb-4">
              <Image 
                src="/images/svg/daft.png" 
                alt="Daftar" 
                width={112}
                height={80}
                className="w-auto h-20 md:w-28 md:h-auto"
                loading="lazy"
                quality={75}
              />
            </div>
            <h3 className="font-bold text-xl md:text-2xl mb-2">Step 1: Daftar</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Bergabung sebagai Affiliate Akualita Academy—gratis & cepat.
            </p>
          </div>

          {/* Step 2 */}
          <div className="border-2 border-gray-200 p-6 rounded-xl transition duration-300 flex flex-col items-center text-center hover:bg-[#E6F8FE] hover:shadow-lg hover:-translate-y-1 hover:border-b-4 hover:border-[#00ACF8]">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl flex items-center justify-center mb-4">
              <Image 
                src="/images/svg/shr.png" 
                alt="Bagikan Link" 
                width={112}
                height={80}
                className="w-auto h-20 md:w-28 md:h-auto"
                loading="lazy"
                quality={75}
              />
            </div>
            <h3 className="font-bold text-xl md:text-2xl mb-2">Step 2: Bagikan Link</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Sebarkan harga referral ke jaringanmu untuk program training & sertifikasi.
            </p>
          </div>

          {/* Step 3 */}
          <div className="border-2 border-gray-200 p-6 rounded-xl transition duration-300 flex flex-col items-center text-center hover:bg-[#E6F8FE] hover:shadow-lg hover:-translate-y-1 hover:border-b-4 hover:border-[#00ACF8]">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl flex items-center justify-center mb-4">
              <Image 
                src="/images/svg/mony.png" 
                alt="Komisi" 
                width={112}
                height={80}
                className="w-auto h-20 md:w-28 md:h-auto"
                loading="lazy"
                quality={75}
              />
            </div>
            <h3 className="font-bold text-xl md:text-2xl mb-2">Step 3: Dapatkan Komisi</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Terima komisi untuk setiap pendaftaran dan pembayaran yang terjadi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
