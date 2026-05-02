'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function WhyUsSection() {
  const { t, language } = useLanguage();

  const benefits = [
    {
      number: '01',
      title: language === 'id' ? 'Arsitektur Cloud-Native' : 'Cloud-Native Architecture',
      description: language === 'id' ? 'Dibangun khusus untuk cloud. Auto-scaling, multi-tenant, dan disebarkan di pusat data global untuk performa kilat di mana pun Anda beroperasi.' : 'Built from the ground up for the cloud. Auto-scaling, multi-tenant, and deployed across global data centers for lightning-fast performance wherever you operate.',
      highlights: ['99.99% SLA', 'Auto-scaling', 'Global CDN'],
    },
    {
      number: '02',
      title: language === 'id' ? 'Otomasi Berbasis AI' : 'AI-Powered Automation',
      description: language === 'id' ? 'Algoritma machine learning yang memprediksi permintaan, mendeteksi anomali, mengotomatiskan alur kerja, dan memberikan rekomendasi cerdas.' : 'Machine learning algorithms that predict demand, detect anomalies, automate workflows, and provide intelligent recommendations across all business functions.',
      highlights: ['Predictive Analytics', 'Smart Workflows', 'NLP Processing'],
    },
    {
      number: '03',
      title: language === 'id' ? 'Keamanan Kelas Enterprise' : 'Enterprise-Grade Security',
      description: language === 'id' ? 'Bersertifikat SOC 2 Type II dengan enkripsi ujung-ke-ujung, kontrol akses berbasis peran, jejak audit, dan kepatuhan GDPR.' : 'SOC 2 Type II certified with end-to-end encryption, role-based access control, audit trails, and compliance with GDPR, HIPAA, and industry regulations.',
      highlights: ['SOC 2 Certified', 'E2E Encryption', 'GDPR Compliant'],
    },
    {
      number: '04',
      title: language === 'id' ? 'Implementasi Cepat' : 'Rapid Implementation',
      description: language === 'id' ? 'Mulai beroperasi dalam hitungan minggu. Pendekatan modular kami memungkinkan Anda mulai dengan apa yang Anda butuhkan dan berkembang seiring waktu.' : 'Go live in weeks, not months. Our modular approach lets you start with what you need and expand over time, with dedicated customer success managers guiding you.',
      highlights: ['2-Week Setup', 'Modular Deploy', '24/7 Support'],
    },
  ];

  return (
    <section style={{
      padding: '120px 0',
      position: 'relative',
      background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(17, 17, 24, 1) 50%, var(--bg-primary) 100%)',
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
            ◈ {t.whyUs.badge}
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
            {t.whyUs.title.split(',')[0]},<br />{t.whyUs.title.split(',')[1]}
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
                background: 'rgba(20, 20, 32, 0.5)',
                border: '1px solid rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease',
                alignItems: 'flex-start',
                animation: `fadeInUp 0.6s ease ${i * 0.15}s both`,
              }}
              className="benefit-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.2)';
                e.currentTarget.style.transform = 'translateX(8px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(99, 102, 241, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Number */}
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '2rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
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
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.15)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#9eb3ff',
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
