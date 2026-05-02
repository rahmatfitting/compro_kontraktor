'use client';

import { useEffect, useState } from 'react';

export default function ContactHero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <section style={{
      paddingTop: '160px',
      paddingBottom: '40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse at 40% 40%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
          radial-gradient(ellipse at 60% 70%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)
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
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15))',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: '#9eb3ff',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          marginBottom: '24px',
        }}>
          ✉ Get in Touch
        </div>

        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '20px',
        }}>
          <span style={{ color: 'var(--text-primary)' }}>Let&apos;s Build </span>
          <span style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Something Great
          </span>
        </h1>

        <p style={{
          fontSize: '1.15rem',
          color: 'var(--text-secondary)',
          maxWidth: '560px',
          margin: '0 auto',
          lineHeight: 1.8,
        }}>
          Have questions? Need a demo? Our team is ready to help you 
          find the perfect solution for your enterprise.
        </p>
      </div>
    </section>
  );
}
