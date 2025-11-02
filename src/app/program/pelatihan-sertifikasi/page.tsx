'use client';

import Image from 'next/image';

// Card Class Component
const CardClass = ({ left, top }: { left: number; top: number }) => (
  <div 
    style={{
      position: 'absolute',
      width: '330px',
      height: '258px',
      left: `${left}px`,
      top: `${top}px`
    }}
  >
    {/* Rectangle 13 */}
    <div 
      style={{
        boxSizing: 'border-box',
        position: 'absolute',
        width: '330px',
        height: '258px',
        left: '0px',
        top: '0px',
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
          textAlign: 'center',
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
          borderRadius: '50%'
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
  return (
    <main className="min-h-screen w-full relative">
      {/* Hero Section dengan Background Gradient */}
      <div 
        className="w-full relative"
        style={{
          minHeight: '1024px',
          background: 'linear-gradient(90deg, #04AEFB 0%, #18ECA0 100%)'
        }}
      >
        {/* Rectangle 11 */}
        <div 
          style={{
            position: 'absolute',
            width: '240px',
            height: '480px',
            left: '37px',
            top: '65px',
            background: '#FFFFFF',
            boxShadow: '0px 3px 11.2px 1px rgba(0, 0, 0, 0.25)',
            borderRadius: '27px'
          }}
        >
          {/* Pilihan Kelas */}
          <div
            style={{
              position: 'absolute',
              width: '159px',
              height: '36px',
              left: '40px',
              top: '14px',
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

          {/* Rectangle 12 */}
          <div 
            style={{
              position: 'absolute',
              width: '205px',
              height: '43px',
              left: '17px',
              top: '67px',
              background: 'linear-gradient(90deg, #00C0E8 0%, #18ECA0 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Bussines Development - Active */}
            <div
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '24px',
                textAlign: 'center',
                color: '#FFFFFF'
              }}
            >
              Business Development
            </div>
          </div>

          {/* Bussines Development - Inactive 1 */}
          <div
            style={{
              position: 'absolute',
              width: '189px',
              height: '24px',
              left: '26px',
              top: '143px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'center',
              color: '#B3B3B3'
            }}
          >
            Business Development
          </div>

          {/* Bussines Development - Inactive 2 */}
          <div
            style={{
              position: 'absolute',
              width: '189px',
              height: '24px',
              left: '26px',
              top: '210px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'center',
              color: '#B3B3B3'
            }}
          >
            Business Development
          </div>

          {/* Bussines Development - Inactive 3 */}
          <div
            style={{
              position: 'absolute',
              width: '189px',
              height: '24px',
              left: '26px',
              top: '277px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'center',
              color: '#B3B3B3'
            }}
          >
            Business Development
          </div>

          {/* Bussines Development - Inactive 4 */}
          <div
            style={{
              position: 'absolute',
              width: '189px',
              height: '24px',
              left: '26px',
              top: '344px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'center',
              color: '#B3B3B3'
            }}
          >
            Business Development
          </div>

          {/* Bussines Development - Inactive 5 */}
          <div
            style={{
              position: 'absolute',
              width: '189px',
              height: '24px',
              left: '26px',
              top: '411px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '24px',
              textAlign: 'center',
              color: '#B3B3B3'
            }}
          >
            Business Development
          </div>
        </div>

        {/* Card Class Grid - 3 columns x 2 rows */}
        <CardClass left={310} top={65} />
        <CardClass left={310 + 330 + 32} top={65} />
        <CardClass left={310 + (330 + 32) * 2} top={65} />
        <CardClass left={310} top={65 + 258 + 32} />
        <CardClass left={310 + 330 + 32} top={65 + 258 + 32} />
        <CardClass left={310 + (330 + 32) * 2} top={65 + 258 + 32} />
      </div>
    </main>
  );
}

