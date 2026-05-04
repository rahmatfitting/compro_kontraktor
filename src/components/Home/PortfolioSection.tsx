'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function PortfolioSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'The Glass House',
      category: 'Residential',
      image: '/images/hero.png',
      year: '2023'
    },
    {
      title: 'Corporate HQ',
      category: 'Commercial',
      image: '/images/portfolio-1.png',
      year: '2024'
    },
    {
      title: 'Industrial Park',
      category: 'Industrial',
      image: '/images/service-1.png',
      year: '2022'
    },
    {
      title: 'Modern Villa',
      category: 'Residential',
      image: '/images/about.png',
      year: '2023'
    }
  ];

  return (
    <section id="portfolio" style={{
      padding: 'var(--section-padding) 0',
      background: 'var(--bg-dark)',
      color: 'white'
    }}>
      <div className="container">
        <div style={{ marginBottom: '80px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
            <span style={{ 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              color: 'var(--accent-gold)',
              letterSpacing: '2px'
            }}>
              Portfolio
            </span>
            <div style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
          </div>
          <h2 className="section-title" style={{ 
            color: 'white', 
            background: 'none', 
            WebkitTextFillColor: 'initial',
            fontSize: 'clamp(2rem, 4vw, 3rem)'
          }}>
            Karya Unggulan Kami
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '40px'
        }} className="portfolio-grid">
          {projects.map((project, i) => (
            <div key={i} style={{
              position: 'relative',
              overflow: 'hidden',
              height: '500px',
              cursor: 'pointer'
            }} className="portfolio-item">
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent 60%)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                opacity: 0.9,
                transition: 'opacity 0.4s ease'
              }}>
                <p style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>
                  {project.category} — {project.year}
                </p>
                <h3 style={{ fontSize: '2rem', fontWeight: 700, fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .portfolio-item:hover img {
          transform: scale(1.1);
        }
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
          .portfolio-item {
            height: 350px !important;
          }
        }
      `}</style>
    </section>
  );
}
