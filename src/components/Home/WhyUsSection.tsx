'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function WhyUsSection() {
  const { t } = useLanguage();

  const benefits = [
    {
      number: '01',
      title: t.whyUs.features[0].title,
      description: t.whyUs.features[0].desc,
      highlights: ['SNI Certified', 'Premium Brands', 'Durability Focus'],
    },
    {
      number: '02',
      title: t.whyUs.features[1].title,
      description: t.whyUs.features[1].desc,
      highlights: ['Strict Timeline', 'Weekly Reports', 'On-Time Handover'],
    },
    {
      number: '03',
      title: t.whyUs.features[2].title,
      description: t.whyUs.features[2].desc,
      highlights: ['Detailed RAB', 'No Hidden Fees', 'Fixed Price Contract'],
    },
  ];

  return (
    <section id="why-us" style={{
      padding: 'var(--section-padding) 0',
      position: 'relative',
      background: 'white',
    }}>
      <div className="container">
        {/* Header */}
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
              {t.whyUs.badge}
            </span>
            <div style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
          </div>
          <h2 className="section-title" style={{ 
            color: 'var(--text-primary)', 
            background: 'none', 
            WebkitTextFillColor: 'initial',
            fontSize: 'clamp(2rem, 4vw, 3rem)'
          }}>
            {t.whyUs.title}
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Benefits List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {benefits.map((benefit, i) => (
            <div
              key={benefit.number}
              style={{
                display: 'flex',
                gap: '40px',
                padding: '50px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
              className="benefit-card"
            >
              {/* Number Background */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                fontSize: '10rem',
                fontWeight: 900,
                color: 'var(--accent-gold)',
                opacity: 0.03,
                fontFamily: 'var(--font-display)',
                lineHeight: 1
              }}>
                {benefit.number}
              </div>

              {/* Number indicator */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 800,
                color: 'var(--accent-gold)',
                width: '60px',
                height: '60px',
                border: '1px solid var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {benefit.number}
              </div>

              <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.6rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '24px',
                  maxWidth: '700px'
                }}>
                  {benefit.description}
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {benefit.highlights.map((h) => (
                    <span key={h} style={{
                      padding: '6px 16px',
                      background: 'white',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .benefit-card:hover {
          background: white !important;
          border-color: var(--accent-gold) !important;
          transform: scale(1.02);
          box-shadow: 0 40px 80px rgba(0,0,0,0.06);
        }
        @media (max-width: 768px) {
          .benefit-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 40px !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}

