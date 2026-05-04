'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'planning',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: '📧',
      title: language === 'id' ? 'Email Kami' : 'Email Us',
      detail: 'info@arkanakonstruksi.com',
      subDetail: language === 'id' ? 'Respon cepat dalam 24 jam' : 'Quick reply within 24 hours',
      color: '#d4af37',
    },
    {
      icon: '📞',
      title: language === 'id' ? 'Telepon' : 'Call Us',
      detail: '+62 21 555-0123',
      subDetail: language === 'id' ? 'Senin - Jumat, 08:00 - 17:00' : 'Mon - Fri, 08:00 - 17:00',
      color: '#996515',
    },
    {
      icon: '📍',
      title: language === 'id' ? 'Kantor Utama' : 'Headquarters',
      detail: 'Arkana Construction Tower, Lt. 12',
      subDetail: 'Jakarta Selatan, Indonesia',
      color: '#d4af37',
    },
    {
      icon: '💬',
      title: language === 'id' ? 'WhatsApp' : 'WhatsApp',
      detail: '+62 812-3456-7890',
      subDetail: language === 'id' ? 'Konsultasi Instan' : 'Instant Consultation',
      color: '#996515',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputStyle = {
    width: '100%',
    padding: '16px 20px',
    borderRadius: '0px',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.75rem',
    fontWeight: 800 as const,
    color: 'var(--text-primary)',
    marginBottom: '10px',
    textTransform: 'uppercase' as const,
    letterSpacing: '1.5px',
  };

  return (
    <section style={{
      padding: '60px 0 140px',
      position: 'relative',
      background: 'white',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '80px',
          alignItems: 'start',
        }}
        className="contact-grid"
        >
          {/* Left: Contact Info */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
              fontWeight: 800,
              color: 'var(--text-primary)',
              marginBottom: '24px',
              textTransform: 'uppercase'
            }}>
              {language === 'id' ? 'Informasi Kontak' : 'Contact Details'}
            </h3>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '48px',
            }}>
              {language === 'id' 
                ? 'Tim ahli kami siap mendiskusikan kebutuhan konstruksi Anda. Kunjungi kantor kami atau hubungi melalui saluran di bawah ini.'
                : 'Our expert team is ready to discuss your construction needs. Visit our office or reach out through the channels below.'}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    padding: '30px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-gold)';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-subtle)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: 'var(--bg-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                    color: 'var(--accent-gold)'
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <p style={{
                      fontSize: '0.75rem',
                      color: 'var(--accent-gold)',
                      fontWeight: 800,
                      marginBottom: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {info.title}
                    </p>
                    <p style={{
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                    }}>
                      {info.detail}
                    </p>
                    <p style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-muted)',
                    }}>
                      {info.subDetail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div style={{
            padding: '50px',
            background: 'var(--bg-dark)',
            position: 'relative',
          }}>
            {/* Architectural accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '80px',
              height: '80px',
              borderTop: '4px solid var(--accent-gold)',
              borderRight: '4px solid var(--accent-gold)',
            }} />

            {submitted ? (
              <div style={{
                textAlign: 'center',
                padding: '80px 20px',
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  border: '2px solid var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 32px',
                  fontSize: '2rem',
                  color: 'var(--accent-gold)'
                }}>
                  ✓
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: '16px',
                  textTransform: 'uppercase'
                }}>
                  {language === 'id' ? 'Terima Kasih' : 'Thank You'}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255,255,255,0.6)',
                }}>
                  {language === 'id' 
                    ? 'Pesan Anda telah diterima. Tim konsultan Arkana akan menghubungi Anda segera.'
                    : "Your message has been received. Arkana’s consultancy team will contact you shortly."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: '40px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {language === 'id' ? 'Konsultasi Proyek' : 'Project Consultation'}
                </h3>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '24px',
                  marginBottom: '24px',
                }}
                className="form-grid"
                >
                  <div>
                    <label style={{ ...labelStyle, color: 'rgba(255,255,255,0.7)' }}>{language === 'id' ? 'Nama Lengkap' : 'Full Name'}</label>
                    <input
                      type="text"
                      placeholder="e.g. Budi Santoso"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ ...inputStyle, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                    />
                  </div>
                  <div>
                    <label style={{ ...labelStyle, color: 'rgba(255,255,255,0.7)' }}>Email</label>
                    <input
                      type="email"
                      placeholder="e.g. budi@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ ...inputStyle, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                    />
                  </div>
                  <div>
                    <label style={{ ...labelStyle, color: 'rgba(255,255,255,0.7)' }}>{language === 'id' ? 'Tipe Proyek' : 'Project Type'}</label>
                    <input
                      type="text"
                      placeholder="e.g. Residential, Office"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{ ...inputStyle, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                    />
                  </div>
                  <div>
                    <label style={{ ...labelStyle, color: 'rgba(255,255,255,0.7)' }}>{language === 'id' ? 'Telepon' : 'Phone'}</label>
                    <input
                      type="tel"
                      placeholder="+62 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ ...inputStyle, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ ...labelStyle, color: 'rgba(255,255,255,0.7)' }}>{language === 'id' ? 'Layanan' : 'Service'}</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      ...inputStyle,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'white',
                      cursor: 'pointer',
                      appearance: 'none',
                    }}
                  >
                    <option value="planning" style={{ background: 'var(--bg-dark)' }}>{language === 'id' ? 'Bangun Baru' : 'New Construction'}</option>
                    <option value="quote" style={{ background: 'var(--bg-dark)' }}>{language === 'id' ? 'Renovasi' : 'Renovation'}</option>
                    <option value="partnership" style={{ background: 'var(--bg-dark)' }}>{language === 'id' ? 'Desain Arsitektur' : 'Architectural Design'}</option>
                    <option value="other" style={{ background: 'var(--bg-dark)' }}>{language === 'id' ? 'Lainnya' : 'Other'}</option>
                  </select>
                </div>

                <div style={{ marginBottom: '40px' }}>
                  <label style={{ ...labelStyle, color: 'rgba(255,255,255,0.7)' }}>{language === 'id' ? 'Pesan' : 'Message'}</label>
                  <textarea
                    placeholder={language === 'id' ? 'Deskripsikan visi proyek Anda...' : 'Describe your project vision...'}
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      ...inputStyle,
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'white',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '20px 32px',
                    background: 'var(--accent-gold)',
                    color: 'var(--bg-dark)',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--accent-gold)';
                  }}
                >
                  {language === 'id' ? 'Kirim Permintaan' : 'Send Request'}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
        @media (max-width: 640px) {
          .form-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}

