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
    <section className="pt-0 md:pt-6 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1F2756] leading-snug hidden md:block">
          Pilih Program Terbaik untuk Memulai Perjalanan <br className="hidden md:block" />
          Belajarmu di Akualita Academy
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1F2756] block md:hidden">
          Pilih Program Terbaik di Akualita Academy
        </h2>
        <br />
        <div className="grid md:grid-cols-3 gap-10 text-[#1F2756] bg-white">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="border-2 border-gray-200 p-6 rounded-xl transition duration-300 flex flex-col items-center text-center hover:bg-[#E6F8FE] hover:shadow-lg hover:-translate-y-1 hover:border-b-4 hover:border-[#00ACF8]"
            >
              <div className="bg-gradient-to-br from-[#05E089] to-[#00ACF8] w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Image 
                  src={program.icon} 
                  alt="Icon Program" 
                  width={program.iconSize.width} 
                  height={program.iconSize.height}
                />
              </div>
              <h3 className="font-bold text-2xl mb-2">{program.title}</h3>
              <p className="text-gray-600 md:text-lg text-lg leading-relaxed">
                {program.description}
              </p>
              <div className="mt-6">
                <a 
                  href="" 
                  className="inline-flex items-center bg-[#00ACF8] text-white font-semibold px-3 py-2 rounded-lg shadow-md hover:bg-cyan-300 transition duration-300 text-base md:text-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 mr-2">
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
