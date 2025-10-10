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
        {/* Teks di kanan */}
        <div className="space-y-4 ml-4 mt-6 text-right max-w-2xl">
          <h2 className="text-4xl sm:text-3xl md:text-4xl max-[1024px]:text-3xl lg:text-4xl xl:text-6xl font-bold text-white">
            Ayo, jadi <span className="bg-[#00ACF8] text-[#FFFFFF] inline-block px-3 py-1 rounded mt-1">mitra</span> Akualita Academy!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-xl">
            Mulai perjalananmu bersama Akualita Academy Affiliate!
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-xl">
            Buka peluang baru untuk tumbuh bersama kami tanpa batas hanya dari rumah.
          </p>

          <div className="mt-4 flex justify-end">
            <a href="https://wa.me/+6281127011818" target="_blank" className="inline-flex items-center bg-white text-[#05E089] font-semibold px-4 md:px-6 py-3 md:py-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 text-base md:text-xl">
              Daftar Sekarang!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
