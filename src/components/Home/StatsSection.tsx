'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Enterprises', description: 'Trust ERPPro worldwide' },
  { value: 99.9, suffix: '%', label: 'Uptime', description: 'Guaranteed availability' },
  { value: 2, suffix: 'M+', label: 'Transactions', description: 'Processed daily' },
  { value: 45, suffix: '%', label: 'Cost Reduction', description: 'Average savings' },
];

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const step = value / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, value, duration]);

  return (
    <div ref={ref} style={{
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 800,
      background: 'linear-gradient(135deg, #f1f1f6, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '-0.02em',
    }}>
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}{suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section style={{
      padding: '0 0 80px',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          position: 'relative',
        }}
        className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} style={{
              textAlign: 'center',
              padding: '40px 24px',
              borderRadius: '20px',
              background: 'rgba(20, 20, 32, 0.5)',
              border: '1px solid rgba(255,255,255,0.04)',
              backdropFilter: 'blur(12px)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              animation: `fadeInUp 0.6s ease ${i * 0.1}s both`,
            }}>
              {/* Glow */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginTop: '8px',
                marginBottom: '4px',
              }}>{stat.label}</p>
              <p style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .stats-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
