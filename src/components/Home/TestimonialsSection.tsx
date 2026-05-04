'use client';

import { useLanguage } from '@/context/LanguageContext';

const testimonials = [
  {
    quote: "Membangun rumah impian dengan Arkana adalah keputusan terbaik. Transparansi biaya sejak awal sangat membantu kami dalam mengelola budget. Hasil akhirnya sangat detail dan presisi, persis seperti visualisasi 3D yang dipresentasikan di awal.",
    author: 'Budi Setiawan',
    role: 'Pemilik Hunian',
    location: 'Kemang, Jakarta',
    avatar: 'BS',
  },
  {
    quote: "Ketepatan waktu adalah segalanya bagi saya sebagai investor. Arkana berhasil menyelesaikan pembangunan ruko premium saya dua minggu lebih cepat dari jadwal tanpa mengompromikan kualitas material sedikit pun. Sangat profesional.",
    author: 'Siska Amelia',
    role: 'Property Investor',
    location: 'Surabaya',
    avatar: 'SA',
  },
  {
    quote: "Renovasi kantor startup kami menjadi ruang kerja modern yang inspiratif dilakukan dengan sangat rapi oleh tim Arkana. Mereka sangat akomodatif terhadap perubahan desain di tengah jalan dan komunikasi tim lapangannya sangat baik.",
    author: 'David Kurnia',
    role: 'CEO & Founder',
    location: 'BSD City',
    avatar: 'DK',
  },
];

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--bg-primary)' }}>
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
              Testimonials
            </span>
            <div style={{ width: '40px', height: '1px', background: 'var(--accent-gold)' }} />
          </div>
          <h2 className="section-title" style={{ 
            color: 'var(--text-primary)', 
            background: 'none', 
            WebkitTextFillColor: 'initial',
            fontSize: 'clamp(2rem, 4vw, 3rem)'
          }}>
            Apa Kata Klien Kami
          </h2>
        </div>

        {/* Testimonials */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
        }}
        className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              style={{
                padding: '50px 40px',
                background: 'white',
                border: '1px solid var(--border-subtle)',
                transition: 'all 0.4s ease',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
              className="testimonial-card"
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '30px' }}>
                {[1,2,3,4,5].map(star => (
                  <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="var(--accent-gold)">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>

              <p style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '40px',
                flex: 1,
                fontStyle: 'italic'
              }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid var(--border-subtle)', paddingTop: '30px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'var(--bg-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--accent-gold)',
                  fontFamily: 'var(--font-display)'
                }}>
                  {t.avatar}
                </div>
                <div>
                  <p style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {t.author}
                  </p>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}>
                    {t.role} — {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .testimonial-card:hover {
          border-color: var(--accent-gold);
          box-shadow: 0 30px 60px rgba(0,0,0,0.05);
          transform: translateY(-10px);
        }
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

