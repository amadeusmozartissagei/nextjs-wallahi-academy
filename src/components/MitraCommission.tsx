export default function MitraCommission() {
  return (
    <div className="gap-8 items-center py-20 px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Skema Komisi Mitra Akualita Academy
        </h2>
        
        {/* Table */}
        <div className="flex justify-center">
          <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200 w-full max-w-5xl">
            <table className="table-auto w-full text-gray-700 text-center text-sm sm:text-base md:text-lg">
              <thead>
                <tr className="bg-gradient-to-r from-[#00ACF8] to-[#05E089]">
                  <th className="px-3 py-2 sm:px-7 sm:py-6 text-white text-base sm:text-xl md:text-xl font-semibold">
                    Total Penjualan
                  </th>
                  <th className="px-3 py-2 sm:px-7 sm:py-6 text-white text-base sm:text-xl md:text-xl font-semibold">
                    Komisi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="border px-3 py-2 sm:px-7 sm:py-6">≤ Rp 5.000.000</td>
                  <td className="border px-3 py-2 sm:px-7 sm:py-6 font-semibold">5%</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition">
                  <td className="border px-3 py-2 sm:px-7 sm:py-6">Rp 5.000.001 - Rp 25.000.000</td>
                  <td className="border px-3 py-2 sm:px-7 sm:py-6 font-semibold">6%</td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition">
                  <td className="border px-3 py-2 sm:px-7 sm:py-6">Rp 25.000.001 - Rp 100.000.000</td>
                  <td className="border px-3 py-2 sm:px-7 sm:py-6 font-semibold">8%</td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition">
                  <td className="border px-3 py-2 sm:px-7 sm:py-6">&gt; Rp 100.000.000</td>
                  <td className="border px-3 py-2 sm:px-7 sm:py-6 font-semibold">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
