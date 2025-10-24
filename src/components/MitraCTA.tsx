import Image from 'next/image';

export default function MitraCTA() {
  return (
    <section className="w-full bg-gradient-to-br from-[#05E089] to-[#00ACF8] py-10 md:py-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-8 items-center">
          {/* Image */}
          <div className="hidden md:flex justify-start pr-0 md:pr-8">
            <Image 
              src="/images/svg/BB2.png" 
              alt="CTA Mitra" 
              width={400}
              height={300}
              className="w-auto h-full object-contain"
              loading="lazy"
              quality={75}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col space-y-2 sm:space-y-3 text-center md:text-left">
            <h2 className="text-4xl sm:text-2xl md:text-3xl font-bold text-white md:hidden block">
              Mulai langkahmu Bersama Kami!
            </h2>
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white md:block hidden">
              Mulai langkahmu sekarang bersama Akualita Academy Affiliate!
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed md:mr-20 mb-10 pb-2">
              Bergabunglah dengan Akualita Academy Affiliate dan jadilah bagian dari komunitas penuh peluang! 
              Dapatkan penghasilan tambahan yang fleksibel dan berkelanjutan sambil berbagi informasi bermanfaat.
            </p>
            <div className="mb-20">
              <a 
                href="https://wa.me/+6281127011818" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-[#05E089] font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl shadow hover:bg-gray-100 transition"
              >
                Daftar Sekarang!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
