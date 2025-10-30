'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-20">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo - Rata Kiri */}
          <div className="flex items-center flex-shrink-0">
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

          {/* Hamburger Menu Button - Rata Kanan untuk Mobile */}
          <button 
            id="menu-toggle" 
            className="block md:hidden focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 z-50"
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

          {/* Desktop Menu Items - Rata Kanan */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8 text-sm text-gray-900">
        
              {/* Program Desktop */}
              <li className="group relative cursor-pointer">
                <div className="relative group">
                  <button 
                    className="flex items-center space-x-1 text-sm md:text-base hover:text-[#00ACF8] transition duration-300 py-2"
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
                  className={`absolute left-1/2 top-full -translate-x-1/2 w-[80vw] max-w-[600px] bg-white shadow-xl z-50 transition-all duration-300 rounded-xl mt-2 ${
                    isDesktopDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                  onMouseEnter={() => setIsDesktopDropdownOpen(true)}
                  onMouseLeave={() => setIsDesktopDropdownOpen(false)}
                >
                  <div className="px-2 md:px-3 lg:px-4 py-2 md:py-3 lg:py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 text-gray-700">
                    
                    {/* Pelatihan Sertifikasi */}
                    <div className="flex flex-col items-center hover:bg-[#E6F8FE] p-2 lg:p-2.5 transition duration-300 rounded-xl">
                      <div className="flex-shrink-0 mb-2">
                        <div className="bg-gradient-to-br from-[#05E089] to-[#00ACF8] w-8 h-8 lg:w-9 lg:h-9 rounded-lg flex items-center justify-center">
                          <Image src="/images/svg/certi12.svg" alt="Icon Sertifikasi" width={20} height={20} className="w-4 h-4 lg:w-5 lg:h-5" />
                        </div>
                      </div>
                      <div className="flex-1 w-full">
                        <h4 className="font-semibold text-xs lg:text-sm text-gray-900 mb-0.5 text-center">Pelatihan Sertifikasi</h4>
                        <p className="text-[9px] lg:text-[10px] text-gray-600 leading-relaxed text-center">
                          Tingkatkan kompetensi melalui pelatihan sertifikasi resmi dari instruktur berpengalaman.
                        </p>
                      </div>
                    </div>

                    {/* Pelatihan Non-Sertifikasi */}
                    <div className="flex flex-col items-center hover:bg-[#E6F8FE] p-2 lg:p-2.5 transition duration-300 rounded-xl">
                      <div className="flex-shrink-0 mb-2">
                        <div className="bg-gradient-to-br from-[#05E089] to-[#00ACF8] w-8 h-8 lg:w-9 lg:h-9 rounded-lg flex items-center justify-center">
                          <Image src="/images/svg/noncerti12.svg" alt="Icon Non-Sertifikasi" width={20} height={20} className="w-4 h-4 lg:w-5 lg:h-5" />
                        </div>
                      </div>
                      <div className="flex-1 w-full">
                        <h4 className="font-semibold text-xs lg:text-sm text-gray-900 mb-0.5 text-center">Pelatihan Non-Sertifikasi</h4>
                        <p className="text-[9px] lg:text-[10px] text-gray-600 leading-relaxed text-center">
                          Pelatihan praktis untuk menambah pengetahuan dan keterampilan profesional Anda.
                        </p>
                      </div>
                    </div>

                    {/* Bootcamp */}
                    <div className="flex flex-col items-center hover:bg-[#E6F8FE] p-2 lg:p-2.5 transition duration-300 rounded-xl">
                      <div className="flex-shrink-0 mb-2">
                        <div className="bg-gradient-to-br from-[#05E089] to-[#00ACF8] w-8 h-8 lg:w-9 lg:h-9 rounded-lg flex items-center justify-center">
                          <Image src="/images/svg/boot12.svg" alt="Icon Bootcamp" width={20} height={20} className="w-4 h-4 lg:w-5 lg:h-5" />
                        </div>
                      </div>
                      <div className="flex-1 w-full">
                        <h4 className="font-semibold text-xs lg:text-sm text-gray-900 mb-0.5 text-center">Bootcamp</h4>
                        <p className="text-[9px] lg:text-[10px] text-gray-600 leading-relaxed text-center">
                          Program intensif dengan pembelajaran terstruktur dan praktik langsung secara mendalam.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </li>

              {/* Other Desktop Menu Items */}
              <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300">
                <span className="text-sm md:text-base py-2">Tentang Akualita Academy</span>
              </li>
              <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300">
                <a href="/trainer" className="text-sm md:text-base py-2">Menjadi Trainer</a>
              </li>
              <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300"> 
                <a href="/mitra" className="text-sm md:text-base py-2">Mitra</a> 
              </li>
              <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300"> 
                <a href="https://akualita.com/" className="text-sm md:text-base py-2">Pelatihan Korporasi</a> 
              </li>
              <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300">
                <a 
                  href="https://akualita.com/webinar-2025/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-[#00ACF8] text-[#00ACF8] text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 rounded-md hover:bg-[#00ACF8] hover:shadow-md hover:text-white transition duration-300 whitespace-nowrap"
                >
                  Kursus Gratis
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} onClick={() => setIsMenuOpen(false)}></div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            {/* Close Button */}
            <div className="flex justify-end mb-6">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Items */}
            <ul className="space-y-4">
              {/* Program Mobile */}
              <li className="w-full">
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

              {/* Other Mobile Menu Items */}
              <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300">
                <span className="text-base block py-2 px-3 rounded-md hover:bg-gray-50">Tentang Akualita Academy</span>
              </li>
              <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300">
                <a href="/trainer" className="text-base block py-2 px-3 rounded-md hover:bg-gray-50">Menjadi Trainer</a>
              </li>
              <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300"> 
                <a href="/mitra" className="text-base block py-2 px-3 rounded-md hover:bg-gray-50">Mitra</a> 
              </li>
              <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300"> 
                <a href="https://akualita.com/" className="text-base block py-2 px-3 rounded-md hover:bg-gray-50">Pelatihan Korporasi</a> 
              </li>
              <li className="cursor-pointer hover:text-[#00ACF8] transition duration-300">
                <a 
                  href="https://akualita.com/webinar-2025/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border-2 border-[#00ACF8] text-[#00ACF8] text-base px-4 py-2 rounded-md hover:bg-[#00ACF8] hover:shadow-md hover:text-white transition duration-300 block text-center mt-4"
                >
                  Kursus Gratis
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
