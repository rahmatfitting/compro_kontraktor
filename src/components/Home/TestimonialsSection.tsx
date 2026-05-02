'use client';

import { useState } from 'react';

const testimonials = [
  {
    quote: "ERPPro transformed our entire supply chain operations. We reduced processing time by 60% and achieved real-time visibility across 12 warehouses. The ROI was visible within the first quarter.",
    author: 'Sarah Chen',
    role: 'COO',
    company: 'TechVista Global',
    avatar: 'SC',
    color: '#6366f1',
  },
  {
    quote: "The AI-powered forecasting module alone justified the investment. Our inventory carrying costs dropped by 35% while maintaining 99.5% order fulfillment rates. Absolutely game-changing.",
    author: 'Marcus Johnson',
    role: 'VP Supply Chain',
    company: 'NovaCorp Industries',
    avatar: 'MJ',
    color: '#06b6d4',
  },
  {
    quote: "Implementation was incredibly smooth. We went live in 3 weeks across all departments. The customer success team's expertise made the transition feel effortless for our 500+ employees.",
    author: 'Amara Okafor',
    role: 'CTO',
    company: 'Meridian Solutions',
    avatar: 'AO',
    color: '#8b5cf6',
  },
];

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section style={{
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
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(6, 182, 212, 0.15))',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#9eb3ff',
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
            background: 'linear-gradient(135deg, var(--text-primary), #9eb3ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Loved by Industry Leaders
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
                  ? 'rgba(99, 102, 241, 0.06)'
                  : 'rgba(20, 20, 32, 0.5)',
                border: `1px solid ${activeIdx === i ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255,255,255,0.04)'}`,
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
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
