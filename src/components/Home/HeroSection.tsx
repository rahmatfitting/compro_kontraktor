'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px',
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 20%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)
        `,
        pointerEvents: 'none',
      }} />

      {/* Grid Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }} />

      {/* Orbiting elements */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '10%',
        width: '300px',
        height: '300px',
        pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#6366f1',
          boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)',
          animation: 'orbit 15s linear infinite',
          top: '50%',
          left: '50%',
        }} />
        <div style={{
          position: 'absolute',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#06b6d4',
          boxShadow: '0 0 15px rgba(6, 182, 212, 0.5)',
          animation: 'orbit 20s linear infinite reverse',
          top: '50%',
          left: '50%',
        }} />
        <div style={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          border: '1px solid rgba(99, 102, 241, 0.08)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }} />
      </div>

      <div className="container" style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1280px',
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
          <div style={{
            maxWidth: '100%',
          }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '100px',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(6, 182, 212, 0.15))',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#9eb3ff',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '28px',
            }}>
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 8px rgba(16, 185, 129, 0.5)',
                animation: 'pulse-glow 2s ease-in-out infinite',
              }} />
              {t.hero.badge}
            </div>

            {/* Heading */}
            <h1 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}>
              <span style={{ color: 'var(--text-primary)' }}>{t.hero.title1} </span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
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
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '40px',
              maxWidth: '560px',
            }}>
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 36px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
                color: 'white',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(99, 102, 241, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(99, 102, 241, 0.3)';
              }}
              >
                {t.hero.ctaPrimary}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <Link href="/products" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 36px',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.03)',
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '1rem',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                  <polygon points="6.5,5 11.5,8 6.5,11" fill="currentColor"/>
                </svg>
                {t.hero.ctaSecondary}
              </Link>
            </div>

            {/* Trust Logos */}
            <div style={{ marginTop: '60px' }}>
              <p style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                fontWeight: 600,
                marginBottom: '20px',
              }}>
                {t.hero.trusted}
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                flexWrap: 'wrap',
                opacity: 0.4,
              }}>
                {['Microsoft', 'Google', 'Amazon', 'Salesforce', 'SAP'].map((brand) => (
                  <span key={brand} style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.5px',
                  }}>
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Dashboard Preview Card */}
          <div style={{
            position: 'relative',
            perspective: '1000px',
          }}
          className="hero-dashboard-container"
          >
            <div style={{
              width: '100%',
              maxWidth: '520px',
              height: '380px',
              background: 'rgba(20, 20, 32, 0.6)',
              borderRadius: '24px',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(24px)',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 30px rgba(99, 102, 241, 0.1)',
              animation: 'float 6s ease-in-out infinite',
              margin: '0 auto',
            }}>
              {/* Title bar */}
              <div style={{
                padding: '16px 24px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'rgba(255,255,255,0.02)',
              }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f43f5e' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ marginLeft: '12px', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Dashboard — ERPPro
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                {/* Mini stat cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                  {[
                    { label: language === 'id' ? 'Pendapatan' : 'Revenue', value: '$2.4M', color: '#10b981', change: '+12.5%' },
                    { label: language === 'id' ? 'Pesanan' : 'Orders', value: '1,248', color: '#6366f1', change: '+8.2%' },
                    { label: language === 'id' ? 'Klien' : 'Clients', value: '432', color: '#06b6d4', change: '+23.1%' },
                  ].map((stat) => (
                    <div key={stat.label} style={{
                      padding: '16px',
                      borderRadius: '16px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 500 }}>{stat.label}</p>
                      <p style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text-primary)' }}>{stat.value}</p>
                      <span style={{ fontSize: '0.7rem', color: stat.color, fontWeight: 600 }}>{stat.change}</span>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div style={{
                  height: '160px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '8px',
                }}>
                  {[35, 55, 45, 70, 60, 80, 65, 90, 75, 95, 85, 100].map((h, i) => (
                    <div key={i} style={{
                      flex: 1,
                      height: `${h}%`,
                      borderRadius: '4px 4px 0 0',
                      background: `linear-gradient(180deg, rgba(99, 102, 241, ${0.4 + (h/200)}), rgba(6, 182, 212, ${0.2 + (h/300)}))`,
                      transition: 'height 0.5s ease',
                      animation: `fadeInUp 0.5s ease ${i * 0.05}s both`,
                    }} />
                  ))}
                </div>
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
          }
          .hero-grid > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-dashboard-container {
            margin-top: 40px;
            width: 100%;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
}
