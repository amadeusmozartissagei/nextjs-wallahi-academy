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
    <section className="bg-[#F8FCFE] py-16 px-6 md:px-20">
      <div className="flex items-center justify-center px-4">
        <h2 className="text-center max-w-4xl text-3xl md:text-4xl font-bold text-[#1F2756] mb-3">
          Berbagai Manfaat yang Akan Kamu Dapatkan Saat Mendaftar di{' '}
          <span className="bg-[#00ACF8] text-white inline-block px-3 py-1 rounded mt-1 text-2xl md:text-4xl">
            Akualita Academy
          </span>
        </h2>
      </div>

      <div className="flex items-center justify-center mb-6">
        <p className="text-lg md:text-xl text-[#5E6574] mb-10 hidden md:block">
          Bersama Akualita Academy, tingkatkan kompetensi, raih sertifikasi, dan siap hadapi dunia kerja!
        </p>
      </div>

      <div className="max-w-9xl mx-auto grid md:grid-cols-[0.5fr_0.8fr] gap-10 items-center">
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 border border-gray-300 p-3 rounded-xl transition-all duration-300 group hover:bg-[#00ACF8] hover:border-white hover:shadow-md max-w-xl"
            >
              <div className="text-[#00ACF8] text-3xl group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1 text-[#1F2756] group-hover:text-white">
                  {benefit.title}
                </h3>
                <p className="text-[#5E6574] leading-relaxed group-hover:text-white">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-start">
          <Image 
            src="/images/Bg/bggg2.png" 
            alt="Pelatihan Akualita Academy" 
            width={500}
            height={400}
            className="rounded-xl shadow-md w-full md:w-[95%]" 
          />
        </div>
      </div>
    </section>
  );
}
