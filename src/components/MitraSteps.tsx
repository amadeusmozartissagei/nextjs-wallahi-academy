import Image from 'next/image';

export default function MitraSteps() {
  const steps = [
    {
      icon: '/images/svg/daft.png',
      title: 'Step 1: Daftar',
      description: 'Bergabung sebagai Affiliate Akualita Academy—gratis & cepat.',
      alt: 'Daftar'
    },
    {
      icon: '/images/svg/shr.png',
      title: 'Step 2: Bagikan Link',
      description: 'Sebarkan harga referral ke jaringanmu untuk program training & sertifikasi.',
      alt: 'Bagikan Link'
    },
    {
      icon: '/images/svg/mony.png',
      title: 'Step 3: Dapatkan Komisi',
      description: 'Terima komisi untuk setiap pendaftaran dan pembayaran yang terjadi.',
      alt: 'Komisi'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2756] leading-tight mb-4 lg:mb-6">
            3 Langkah Mudah Menjadi Mitra Akualita Academy
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="border-2 border-gray-200 p-6 lg:p-8 rounded-xl lg:rounded-2xl transition-all duration-300 flex flex-col items-center text-center hover:bg-[#E6F8FE] hover:shadow-xl hover:-translate-y-2 hover:border-b-4 hover:border-[#00ACF8] group"
            >
              {/* Step Number removed */}

              {/* Icon */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src={step.icon} 
                  alt={step.alt} 
                  width={112}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
                  loading="lazy"
                  quality={75}
                />
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3 lg:mb-4 text-[#1F2756]">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-base sm:text-lg text-gray-600 mb-6 lg:mb-8">
            Siap memulai perjalanan sebagai mitra? Bergabung sekarang dan nikmati komisi menarik!
          </p>
          <a 
            href="https://wa.me/+6281127011818" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#00ACF8] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-cyan-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-base sm:text-lg md:text-xl"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Daftar Sekarang!
          </a>
        </div>
      </div>
    </section>
  );
}
