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
    { href: '/products', label: t.navbar.products },
    { href: '/blog', label: t.navbar.blog },
    { href: '/contact', label: t.navbar.contact },
  ];

  const LanguageToggle = () => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '20px',
      padding: '2px',
      border: '1px solid rgba(255,255,255,0.1)',
    }}>
      <button
        onClick={() => setLanguage('id')}
        style={{
          padding: '4px 10px',
          borderRadius: '18px',
          fontSize: '0.75rem',
          fontWeight: 700,
          border: 'none',
          background: language === 'id' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'transparent',
          color: language === 'id' ? 'white' : '#a1a1b5',
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
          borderRadius: '18px',
          fontSize: '0.75rem',
          fontWeight: 700,
          border: 'none',
          background: language === 'en' ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'transparent',
          color: language === 'en' ? 'white' : '#a1a1b5',
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
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '10px 0' : '16px 0',
          background: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
              boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
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

          {/* Desktop Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
          className="desktop-nav-links"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '8px 18px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: pathname === link.href ? '#f1f1f6' : '#a1a1b5',
                  background: pathname === link.href ? 'rgba(255,255,255,0.05)' : 'transparent',
                  transition: 'all 0.15s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#f1f1f6';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = pathname === link.href ? '#f1f1f6' : '#a1a1b5';
                  e.currentTarget.style.background = pathname === link.href ? 'rgba(255,255,255,0.05)' : 'transparent';
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA & Language */}
          <div className="desktop-nav-cta" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <LanguageToggle />
            <Link href="/contact" className="btn-primary" style={{
              padding: '10px 24px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.85rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.25)';
            }}
            >
              {t.navbar.getStarted} →
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              background: 'none',
              padding: '8px',
              cursor: 'pointer',
              border: 'none',
            }}
          >
            <span style={{
              width: '24px',
              height: '2px',
              background: '#f1f1f6',
              borderRadius: '2px',
              transition: 'all 0.2s ease',
              transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
            }} />
            <span style={{
              width: '24px',
              height: '2px',
              background: '#f1f1f6',
              borderRadius: '2px',
              transition: 'all 0.2s ease',
              opacity: mobileOpen ? 0 : 1,
            }} />
            <span style={{
              width: '24px',
              height: '2px',
              background: '#f1f1f6',
              borderRadius: '2px',
              transition: 'all 0.2s ease',
              transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-nav-menu" style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          zIndex: 999,
          background: 'rgba(10, 10, 15, 0.95)',
          backdropFilter: 'blur(20px)',
          padding: '24px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          animation: 'fadeIn 0.2s ease',
        }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                padding: '12px 18px',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 500,
                color: pathname === link.href ? '#f1f1f6' : '#a1a1b5',
                background: pathname === link.href ? 'rgba(255,255,255,0.05)' : 'transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" style={{
            padding: '12px 24px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
            color: 'white',
            fontWeight: 600,
            fontSize: '0.9rem',
            textAlign: 'center',
            marginTop: '8px',
          }}>
            {t.navbar.getStarted} →
          </Link>
        </div>
      )}

      <style jsx global>{`
        @media (max-width: 768px) {
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
