'use client';

import { useState } from 'react';

const trainingTopics = {
  "Pelatihan Sertifikasi (Online)": [
    "AK3U Kemnaker Online",
    "AK3U Weekend Online", 
    "AK3U BNSP Online",
    "AK3 Migas BNSP Online",
    "POPAL – PPPA",
    "PPPU",
    "OPLB3"
  ],
  "Pelatihan Non-Sertifikasi - General": [
    "Basic First Aid",
    "Basic Fire Fighting",
    "Basic 101 CSMS",
    "Basic 101 Document Control",
    "Permit to Work (Near Water, Working at Height, LOTO)"
  ],
  "Pelatihan Non-Sertifikasi - Safety": [
    "Basic 101 Pengawas Operasional",
    "Basic 101 SMK3",
    "Basic 101 SMKP",
    "Awareness ISO Integrated Management System"
  ],
  "Pelatihan Non-Sertifikasi - Environment": [
    "Intro to ESG Reporting",
    "Intro to GHG Scope Calculation",
    "Intro to Sustainability and Circular Economy"
  ],
  "Pelatihan Non-Sertifikasi - Health & Hygiene": [
    "Basic 101 Health Risk Assessment",
    "Intro to Occupational Hygiene Monitoring"
  ],
  "Bootcamp & Officer Development Program": [
    "Environment Officer",
    "Industrial Hygiene Officer",
    "HSE System Officer",
    "HSE Foreman Officer",
    "Upskills Program",
    "Google Sheets dan Looker Studio for HSE Dashboard"
  ]
};

