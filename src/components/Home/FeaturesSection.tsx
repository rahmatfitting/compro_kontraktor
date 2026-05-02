'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: '💰',
      title: t.features.modules.finance.title,
      description: t.features.modules.finance.desc,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.05))',
      borderColor: 'rgba(16, 185, 129, 0.2)',
    },
    {
      icon: '👥',
      title: t.features.modules.hr.title,
      description: t.features.modules.hr.desc,
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.05))',
      borderColor: 'rgba(139, 92, 246, 0.2)',
    },
    {
      icon: '📦',
      title: t.features.modules.supply.title,
      description: t.features.modules.supply.desc,
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(99, 102, 241, 0.05))',
      borderColor: 'rgba(6, 182, 212, 0.2)',
    },
    {
      icon: '🏭',
      title: t.features.modules.manufacturing.title,
      description: t.features.modules.manufacturing.desc,
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(244, 63, 94, 0.05))',
      borderColor: 'rgba(245, 158, 11, 0.2)',
    },
    {
      icon: '📊',
      title: t.features.modules.analytics.title,
      description: t.features.modules.analytics.desc,
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05))',
      borderColor: 'rgba(99, 102, 241, 0.2)',
    },
    {
      icon: '🔗',
      title: t.features.modules.integration.title,
      description: t.features.modules.integration.desc,
      color: '#f43f5e',
      gradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.1), rgba(245, 158, 11, 0.05))',
      borderColor: 'rgba(244, 63, 94, 0.2)',
    },
  ];

  return (
    <section style={{
      padding: '120px 0',
      position: 'relative',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        {/* Section Header */}
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
            ✦ {t.features.badge}
          </div>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '16px',
            background: 'linear-gradient(135deg, var(--text-primary), #9eb3ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {t.features.title.split(',')[0]},<br />{t.features.title.split(',')[1]}
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
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 12px 40px ${feature.borderColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Icon */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '20px',
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
