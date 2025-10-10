export default function MitraCommission() {
  const commissionData = [
    { range: '≤ Rp 5.000.000', rate: '5%', bgColor: 'bg-white' },
    { range: 'Rp 5.000.001 - Rp 25.000.000', rate: '6%', bgColor: 'bg-gray-50' },
    { range: 'Rp 25.000.001 - Rp 100.000.000', rate: '8%', bgColor: 'bg-white' },
    { range: '> Rp 100.000.000', rate: '10%', bgColor: 'bg-gray-50' }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F8FCFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2756] leading-tight mb-4 lg:mb-6">
            Skema Komisi Mitra Akualita Academy
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Semakin besar penjualan yang kamu hasilkan, semakin tinggi komisi yang akan kamu terima!
          </p>
        </div>

        {/* Commission Table */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="overflow-x-auto rounded-xl lg:rounded-2xl shadow-xl border border-gray-200 bg-white">
              <table className="w-full text-gray-700">
                <thead>
                  <tr className="bg-gradient-to-r from-[#00ACF8] to-[#05E089]">
                    <th className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-white text-sm sm:text-base lg:text-lg font-semibold text-center">
                      Total Penjualan
                    </th>
                    <th className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-white text-sm sm:text-base lg:text-lg font-semibold text-center">
                      Komisi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {commissionData.map((item, index) => (
                    <tr 
                      key={index}
                      className={`${item.bgColor} hover:bg-[#E6F8FE] transition-colors duration-200 group`}
                    >
                      <td className="border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-sm sm:text-base lg:text-lg text-center group-hover:font-semibold transition-all duration-200">
                        {item.range}
                      </td>
                      <td className="border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-sm sm:text-base lg:text-lg font-bold text-center text-[#00ACF8] group-hover:text-[#05E089] transition-colors duration-200">
                        {item.rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 lg:mt-16">
          <div className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#00ACF8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-[#1F2756] mb-2">Komisi Transparan</h3>
                <p className="text-xs sm:text-sm text-gray-600">Semua komisi dihitung secara otomatis dan transparan</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#05E089] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-[#1F2756] mb-2">Pembayaran Cepat</h3>
                <p className="text-xs sm:text-sm text-gray-600">Komisi dibayarkan setiap bulan dengan sistem yang mudah</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#00ACF8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-[#1F2756] mb-2">Dukungan Tim</h3>
                <p className="text-xs sm:text-sm text-gray-600">Tim kami siap membantu kesuksesan bisnis affiliate-mu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