export default function TrainerPage() {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    address: '',
    experience: '',
    
    // Documents
    cv: null as File | null,
    certificate: null as File | null,
    trainingTopics: [] as string[],
    syllabus: null as File | null,
    portfolio: null as File | null,
    videoLink: '',
    
    // Social Media
    linkedin: '',
    youtube: '',
    instagram: '',
    facebook: '',
    
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const file = e.target.files?.[0] || null;
    
    setFormData(prev => ({
      ...prev,
      [name]: file
    }));
    
    // Clear error when user selects file
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCheckboxChange = (topic: string) => {
    setFormData(prev => {
      const isCurrentlySelected = prev.trainingTopics.includes(topic);
      
      if (isCurrentlySelected) {
        // If unchecking, just remove the topic
        return {
          ...prev,
          trainingTopics: prev.trainingTopics.filter(t => t !== topic)
        };
      } else {
        // If checking, only allow if less than 3 topics selected
        if (prev.trainingTopics.length >= 3) {
          return prev; // Don't add if already at max
        }
        return {
          ...prev,
          trainingTopics: [...prev.trainingTopics, topic]
        };
      }
    });
    
    // Clear error when user selects topic
    if (errors.trainingTopics) {
      setErrors(prev => ({
        ...prev,
        trainingTopics: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Required fields
    if (!formData.fullName) newErrors.fullName = 'Nama lengkap wajib diisi';
    if (!formData.email) newErrors.email = 'Email wajib diisi';
    if (!formData.phone) newErrors.phone = 'Nomor telepon wajib diisi';
    if (!formData.experience) newErrors.experience = 'Pengalaman kerja wajib diisi';
    if (formData.trainingTopics.length === 0) {
      newErrors.trainingTopics = 'Minimal satu topik pelatihan wajib dipilih';
    } else if (formData.trainingTopics.length > 3) {
      newErrors.trainingTopics = 'Maksimal 3 topik pelatihan yang dapat dipilih';
    }
    if (!formData.linkedin) newErrors.linkedin = 'LinkedIn wajib diisi';
    
    // Required files
    if (!formData.cv) newErrors.cv = 'CV wajib diupload';
    if (!formData.certificate) newErrors.certificate = 'Sertifikat wajib diupload';
    if (!formData.syllabus) newErrors.syllabus = 'Silabus wajib diupload';
    if (!formData.portfolio) newErrors.portfolio = 'Portfolio wajib diupload';
    if (!formData.videoLink) newErrors.videoLink = 'Link video wajib diisi';
    
    // File size validation
    if (formData.portfolio && formData.portfolio.size > 2 * 1024 * 1024) {
      newErrors.portfolio = 'Portfolio maksimal 2 MB';
    }
    
    // Video link validation
    if (formData.videoLink && !formData.videoLink.includes('drive.google.com')) {
      newErrors.videoLink = 'Link harus berupa Google Drive';
    }
    
    // Agreement
    if (!formData.agreement) newErrors.agreement = 'Anda harus menyetujui pernyataan pendaftar';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Prepare FormData for file uploads
      const formDataToSend = new FormData();
      
      // Add text fields
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('address', formData.address || '');
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('linkedin', formData.linkedin);
      formDataToSend.append('youtube', formData.youtube || '');
      formDataToSend.append('instagram', formData.instagram || '');
      formDataToSend.append('facebook', formData.facebook || '');
      formDataToSend.append('videoLink', formData.videoLink);
      formDataToSend.append('agreement', formData.agreement.toString());
      
      // Add training topics as JSON string
      formDataToSend.append('trainingTopics', JSON.stringify(formData.trainingTopics));
      
      // Add files if they exist
      if (formData.cv) {
        formDataToSend.append('cv', formData.cv);
      }
      if (formData.certificate) {
        formDataToSend.append('certificate', formData.certificate);
      }
      if (formData.syllabus) {
        formDataToSend.append('syllabus', formData.syllabus);
      }
      if (formData.portfolio) {
        formDataToSend.append('portfolio', formData.portfolio);
      }

      const response = await fetch('/api/send-trainer-email', {
        method: 'POST',
        body: formDataToSend, // No Content-Type header needed for FormData
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Pendaftaran berhasil dikirim! Tim kami akan menghubungi Anda segera untuk proses seleksi.'
        });
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          experience: '',
          cv: null,
          certificate: null,
          trainingTopics: [],
          syllabus: null,
          portfolio: null,
          videoLink: '',
          linkedin: '',
          youtube: '',
          instagram: '',
          facebook: '',
          agreement: false
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Terjadi kesalahan saat mengirim pendaftaran. Silakan coba lagi.'
        });
      }
    } catch (error) {
      console.error('Error submitting trainer form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Terjadi kesalahan jaringan. Silakan coba lagi.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🧾 Daftar Jadi Trainer Akualita Academy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Isi formulir pendaftaran dan lengkapi dokumen berikut untuk menjadi bagian dari tim trainer profesional kami.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={`space-y-8 ${isSubmitting ? 'pointer-events-none opacity-75' : ''}`}>
          {/* Personal Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Informasi Pribadi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  } ${isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''}`}
                  placeholder="Masukkan nama lengkap"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="contoh@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Telepon *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="08xxxxxxxxxx"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alamat
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Alamat lengkap"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pengalaman Kerja (tahun) *
                </label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.experience ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Contoh: 5"
                  min="0"
                />
                {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Dokumen Pendukung</h2>
            
            <div className="space-y-6">
              {/* CV */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Curriculum Vitae (PDF) *
                </label>
                <input
                  type="file"
                  name="cv"
                  onChange={handleFileChange}
                  accept=".pdf"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.cv ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv}</p>}
              </div>

              {/* Certificate */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sertifikat Keahlian / Kompetensi (PDF) *
                </label>
                <input
                  type="file"
                  name="certificate"
                  onChange={handleFileChange}
                  accept=".pdf"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.certificate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.certificate && <p className="text-red-500 text-sm mt-1">{errors.certificate}</p>}
              </div>

              {/* Training Topics */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Topik Pelatihan yang Ingin Diajukan * (Pilih 1-3 topik)
                </label>
                <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-md">
                  <p className="text-sm text-amber-800">
                    <strong>📋 Batasan Pilihan:</strong> Pilih minimal 1 dan maksimal 3 topik pelatihan yang sesuai dengan keahlian Anda.
                    <span className="block mt-1">
                      <strong>Dipilih:</strong> {formData.trainingTopics.length}/3 topik
                    </span>
                  </p>
                </div>
                <div className="space-y-6">
                  {Object.entries(trainingTopics).map(([category, topics]) => (
                    <div key={category} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-3 text-sm bg-gray-50 px-3 py-2 rounded">
                        {category}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {topics.map((topic) => {
                          const isSelected = formData.trainingTopics.includes(topic);
                          const isMaxReached = formData.trainingTopics.length >= 3;
                          const isDisabled = isSubmitting || (!isSelected && isMaxReached);
                          
                          return (
                            <label
                              key={topic}
                              className={`flex items-center space-x-2 p-2 rounded ${
                                isDisabled && !isSelected 
                                  ? 'cursor-not-allowed opacity-50' 
                                  : 'cursor-pointer hover:bg-gray-50'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => handleCheckboxChange(topic)}
                                disabled={isDisabled}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <span className={`text-sm ${
                                isDisabled && !isSelected ? 'text-gray-400' : 'text-gray-700'
                              }`}>
                                {topic}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                {errors.trainingTopics && <p className="text-red-500 text-sm mt-2">{errors.trainingTopics}</p>}
                <div className="mt-3 p-3 bg-blue-50 rounded-md">
                  <p className="text-sm text-blue-800">
                    <strong>💡 Tips:</strong> Pilih 1-3 topik yang paling sesuai dengan keahlian utama Anda. 
                    Pilih dari berbagai kategori untuk menunjukkan keahlian yang beragam dan fokus.
                  </p>
                </div>
              </div>

              {/* Syllabus */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Silabus Pelatihan (template tersedia) *
                </label>
                <input
                  type="file"
                  name="syllabus"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.syllabus ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <p className="text-sm text-gray-500 mt-1">Format: PDF, DOC, atau DOCX</p>
                {errors.syllabus && <p className="text-red-500 text-sm mt-1">{errors.syllabus}</p>}
              </div>

              {/* Portfolio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio Singkat (maks. 2 MB) *
                </label>
                <input
                  type="file"
                  name="portfolio"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.portfolio ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <p className="text-sm text-gray-500 mt-1">Format: PDF, DOC, atau DOCX (maksimal 2 MB)</p>
                {errors.portfolio && <p className="text-red-500 text-sm mt-1">{errors.portfolio}</p>}
              </div>

              {/* Video */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Link Video Penyampaian Materi (Google Drive) *
                </label>
                <input
                  type="url"
                  name="videoLink"
                  value={formData.videoLink}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.videoLink ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="https://drive.google.com/file/d/..."
                />
                <div className="mt-2 p-3 bg-blue-50 rounded-md">
                  <h4 className="font-medium text-blue-900 mb-2">🎬 Ketentuan Video:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Durasi minimal 3 menit</li>
                    <li>• Boleh direkam menggunakan handphone tanpa editing</li>
                    <li>• Harus berupa contoh penyampaian materi (bukan video perkenalan)</li>
                    <li>• Upload ke Google Drive dan pastikan link dapat diakses publik</li>
                    <li>• Set sharing permission ke &quot;Anyone with the link can view&quot;</li>
                  </ul>
                </div>
                <div className="mt-2 p-3 bg-green-50 rounded-md">
                  <h4 className="font-medium text-green-900 mb-2">📝 Cara Upload ke Google Drive:</h4>
                  <ol className="text-sm text-green-800 space-y-1 list-decimal list-inside">
                    <li>Upload video ke Google Drive</li>
                    <li>Klik kanan pada file → &quot;Share&quot;</li>
                    <li>Set permission ke &quot;Anyone with the link&quot;</li>
                    <li>Copy link dan paste di form ini</li>
                  </ol>
                </div>
                {errors.videoLink && <p className="text-red-500 text-sm mt-1">{errors.videoLink}</p>}
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">🔗 Akun Media Sosial</h2>
            <p className="text-gray-600 mb-6">Cantumkan profil profesional Anda untuk verifikasi:</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn (wajib) *
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.linkedin ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="https://linkedin.com/in/username"
                />
                {errors.linkedin && <p className="text-red-500 text-sm mt-1">{errors.linkedin}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  YouTube (jika ada kelas sebelumnya)
                </label>
                <input
                  type="url"
                  name="youtube"
                  value={formData.youtube}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://youtube.com/@username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Instagram
                </label>
                <input
                  type="url"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://instagram.com/username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Facebook
                </label>
                <input
                  type="url"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://facebook.com/username"
                />
              </div>
            </div>
          </div>

          {/* Agreement Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">✅ Pernyataan Pendaftar</h2>
            <div className="space-y-4">
              <p className="text-gray-700">Dengan mengirim formulir ini, saya menyatakan bahwa:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Data dan materi yang saya unggah adalah benar dan dapat digunakan untuk proses rekrutmen trainer.</li>
                <li>• Saya bersedia dihubungi oleh tim Akualita Academy terkait seleksi dan proses selanjutnya.</li>
                <li>• Saya memahami bahwa partisipasi bersifat sukarela dan hasil seleksi merupakan kewenangan penuh Akualita Academy.</li>
              </ul>
              
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleInputChange}
                  className={`mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
                    errors.agreement ? 'border-red-500' : ''
                  }`}
                />
                <label className="text-sm text-gray-700">
                  Saya telah membaca dan menyetujui pernyataan di atas *
                </label>
              </div>
              {errors.agreement && <p className="text-red-500 text-sm mt-1">{errors.agreement}</p>}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-orange-500 hover:bg-orange-600 transform hover:scale-105'
              } text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 shadow-lg`}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Mengirim Pendaftaran...</span>
                </div>
              ) : (
                '🟠 DAFTAR SEKARANG'
              )}
            </button>
            
            {/* Status Message - Dipindahkan ke dekat tombol */}
            {submitStatus.type && (
              <div className={`mt-4 p-4 rounded-lg flex items-center justify-center space-x-3 ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 border border-green-200 text-green-800' 
                  : 'bg-red-50 border border-red-200 text-red-800'
              }`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  submitStatus.type === 'success' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <p className="font-medium">{submitStatus.message}</p>
              </div>
            )}
            
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Ayo berbagi pengetahuan, bangun karier, dan jadilah bagian dari gerakan kompetensi K3L Indonesia bersama Akualita Academy.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}



