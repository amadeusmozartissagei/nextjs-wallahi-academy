'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Email berhasil dikirim! Tim kami akan segera merespons.'
        });
        
        // Reset form
        setFormData({
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Terjadi kesalahan saat mengirim email. Silakan coba lagi.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Terjadi kesalahan jaringan. Silakan coba lagi.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1F2756] leading-tight mb-4 lg:mb-6">
                Hubungi kami melalui email untuk pertanyaan seputar produk kami
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Message */}
              {submitStatus.type && (
                <div className={`p-4 rounded-xl border ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border-green-200 text-green-800' 
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}>
                  <div className="flex items-center gap-3">
                    {submitStatus.type === 'success' ? (
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className="text-sm font-medium">{submitStatus.message}</span>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Email Kamu
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Masukkan email aktif kamu" 
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 sm:py-3.5 focus:outline-none focus:ring-2 focus:ring-[#00ACF8] focus:border-transparent transition-all duration-200 text-sm sm:text-base" 
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Subjek Email
                </label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Masukkan subjek email ini" 
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 sm:py-3.5 focus:outline-none focus:ring-2 focus:ring-[#00ACF8] focus:border-transparent transition-all duration-200 text-sm sm:text-base" 
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                  Isi Pesan
                </label>
                <textarea 
                  rows={5} 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Masukkan pertanyaan kamu" 
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 sm:py-3.5 focus:outline-none focus:ring-2 focus:ring-[#00ACF8] focus:border-transparent transition-all duration-200 text-sm sm:text-base resize-none" 
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full px-6 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 sm:gap-3 transition-all duration-200 text-sm sm:text-base ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : 'bg-[#00ACF8] text-white hover:bg-[#0095d9] hover:shadow-lg transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    Kirim Email
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map & Contact Info */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            {/* Map */}
            <div className="relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.470496169294!2d110.4722692!3d-6.9964396999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708ce1b39ada93%3A0x38813ea0bc529c6a!2sPT%20Adhikriya%20Kualita%20Utama%20(AKUALITA)!5e0!3m2!1sid!2sid!4v1720500000000!5m2!1sid!2sid" 
                width="100%" 
                height="300"
                className="rounded-xl lg:rounded-2xl shadow-lg"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Info */}
            <div className="bg-[#F8FCFE] p-6 lg:p-8 rounded-xl lg:rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-[#1F2756] mb-4 lg:mb-6">Kantor Kami</h3>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#00ACF8]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      <span className="font-semibold">AKUALITA Academy Office</span><br />
                      CV Primera Purwina Gemilang<br />
                      Jl. Abdul Manan No.25B Semarang
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#00ACF8]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h.75a2.25 2.25 0 0 0 2.25-2.25v-3.372a2.25 2.25 0 0 0-1.5-2.122l-3.5-1.5a2.25 2.25 0 0 0-2.5.5l-1.5 1.5a2.25 2.25 0 0 1-2.25.75 2.25 2.25 0 0 1-2.25-2.25V6.75Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base text-gray-700">
                      <span className="font-semibold">Phone:</span> 0811-2701-1818 (General Info)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
