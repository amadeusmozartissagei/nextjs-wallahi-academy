import Image from 'next/image';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#222222] text-white py-8 sm:py-12 px-4 sm:px-6 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-left">
            {/* Logo & Description */}
            <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-start">
              <Image 
                src="/images/Logo/Logo1.png" 
                alt="Logo Akualita Academy" 
                width={256}
                height={64}
                className="h-auto w-40 sm:w-48 lg:w-56 mb-6"
              />
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md">
                Kami bantu kamu tingkatkan keterampilan, raih sertifikasi resmi, dan siap hadapi dunia kerja dengan lebih percaya diri!
              </p>
            </div>

            

            {/* Sosial Media & Kontak */}
            <div className="flex flex-col items-start lg:col-span-1">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-gray-200">Hubungi Kami</h3>
              
              {/* Kontak */}
              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-2">Nomor Kantor/HP:</p>
                <p className="text-sm sm:text-base text-white mb-4">0811-2701-1818 (General Info)</p>
                
                <p className="text-sm text-gray-400 mb-2">Email:</p>
                <a href="mailto:academy@akualita.com" className="text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-200">
                  academy@akualita.com
                </a>
              </div>

              {/* Sosial Media */}
              <div>
                <p className="text-sm text-gray-400 mb-3">Sosial Media:</p>
                <div className="flex flex-col gap-3">
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/company/akualita-academy/" 
                    aria-label="LinkedIn" 
                    className="flex items-center gap-2 hover:text-gray-200 transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                    <span className="text-sm sm:text-base">LinkedIn</span>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/akualita.academy/" 
                    aria-label="Instagram" 
                    className="flex items-center gap-2 hover:text-gray-200 transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                    <span className="text-sm sm:text-base">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Metode Pembayaran */}
            <div className="flex flex-col items-start lg:col-span-1">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-gray-200">Metode Pembayaran</h3>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="bg-white border border-gray-200 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 inline-flex items-center justify-center">
                  <Image
                    src="/images/Payment/1-BNI.png"
                    alt="BNI"
                    width={160}
                    height={48}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 inline-flex items-center justify-center">
                  <Image
                    src="/images/Payment/2-Bank-Mandiri.png"
                    alt="Bank Mandiri"
                    width={160}
                    height={48}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 inline-flex items-center justify-center">
                  <Image
                    src="/images/Payment/3-Bank%20Permata.png"
                    alt="Bank Permata"
                    width={160}
                    height={48}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 inline-flex items-center justify-center">
                  <Image
                    src="/images/Payment/4-BSI.png"
                    alt="BSI"
                    width={160}
                    height={48}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 inline-flex items-center justify-center">
                  <Image
                    src="/images/Payment/5-Bank%20Sahabat%20Sampoerna.png"
                    alt="Bank Sahabat Sampoerna"
                    width={200}
                    height={48}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 inline-flex items-center justify-center">
                  <Image
                    src="/images/Payment/6-Bank-BJB.png"
                    alt="Bank BJB"
                    width={160}
                    height={48}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 inline-flex items-center justify-center">
                  <Image
                    src="/images/Payment/7-BRI.png"
                    alt="BRI"
                    width={160}
                    height={48}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
                <div className="bg-white border border-gray-200 rounded-md px-2 sm:px-3 py-1 sm:py-1.5 inline-flex items-center justify-center">
                  <Image
                    src="/images/Payment/8-CIMB-Niaga.png"
                    alt="CIMB Niaga"
                    width={200}
                    height={48}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-[#222222] text-gray-400 text-center py-4 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-20">
          <p className="text-xs sm:text-sm font-semibold">Copyright &copy; 2025 Akualita Academy. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
