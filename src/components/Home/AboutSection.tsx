'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)',
          gap: '80px',
          alignItems: 'center'
        }} className="grid-2">
          
          {/* Left Side: Image Content */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
              border: '1px solid var(--border-subtle)'
            }}>
              <img 
                src="/exp_swiss_alps.png" 
                alt="Luxury Travel Experience" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(255,255,255,0.9), transparent 50%)'
              }} />
              <div style={{
                position: 'absolute',
                bottom: '30px',
                left: '30px',
                right: '30px'
              }}>
                <p style={{ 
                  color: '#996515', 
                  fontSize: '0.9rem', 
                  fontWeight: 700, 
                  textTransform: 'uppercase', 
                  letterSpacing: '2px',
                  marginBottom: '8px'
                }}>
                  Established 2015
                </p>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif' }}>
                  A Decade of Excellence
                </h3>
              </div>
            </div>
            
            {/* Floating Decorative Element */}
            <div style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '120px',
              height: '120px',
              background: 'linear-gradient(135deg, #d4af37, #996515)',
              borderRadius: '24px',
              zIndex: -1,
              opacity: 0.2,
              animation: 'spin-slow 20s linear infinite'
            }} />
          </div>

          {/* Right Side: Text Content */}
          <div>
            <span className="section-label">
              {t.about.badge}
            </span>
            <h2 className="section-title" style={{ marginBottom: '32px' }}>
              {t.about.title}
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: 'var(--text-primary)', 
              fontWeight: 500, 
              lineHeight: 1.6, 
              marginBottom: '24px' 
            }}>
              {t.about.subtitle}
            </p>
            <p style={{ 
              fontSize: '1rem', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.8, 
              marginBottom: '40px',
              fontStyle: 'italic',
              borderLeft: '3px solid #d4af37',
              paddingLeft: '24px'
            }}>
              "{t.about.storytelling}"
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div>
                <h4 style={{ 
                  fontFamily: 'Space Grotesk, sans-serif', 
                  fontSize: '1.1rem', 
                  fontWeight: 700, 
                  color: '#d4af37', 
                  marginBottom: '12px' 
                }}>
                  {t.about.vision.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {t.about.vision.desc}
                </p>
              </div>
              <div>
                <h4 style={{ 
                  fontFamily: 'Space Grotesk, sans-serif', 
                  fontSize: '1.1rem', 
                  fontWeight: 700, 
                  color: '#d4af37', 
                  marginBottom: '12px' 
                }}>
                  {t.about.mission.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {t.about.mission.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @media (max-width: 992px) {
          .grid-2 {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
