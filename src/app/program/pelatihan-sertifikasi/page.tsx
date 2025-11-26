'use client';

import { Fragment, useMemo, useState } from 'react';
import Image from 'next/image';

type CategoryContent = {
  overview: string;
  benefits: string[];
  outcomes: string[];
  courses: string[];
};

const categoryContent: Record<string, CategoryContent> = {
  'Business Development': {
    overview:
      'Pelajari strategi pengembangan bisnis dari tahap riset pasar, perencanaan partnership, hingga implementasi sales pipeline.',
    benefits: [
      'Mentoring langsung dari praktisi Business Development',
      'Studi kasus lokal dan internasional',
      'Template dokumen partnership dan sales pitch',
    ],
    outcomes: [
      'Mampu menyusun strategi pertumbuhan bisnis yang terukur',
      'Terampil membangun dan memelihara relasi partnership',
      'Menguasai analisis peluang pasar dan negosiasi',
    ],
    courses: [
      'Fundamental Business Development Strategy',
      'Strategic Partnership & Negotiation Mastery',
      'Sales Pipeline Planning & Forecasting',
      'Account Management Excellence',
      'Growth Experimentation Playbook',
      'Go-To-Market Strategy for New Products',
    ],
  },
  'Digital Marketing': {
    overview:
      'Optimalkan performa kampanye digital lewat data, konten, dan automasi untuk mencapai target akuisisi dan retensi.',
    benefits: [
      'Akses dashboard analitik real case',
      'Toolkit content planning dan marketing automation',
      'Sesi optimasi kampanye bersama mentor',
    ],
    outcomes: [
      'Menyusun full-funnel digital marketing plan',
      'Mengoptimasi channel SEO, SEM, dan paid ads',
      'Menganalisis hasil kampanye secara menyeluruh',
    ],
    courses: [
      'Integrated Digital Marketing Blueprint',
      'Performance Marketing & Optimization',
      'Content Strategy & Social Media Management',
      'Marketing Analytics with GA4',
      'Email & Marketing Automation Workflow',
      'Community Building for Retention',
    ],
  },
  'Data Science': {
    overview:
      'Bangun pondasi data science dari analisis eksploratif, pemodelan prediktif, hingga deployment model machine learning.',
    benefits: [
      'Hands-on project dengan dataset industri',
      'Review model oleh mentor ahli',
      'Template dokumentasi data pipeline',
    ],
    outcomes: [
      'Mampu membersihkan dan memvisualisasikan data',
      'Membangun model prediktif menggunakan Python',
      'Menerapkan model ke lingkungan produksi sederhana',
    ],
    courses: [
      'Python for Data Science Foundations',
      'Exploratory Data Analysis & Visualization',
      'Machine Learning Supervised & Unsupervised',
      'Model Evaluation & Optimization Techniques',
      'Data Pipeline & Automation Basics',
      'Deploying Models with Streamlit & FastAPI',
    ],
  },
  'Web Development': {
    overview:
      'Kuasi pengembangan web modern dari frontend hingga backend dengan standar produksi dan best practice industri.',
    benefits: [
      'Code review berkala dari mentor engineer',
      'Project real-world dengan stack modern',
      'Access ke komponen UI reusable',
    ],
    outcomes: [
      'Membangun aplikasi web responsif dan performan',
      'Mengintegrasikan API dan database',
      'Menerapkan praktik secure dan scalable',
    ],
    courses: [
      'Responsive Frontend with Next.js & Tailwind',
      'Backend API with Node.js & Express',
      'Database Design & Prisma ORM',
      'Authentication & Authorization Patterns',
      'Testing & Deployment Workflow',
      'Performance Optimization & Monitoring',
    ],
  },
  'UI/UX Design': {
    overview:
      'Rancang pengalaman pengguna end-to-end mulai dari riset, wireframe, hingga prototipe siap uji dengan standar desain terbaru.',
    benefits: [
      'Fasilitasi user testing terarah',
      'Access ke UI kit dan design system premium',
      'Feedback detail dari praktisi senior',
    ],
    outcomes: [
      'Menyusun riset dan persona pengguna',
      'Membuat wireframe dan high-fidelity prototype',
      'Mengonsolidasikan insight ke design system',
    ],
    courses: [
      'User Research & Insight Synthesis',
      'Information Architecture & Wireframing',
      'Visual Design Principles & Components',
      'Prototyping with Figma & FigJam',
      'Design System Documentation',
      'Usability Testing & Iteration',
    ],
  },
  'Project Management': {
    overview:
      'Kelola proyek kompleks dengan metodologi agile dan waterfall untuk memastikan delivery tepat waktu dan berkualitas.',
    benefits: [
      'Template project charter & risk register',
      'Simulasi scrum & stakeholder management',
      'Mentoring sesi problem solving',
    ],
    outcomes: [
      'Menyusun rencana proyek yang terukur',
      'Memimpin eksekusi agile sprint dan review',
      'Mengelola resiko dan komunikasi stakeholder',
    ],
    courses: [
      'Project Planning & Scope Management',
      'Agile Scrum Framework Essentials',
      'Stakeholder Communication Strategy',
      'Risk & Issue Management Workshop',
      'Project Monitoring with KPIs & Tools',
      'Closing & Retrospective Best Practices',
    ],
  },
};

