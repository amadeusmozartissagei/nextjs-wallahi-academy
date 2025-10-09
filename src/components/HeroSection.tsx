import Image from 'next/image';

export default function HeroSection() {
  return (
    <section 
      className="w-full min-h-screen text-white md:pt-0 pb-10 px-3 md:px-16" 
      style={{
        backgroundImage: 'url(/images/Bg/ww.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto w-full">
        <div className="space-y-4 ml-4 mt-6">
          <h2 className="text-4xl sm:text-3xl md:text-4xl max-[1024px]:text-3xl lg:text-4xl xl:text-6xl font-bold text-[#1F2756]">
            Bangun <span className="text-[#1F2756]">karirmu</span>,<br />
            bersama <span className="text-[#1F2756]">kami</span><br />
            <span className="bg-[#00ACF8] text-[#FFFFFF] inline-block px-3 py-1 rounded mt-1">mulai sekarang</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-900 max-w-xl">
            Kami bantu kamu tingkatkan keterampilan, raih sertifikasi resmi, dan siap hadapi dunia kerja dengan lebih percaya diri!
          </p>

          <div className="mt-4">
            <a 
              href="https://wa.me/+6281127011818" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#00ACF8] text-white font-semibold px-4 md:m py-3 md:py-3 rounded-lg shadow-md hover:bg-cyan-300 transition duration-300 text-base md:text-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Coba Konsultasi
            </a>
          </div>
        </div>
        <div className="relative w-full h-full flex justify-center md:justify-end items-start mt-[-2rem] md:mt-[4rem]">
          <Image 
            src="/images/gb3.png"
            alt="Galeri foto kegiatan pelatihan di Akualita Academy"
            width={700}
            height={500}
            priority
            unoptimized
            className="w-full sm:w-[500px] md:w-[700px] h-auto object-cover object-right rounded-md" 
          />
        </div>
      </div>
    </section>
  );
}
