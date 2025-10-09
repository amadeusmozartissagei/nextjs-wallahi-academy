'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-20 py-4 bg-white shadow-sm transition duration-300">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <a href="https://akualita-academy.co.id/">
          <Image 
            src="/images/Logo/Logo2.png" 
            alt="Logo Akualita Academy" 
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </a>
      </div>

      {/* Hamburger Menu Button */}
      <button 
        id="menu-toggle" 
        className="block md:hidden focus:outline-none"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          if (isMenuOpen) {
            setIsMobileDropdownOpen(false);
          }
        }}
      >
        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Menu Items */}
      <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 text-sm text-gray-900 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-6 md:p-0 z-50`}>
        
        {/* Program Desktop */}
        <li className="group relative cursor-pointer hidden md:block">
          <div className="relative group">
            <button 
              className="flex items-center space-x-1 text-base hover:text-[#00ACF8] transition duration-300"
              onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
              onMouseEnter={() => setIsDesktopDropdownOpen(true)}
              onMouseLeave={() => setIsDesktopDropdownOpen(false)}
            >
              <span>Program</span>
              <svg 
                className={`w-4 h-4 transition-transform duration-300 mt-0.5 ${isDesktopDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Megamenu */}
          <div 
            className={`absolute left-1/2 top-full -translate-x-1/2 w-[80vw] max-w-[800px] bg-white shadow-xl z-50 transition-all duration-300 rounded-xl ml-20 ${
              isDesktopDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}
            onMouseEnter={() => setIsDesktopDropdownOpen(true)}
            onMouseLeave={() => setIsDesktopDropdownOpen(false)}
          >
            <div className="px-4 lg:px-8 py-4 lg:py-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 text-gray-700 text-base">
              
              {/* Pelatihan Sertifikasi */}
              <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-3 hover:bg-[#E6F8FE] p-3 transition duration-300 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#05E089] to-[#00ACF8] w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-1">
                    <Image src="/images/svg/certi12.svg" alt="Icon Buku" width={24} height={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">Pelatihan Sertifikasi</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Tingkatkan kompetensi melalui pelatihan sertifikasi resmi dengan materi dari instruktur berpengalaman.
                  </p>
                </div>
              </div>

              {/* Pelatihan Non-Sertifikasi */}
              <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-3 hover:bg-[#E6F8FE] p-3 transition duration-300 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#05E089] to-[#00ACF8] w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-1">
                    <Image src="/images/svg/noncerti12.svg" alt="Icon Buku" width={24} height={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">Pelatihan Non-Sertifikasi</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Pelatihan praktis untuk menambah pengetahuan dan keterampilan tanpa persyaratan ujian sertifikasi.
                  </p>
                </div>
              </div>

              {/* Bootcamp */}
              <div className="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:space-x-3 hover:bg-[#E6F8FE] p-3 transition duration-300 rounded-xl">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#05E089] to-[#00ACF8] w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-1">
                    <Image src="/images/svg/boot12.svg" alt="Icon Buku" width={24} height={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-1">Bootcamp</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Program intensif dengan pembelajaran terstruktur dan praktik langsung untuk menguasai keterampilan.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </li>

        {/* Program Mobile */}
        <li className="block md:hidden w-full">
          <button 
            type="button" 
            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            className="cursor-pointer flex items-center justify-between w-full hover:text-[#0c9df0] focus:outline-none text-base"
          >
            Program
            <svg 
              className={`w-4 h-4 transition-transform duration-300 mt-0.5 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul className={`${isMobileDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 flex-col pl-4 mt-2 space-y-2`}>
            <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300 py-2">
              <span className="text-base">Pelatihan Sertifikasi</span>
            </li>
            <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300 py-2">
              <span className="text-base">Pelatihan Non-Sertifikasi</span>
            </li>
            <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300 py-2">
              <span className="text-base">Bootcamp</span>
            </li>
          </ul>
        </li>

        {/* Other Menu Items */}
        <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300"><span className="text-base">Tentang Akualita Academy</span></li>
        <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300"><span className="text-base">Kursus Singkat</span></li>
        <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300"> 
          <a href="/mitra" className="text-base">Mitra</a> 
        </li>
        <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300"> 
          <a href="https://akualita.com/" className="text-base">Pelatihan Korporasi</a> 
        </li>
        <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300">
          <a href="https://akualita.com/webinar-2025/" target="_blank" className="border-2 border-[#00ACF8] text-[#00ACF8] text-base px-4 py-1.5 rounded-md hover:bg-[#00ACF8] hover:shadow-md hover:text-white transition duration-300">
            Kursus Gratis
          </a>
        </li>
      </ul>
    </nav>
  );
}
