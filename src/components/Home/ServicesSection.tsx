'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      icon: '🏗️',
      title: t.services.modules.new_build.title,
      description: t.services.modules.new_build.desc,
      image: '/images/service-1.png'
    },
    {
      icon: '🏠',
      title: t.services.modules.renovation.title,
      description: t.services.modules.renovation.desc,
      image: '/images/service-2.png'
    },
    {
      icon: '📐',
      title: t.services.modules.design_build.title,
      description: t.services.modules.design_build.desc,
      image: '/images/service-3.png'
    },
    {
      icon: '🛋️',
      title: t.services.modules.interior.title,
      description: t.services.modules.interior.desc,
    },
    {
      icon: '📊',
      title: t.services.modules.consultancy.title,
      description: t.services.modules.consultancy.desc,
    },
    {
      icon: '🔧',
      title: t.services.modules.maintenance.title,
      description: t.services.modules.maintenance.desc,
    },
  ];

  return (
    <section id="services" style={{
      padding: 'var(--section-padding) 0',
      background: 'var(--bg-secondary)',
      position: 'relative',
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '2px', background: 'var(--accent-gold)' }} />
              <span style={{ 
                fontSize: '0.85rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                color: 'var(--accent-gold)',
                letterSpacing: '2px'
              }}>
                {t.services.badge}
              </span>
            </div>
            <h2 className="section-title" style={{ color: 'var(--text-primary)', background: 'none', WebkitTextFillColor: 'initial', margin: 0 }}>
              {t.services.title}
            </h2>
          </div>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            lineHeight: 1.8,
            margin: 0
          }}>
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
        }}
        className="services-grid"
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              style={{
                padding: '40px',
                background: 'white',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
              className="service-card"
            >
              {/* Icon */}
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '30px',
                color: 'var(--accent-gold)'
              }}>
                {service.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {service.title}
              </h3>

              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '30px',
                flex: 1
              }}>
                {service.description}
              </p>

              <div style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                color: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                {t.services.learnMore}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>

              {/* Hover Effect Background */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '0%',
                height: '4px',
                background: 'var(--accent-gold)',
                transition: 'width 0.4s ease'
              }} className="card-border" />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
          border-color: var(--accent-gold);
        }
        .service-card:hover .card-border {
          width: 100% !important;
        }
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

