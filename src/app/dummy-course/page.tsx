'use client';

export default function DummyCoursePage() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans antialiased min-h-screen relative">
      {/* Hero Section */}
      <section className="relative min-h-[620px] h-screen w-full flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop)',
          }}
        />

        {/* Overlay Gradient Gelap */}
        <div
          className="absolute inset-0 w-full h-full z-[1]"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.2) 100%)',
          }}
        />

        {/* Container */}
        <div className="relative z-[2] max-w-[1200px] mx-auto px-5 w-full">
          {/* Hero Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 max-w-[800px] text-white">
            Upgrade salary dengan<br />
            beralih jadi <span className="text-[#00D4FF]">Ahli K3 andalan</span>
          </h1>

          {/* Badge AI */}
          <div className="inline-flex items-center bg-white text-gray-800 px-4 py-2 rounded-full font-semibold text-sm md:text-base mb-6 shadow-lg">
            <span className="text-[#00D4FF] mr-2">✨</span>
            Supported with AI
          </div>

          {/* Hero Description */}
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200 max-w-[600px] mb-10">
            Mulai investasi kariermu di masa depan lewat bootcamp dengan
            kurikulum lengkap, portofolio siap kerja, dan sertifikasi resmi.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#"
              className="px-7 py-3 rounded-lg font-semibold text-white bg-[#E65100] border-2 border-[#E65100] transition-all hover:bg-[#ff6f00] hover:border-[#ff6f00] text-center"
            >
              Konsultasi Gratis
            </a>
            <a
              href="#"
              className="px-7 py-3 rounded-lg font-semibold text-white bg-transparent border-2 border-white transition-all hover:bg-white/10 text-center"
            >
              Dapatkan Promo
            </a>
          </div>

          {/* Trust Signal */}
          <div className="flex items-center gap-3 text-sm text-gray-300">
            <span>Terakui oleh Kemendikti</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg/800px-Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg.png"
              alt="Logo Kemendikti"
              className="h-10 w-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
