'use client';

import { useState } from 'react';

const testimonials = [
  {
    quote: "LuxeVoyage benar-benar mengerti arti kemewahan yang sesungguhnya. Itinerary di Maladewa yang mereka susun sangat personal, mulai dari villa terapung hingga makan malam privat di pulau tak berpenghuni. Pengalaman yang tak akan terlupakan bagi keluarga kami.",
    author: 'Adi Pratama',
    role: 'CEO',
    company: 'Capital Group',
    avatar: 'AP',
    color: '#d4af37',
  },
  {
    quote: "Sebagai profesional dengan jadwal padat, saya menghargai efisiensi dan privasi. Layanan jet pribadi dan concierge 24/7 dari LuxeVoyage memastikan perjalanan bisnis saya ke Eropa berjalan mulus tanpa hambatan sedikit pun.",
    author: 'Elena Wijaya',
    role: 'Managing Director',
    company: 'Global Ventures',
    avatar: 'EW',
    color: '#f1c40f',
  },
  {
    quote: "Menjelajahi pegunungan Alpen dengan panduan ahli lokal dan akses eksklusif ke chalet mewah adalah mimpi yang menjadi kenyataan. Detail kecil yang diperhatikan tim LuxeVoyage membuat perbedaan besar dalam kualitas perjalanan kami.",
    author: 'Robert Santoso',
    role: 'Entrepreneur',
    company: 'Santoso Holdings',
    avatar: 'RS',
    color: '#996515',
  },
];

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="testimonials" style={{
      padding: '120px 0',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '100px',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(241, 196, 15, 0.15))',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#d4af37',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '20px',
          }}>
            ★ Client Stories
          </div>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            background: 'linear-gradient(135deg, var(--text-primary), #d4af37)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Dipercaya oleh Traveler Terpilih
          </h2>
        </div>

        {/* Testimonials */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
        className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              style={{
                padding: '36px',
                borderRadius: '20px',
                background: activeIdx === i
                  ? 'white'
                  : 'var(--bg-tertiary)',
                border: `1px solid ${activeIdx === i ? 'rgba(212, 175, 55, 0.4)' : 'var(--border-subtle)'}`,
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                boxShadow: activeIdx === i ? '0 10px 30px rgba(212, 175, 55, 0.12)' : '0 4px 12px rgba(0,0,0,0.03)',
              }}
              onMouseEnter={() => setActiveIdx(i)}
            >
              {/* Quote mark */}
              <div style={{
                fontSize: '3rem',
                lineHeight: 1,
                fontFamily: 'Georgia, serif',
                background: `linear-gradient(135deg, ${t.color}, transparent)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '16px',
                opacity: 0.5,
              }}>
                &ldquo;
              </div>

              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '28px',
                fontStyle: 'italic',
              }}>
                {t.quote}
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'white',
                }}>
                  {t.avatar}
                </div>
                <div>
                  <p style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}>
                    {t.author}
                  </p>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}>
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div style={{
                position: 'absolute',
                top: '36px',
                right: '36px',
                display: 'flex',
                gap: '2px',
              }}>
                {[1,2,3,4,5].map((star) => (
                  <span key={star} style={{ color: '#f59e0b', fontSize: '0.8rem' }}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            max-width: 600px !important;
            margin: 0 auto !important;
          }
        }
      `}</style>
    </section>
  );
}
