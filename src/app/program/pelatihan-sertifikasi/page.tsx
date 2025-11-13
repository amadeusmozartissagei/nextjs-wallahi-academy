'use client';

import Image from 'next/image';

// Card Class Component
const CardClass = ({ left, top }: { left: number; top: number }) => (
  <div 
    style={{
      position: 'absolute',
      width: '412.5px',
      height: '322.5px',
      left: `${left}px`,
      top: `${top}px`
    }}
  >
    {/* Rectangle 13 */}
    <div 
      style={{
        boxSizing: 'border-box',
        position: 'absolute',
        width: '412.5px',
        height: '322.5px',
        left: '0px',
        top: '0px',
        background: '#FFFFFF',
        borderRadius: '12.5px',
        border: '3.75px solid transparent',
        backgroundImage: 'linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(0deg, #18ECA0 0%, #00C0E8 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'content-box, border-box'
      }}
    >
      {/* Image 10 */}
      <div
        style={{
          position: 'absolute',
          width: '381.25px',
          height: '176.25px',
          left: '15px',
          top: '17.5px',
          borderRadius: '13.75px',
          overflow: 'hidden'
        }}
      >
        <Image
          src="/images/pelatihan-sertifikasi/image10.png"
          alt="Pelatihan Sertifikasi"
          width={381}
          height={176}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '13.75px'
          }}
        />
      </div>

      {/* Pelatihan Sertifikasi K3 Umum */}
      <div
        style={{
          position: 'absolute',
          width: '306.25px',
          height: '30px',
          left: '17.5px',
          top: '201.25px',
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '30px',
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
          width: '143.75px',
          height: '28.75px',
          left: '17.5px',
          top: '233.75px',
          background: '#00C0E8',
          borderRadius: '32.5px'
        }}
      >
      </div>

      {/* Sertifikasi K3 */}
      <div
        style={{
          position: 'absolute',
          width: '98.75px',
          height: '22.5px',
          left: '40px',
          top: '236.25px',
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '15px',
          lineHeight: '22.5px',
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
          width: '103.75px',
          height: '30px',
          left: '52.5px',
          top: '277.5px',
          fontFamily: 'var(--font-poppins), Poppins, sans-serif',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '30px',
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
          left: '17.5px',
          top: '280px',
          width: '26.25px',
          height: '26.25px'
        }}
      >
        <Image
          src="/images/pelatihan-sertifikasi/Vectordolar.svg"
          alt="Price icon"
          width={26}
          height={26}
        />
      </div>

      {/* Ellipse 5 */}
      <div 
        style={{
          position: 'absolute',
          width: '50px',
          height: '50px',
          left: '343.75px',
          top: '255px',
          background: '#D9D9D9',
          borderRadius: '50%'
        }}
      >
      </div>

      {/* Arrow 1 */}
      <div
        style={{
          position: 'absolute',
          left: '356.875px',
          top: '268.125px',
          width: '23.75px',
          height: '23.75px'
        }}
      >
        <Image
          src="/images/pelatihan-sertifikasi/Arrow1.svg"
          alt="Arrow icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  </div>
);

export default function PelatihanSertifikasiPage() {
  return (
    <main 
      className="min-h-screen w-full relative"
      style={{
        background: 'linear-gradient(90deg, #04AEFB 0%, #18ECA0 100%)',
        minHeight: '100vh'
      }}
    >
      {/* Wrapper untuk zoom out 10% */}
      <div 
        style={{
          transform: 'scale(0.9)',
          transformOrigin: 'top left',
          width: '111.11%', // Compensate for scale (100% / 0.9)
          height: '111.11%'  // Compensate for scale (100% / 0.9)
        }}
      >
        {/* Hero Section dengan Background Gradient */}
        <div 
          className="w-full relative"
          style={{
            minHeight: 'calc((100vh - 80px) / 0.9)',
            width: '100%',
            paddingBottom: '500px',
            background: 'linear-gradient(90deg, #04AEFB 0%, #18ECA0 100%)'
          }}
        >
        {/* Rectangle 11 */}
        <div 
          style={{
            position: 'absolute',
            width: '300px',
            height: '600px',
            left: '46.25px',
            top: '81.25px',
            background: '#FFFFFF',
            boxShadow: '0px 3.75px 14px 1.25px rgba(0, 0, 0, 0.25)',
            borderRadius: '33.75px'
          }}
        >
          {/* Pilihan Kelas */}
          <div
            style={{
              position: 'absolute',
              width: '198.75px',
              height: '45px',
              left: '50px',
              top: '17.5px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '30px',
              lineHeight: '45px',
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
              width: '256.25px',
              height: '53.75px',
              left: '21.25px',
              top: '83.75px',
              background: 'linear-gradient(90deg, #00C0E8 0%, #18ECA0 100%)',
              borderRadius: '12.5px',
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
                fontSize: '20px',
                lineHeight: '30px',
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
              width: '236.25px',
              height: '30px',
              left: '32.5px',
              top: '178.75px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '30px',
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
              width: '236.25px',
              height: '30px',
              left: '32.5px',
              top: '262.5px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '30px',
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
              width: '236.25px',
              height: '30px',
              left: '32.5px',
              top: '346.25px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '30px',
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
              width: '236.25px',
              height: '30px',
              left: '32.5px',
              top: '430px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '30px',
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
              width: '236.25px',
              height: '30px',
              left: '32.5px',
              top: '513.75px',
              fontFamily: 'var(--font-poppins), Poppins, sans-serif',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '30px',
              textAlign: 'center',
              color: '#B3B3B3'
            }}
          >
            Business Development
          </div>
        </div>

        {/* Card Class Grid - 3 columns x 2 rows */}
        <CardClass left={387.5} top={81.25} />
        <CardClass left={387.5 + 412.5 + 40} top={81.25} />
        <CardClass left={387.5 + (412.5 + 40) * 2} top={81.25} />
        <CardClass left={387.5} top={81.25 + 322.5 + 40} />
        <CardClass left={387.5 + 412.5 + 40} top={81.25 + 322.5 + 40} />
        <CardClass left={387.5 + (412.5 + 40) * 2} top={81.25 + 322.5 + 40} />
        </div>
      </div>
    </main>
  );
}

