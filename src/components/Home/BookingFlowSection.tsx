'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function BookingFlowSection() {
  const { t } = useLanguage();

  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span className="section-label">
            {t.booking.badge}
          </span>
          <h2 className="section-title">
            {t.booking.title}
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
          position: 'relative'
        }} className="grid-3">
          {/* Connector Line (Desktop Only) */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '10%',
            right: '10%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)',
            zIndex: 0
          }} className="connector-line" />

          {t.booking.steps.map((step, i) => (
            <div key={i} style={{
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
              animation: `fadeInUp 0.6s ease ${i * 0.2}s both`
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #d4af37, #f1c40f)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'white',
                margin: '0 auto 32px',
                boxShadow: '0 10px 20px rgba(212, 175, 55, 0.3)',
                border: '4px solid var(--bg-primary)'
              }}>
                {i + 1}
              </div>
              <h3 style={{ 
                fontFamily: 'Space Grotesk, sans-serif', 
                fontSize: '1.3rem', 
                fontWeight: 700, 
                color: 'var(--text-primary)',
                marginBottom: '16px'
              }}>
                {step.title}
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1rem', 
                lineHeight: 1.6,
                maxWidth: '280px',
                margin: '0 auto'
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .connector-line {
            display: none !important;
          }
          .grid-3 {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
