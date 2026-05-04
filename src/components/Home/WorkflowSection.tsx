'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function WorkflowSection() {
  const { t } = useLanguage();

  return (
    <section id="workflow" className="section" style={{ position: 'relative', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
            <span style={{ 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              color: 'var(--accent-gold)',
              letterSpacing: '2px'
            }}>
              {t.workflow.badge}
            </span>
            <div style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
          </div>
          <h2 className="section-title" style={{ 
            color: 'var(--text-primary)', 
            background: 'none', 
            WebkitTextFillColor: 'initial',
            fontSize: 'clamp(2rem, 4vw, 3rem)'
          }}>
            {t.workflow.title}
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '60px',
          position: 'relative'
        }} className="workflow-grid">
          {/* Connector Line (Desktop Only) */}
          <div style={{
            position: 'absolute',
            top: '30px',
            left: '15%',
            right: '15%',
            height: '1px',
            borderTop: '1px dashed var(--accent-gold)',
            zIndex: 0,
            opacity: 0.3
          }} className="connector-line" />

          {t.workflow.steps.map((step, i) => (
            <div key={i} style={{
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--bg-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                fontWeight: 800,
                color: 'var(--accent-gold)',
                margin: '0 auto 32px',
                border: '1px solid var(--accent-gold)',
                fontFamily: 'var(--font-display)'
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.4rem', 
                fontWeight: 700, 
                color: 'var(--text-primary)',
                marginBottom: '20px',
                textTransform: 'uppercase'
              }}>
                {step.title}
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1rem', 
                lineHeight: 1.7,
                maxWidth: '300px',
                margin: '0 auto'
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .connector-line {
            display: none !important;
          }
          .workflow-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}

