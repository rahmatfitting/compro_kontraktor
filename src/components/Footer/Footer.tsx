'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: t.footer.links.features, href: '/products' },
      { label: t.features.modules.finance.title, href: '/products' },
      { label: t.features.modules.hr.title, href: '/products' },
      { label: t.footer.links.pricing, href: '/products' },
      { label: t.footer.links.solutions, href: '/products' },
    ],
    company: [
      { label: t.footer.links.about, href: '/' },
      { label: t.navbar.blog, href: '/blog' },
      { label: t.footer.links.careers, href: '/' },
      { label: t.footer.links.contact, href: '/contact' },
    ],
    resources: [
      { label: t.footer.links.docs, href: '/' },
      { label: 'API Reference', href: '/' },
      { label: t.footer.links.help, href: '/' },
      { label: 'Community', href: '/' },
    ],
  };

  return (
    <footer style={{
      background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(17, 17, 24, 1) 100%)',
      borderTop: '1px solid var(--border-subtle)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow effects */}
      <div style={{
        position: 'absolute',
        bottom: '-200px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ padding: '80px 24px 40px' }}>
        {/* Top Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '60px',
        }}
        className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                color: 'white',
                fontWeight: 800,
                fontFamily: 'Space Grotesk, sans-serif',
              }}>
                E
              </div>
              <span style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.4rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #f1f1f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                ERPPro
              </span>
            </Link>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              lineHeight: 1.8,
              maxWidth: '320px',
              marginBottom: '24px',
            }}>
              {t.footer.tagline}
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {['LinkedIn', 'Twitter', 'GitHub', 'YouTube'].map((social) => (
                <a key={social} href="#" style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
                  e.currentTarget.style.color = '#8b5cf6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                }}
                aria-label={social}
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: 'var(--text-primary)',
              marginBottom: '20px',
            }}>{t.footer.product}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.product.map((link) => (
                <Link key={link.label} href={link.href} style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#a1a1b5'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: 'var(--text-primary)',
              marginBottom: '20px',
            }}>{t.footer.company}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.company.map((link) => (
                <Link key={link.label} href={link.href} style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#a1a1b5'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Links */}
          <div>
            <h4 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              color: 'var(--text-primary)',
              marginBottom: '20px',
            }}>{t.footer.resources}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {footerLinks.resources.map((link) => (
                <Link key={link.label} href={link.href} style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#a1a1b5'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--border-default), transparent)',
          marginBottom: '32px',
        }} />

        {/* Bottom */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {currentYear} ERPPro. {t.footer.rights}
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{t.footer.links.privacy}</a>
            <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Terms of Service</a>
            <a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Cookie Policy</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
