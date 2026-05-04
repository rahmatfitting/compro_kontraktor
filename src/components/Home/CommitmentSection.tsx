'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function CommitmentSection() {
  const { t } = useLanguage();

  return (
    <section id="commitment" style={{
      padding: 'var(--section-padding) 0',
      background: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }} className="commitment-grid">
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
              <span style={{ 
                fontSize: '0.85rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                color: 'var(--accent-gold)',
                letterSpacing: '2px'
              }}>
                Commitment
              </span>
            </div>
            <h2 className="section-title" style={{ 
              color: 'var(--text-primary)', 
              background: 'none', 
              WebkitTextFillColor: 'initial',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              marginBottom: '32px'
            }}>
              Jaminan Kualitas & Kepercayaan
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '40px'
            }}>
              Di Arkana Konstruksi, kami tidak hanya membangun struktur; kami membangun kepercayaan. Setiap paku yang dipasang dan setiap semen yang dituang adalah bentuk komitmen kami terhadap standar tertinggi.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
               {[
                 { title: 'Garansi Struktur 10 Tahun', desc: 'Kami menjamin kekokohan struktur bangunan Anda selama satu dekade.' },
                 { title: 'Bebas Kebocoran & Kerusakan', desc: 'Masa retensi pengerjaan untuk memastikan kenyamanan awal Anda.' },
                 { title: 'Laporan Proyek Real-time', desc: 'Akses dashboard untuk memantau progres harian proyek Anda.' }
               ].map((item, i) => (
                 <div key={i} style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ color: 'var(--accent-gold)', marginTop: '4px' }}>
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                       </svg>
                    </div>
                    <div>
                       <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px', textTransform: 'uppercase' }}>{item.title}</h4>
                       <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div style={{ position: 'relative' }}>
             <div style={{
               background: 'var(--bg-dark)',
               padding: '60px',
               color: 'white',
               position: 'relative',
               zIndex: 2
             }}>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '24px', color: 'var(--accent-gold)' }}>100%</h3>
                <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '20px' }}>Kepuasan Klien Adalah Prioritas Mutlak</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '32px' }}>
                  Kami berkomitmen untuk menyelesaikan setiap proyek dengan standar "Arkana Excellence" di mana tidak ada detail yang terlalu kecil untuk diabaikan.
                </p>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: '32px' }} />
                <p style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--accent-gold)' }}>
                  Certified Premium Contractor
                </p>
             </div>
             {/* Decorative Box */}
             <div style={{
               position: 'absolute',
               inset: '-20px',
               border: '1px solid var(--accent-gold)',
               zIndex: 1
             }} />
          </div>

        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 992px) {
          .commitment-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