// Card Class Component
const CardClass = ({ title, order }: { title: string; order: number }) => (
  <div
    className="w-full card-fade-in"
    style={{
      position: 'relative',
      width: '100%',
      maxWidth: '330px',
      height: '296px',
      margin: '0 auto',
      animationDelay: `${order * 0.08}s`,
    }}
  >
    {/* Rectangle 13 */}
    <div 
      style={{
        boxSizing: 'border-box',
        position: 'relative',
        width: '100%',
        height: '296px',
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
            height: '48px',
            left: '14px',
            top: '161px',
            fontFamily: 'var(--font-poppins), Poppins, sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '24px',
            textAlign: 'left',
            color: '#535353',
            whiteSpace: 'normal',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {title}
        </div>

      {/* Rectangle 19 */}
        <div 
          style={{
          position: 'absolute',
          width: '115px',
          height: '23px',
            left: '14px',
            top: '215px',
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
            top: '217px',
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
            top: '252px',
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
            top: '254px',
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
            top: '236px',
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
            top: '246.5px',
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

  const activeContent = useMemo< CategoryContent | undefined >(
    () => categoryContent[activeCategory],
    [activeCategory]
  );

  const activeCourses = useMemo(() => {
    if (!activeContent) return [];
    return activeContent.courses.map((course, index) => `${index + 1}. ${course}`);
  }, [activeContent]);

  return (
    <Fragment>
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
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="w-full transition-all duration-200 hover:opacity-80"
                style={{
                  minHeight: activeCategory === category ? '43px' : '24px',
                  background: activeCategory === category 
                    ? 'linear-gradient(90deg, #00C0E8 0%, #18ECA0 100%)'
                    : 'transparent',
                  borderRadius: activeCategory === category ? '10px' : '0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: activeCategory === category ? '6px 10px' : '0 10px',
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
                    whiteSpace: 'normal',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
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
                    minHeight: '36px',
                    minWidth: 'fit-content',
                    padding: '6px 16px',
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
                    whiteSpace: 'normal',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
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
          key={activeCategory}
          className="flex-1 w-full grid gap-3 sm:gap-4 md:gap-6 fade-in-up"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 330px), 1fr))',
            alignContent: 'start',
            justifyContent: 'start',
          }}
        >
          {activeCourses.map((courseTitle, index) => (
            <CardClass key={courseTitle} title={courseTitle} order={index} />
          ))}
        </div>
      </div>

      {/* Dynamic Sections */}
      {activeContent && (
        <div
          key={activeCategory}
          className="w-full flex flex-col gap-6 md:gap-8 px-3 sm:px-4 md:px-9 pb-16 fade-scale"
        >
          <div
            style={{
              background: '#FFFFFF',
              boxShadow: '0px 3px 11.2px 1px rgba(0, 0, 0, 0.25)',
              borderRadius: '27px',
              padding: '24px 20px',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '32px',
                color: '#00C0E8',
                marginBottom: '12px',
                textAlign: 'left',
              }}
            >
              Ringkasan Program {activeCategory}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '26px',
                color: '#535353',
              }}
            >
              {activeContent.overview}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div
              style={{
                background: '#FFFFFF',
                boxShadow: '0px 3px 11.2px 1px rgba(0, 0, 0, 0.25)',
                borderRadius: '27px',
                padding: '24px 20px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '30px',
                  color: '#00C0E8',
                  marginBottom: '12px',
                  textAlign: 'left',
                }}
              >
                Benefit Mengikuti {activeCategory}
              </h3>
              <ul
                style={{
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '26px',
                  color: '#535353',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  paddingLeft: '20px',
                }}
              >
                {activeContent.benefits.map((benefit) => (
                  <li key={benefit} style={{ listStyleType: 'disc' }}>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: '#FFFFFF',
                boxShadow: '0px 3px 11.2px 1px rgba(0, 0, 0, 0.25)',
                borderRadius: '27px',
                padding: '24px 20px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '30px',
                  color: '#00C0E8',
                  marginBottom: '12px',
                  textAlign: 'left',
                }}
              >
                Kemampuan yang Dipelajari
              </h3>
              <ul
                style={{
                  fontFamily: 'var(--font-poppins), Poppins, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '26px',
                  color: '#535353',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  paddingLeft: '20px',
                }}
              >
                {activeContent.outcomes.map((outcome) => (
                  <li key={outcome} style={{ listStyleType: 'disc' }}>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
    </main>
    <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translate3d(0, 24px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes fadeScale {
          0% {
            opacity: 0;
            transform: scale(0.96);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes cardFadeIn {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.55s ease both;
        }

        .fade-scale {
          animation: fadeScale 0.55s ease both;
        }

        .card-fade-in {
          animation: cardFadeIn 0.5s ease both;
        }
      `}</style>
    </Fragment>
  );
}

