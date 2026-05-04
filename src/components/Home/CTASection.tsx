'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section id="contact" style={{
      padding: 'var(--section-padding) 0',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-dark)'
    }}>
      <div className="container">
        <div style={{
          position: 'relative',
          padding: '100px 60px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          textAlign: 'center',
          overflow: 'hidden',
        }}>
          {/* Background pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
              <span style={{ 
                fontSize: '0.85rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                color: 'var(--accent-gold)',
                letterSpacing: '3px'
              }}>
                Ready to Build?
              </span>
              <div style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
            </div>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '24px',
              color: 'white',
              textTransform: 'uppercase'
            }}>
              {t.cta.title}
            </h2>
            
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '600px',
              margin: '0 auto 48px',
              lineHeight: 1.8,
            }}>
              {t.cta.subtitle}
            </p>

            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '20px 50px',
                background: 'var(--accent-gold)',
                color: 'var(--bg-dark)',
                fontWeight: 800,
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'all 0.4s ease',
              }}
              className="cta-btn-primary"
              >
                {t.cta.button}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            <p style={{
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.4)',
              marginTop: '32px',
              letterSpacing: '0.5px'
            }}>
              {t.cta.noCredit}
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .cta-btn-primary:hover {
          transform: translateY(-5px);
          background: white;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
}

