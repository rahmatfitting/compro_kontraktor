'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: t.navbar.home },
    { href: '/#about', label: t.navbar.about },
    { href: '/#services', label: t.navbar.services },
    { href: '/#portfolio', label: t.navbar.portfolio },
    { href: '/#contact', label: t.navbar.contact },
  ];

  const isHome = pathname === '/';
  const shouldShowBg = scrolled || !isHome;

  const LanguageToggle = () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      background: shouldShowBg ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.1)',
      borderRadius: '0px',
      padding: '2px',
      border: `1px solid ${shouldShowBg ? 'var(--border-subtle)' : 'rgba(255,255,255,0.2)'}`,
    }}>
      <button
        onClick={() => setLanguage('id')}
        style={{
          padding: '4px 10px',
          fontSize: '0.7rem',
          fontWeight: 700,
          border: 'none',
          background: language === 'id' ? 'var(--accent-gold)' : 'transparent',
          color: language === 'id' ? (shouldShowBg ? 'white' : 'var(--bg-dark)') : (shouldShowBg ? 'var(--text-secondary)' : 'rgba(255,255,255,0.6)'),
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
      >
        ID
      </button>
      <button
        onClick={() => setLanguage('en')}
        style={{
          padding: '4px 10px',
          fontSize: '0.7rem',
          fontWeight: 700,
          border: 'none',
          background: language === 'en' ? 'var(--accent-gold)' : 'transparent',
          color: language === 'en' ? (shouldShowBg ? 'white' : 'var(--bg-dark)') : (shouldShowBg ? 'var(--text-secondary)' : 'rgba(255,255,255,0.6)'),
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
      >
        EN
      </button>
    </div>
  );

  return (
    <>
      <nav
        className={`navbar ${shouldShowBg ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: shouldShowBg ? '15px 0' : '25px 0',
          background: shouldShowBg ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          backdropFilter: shouldShowBg ? 'blur(20px)' : 'none',
          borderBottom: shouldShowBg ? '1px solid var(--border-subtle)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 24px',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              border: `2px solid ${shouldShowBg ? 'var(--bg-dark)' : 'var(--accent-gold)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              color: shouldShowBg ? 'var(--bg-dark)' : 'white',
              fontWeight: 900,
              fontFamily: 'var(--font-display)',
            }}>
              A
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 800,
                color: shouldShowBg ? 'var(--text-primary)' : 'white',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                Arkana
              </span>
              <span style={{
                fontFamily: 'var(--font-primary)',
                fontSize: '0.6rem',
                fontWeight: 700,
                color: 'var(--accent-gold)',
                letterSpacing: '2px',
                textTransform: 'uppercase'
              }}>
                Konstruksi
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
          className="desktop-nav-links"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '8px 15px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: shouldShowBg ? (pathname === link.href ? 'var(--accent-gold)' : 'var(--text-primary)') : 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA & Language */}
          <div className="desktop-nav-cta" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <LanguageToggle />
            <Link href="/contact" style={{
              padding: '12px 24px',
              background: 'var(--accent-gold)',
              color: 'var(--bg-dark)',
              fontWeight: 800,
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = shouldShowBg ? 'var(--bg-dark)' : 'white';
              e.currentTarget.style.color = shouldShowBg ? 'white' : 'var(--bg-dark)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--accent-gold)';
              e.currentTarget.style.color = 'var(--bg-dark)';
            }}
            >
              {t.navbar.getStarted}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              flexDirection: 'column',
              gap: '6px',
              background: 'none',
              padding: '8px',
              cursor: 'pointer',
              border: 'none',
            }}
          >

            {[1, 2, 3].map(i => (
              <span key={i} style={{
                width: '24px',
                height: '2px',
                background: shouldShowBg ? 'var(--text-primary)' : 'white',
                borderRadius: '0px',
                transition: 'all 0.3s ease',
              }} />
            ))}
          </button>
        </div>
      </nav>


      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-nav-menu" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2000,
          background: 'var(--bg-dark)',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
          animation: 'fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          <button 
            onClick={() => setMobileOpen(false)}
            style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', color: 'white', fontSize: '2.5rem', cursor: 'pointer' }}
          >
            ✕
          </button>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'white',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '2px'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div style={{ width: '100px', height: '1px', background: 'rgba(255,255,255,0.1)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
            <LanguageToggle />
            <Link href="/contact" onClick={() => setMobileOpen(false)} style={{
              padding: '16px 40px',
              background: 'var(--accent-gold)',
              color: 'var(--bg-dark)',
              fontWeight: 800,
              fontSize: '1rem',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              width: '100%',
              maxWidth: '280px'
            }}>
              {t.navbar.getStarted}
            </Link>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .mobile-nav-toggle {
          display: none;
        }
        @media (max-width: 1100px) {
          .desktop-nav-links,
          .desktop-nav-cta {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>


    </>
  );
}

