'use client';

import dynamic from 'next/dynamic';
import { projects } from '@/data/projects';

const ProjectMap = dynamic(
  () => import('./ProjectMap'),
  { 
    ssr: false,
    loading: () => (
      <div style={{
        height: '600px',
        width: '100%',
        background: 'var(--bg-tertiary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--border-subtle)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div className="loader" style={{
            width: '40px',
            height: '40px',
            border: '3px solid var(--accent-gold)',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
          <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-secondary)' }}>
            Memuat Peta Proyek...
          </p>
        </div>
        <style jsx>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    )
  }
);

export default function ClientProjectMap() {
  return (
    <section className="section" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-label" style={{ background: 'var(--bg-secondary)' }}>
            Client Reach
          </span>
          <h2 className="section-title">Client Project Map</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Lihat sebaran mahakarya kami di seluruh Indonesia. Setiap titik mewakili dedikasi kami terhadap kualitas dan kepercayaan klien.
          </p>
        </div>
        
        <ProjectMap projects={projects} />
      </div>
    </section>
  );
}
