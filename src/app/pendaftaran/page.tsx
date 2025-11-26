'use client';

import { useState } from 'react';

export default function PendaftaranPage() {
  const [formData, setFormData] = useState({
    // Training Information
    trainingTitle: '',
    trainingDate: '',
    trainingLocation: 'Online',
    
    // Personal Data
    participantName: '',
    whatsappNumber: '',
    
    // Certificate Delivery Address
    recipientEmail: '',
    recipientPhone: '',
    recipientName: '',
    deliveryAddress: '',
    
    // Certification Scheme
    certificationScheme: '',
    
    // Contact Person
    contactPerson: '',
    
    // Payment Information
    bankType: '',
    virtualAccount: '',
    
    // Registrant Information
    registrantName: '',
    registrantPhone: '',
    registrantPosition: '',
    
    // Additional Fields
    participantCategory: '',
    trainingPeriod: '',
    shirtSize: '',
    referralCode: '',
    informationSource: '',
    otherSource: '',
    
    // Agreement
    agreement: false
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.trainingTitle.trim()) {
      newErrors.trainingTitle = 'Judul training wajib diisi';
    }
    if (!formData.trainingDate.trim()) {
      newErrors.trainingDate = 'Tanggal pelaksanaan wajib diisi';
    }
    if (!formData.participantName.trim()) {
      newErrors.participantName = 'Nama peserta wajib diisi';
    }
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'Nomor WhatsApp wajib diisi';
    }
    if (!formData.recipientEmail.trim()) {
      newErrors.recipientEmail = 'Email penerima wajib diisi';
    }
    if (!formData.recipientName.trim()) {
      newErrors.recipientName = 'Nama penerima wajib diisi';
    }
    if (!formData.deliveryAddress.trim()) {
      newErrors.deliveryAddress = 'Alamat pengiriman wajib diisi';
    }
    if (!formData.participantCategory) {
      newErrors.participantCategory = 'Kategori peserta wajib dipilih';
    }
    if (!formData.shirtSize) {
      newErrors.shirtSize = 'Ukuran kemeja/rompi wajib dipilih';
    }
    if (!formData.informationSource) {
      newErrors.informationSource = 'Sumber informasi wajib dipilih';
    }
    if (formData.informationSource === 'Lainnya' && !formData.otherSource.trim()) {
      newErrors.otherSource = 'Silakan sebutkan sumber informasi lainnya';
    }
    if (!formData.agreement) {
      newErrors.agreement = 'Anda harus menyetujui syarat & ketentuan';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus({
        type: 'error',
        message: 'Mohon lengkapi semua field yang wajib diisi'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/pendaftaran', {
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
          message: 'Pendaftaran berhasil! Tim kami akan menghubungi Anda segera.'
        });
        
        // Reset form
        setFormData({
          trainingTitle: '',
          trainingDate: '',
          trainingLocation: 'Online',
          participantName: '',
          whatsappNumber: '',
          recipientEmail: '',
          recipientPhone: '',
          recipientName: '',
          deliveryAddress: '',
          certificationScheme: '',
          contactPerson: '',
          bankType: '',
          virtualAccount: '',
          registrantName: '',
          registrantPhone: '',
          registrantPosition: '',
          participantCategory: '',
          trainingPeriod: '',
          shirtSize: '',
          referralCode: '',
          informationSource: '',
          otherSource: '',
          agreement: false
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Terjadi kesalahan saat mengirim formulir. Silakan coba lagi.'
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

  const informationSources = [
    'Instagram',
    'Facebook',
    'TikTok',
    'YouTube',
    'Google Search',
    'Group WhatsApp',
    'WA Akualita Academy',
    'Email',
    'LinkedIn',
    'Keluarga/Teman/Kerabat',
    'Karyawan',
    'Lainnya'
  ];

  const shirtSizes = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  return (
    <div 
      className="min-h-screen w-full py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-16"
      style={{
        background: 'linear-gradient(90deg, #04AEFB 0%, #18ECA0 100%)',
        minHeight: '100vh'
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            }}
          >
            Formulir Pendaftaran
          </h1>
          <p 
            className="text-lg sm:text-xl text-white/90"
            style={{
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            }}
          >
            AKUALITA Academy 2025
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Training Information Section */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
            style={{
              boxShadow: '0px 3px 11.2px 1px rgba(0, 0, 0, 0.25)',
            }}
          >
            <h2 
              className="text-xl sm:text-2xl font-bold mb-6"
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                color: '#00C0E8',
              }}
            >
              Informasi Training
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Judul & Topik Training *
                </label>
                <input
                  type="text"
                  name="trainingTitle"
                  value={formData.trainingTitle}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8] ${
                    errors.trainingTitle ? 'border-red-500' : 'border-gray-300'
                  } ${isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  placeholder="Contoh: Ahli K3 Umum Kemnaker RI"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
                {errors.trainingTitle && (
                  <p className="text-red-500 text-sm mt-1">{errors.trainingTitle}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal Pelaksanaan *
                </label>
                <input
                  type="date"
                  name="trainingDate"
                  value={formData.trainingDate}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8] ${
                    errors.trainingDate ? 'border-red-500' : 'border-gray-300'
                  } ${isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
                {errors.trainingDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.trainingDate}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tempat Training
                </label>
                <input
                  type="text"
                  name="trainingLocation"
                  value={formData.trainingLocation}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8]"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Personal Data Section */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
            style={{
              boxShadow: '0px 3px 11.2px 1px rgba(0, 0, 0, 0.25)',
            }}
          >
            <h2 
              className="text-xl sm:text-2xl font-bold mb-6"
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                color: '#00C0E8',
              }}
            >
              Data Pribadi Peserta
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Peserta *
                </label>
                <input
                  type="text"
                  name="participantName"
                  value={formData.participantName}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8] ${
                    errors.participantName ? 'border-red-500' : 'border-gray-300'
                  } ${isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  placeholder="Masukkan nama lengkap"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
                {errors.participantName && (
                  <p className="text-red-500 text-sm mt-1">{errors.participantName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor WhatsApp (Aktif) *
                </label>
                <input
                  type="tel"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8] ${
                    errors.whatsappNumber ? 'border-red-500' : 'border-gray-300'
                  } ${isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  placeholder="08xxxxxxxxxx"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
                {errors.whatsappNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.whatsappNumber}</p>
                )}
              </div>
            </div>
          </div>

          {/* Certificate Delivery Address Section */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
            style={{
              boxShadow: '0px 3px 11.2px 1px rgba(0, 0, 0, 0.25)',
            }}
          >
            <h2 
              className="text-xl sm:text-2xl font-bold mb-6"
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                color: '#00C0E8',
              }}
            >
              Alamat Pengiriman Sertifikat
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Penerima *
                </label>
                <input
                  type="email"
                  name="recipientEmail"
                  value={formData.recipientEmail}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8] ${
                    errors.recipientEmail ? 'border-red-500' : 'border-gray-300'
                  } ${isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  placeholder="contoh@email.com"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
                {errors.recipientEmail && (
                  <p className="text-red-500 text-sm mt-1">{errors.recipientEmail}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Telepon Penerima
                </label>
                <input
                  type="tel"
                  name="recipientPhone"
                  value={formData.recipientPhone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8]"
                  placeholder="08xxxxxxxxxx"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Penerima *
                </label>
                <input
                  type="text"
                  name="recipientName"
                  value={formData.recipientName}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8] ${
                    errors.recipientName ? 'border-red-500' : 'border-gray-300'
                  } ${isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  placeholder="Nama lengkap penerima"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
                {errors.recipientName && (
                  <p className="text-red-500 text-sm mt-1">{errors.recipientName}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alamat Lengkap Pengiriman *
                </label>
                <textarea
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  rows={3}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8] ${
                    errors.deliveryAddress ? 'border-red-500' : 'border-gray-300'
                  } ${isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  placeholder="Masukkan alamat lengkap untuk pengiriman sertifikat"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
                {errors.deliveryAddress && (
                  <p className="text-red-500 text-sm mt-1">{errors.deliveryAddress}</p>
                )}
              </div>
            </div>
          </div>

          {/* Certification Scheme Section */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
            style={{
              boxShadow: '0px 3px 11.2px 1px rgba(0, 0, 0, 0.25)',
            }}
          >
            <h2 
              className="text-xl sm:text-2xl font-bold mb-6"
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                color: '#00C0E8',
              }}
            >
              Skema Sertifikasi
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pilih atau Jelaskan Skema Sertifikasi
              </label>
              <textarea
                name="certificationScheme"
                value={formData.certificationScheme}
                onChange={handleInputChange}
                disabled={isSubmitting}
                rows={3}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8]"
                placeholder="Jelaskan skema sertifikasi yang diikuti"
                style={{
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                }}
              />
            </div>
          </div>

          {/* Contact Person Section */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
            style={{
              boxShadow: '0px 3px 11.2px 1px rgba(0, 0, 0, 0.25)',
            }}
          >
            <h2 
              className="text-xl sm:text-2xl font-bold mb-6"
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                color: '#00C0E8',
              }}
            >
              Contact Tim Academy
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data Penghubung
              </label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8]"
                placeholder="Nama dan kontak tim academy"
                style={{
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                }}
              />
            </div>
          </div>

          {/* Payment Information Section */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
            style={{
              boxShadow: '0px 3px 11.2px 1px rgba(0, 0, 0, 0.25)',
            }}
          >
            <h2 
              className="text-xl sm:text-2xl font-bold mb-6"
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                color: '#00C0E8',
              }}
            >
              Informasi Pembayaran
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jenis Bank
                </label>
                <select
                  name="bankType"
                  value={formData.bankType}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8]"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                >
                  <option value="">Pilih Bank</option>
                  <option value="BCA">BCA</option>
                  <option value="Mandiri">Mandiri</option>
                  <option value="BNI">BNI</option>
                  <option value="BRI">BRI</option>
                  <option value="CIMB">CIMB</option>
                  <option value="Bank Lainnya">Bank Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Virtual Account
                </label>
                <input
                  type="text"
                  name="virtualAccount"
                  value={formData.virtualAccount}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8]"
                  placeholder="Nomor virtual account"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
                <p className="text-xs text-gray-500 mt-1">
                  CV. Primera Purwina Gemilang
                </p>
              </div>
            </div>
          </div>

          {/* Registrant Information Section */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
            style={{
              boxShadow: '0px 3px 11.2px 1px rgba(0, 0, 0, 0.25)',
            }}
          >
            <h2 
              className="text-xl sm:text-2xl font-bold mb-6"
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                color: '#00C0E8',
              }}
            >
              Informasi Pendaftar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Pendaftar
                </label>
                <input
                  type="text"
                  name="registrantName"
                  value={formData.registrantName}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8]"
                  placeholder="Nama HR, HC, atau PIC perusahaan"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Telepon Pendaftar
                </label>
                <input
                  type="tel"
                  name="registrantPhone"
                  value={formData.registrantPhone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8]"
                  placeholder="08xxxxxxxxxx"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jabatan/Posisi
                </label>
                <input
                  type="text"
                  name="registrantPosition"
                  value={formData.registrantPosition}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8]"
                  placeholder="Contoh: HR, HC, PIC Perusahaan"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Additional Fields Section */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
            style={{
              boxShadow: '0px 3px 11.2px 1px rgba(0, 0, 0, 0.25)',
            }}
          >
            <h2 
              className="text-xl sm:text-2xl font-bold mb-6"
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                color: '#00C0E8',
              }}
            >
              Informasi Tambahan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kategori Peserta *
                </label>
                <select
                  name="participantCategory"
                  value={formData.participantCategory}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8] ${
                    errors.participantCategory ? 'border-red-500' : 'border-gray-300'
                  } ${isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                >
                  <option value="">Pilih Kategori</option>
                  <option value="Personal">Personal</option>
                  <option value="Utusan Perusahaan">Utusan Perusahaan</option>
                </select>
                {errors.participantCategory && (
                  <p className="text-red-500 text-sm mt-1">{errors.participantCategory}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Periode Pelatihan
                </label>
                <input
                  type="text"
                  name="trainingPeriod"
                  value={formData.trainingPeriod}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8]"
                  placeholder="Contoh: Batch 1, Batch 2, dll"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ukuran Kemeja/Rompi *
                </label>
                <select
                  name="shirtSize"
                  value={formData.shirtSize}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8] ${
                    errors.shirtSize ? 'border-red-500' : 'border-gray-300'
                  } ${isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                >
                  <option value="">Pilih Ukuran</option>
                  {shirtSizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                {errors.shirtSize && (
                  <p className="text-red-500 text-sm mt-1">{errors.shirtSize}</p>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Lihat size chart yang tersedia
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kode Referral (Opsional)
                </label>
                <input
                  type="text"
                  name="referralCode"
                  value={formData.referralCode}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8]"
                  placeholder="Masukkan kode referral jika ada"
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mendapatkan informasi AKUALITA Academy dari siapa? *
                </label>
                <select
                  name="informationSource"
                  value={formData.informationSource}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8] ${
                    errors.informationSource ? 'border-red-500' : 'border-gray-300'
                  } ${isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                >
                  <option value="">Pilih Sumber Informasi</option>
                  {informationSources.map(source => (
                    <option key={source} value={source}>{source}</option>
                  ))}
                </select>
                {errors.informationSource && (
                  <p className="text-red-500 text-sm mt-1">{errors.informationSource}</p>
                )}
              </div>

              {formData.informationSource === 'Lainnya' && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sebutkan Sumber Lainnya *
                  </label>
                  <input
                    type="text"
                    name="otherSource"
                    value={formData.otherSource}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C0E8] ${
                      errors.otherSource ? 'border-red-500' : 'border-gray-300'
                    } ${isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                    placeholder="Sebutkan sumber informasi lainnya"
                    style={{
                      fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                    }}
                  />
                  {errors.otherSource && (
                    <p className="text-red-500 text-sm mt-1">{errors.otherSource}</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Agreement Section */}
          <div 
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
            style={{
              boxShadow: '0px 3px 11.2px 1px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agreement"
                id="agreement"
                checked={formData.agreement}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={`mt-1 w-5 h-5 text-[#00C0E8] border-gray-300 rounded focus:ring-2 focus:ring-[#00C0E8] ${
                  errors.agreement ? 'border-red-500' : ''
                }`}
              />
              <label 
                htmlFor="agreement" 
                className="text-sm sm:text-base text-gray-700 cursor-pointer"
                style={{
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                }}
              >
                Saya telah membaca dan setuju dengan{' '}
                <a 
                  href="/syarat-ketentuan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#00C0E8] hover:underline font-semibold"
                >
                  Syarat & Ketentuan
                </a>{' '}
                ini *
              </label>
            </div>
            {errors.agreement && (
              <p className="text-red-500 text-sm mt-2 ml-8">{errors.agreement}</p>
            )}
          </div>

          {/* Submit Status Message */}
          {submitStatus.type && (
            <div
              className={`p-4 rounded-lg ${
                submitStatus.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
              }`}
            >
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
                <span 
                  className={`text-sm font-medium ${
                    submitStatus.type === 'success' ? 'text-green-800' : 'text-red-800'
                  }`}
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  }}
                >
                  {submitStatus.message}
                </span>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 sm:px-12 sm:py-4 rounded-xl text-white font-bold text-lg sm:text-xl transition-all duration-200 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-[#00C0E8] to-[#18ECA0] hover:opacity-90 shadow-lg'
              }`}
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              }}
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Formulir Pendaftaran'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

