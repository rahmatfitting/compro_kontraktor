'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: t.footer.links.features, href: '/#services' },
      { label: t.services.modules.new_build.title, href: '/#services' },
      { label: t.services.modules.renovation.title, href: '/#services' },
      { label: t.services.modules.design_build.title, href: '/#services' },
    ],
    company: [
      { label: t.footer.links.about, href: '/#about' },
      { label: t.navbar.portfolio, href: '/#portfolio' },
      { label: t.footer.links.contact, href: '/#contact' },
    ],
    information: [
      { label: t.footer.links.privacy, href: '/' },
      { label: 'Terms of Service', href: '/' },
      { label: 'Cookie Policy', href: '/' },
    ],
  };

  return (
    <footer style={{
      background: 'var(--bg-dark)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ padding: '100px 24px 60px' }}>
        {/* Top Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '60px',
          marginBottom: '80px',
        }}
        className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                border: '2px solid var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                color: 'white',
                fontWeight: 900,
                fontFamily: 'var(--font-display)',
              }}>
                A
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  color: 'white',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  Arkana
                </span>
                <span style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--accent-gold)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase'
                }}>
                  Konstruksi
                </span>
              </div>
            </Link>
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '1rem',
              lineHeight: 1.8,
              maxWidth: '350px',
              marginBottom: '32px',
            }}>
              {t.footer.tagline}
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '16px' }}>
              {['Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                <a key={social} href="#" style={{
                  width: '44px',
                  height: '44px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.8rem',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  e.currentTarget.style.color = 'var(--accent-gold)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label={social}
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Service Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--accent-gold)',
              marginBottom: '32px',
            }}>{t.footer.product}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {footerLinks.services.map((link) => (
                <Link key={link.label} href={link.href} style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.paddingLeft = '5px'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.paddingLeft = '0'; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--accent-gold)',
              marginBottom: '32px',
            }}>{t.footer.company}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {footerLinks.company.map((link) => (
                <Link key={link.label} href={link.href} style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.paddingLeft = '5px'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.paddingLeft = '0'; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Information Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.85rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              color: 'var(--accent-gold)',
              marginBottom: '32px',
            }}>{t.footer.resources}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {footerLinks.information.map((link) => (
                <Link key={link.label} href={link.href} style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'white'; e.currentTarget.style.paddingLeft = '5px'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.paddingLeft = '0'; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '40px'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', letterSpacing: '1px' }}>
            © {currentYear} ARKANA KONSTRUKSI. {t.footer.rights}
          </p>
          <div style={{ display: 'flex', gap: '32px' }}>
            {['Privacy', 'Terms', 'Sitemap'].map(item => (
              <a key={item} href="#" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.3s ease' }}
                 onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                 onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

