'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  const [currentIdx, setCurrentIdx] = useState(0);
  const carouselImages = [
    { url: '/images/service-1.png', name: 'Amarta Hills Villa' },
    { url: '/images/portfolio-1.png', name: 'Menteng Residence' },
    { url: '/images/service-2.png', name: 'The Arkana Office' },
  ];

  useEffect(() => {
    setVisible(true);
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
      background: 'var(--bg-dark)',
      color: 'white'
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${carouselImages[currentIdx].url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.2,
        zIndex: 1,
        transition: 'background-image 1s ease-in-out'
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, var(--bg-dark) 30%, transparent 80%)',
        zIndex: 2,
      }} />

      <div className="container" style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
          gap: '60px',
          alignItems: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        className="hero-grid"
        >
          {/* Left Side: Content */}
          <div style={{ maxWidth: '100%' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: 'var(--radius-none)',
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid var(--accent-gold)',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--accent-gold)',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '28px',
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                background: 'var(--accent-gold)',
              }} />
              {t.hero.badge}
            </div>

            {/* Heading */}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '24px',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
            }}>
              {t.hero.title1}
              <br />
              <span style={{
                background: 'var(--gradient-gold)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {t.hero.title2}
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.8,
              marginBottom: '40px',
              maxWidth: '560px',
            }}>
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="#portfolio" className="btn-primary" style={{ padding: '16px 40px', borderRadius: '0px', background: 'var(--accent-gold)', color: 'var(--bg-dark)', fontWeight: 700 }}>
                {t.hero.ctaPrimary}
              </Link>

              <Link href="#contact" className="btn-secondary" style={{ padding: '16px 40px', borderRadius: '0px', border: '1px solid white', color: 'white', fontWeight: 700, background: 'transparent' }}>
                {t.hero.ctaSecondary}
              </Link>
            </div>

            {/* Stats/Trusted */}
            <div style={{ marginTop: '60px', display: 'flex', gap: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px' }}>
              <div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-gold)' }}>150+</h4>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Proyek Selesai</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-gold)' }}>12+</h4>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Tahun Pengalaman</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-gold)' }}>50+</h4>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Tim Profesional</p>
              </div>
            </div>
          </div>

          {/* Right: Carousel Geometric Element */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
             <div style={{
               width: '400px',
               height: '500px',
               border: '2px solid var(--accent-gold)',
               position: 'relative',
               zIndex: 1,
               transform: 'translate(20px, -20px)'
             }}>
                {carouselImages.map((img, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      inset: '20px',
                      backgroundImage: `url(${img.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      zIndex: 2,
                      opacity: currentIdx === idx ? 1 : 0,
                      transition: 'opacity 1s ease-in-out',
                    }}
                  />
                ))}
                
                {/* Overlay text with animation */}
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  background: 'var(--accent-gold)',
                  padding: '24px',
                  color: 'var(--bg-dark)',
                  zIndex: 3,
                  width: '220px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                }}>
                   <p style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '1px' }}>Latest Project</p>
                   <p style={{ 
                     fontSize: '1rem', 
                     fontWeight: 700,
                     opacity: 1,
                     transition: 'all 0.5s ease',
                   }}>
                     {carouselImages[currentIdx].name}
                   </p>
                </div>

                {/* Carousel Indicators */}
                <div style={{
                  position: 'absolute',
                  right: '-10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  zIndex: 10
                }}>
                  {carouselImages.map((_, idx) => (
                    <div
                      key={idx}
                      onClick={() => setCurrentIdx(idx)}
                      style={{
                        width: '4px',
                        height: currentIdx === idx ? '40px' : '20px',
                        background: currentIdx === idx ? 'var(--accent-gold)' : 'rgba(255,255,255,0.3)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding-bottom: 60px;
          }
          .hero-grid > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-grid > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>

  );
}

