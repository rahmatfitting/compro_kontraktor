'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactHero() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <section style={{
      paddingTop: '160px',
      paddingBottom: '40px',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-primary)',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(241, 196, 15, 0.05) 0%, transparent 50%)
        `,
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center',
        position: 'relative',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.8s ease',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '100px',
          background: 'white',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: '#d4af37',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          marginBottom: '24px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        }}>
          ✉ {language === 'id' ? 'Hubungi Kami' : 'Get in Touch'}
        </div>

        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '20px',
        }}>
          <span style={{ color: 'var(--text-primary)' }}>{language === 'id' ? 'Mulai Perjalanan ' : "Start Your "}</span>
          <span style={{
            background: 'linear-gradient(135deg, #d4af37, #996515)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {language === 'id' ? 'Eksklusif Anda' : 'Exclusive Journey'}
          </span>
        </h1>

        <p style={{
          fontSize: '1.15rem',
          color: 'var(--text-secondary)',
          maxWidth: '560px',
          margin: '0 auto',
          lineHeight: 1.8,
        }}>
          {language === 'id' 
            ? 'Siap merencanakan liburan impian? Spesialis perjalanan kami siap membantu menyusun itinerary yang dipersonalisasi khusus untuk Anda.'
            : 'Ready to plan your dream escape? Our travel specialists are ready to curate a personalized itinerary tailored just for you.'}
        </p>
      </div>
    </section>
  );
}
