'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-primary)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
          gap: '80px',
          alignItems: 'center'
        }} className="about-grid">
          
          {/* Left Side: Image Content */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-none)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-premium)',
              border: '1px solid var(--border-subtle)'
            }}>
              <img 
                src="/images/about.png" 
                alt="Arkana Konstruksi Team" 
                style={{ width: '100%', height: '600px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent 50%)'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '40px',
                left: '40px',
              }}>
                <p style={{ 
                  color: 'var(--accent-gold)', 
                  fontSize: '0.9rem', 
                  fontWeight: 700, 
                  textTransform: 'uppercase', 
                  letterSpacing: '3px',
                  marginBottom: '12px'
                }}>
                  Since 2012
                </p>
                <h3 style={{ color: 'white', fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
                  A Legacy of Precision
                </h3>
              </div>
            </div>
            
            {/* Geometric Accent */}
            <div style={{
              position: 'absolute',
              bottom: '-40px',
              right: '-40px',
              width: '240px',
              height: '240px',
              border: '10px solid var(--accent-gold)',
              zIndex: -1,
              opacity: 0.1,
            }} />
          </div>

          {/* Right Side: Text Content */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '2px', background: 'var(--accent-gold)' }} />
              <span style={{ 
                fontSize: '0.85rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                color: 'var(--accent-gold)',
                letterSpacing: '2px'
              }}>
                {t.about.badge}
              </span>
            </div>
            
            <h2 className="section-title" style={{ 
              marginBottom: '32px', 
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              background: 'none',
              WebkitTextFillColor: 'initial',
              color: 'var(--text-primary)'
            }}>
              {t.about.title}
            </h2>
            
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-primary)', 
              fontWeight: 600, 
              lineHeight: 1.5, 
              marginBottom: '32px',
              fontFamily: 'var(--font-display)'
            }}>
              {t.about.subtitle}
            </p>
            
            <p style={{ 
              fontSize: '1rem', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.8, 
              marginBottom: '48px',
            }}>
              {t.about.storytelling}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '24px' }}>
                <h4 style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.1rem', 
                  fontWeight: 700, 
                  color: 'var(--text-primary)', 
                  marginBottom: '16px',
                  textTransform: 'uppercase'
                }}>
                  {t.about.vision.title}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {t.about.vision.desc}
                </p>
              </div>
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '24px' }}>
                <h4 style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.1rem', 
                  fontWeight: 700, 
                  color: 'var(--text-primary)', 
                  marginBottom: '16px',
                  textTransform: 'uppercase'
                }}>
                  {t.about.mission.title}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {t.about.mission.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .about-grid img {
            height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
}

