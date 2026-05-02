'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ProductsHero() {
  const { t, language } = useLanguage();
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <section style={{
      paddingTop: '160px',
      paddingBottom: '80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse at 30% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 70%, rgba(6, 182, 212, 0.06) 0%, transparent 50%)
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
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15))',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: '#c3d0ff',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          marginBottom: '24px',
        }}>
          ◇ {language === 'id' ? 'Rangkaian Produk' : 'Product Suite'}
        </div>

        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '20px',
        }}>
          <span style={{ color: 'var(--text-primary)' }}>{language === 'id' ? 'Modul Canggih untuk ' : 'Powerful Modules for '}</span>
          <span style={{
            background: 'linear-gradient(135deg, #8b5cf6, #6366f1, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {language === 'id' ? 'Setiap Departemen' : 'Every Department'}
          </span>
        </h1>

        <p style={{
          fontSize: '1.15rem',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.8,
        }}>
          {language === 'id' 
            ? 'Pilih modul yang Anda butuhkan hari ini dan kembangkan seiring pertumbuhan Anda. Setiap modul terintegrasi secara mulus.'
            : 'Choose the modules you need today and expand as you grow. Every module integrates seamlessly for a unified experience.'}
        </p>
      </div>
    </section>
  );
}
