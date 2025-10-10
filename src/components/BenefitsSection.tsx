import Image from 'next/image';

export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Akses Mudah dan Terjangkau untuk Individu',
      description: 'Program pelatihan dan sertifikasi dirancang khusus untuk perorangan, tanpa harus melalui jalur perusahaan.'
    },
    {
      title: 'Sertifikasi Resmi dan Diakui Industri',
      description: 'Peserta akan mendapatkan sertifikasi BNSP dan Kemnaker yang diakui secara nasional serta dibutuhkan di berbagai sektor industri.'
    },
    {
      title: 'Siap Bersaing di Dunia Kerja',
      description: 'Meningkatkan kompetensi dan kepercayaan diri untuk menghadapi persaingan di dunia kerja, khususnya bagi mahasiswa dan lulusan baru.'
    },
    {
      title: 'Materi Praktis dan Relevan',
      description: 'Program fokus pada kebutuhan industri dengan materi yang aplikatif dan sesuai standar.'
    },
    {
      title: 'Pilihan Belajar Online dan Offline',
      description: 'Fleksibel sesuai kebutuhan peserta, tersedia kelas tatap muka dan kelas online interaktif.'
    },
    {
      title: 'Belajar dari Praktisi Berpengalaman',
      description: 'Program dipandu oleh instruktur profesional yang memahami kebutuhan dunia kerja dan industri.'
    }
  ];

  return (
    <section className="bg-[#F8FCFE] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2756] leading-tight mb-4 lg:mb-6">
            Berbagai Manfaat yang Akan Kamu Dapatkan Saat Mendaftar di{' '}
            <span className="bg-[#00ACF8] text-white inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-lg mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Akualita Academy
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#5E6574] max-w-4xl mx-auto leading-relaxed">
            Bersama Akualita Academy, tingkatkan kompetensi, raih sertifikasi, dan siap hadapi dunia kerja!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Benefits List */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 sm:gap-6 border border-gray-300 p-4 sm:p-6 rounded-xl lg:rounded-2xl transition-all duration-300 group hover:bg-[#00ACF8] hover:border-white hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex-shrink-0">
                  <div className="text-[#00ACF8] group-hover:text-white transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2 text-[#1F2756] group-hover:text-white transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5E6574] leading-relaxed group-hover:text-white transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-lg lg:max-w-none">
              <Image 
                src="/images/Bg/bggg2.png" 
                alt="Pelatihan Akualita Academy" 
                width={500}
                height={400}
                className="rounded-xl lg:rounded-2xl shadow-lg w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
