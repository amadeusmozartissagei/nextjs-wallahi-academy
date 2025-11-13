'use client';

import { useState } from 'react';
import Image from 'next/image';

// Card Class Component
const CardClass = () => (
  <div 
    className="w-full"
    style={{
      position: 'relative',
      width: '100%',
      maxWidth: '330px',
      height: '258px',
      margin: '0 auto'
    }}
  >
    {/* Rectangle 13 */}
    <div 
      style={{
        boxSizing: 'border-box',
        position: 'relative',
        width: '100%',
        height: '258px',
        background: '#FFFFFF',
        borderRadius: '10px',
        border: '3px solid transparent',
        backgroundImage: 'linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(0deg, #18ECA0 0%, #00C0E8 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box'
      }}
    >
      {/* Image 10 */}
      <div
        style={{
          position: 'absolute',
          width: '305px',
          height: '141px',
          left: '12px',
          top: '14px',
          borderRadius: '11px',
          overflow: 'hidden'
        }}
      >
          <Image
            src="/images/pelatihan-sertifikasi/image10.png"
            alt="Pelatihan Sertifikasi"
            width={305}
            height={141}
            style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '11px'
            }}
          />
        </div>

        {/* Pelatihan Sertifikasi K3 Umum */}
        <div
          style={{
            position: 'absolute',
            width: '245px',
            height: '24px',
            left: '14px',
            top: '161px',
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24px',
            textAlign: 'left',
            color: '#535353'
          }}
        >
          Pelatihan Sertifikasi K3 Umum
        </div>

      {/* Rectangle 19 */}
        <div 
          style={{
          position: 'absolute',
          width: '115px',
          height: '23px',
            left: '14px',
            top: '187px',
            background: '#00C0E8',
          borderRadius: '26px'
          }}
        >
        </div>

        {/* Sertifikasi K3 */}
        <div
          style={{
          position: 'absolute',
            width: '79px',
            height: '18px',
            left: '32px',
            top: '189px',
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
          fontSize: '12px',
            lineHeight: '18px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            color: '#FFFFFF'
          }}
        >
          Sertifikasi K3
        </div>

        {/* Rp199.000 */}
        <div
          style={{
          position: 'absolute',
            width: '83px',
            height: '24px',
            left: '42px',
            top: '222px',
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
          fontSize: '16px',
            lineHeight: '24px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            color: '#535353'
          }}
        >
          Rp199.000
        </div>

        {/* Vectordolar.svg */}
        <div
          style={{
          position: 'absolute',
            left: '14px',
            top: '224px',
          width: '21px',
          height: '21px'
          }}
        >
          <Image
            src="/images/pelatihan-sertifikasi/Vectordolar.svg"
            alt="Price icon"
            width={21}
            height={21}
          />
        </div>

        {/* Ellipse 5 */}
        <div 
          style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            left: '275px',
            top: '204px',
            background: '#D9D9D9',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
        </div>

        {/* Arrow 1 */}
        <div
          style={{
            position: 'absolute',
            left: '285.5px',
            top: '214.5px',
            width: '19px',
            height: '19px'
          }}
        >
          <Image
            src="/images/pelatihan-sertifikasi/Arrow1.svg"
            alt="Arrow icon"
            width={19}
            height={19}
          />
        </div>
      </div>
    </div>
  );

export default function PelatihanSertifikasiPage() {
  const [activeCategory, setActiveCategory] = useState('Business Development');
  
  const categories = [
    'Business Development',
    'Digital Marketing',
    'Data Science',
    'Web Development',
    'UI/UX Design',
    'Project Management'
  ];

  return (
    <main 
      className="min-h-screen w-full relative overflow-x-hidden"
      style={{
        background: 'linear-gradient(90deg, #04AEFB 0%, #18ECA0 100%)',
        minHeight: '100vh',
        width: '100%',
        position: 'relative'
      }}
    >
      {/* Wrapper untuk zoom out 10% */}
      <div 
        className="w-full"
        style={{
          transform: 'scale(0.9)',
          transformOrigin: 'top left',
          width: '111.11%', // Compensate for scale (100% / 0.9)
          minHeight: '100vh'
        }}
      >
        {/* Hero Section dengan Background Gradient */}
        <div 
          className="w-full relative flex flex-col md:flex-row gap-4 md:gap-5 px-3 sm:px-4 md:px-9 pt-12 sm:pt-16 md:pt-16 pb-24 sm:pb-96 md:pb-96"
          style={{
            minHeight: 'calc((100vh - 80px) / 0.9)',
            background: 'linear-gradient(90deg, #04AEFB 0%, #18ECA0 100%)'
          }}
        >
        {/* Navigation - Desktop Sidebar */}
        <div 
          className="hidden md:block flex-shrink-0 w-60 mx-auto md:mx-0"
          style={{
            minWidth: '240px',
            maxWidth: '240px',
            height: 'fit-content',
            maxHeight: '480px',
            background: '#FFFFFF',
            boxShadow: '0px 3px 11.2px 1px rgba(0, 0, 0, 0.25)',
            borderRadius: '27px',
            position: 'relative',
            padding: '14px 17px 20px 17px'
          }}
        >
          {/* Pilihan Kelas */}
          <div
            style={{
              width: '100%',
              height: '36px',
              marginBottom: '17px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '24px',
              lineHeight: '36px',
              textAlign: 'center',
              color: '#00C0E8'
            }}
          >
            Pilihan Kelas
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="w-full transition-all duration-200 hover:opacity-80"
                style={{
                  height: activeCategory === category ? '43px' : '24px',
                  background: activeCategory === category 
                    ? 'linear-gradient(90deg, #00C0E8 0%, #18ECA0 100%)'
                    : 'transparent',
                  borderRadius: activeCategory === category ? '10px' : '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: activeCategory === category ? '0' : '0',
                  cursor: 'pointer'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '24px',
                    textAlign: 'center',
                    color: activeCategory === category ? '#FFFFFF' : '#B3B3B3',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%',
                    padding: '0 10px'
                  }}
                >
                  {category}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation - Mobile Horizontal Scroll */}
        <div 
          className="md:hidden w-full mb-4"
          style={{
            background: '#FFFFFF',
            boxShadow: '0px 3px 11.2px 1px rgba(0, 0, 0, 0.25)',
            borderRadius: '27px',
            padding: '16px 12px'
          }}
        >
          {/* Pilihan Kelas */}
          <div
            style={{
              width: '100%',
              height: '28px',
              marginBottom: '12px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '28px',
              textAlign: 'center',
              color: '#00C0E8'
            }}
          >
            Pilihan Kelas
          </div>

          {/* Horizontal Scroll Navigation */}
          <div className="overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="flex gap-3 pb-2" style={{ minWidth: 'max-content' }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="flex-shrink-0 transition-all duration-200 hover:opacity-80"
                  style={{
                    height: '36px',
                    minWidth: 'fit-content',
                    padding: '0 16px',
                    background: activeCategory === category 
                      ? 'linear-gradient(90deg, #00C0E8 0%, #18ECA0 100%)'
                      : '#F5F5F5',
                    borderRadius: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '20px',
                      textAlign: 'center',
                      color: activeCategory === category ? '#FFFFFF' : '#535353',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {category}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Card Class Grid - Responsive */}
        <div 
          className="flex-1 w-full grid gap-3 sm:gap-4 md:gap-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 330px), 1fr))',
            alignContent: 'start',
            justifyContent: 'start'
          }}
        >
          <CardClass />
          <CardClass />
          <CardClass />
          <CardClass />
          <CardClass />
          <CardClass />
        </div>
        </div>
      </div>
    </main>
  );
}

