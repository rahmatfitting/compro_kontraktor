'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

const locations = [
  { id: 'jabodetabek', top: '75%', left: '18%', label: 'Jabodetabek', count: 42 },
  { id: 'bandung', top: '78%', left: '21%', label: 'Bandung', count: 18 },
  { id: 'surabaya', top: '78%', left: '33%', label: 'Surabaya', count: 15 },
  { id: 'bali', top: '82%', left: '38%', label: 'Bali', count: 12 },
  { id: 'medan', top: '35%', left: '5%', label: 'Medan', count: 8 },
  { id: 'makassar', top: '70%', left: '50%', label: 'Makassar', count: 5 },
];

export default function ClientMapSection() {
  const { t } = useLanguage();
  const [activeLoc, setActiveLoc] = useState<string | null>(null);

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label" style={{ background: 'white' }}>
            {t.clientMap.badge}
          </span>
          <h2 className="section-title">{t.clientMap.title}</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {t.clientMap.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
        className="map-grid"
        >
          {/* Left: Interactive Map */}
          <div style={{
            position: 'relative',
            background: 'var(--bg-tertiary)',
            padding: '60px',
            border: '1px solid var(--border-subtle)',
            aspectRatio: '16/9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {/* Architectural Grid Background */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              pointerEvents: 'none'
            }} />

            {/* Stylized Detailed Indonesia Map SVG */}
            <svg viewBox="0 0 1000 450" style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.05))' }}>
              <g fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1">
                {/* Sumatra */}
                <path d="M50,120 L150,150 L250,220 L280,280 L230,300 L180,260 L80,180 L40,140 Z" />
                {/* Jawa */}
                <path d="M290,320 L550,320 L580,340 L560,360 L280,360 L270,340 Z" />
                {/* Kalimantan */}
                <path d="M350,100 L450,80 L520,100 L550,180 L530,220 L380,230 L340,180 Z" />
                {/* Sulawesi */}
                <path d="M580,140 L650,120 L680,150 L640,180 L680,220 L660,280 L570,280 L600,220 L560,180 Z" />
                {/* Bali & Nusa Tenggara */}
                <path d="M570,335 L600,335 L610,345 L570,350 Z" /> {/* Bali */}
                <path d="M620,338 L750,338 L760,355 L620,355 Z" /> {/* NTB/NTT */}
                {/* Maluku */}
                <circle cx="720" cy="180" r="15" />
                <circle cx="750" cy="220" r="10" />
                {/* Papua */}
                <path d="M800,160 L880,140 L960,160 L980,260 L950,280 L820,280 L790,240 Z" />
              </g>
            </svg>

            {/* Interactive Pins */}
            {locations.map((loc) => (
              <div
                key={loc.id}
                style={{
                  position: 'absolute',
                  top: loc.top,
                  left: loc.left,
                  transform: 'translate(-50%, -50%)',
                  zIndex: activeLoc === loc.id ? 20 : 10,
                }}
                onMouseEnter={() => setActiveLoc(loc.id)}
                onMouseLeave={() => setActiveLoc(null)}
              >
                {/* Ping Animation */}
                {activeLoc === loc.id && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '30px',
                    height: '30px',
                    border: '2px solid var(--accent-gold)',
                    borderRadius: '50%',
                    animation: 'pulse-glow 1.5s infinite'
                  }} />
                )}
                
                <div style={{
                  width: activeLoc === loc.id ? '16px' : '10px',
                  height: activeLoc === loc.id ? '16px' : '10px',
                  background: activeLoc === loc.id ? 'var(--accent-gold)' : 'var(--bg-dark)',
                  borderRadius: '50%',
                  border: '2px solid white',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }} />
                
                {/* Tooltip */}
                {activeLoc === loc.id && (
                  <div style={{
                    position: 'absolute',
                    bottom: '25px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--bg-dark)',
                    color: 'white',
                    padding: '16px',
                    borderRadius: '0px',
                    whiteSpace: 'nowrap',
                    fontSize: '0.9rem',
                    animation: 'fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
                    borderBottom: '4px solid var(--accent-gold)',
                  }}>
                    <div style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{loc.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                      {loc.count}+ {t.clientMap.stats.projects}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>


          {/* Right: Regions & Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{
              padding: '40px',
              background: 'var(--bg-dark)',
              color: 'white',
              position: 'relative'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '40px',
              }}>
                <div>
                  <h4 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '8px' }}>15+</h4>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6 }}>
                    {t.clientMap.stats.locations}
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: '8px' }}>120+</h4>
                  <p style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.6 }}>
                    {t.clientMap.stats.projects}
                  </p>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {Object.entries(t.clientMap.regions).map(([key, label]) => (
                <div
                  key={key}
                  style={{
                    padding: '20px',
                    background: 'white',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-gold)';
                    e.currentTarget.style.paddingLeft = '25px';
                    setActiveLoc(key);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.paddingLeft = '20px';
                    setActiveLoc(null);
                  }}
                >
                  <div style={{ width: '6px', height: '6px', background: 'var(--accent-gold)' }} />
                  <span style={{ fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{label as string}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .map-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
