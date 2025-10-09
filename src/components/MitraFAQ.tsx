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
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-gray-900 font-bold text-4xl text-center mb-3">Frequently Asked Questions (FAQ)</h1>
        <p className="text-center text-gray-500 mb-10">Temukan jawaban dari pertanyaan yang paling sering diajukan mengenai Akualita Academy Affiliate.</p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <button 
                onClick={() => toggleFaq(index)} 
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <svg 
                  className={`h-6 w-6 text-gray-600 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center text-gray-900 px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 mt-6">Tumbuh Bersama #AkualitaAffiliate.</h2>
          <p className="text-sm sm:text-base md:text-lg">Daftarkan dirimu sekarang & mulai hasilkan komisi dari referral.</p>
          <p className="text-sm sm:text-base md:text-lg">Butuh bantuan? Email <a href="mailto:affiliate@akualita-academy.com" className="text-[#00ACF8] hover:underline">affiliate@akualita-academy.com</a>.</p>
        </div>
      </div>
    </section>
  );
}
