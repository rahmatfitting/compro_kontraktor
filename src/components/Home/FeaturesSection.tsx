'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: '✈️',
      title: t.features.modules.luxury_tours.title,
      description: t.features.modules.luxury_tours.desc,
      color: '#996515',
      gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12), rgba(241, 196, 15, 0.08))',
      borderColor: 'rgba(212, 175, 55, 0.2)',
    },
    {
      icon: '🛥️',
      title: t.features.modules.private_charter.title,
      description: t.features.modules.private_charter.desc,
      color: '#b8860b',
      gradient: 'linear-gradient(135deg, rgba(241, 196, 15, 0.12), rgba(153, 101, 21, 0.08))',
      borderColor: 'rgba(241, 196, 15, 0.2)',
    },
    {
      icon: '🥂',
      title: t.features.modules.concierge.title,
      description: t.features.modules.concierge.desc,
      color: '#996515',
      gradient: 'linear-gradient(135deg, rgba(153, 101, 21, 0.12), rgba(212, 175, 55, 0.08))',
      borderColor: 'rgba(153, 101, 21, 0.2)',
    },
    {
      icon: '🛂',
      title: t.features.modules.visa_logistics.title,
      description: t.features.modules.visa_logistics.desc,
      color: '#996515',
      gradient: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12), rgba(241, 196, 15, 0.08))',
      borderColor: 'rgba(212, 175, 55, 0.2)',
    },
    {
      icon: '🏰',
      title: t.features.modules.stay.title,
      description: t.features.modules.stay.desc,
      color: '#b8860b',
      gradient: 'linear-gradient(135deg, rgba(241, 196, 15, 0.12), rgba(153, 101, 21, 0.08))',
      borderColor: 'rgba(241, 196, 15, 0.2)',
    },
    {
      icon: '🎨',
      title: t.features.modules.experience.title,
      description: t.features.modules.experience.desc,
      color: '#996515',
      gradient: 'linear-gradient(135deg, rgba(153, 101, 21, 0.12), rgba(212, 175, 55, 0.08))',
      borderColor: 'rgba(153, 101, 21, 0.2)',
    },
  ];

  return (
    <section id="services" style={{
      padding: '120px 0',
      position: 'relative',
      background: 'white',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="section-label">
            ✦ {t.features.badge}
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
            {t.features.title}
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            {t.features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
        className="features-grid"
        >
          {features.map((feature, i) => (
            <div
              key={feature.title}
              style={{
                padding: '36px',
                borderRadius: '20px',
                background: feature.gradient,
                border: `1px solid ${feature.borderColor}`,
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                animation: `fadeInUp 0.6s ease ${i * 0.1}s both`,
                boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 12px 40px rgba(212, 175, 55, 0.15)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
              }}
            >
              {/* Icon */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'white',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '20px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              }}>
                {feature.icon}
              </div>

              <h3 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '12px',
              }}>
                {feature.title}
              </h3>

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
              }}>
                {feature.description}
              </p>

              {/* Arrow */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginTop: '20px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: feature.color,
              }}>
                {t.features.learnMore}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
