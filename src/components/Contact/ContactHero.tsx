'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactHero() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <section style={{
      paddingTop: '180px',
      paddingBottom: '60px',
      position: 'relative',
      overflow: 'hidden',
      background: 'white',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(241, 196, 15, 0.03) 0%, transparent 50%)
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
          padding: '8px 20px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          fontSize: '0.8rem',
          fontWeight: 700,
          color: 'var(--accent-gold)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '32px',
        }}>
          {language === 'id' ? 'Hubungi Arkana' : 'Contact Arkana'}
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '32px',
          textTransform: 'uppercase',
          letterSpacing: '-1px'
        }}>
          <span style={{ color: 'var(--text-primary)' }}>{language === 'id' ? 'Wujudkan ' : "Build Your "}</span>
          <br />
          <span style={{
            background: 'var(--gradient-gold)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {language === 'id' ? 'Visi Arsitektur Anda' : 'Architectural Vision'}
          </span>
        </h1>

        <p style={{
          fontSize: '1.2rem',
          color: 'var(--text-secondary)',
          maxWidth: '650px',
          margin: '0 auto',
          lineHeight: 1.8,
        }}>
          {language === 'id' 
            ? 'Siap membangun hunian atau gedung impian Anda? Konsultasikan rencana pembangunan Anda dengan tim ahli konstruksi Arkana hari ini.'
            : 'Ready to build your dream home or commercial space? Consult your construction plans with Arkana’s expert team today.'}
        </p>
      </div>
    </section>
  );
}

