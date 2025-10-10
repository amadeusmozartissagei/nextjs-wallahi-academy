import Image from 'next/image';

export default function ProgramSection() {
  const programs = [
    {
      icon: '/images/svg/certi12.svg',
      title: 'Pelatihan Sertifikasi',
      description: 'Tingkatkan kompetensi melalui pelatihan sertifikasi resmi dengan materi dari instruktur berpengalaman, siap menghadapi tantangan kerja.',
      iconSize: { width: 40, height: 40 }
    },
    {
      icon: '/images/svg/noncerti12.svg',
      title: 'Pelatihan Non-Sertifikasi',
      description: 'Pelatihan praktis untuk menambah pengetahuan dan keterampilan tanpa persyaratan ujian sertifikasi, fleksibel sesuai kebutuhan.',
      iconSize: { width: 48, height: 48 }
    },
    {
      icon: '/images/svg/boot12.svg',
      title: 'Bootcamp',
      description: 'Program intensif dengan pembelajaran terstruktur dan praktik langsung, dirancang untuk menguasai keterampilan dalam waktu singkat.',
      iconSize: { width: 32, height: 32 }
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2756] leading-tight mb-4 lg:mb-6">
            Pilih Program Terbaik untuk Memulai Perjalanan{' '}
            <span className="block lg:inline">Belajarmu di Akualita Academy</span>
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="border-2 border-gray-200 p-6 lg:p-8 rounded-xl lg:rounded-2xl transition-all duration-300 flex flex-col items-center text-center hover:bg-[#E6F8FE] hover:shadow-xl hover:-translate-y-2 hover:border-b-4 hover:border-[#00ACF8] group"
            >
              {/* Icon */}
              <div className="bg-gradient-to-br from-[#05E089] to-[#00ACF8] w-16 h-16 lg:w-20 lg:h-20 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src={program.icon} 
                  alt={`Icon ${program.title}`} 
                  width={program.iconSize.width} 
                  height={program.iconSize.height}
                  className="w-8 h-8 lg:w-10 lg:h-10"
                />
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3 lg:mb-4 text-[#1F2756]">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 flex-grow">
                {program.description}
              </p>

              {/* CTA Button */}
              <div className="w-full">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center bg-[#00ACF8] text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md hover:bg-cyan-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base lg:text-lg w-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z" clipRule="evenodd" />
                  </svg>
                  Selengkapnya
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
