'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function DummyCoursePage() {
  const [activeTab, setActiveTab] = useState('sertifikasi');

  return (
    <>
      <style>{`
        :root {
          --primary-orange: #E85925;
          --primary-teal: #1FBED6;
          --dark-navy: #1F2A36;
          --text-black: #222;
          --text-grey: #666;
          --bg-light: #F9FAFB;
          --border-color: #E5E7EB;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: var(--text-black);
          background-color: #fff;
          line-height: 1.6;
        }

        .main-container {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
          align-items: start;
        }

        .sidebar {
          background: #fff;
          padding: 20px;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          height: fit-content;
        }

        .sidebar ul {
          list-style: none;
          margin-bottom: 30px;
        }

        .sidebar ul li {
          margin-bottom: 15px;
        }

        .sidebar ul li a {
          text-decoration: none;
          color: var(--text-black);
          font-weight: 500;
          font-size: 14px;
          transition: color 0.3s;
        }

        .sidebar ul li a:hover,
        .sidebar ul li a.active {
          color: var(--primary-orange);
          font-weight: 600;
        }

        .btn-cta {
          width: 100%;
          background-color: var(--primary-orange);
          color: white;
          border: none;
          padding: 12px;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Poppins', sans-serif;
          transition: background 0.3s;
          text-transform: uppercase;
        }

        .btn-cta:hover {
          background-color: #d1491b;
        }

        .content section {
          margin-bottom: 60px;
        }

        .content h1 {
          font-size: 28px;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .content h2 {
          font-size: 24px;
          margin-bottom: 25px;
          font-weight: 700;
        }

        .content p {
          color: var(--text-grey);
          font-size: 15px;
        }

        .text-highlight {
          color: var(--primary-teal);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .stat-card {
          background-color: var(--dark-navy);
          color: white;
          padding: 20px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 140px;
        }

        .stat-card .icon {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .stat-card h3 {
          font-size: 16px;
          font-weight: 400;
        }

        .stat-card h3 span {
          font-weight: 700;
          font-size: 18px;
          display: block;
        }

        .tabs {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }

        .tab-btn {
          padding: 10px 20px;
          border-radius: 6px;
          border: 1px solid var(--border-color);
          background: white;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          cursor: pointer;
          color: var(--text-grey);
          transition: all 0.3s;
        }

        .tab-btn.active {
          background-color: var(--primary-teal);
          color: white;
          border-color: var(--primary-teal);
        }

        .curriculum-content {
          background-color: var(--bg-light);
          padding: 30px;
          border-radius: 10px;
        }

        .curriculum-content ol {
          margin-left: 20px;
          color: var(--text-grey);
        }

        .curriculum-content ol li {
          margin-bottom: 10px;
          font-size: 14px;
        }

        .mentor-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .mentor-card {
          border-radius: 12px;
          overflow: hidden;
          background: var(--dark-navy);
          color: white;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .mentor-img {
          height: 180px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
          background-color: #00A9C9;
        }

        .mentor-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mentor-info {
          padding: 15px;
        }

        .mentor-info h4 {
          font-size: 16px;
          margin-bottom: 4px;
        }

        .mentor-info p {
          font-size: 12px;
          color: #ccc;
          margin-bottom: 10px;
        }

        .company-logo {
          font-size: 11px;
          opacity: 0.8;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .faq-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: background 0.2s;
        }

        .faq-item:hover {
          background-color: var(--bg-light);
        }

        .faq-item .arrow {
          color: var(--primary-teal);
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .main-container {
            grid-template-columns: 1fr;
            padding: 20px;
          }

          .sidebar {
            display: none;
          }

          .stats-grid,
          .mentor-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="bg-gray-50 text-gray-900 font-sans antialiased min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[620px] h-screen w-full flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop)',
            }}
          />

          {/* Overlay Gradient Gelap */}
          <div
            className="absolute inset-0 w-full h-full z-[1]"
            style={{
              background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.2) 100%)',
            }}
          />

          {/* Container */}
          <div className="relative z-[2] max-w-[1200px] mx-auto px-5 w-full">
            {/* Hero Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 max-w-[800px] text-white">
              Upgrade salary dengan<br />
              beralih jadi <span className="text-[#00D4FF]">Ahli K3 andalan</span>
            </h1>

            {/* Badge AI */}
            <div className="inline-flex items-center bg-white text-gray-800 px-4 py-2 rounded-full font-semibold text-sm md:text-base mb-6 shadow-lg">
              <span className="text-[#00D4FF] mr-2">✨</span>
              Supported with AI
            </div>

            {/* Hero Description */}
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200 max-w-[600px] mb-10">
              Mulai investasi kariermu di masa depan lewat bootcamp dengan
              kurikulum lengkap, portofolio siap kerja, dan sertifikasi resmi.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#"
                className="px-7 py-3 rounded-lg font-semibold text-white bg-[#E65100] border-2 border-[#E65100] transition-all hover:bg-[#ff6f00] hover:border-[#ff6f00] text-center"
              >
                Konsultasi Gratis
              </a>
              <a
                href="#"
                className="px-7 py-3 rounded-lg font-semibold text-white bg-transparent border-2 border-white transition-all hover:bg-white/10 text-center"
              >
                Dapatkan Promo
              </a>
            </div>

            {/* Trust Signal */}
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <span>Terakui oleh Kemendikti</span>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg/800px-Logo_of_Ministry_of_Education_and_Culture_of_Republic_of_Indonesia.svg.png"
                alt="Logo Kemendikti"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>
        </section>

        {/* Main Content dengan Sidebar */}
        <div className="main-container">
          {/* Sidebar */}
          <aside className="sidebar">
            <nav>
              <ul>
                <li>
                  <a href="#about" className="active">
                    Mengapa Akualita Academy
                  </a>
                </li>
                <li>
                  <a href="#benefit">Benefit</a>
                </li>
                <li>
                  <a href="#kurikulum">Kurikulum</a>
                </li>
                <li>
                  <a href="#mentor">Mentor</a>
                </li>
                <li>
                  <a href="#job-connect">Job Connect</a>
                </li>
                <li>
                  <a href="#biaya">Biaya Pendidikan</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </nav>
            <button className="btn-cta">HUBUNGI KAMI</button>
          </aside>

          {/* Main Content */}
          <main className="content">
            <section id="about" className="intro-section">
              <h1>Tentang Bootcamp Health, Safety, and Environment/K3 (HSE/K3)</h1>
              <p>
                Bootcamp Health, Safety, and Environment/K3 (HSE/K3) Akualita Academy adalah kursus online intensif yang
                dirancang untuk membekali kamu dengan skill terlengkap di bidang HSE/K3, mulai dari regulasi K3,
                identifikasi bahaya, penilaian risiko, hingga implementasi sistem manajemen K3. Program ini cocok untuk
                kamu yang ingin memulai karier di bidang K3 atau meningkatkan kompetensi di bidang yang sudah kamu geluti.
              </p>
            </section>

            <section id="benefit" className="stats-section">
              <h2>
                Mulai belajarnya <span className="text-highlight">dari awal</span>, ditemani{' '}
                <span className="text-highlight">sampai kerja!</span>
              </h2>
              <div className="stats-grid">
                <div className="stat-card dark-card">
                  <div className="icon">💻</div>
                  <h3>
                    Akses Materi<br />
                    <span>Seumur Hidup</span>
                  </h3>
                </div>
                <div className="stat-card dark-card">
                  <div className="icon">👨‍🏫</div>
                  <h3>
                    338+ Mentor<br />
                    <span>Profesional Berkualitas</span>
                  </h3>
                </div>
                <div className="stat-card dark-card">
                  <div className="icon">🌐</div>
                  <h3>
                    Networking Bersama<br />
                    <span>100.000+ Digital Learners</span>
                  </h3>
                </div>
              </div>
            </section>

            <section id="kurikulum" className="curriculum-section">
              <h2>
                Kurikulum komprehensif dengan <span className="text-highlight">hands-on experience</span>
              </h2>

              <div className="tabs">
                <button
                  className={`tab-btn ${activeTab === 'sertifikasi' ? 'active' : ''}`}
                  onClick={() => setActiveTab('sertifikasi')}
                >
                  Pelatihan Sertifikasi
                </button>
                <button
                  className={`tab-btn ${activeTab === 'kompetensi' ? 'active' : ''}`}
                  onClick={() => setActiveTab('kompetensi')}
                >
                  Pelatihan Kompetensi Tambahan
                </button>
              </div>

              <div className="curriculum-content">
                <h3>Pelatihan Kompetensi Tambahan</h3>
                <ol>
                  <li>Pelatihan K3</li>
                  <li>Ergonomi di Tempat Kerja & K3 Digital</li>
                  <li>K3 Transportasi & Logistik Berbahaya</li>
                  <li>K3 di Ruang Terbatas (Confined Space)</li>
                  <li>K3 Energi & Pertambangan</li>
                  <li>K3 di Lingkungan Bising & Getaran</li>
                  <li>K3 Kerja Shift Malam & Kelelahan</li>
                  <li>K3 Manufaktur & Logistik</li>
                  <li>K3 FMCG (Fast-Moving Consumer Goods)</li>
                </ol>
              </div>
            </section>

            <section id="mentor" className="mentor-section">
              <h2>
                Mentor yang <span className="text-highlight">luar biasa</span> membuat belajar lebih nyaman
              </h2>
              <div className="mentor-grid">
                <div className="mentor-card">
                  <div className="mentor-img" style={{ backgroundColor: '#00A9C9', position: 'relative' }}>
                    <Image
                      src="https://via.placeholder.com/150x150?text=Mentor+1"
                      alt="Yusuf Muhammad"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="mentor-info">
                    <h4>Yusuf Muhammad</h4>
                    <p>Safety and Health Officer</p>
                    <span className="company-logo">🏢 PT. ABC Indonesia</span>
                  </div>
                </div>
                <div className="mentor-card">
                  <div className="mentor-img" style={{ backgroundColor: '#00A9C9', position: 'relative' }}>
                    <Image
                      src="https://via.placeholder.com/150x150?text=Mentor+2"
                      alt="Rizky Muhamad"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="mentor-info">
                    <h4>Rizky Muhamad</h4>
                    <p>HSE Officer</p>
                    <span className="company-logo">🏢 Green Coal Mining Company</span>
                  </div>
                </div>
                <div className="mentor-card">
                  <div className="mentor-img" style={{ backgroundColor: '#00A9C9', position: 'relative' }}>
                    <Image
                      src="https://via.placeholder.com/150x150?text=Mentor+3"
                      alt="Agra M."
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="mentor-info">
                    <h4>Agra M. Khalwa</h4>
                    <p>Safety Systems Specialist</p>
                    <span className="company-logo">🏢 Freeport Indonesia</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="faq-section">
              <h2>Punya pertanyaan seputar bootcamp Akualita Academy?</h2>
              <div className="faq-list">
                <div className="faq-item">
                  <span>Apa itu Bootcamp Health, Safety, and Environment/K3 (HSE/K3) ?</span>
                  <span className="arrow">→</span>
                </div>
                <div className="faq-item">
                  <span>Apakah ada pendidikan minimal untuk mengikuti Bootcamp...?</span>
                  <span className="arrow">↓</span>
                </div>
                <div className="faq-item">
                  <span>Apakah ada jadwal lain untuk setiap sesinya?</span>
                  <span className="arrow">↓</span>
                </div>
                <div className="faq-item">
                  <span>Apakah akan dikenakan biaya lain kalau ingin diskusi di luar jadwal kelas?</span>
                  <span className="arrow">↓</span>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
