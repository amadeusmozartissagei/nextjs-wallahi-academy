import Image from 'next/image';

export default function MitraHero() {
  return (
    <section className="w-full text-white relative overflow-hidden">
      {/* Background Image dengan ratio 1440 x 589 */}
      <div className="w-full h-auto">
        <Image
          src="/images/Bg/bgmitra.png"
          alt="Background Mitra"
          width={1440}
          height={589}
          className="w-full h-auto object-cover"
          priority
          quality={75}
        />
      </div>
      {/* Tidak ada overlay - tampilkan gambar asli */}
      
      <div className="absolute inset-0 z-10 flex items-center justify-end max-w-7xl mx-auto w-full px-3 md:px-16">
        {/* Teks di kanan - sesuai referensi gambar */}
        <div className="space-y-4 ml-4 mt-6 text-left max-w-2xl">
          <h2 className="text-4xl sm:text-3xl md:text-4xl max-[1024px]:text-3xl lg:text-4xl xl:text-6xl font-bold text-white text-left drop-shadow-lg">
            Ayo, jadi <span className="bg-[#00ACF8] text-[#FFFFFF] inline-block px-3 py-1 rounded mt-1 drop-shadow-md">mitra</span> Akualita Academy!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-xl text-left drop-shadow-md">
            Mulai perjalananmu bersama Akualita Academy Affiliate!
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-xl text-left drop-shadow-md">
            Buka peluang baru untuk tumbuh bersama kami tanpa batas hanya dari rumah.
          </p>

          {/* Box Keunggulan - Sangat Kecil */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-white mt-4 md:mt-6">
            {/* Box 1 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
              </div>
              <h3 className="text-sm md:text-base font-bold mb-1 text-left drop-shadow-md">Komisi Puluhan Juta</h3>
              <p className="text-xs font-light text-left mb-2 drop-shadow-sm leading-tight">
                Nikmati peluang komisi dari setiap pendaftaran training & sertifikasi, 
                komisi yang didapat bisa mencapai puluhan juta.
              </p>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <h3 className="text-sm md:text-base font-bold mb-1 text-left drop-shadow-md">Didampingi Tim Kami</h3>
              <p className="text-xs font-light text-left mb-2 drop-shadow-sm leading-tight">
                Akses materi promosi & panduan langsung dari tim Akualita Academy 
                untuk membantumu strategi pemasaranmu.
              </p>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
              </div>
              <h3 className="text-sm md:text-base font-bold mb-1 text-left drop-shadow-md">Komisi Cepat & Mudah</h3>
              <p className="text-xs font-light text-left mb-2 drop-shadow-sm leading-tight">
                Bagikan link referral-mu untuk ajak teman atau perusahaan ikut training 
                Akualita dan nikmati komisi instan.
              </p>
            </div>
          </div>

          {/* Button Daftar Sekarang */}
          <div className="mt-6 md:mt-8 flex justify-end">
            <a href="https://wa.me/+6281127011818" target="_blank" className="inline-flex items-center bg-white text-[#05E089] font-semibold px-4 md:px-6 py-3 md:py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 text-base md:text-xl">
              Daftar Sekarang!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
