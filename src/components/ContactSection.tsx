'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1F2756]">
            Hubungi kami melalui email untuk pertanyaan seputar produk kami
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Kamu
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Masukkan email aktif kamu" 
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00ACF8]" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subjek Email
              </label>
              <input 
                type="text" 
                name="subject" 
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Masukkan subjek email ini" 
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00ACF8]" 
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Isi Pesan
              </label>
              <textarea 
                rows={5} 
                name="message" 
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Masukkan pertanyaan kamu" 
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00ACF8]" 
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#00ACF8] text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-[#0095d9] transition duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Kirim Email
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.470496169294!2d110.4722692!3d-6.9964396999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708ce1b39ada93%3A0x38813ea0bc529c6a!2sPT%20Adhikriya%20Kualita%20Utama%20(AKUALITA)!5e0!3m2!1sid!2sid!4v1720500000000!5m2!1sid!2sid" 
            width="100%" 
            height="400" 
            style={{ border: 0, borderRadius: '0.75rem' }}
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div>
            <h3 className="text-xl font-bold text-[#1F2756] mb-1">Kantor Kami</h3>
            <p className="text-base text-gray-700">
              AKUALITA Academy Office <br />
              CV Primera Purwina Gemilang :<br />
              Jl. Abdul Manan No.25B Semarang <br />
              Phone : 0811-2701-1818 (General Info)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
