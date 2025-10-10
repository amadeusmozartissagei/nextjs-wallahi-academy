'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-20 py-3 md:py-4 bg-white shadow-sm transition duration-300">
      {/* Logo */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        <a href="https://akualita-academy.co.id/" className="flex-shrink-0">
          <Image 
            src="/images/Logo/Logo2.png" 
            alt="Logo Akualita Academy" 
            width={120}
            height={40}
            className="h-8 sm:h-10 w-auto"
            priority
          />
        </a>
      </div>

      {/* Hamburger Menu Button */}
      <button 
        id="menu-toggle" 
        className="block md:hidden focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          if (isMenuOpen) {
            setIsMobileDropdownOpen(false);
          }
        }}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Menu Items */}
      <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 lg:space-x-12 text-sm text-gray-900 absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none border-t md:border-t-0 border-gray-200 md:border-none p-6 md:p-0 z-50`}>
        
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
            className={`absolute left-1/2 top-full -translate-x-1/2 w-[90vw] max-w-[900px] bg-white shadow-xl z-50 transition-all duration-300 rounded-xl mt-2 ${
              isDesktopDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
            }`}
            onMouseEnter={() => setIsDesktopDropdownOpen(true)}
            onMouseLeave={() => setIsDesktopDropdownOpen(false)}
          >
            <div className="px-4 lg:px-8 py-6 lg:py-8 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 text-gray-700">
              
              {/* Pelatihan Sertifikasi */}
              <div className="flex flex-col items-center text-center lg:text-left hover:bg-[#E6F8FE] p-4 lg:p-6 transition duration-300 rounded-xl">
                <div className="flex-shrink-0 mb-4">
                  <div className="bg-gradient-to-br from-[#05E089] to-[#00ACF8] w-12 h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center mx-auto lg:mx-0">
                    <Image src="/images/svg/certi12.svg" alt="Icon Sertifikasi" width={28} height={28} className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-base lg:text-lg text-gray-900 mb-2">Pelatihan Sertifikasi</h4>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    Tingkatkan kompetensi melalui pelatihan sertifikasi resmi dengan materi dari instruktur berpengalaman.
                  </p>
                </div>
              </div>

              {/* Pelatihan Non-Sertifikasi */}
              <div className="flex flex-col items-center text-center lg:text-left hover:bg-[#E6F8FE] p-4 lg:p-6 transition duration-300 rounded-xl">
                <div className="flex-shrink-0 mb-4">
                  <div className="bg-gradient-to-br from-[#05E089] to-[#00ACF8] w-12 h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center mx-auto lg:mx-0">
                    <Image src="/images/svg/noncerti12.svg" alt="Icon Non-Sertifikasi" width={28} height={28} className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-base lg:text-lg text-gray-900 mb-2">Pelatihan Non-Sertifikasi</h4>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    Pelatihan praktis untuk menambah pengetahuan dan keterampilan tanpa persyaratan ujian sertifikasi.
                  </p>
                </div>
              </div>

              {/* Bootcamp */}
              <div className="flex flex-col items-center text-center lg:text-left hover:bg-[#E6F8FE] p-4 lg:p-6 transition duration-300 rounded-xl">
                <div className="flex-shrink-0 mb-4">
                  <div className="bg-gradient-to-br from-[#05E089] to-[#00ACF8] w-12 h-12 lg:w-14 lg:h-14 rounded-lg flex items-center justify-center mx-auto lg:mx-0">
                    <Image src="/images/svg/boot12.svg" alt="Icon Bootcamp" width={28} height={28} className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-base lg:text-lg text-gray-900 mb-2">Bootcamp</h4>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
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
            className="cursor-pointer flex items-center justify-between w-full hover:text-[#00ACF8] focus:outline-none text-base py-2 px-3 rounded-md hover:bg-gray-50 transition-all duration-200"
          >
            Program
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <ul className={`${isMobileDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 flex-col pl-4 mt-2 space-y-1`}>
            <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300 py-2 px-3 rounded-md hover:bg-gray-50">
              <span className="text-sm sm:text-base">Pelatihan Sertifikasi</span>
            </li>
            <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300 py-2 px-3 rounded-md hover:bg-gray-50">
              <span className="text-sm sm:text-base">Pelatihan Non-Sertifikasi</span>
            </li>
            <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300 py-2 px-3 rounded-md hover:bg-gray-50">
              <span className="text-sm sm:text-base">Bootcamp</span>
            </li>
          </ul>
        </li>

        {/* Other Menu Items */}
        <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300">
          <span className="text-sm sm:text-base block py-2 px-3 rounded-md hover:bg-gray-50 md:hover:bg-transparent">Tentang Akualita Academy</span>
        </li>
        <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300">
          <span className="text-sm sm:text-base block py-2 px-3 rounded-md hover:bg-gray-50 md:hover:bg-transparent">Kursus Singkat</span>
        </li>
        <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300"> 
          <a href="/mitra" className="text-sm sm:text-base block py-2 px-3 rounded-md hover:bg-gray-50 md:hover:bg-transparent">Mitra</a> 
        </li>
        <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300"> 
          <a href="https://akualita.com/" className="text-sm sm:text-base block py-2 px-3 rounded-md hover:bg-gray-50 md:hover:bg-transparent">Pelatihan Korporasi</a> 
        </li>
        <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300">
          <a 
            href="https://akualita.com/webinar-2025/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-[#00ACF8] text-[#00ACF8] text-sm sm:text-base px-4 py-2 rounded-md hover:bg-[#00ACF8] hover:shadow-md hover:text-white transition duration-300 block text-center mt-2"
          >
            Kursus Gratis
          </a>
        </li>
      </ul>
    </nav>
  );
}
