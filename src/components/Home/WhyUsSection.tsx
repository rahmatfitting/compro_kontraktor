'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function WhyUsSection() {
  const { t, language } = useLanguage();

  const benefits = [
    {
      number: '01',
      title: t.whyUs.features[0].title,
      description: t.whyUs.features[0].desc,
      highlights: ['Global Network', 'Private Access', 'VIP Entrance'],
    },
    {
      number: '02',
      title: t.whyUs.features[1].title,
      description: t.whyUs.features[1].desc,
      highlights: ['SOC 2 Security', 'Data Privacy', 'Discreet Service'],
    },
    {
      number: '03',
      title: t.whyUs.features[2].title,
      description: t.whyUs.features[2].desc,
      highlights: ['Custom Itinerary', '24/7 Support', 'Tailored Detail'],
    },
  ];

  return (
    <section id="why-us" style={{
      padding: '120px 0',
      position: 'relative',
      background: 'linear-gradient(180deg, var(--bg-primary) 0%, white 50%, var(--bg-primary) 100%)',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label">
            ◈ {t.whyUs.badge}
          </div>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '16px',
            background: 'linear-gradient(135deg, var(--text-primary), #996515)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
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
          gap: '24px',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {benefits.map((benefit, i) => (
            <div
              key={benefit.number}
              style={{
                display: 'flex',
                gap: '32px',
                padding: '40px',
                borderRadius: '20px',
                background: 'white',
                border: '1px solid var(--border-subtle)',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease',
                alignItems: 'flex-start',
                animation: `fadeInUp 0.6s ease ${i * 0.15}s both`,
                boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
              }}
              className="benefit-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                e.currentTarget.style.transform = 'translateX(8px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
              }}
            >
              {/* Number */}
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '2rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #d4af37, #996515)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                minWidth: '60px',
                lineHeight: 1,
              }}>
                {benefit.number}
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                }}>
                  {benefit.description}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {benefit.highlights.map((h) => (
                    <span key={h} style={{
                      padding: '4px 12px',
                      borderRadius: '6px',
                      background: 'rgba(212, 175, 55, 0.08)',
                      border: '1px solid rgba(212, 175, 55, 0.1)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#996515',
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
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 640px) {
          .benefit-card {
            flex-direction: column !important;
            gap: 16px !important;
            padding: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
