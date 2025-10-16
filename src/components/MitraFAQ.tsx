'use client';

import { useState } from 'react';

export default function MitraFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Apa itu Akualita Academy Affiliate?",
      answer: "Program kemitraan referral untuk memasarkan program Akualita dan memperoleh komisi dari pendaftaran yang berhasil."
    },
    {
      question: "Apa keuntungan untuk Affiliate?",
      answer: "Komisi per pendaftaran, materi promosi, bimbingan tim Akualita, dan laporan transparan."
    },
    {
      question: "Bagaimana cara mengetahui form referral?",
      answer: "Tenang, form referral akan langsung kamu dapatkan dari Admin Akualita Academy setelah proses pendaftaran selesai."
    },
    {
      question: "Bisakah saya memperbarui data (rekening/KTP/NPWP)?",
      answer: "Bisa, melalui menghubungi tim affiliate support."
    },
    {
      question: "Apakah ada potongan biaya atas komisi?",
      answer: "Mengikuti S&K termasuk ketentuan pajak/biaya transfer yang berlaku."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-16 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2756] leading-tight mb-4 lg:mb-6">
            Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Temukan jawaban dari pertanyaan yang paling sering diajukan mengenai Akualita Academy Affiliate.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 lg:space-y-6">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl lg:rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
              <button 
                onClick={() => toggleFaq(index)} 
                className="w-full text-left px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-sm sm:text-base lg:text-lg font-semibold text-[#1F2756] pr-4 leading-relaxed">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <svg 
                    className={`h-5 w-5 sm:h-6 sm:w-6 text-gray-600 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
                  <div className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact Info */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-[#F8FCFE] rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-200">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1F2756] mb-4 lg:mb-6">
              Tumbuh Bersama #AkualitaAffiliate
            </h2>
            <div className="space-y-3 lg:space-y-4">
              <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                Daftarkan dirimu sekarang & mulai hasilkan komisi dari referral.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                Butuh bantuan? Email{' '}
                <a 
                  href="mailto:hrga@akualita.com" 
                  className="text-[#00ACF8] hover:text-[#05E089] font-semibold transition-colors duration-200"
                >
                  hrga@akualita.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
