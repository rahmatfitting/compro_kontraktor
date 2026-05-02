'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ProductsList() {
  const { t, language } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>('finance');

  const products = [
    {
      id: 'finance',
      icon: '💰',
      title: language === 'id' ? 'Keuangan & Akuntansi' : 'Finance & Accounting',
      tagline: language === 'id' ? 'Kecerdasan finansial lengkap' : 'Complete financial intelligence',
      description: language === 'id' ? 'Kelola seluruh ekosistem keuangan Anda mulai dari buku besar dan hutang/piutang hingga operasional multi-mata uang dan pelaporan konsolidasi.' : 'Manage your entire financial ecosystem from general ledger and accounts payable/receivable to multi-currency operations and consolidated reporting across entities.',
      features: language === 'id' ? [
        'Buku Besar & Daftar Akun',
        'Hutang & Piutang Usaha',
        'Multi-Mata Uang & Multi-Entitas',
        'Rekonsiliasi Bank Otomatis',
        'Pengakuan Pendapatan (ASC 606)',
        'Konsolidasi & Pelaporan Keuangan',
        'Perencanaan Anggaran & Peramalan',
        'Manajemen Pajak & Kepatuhan',
      ] : [
        'General Ledger & Chart of Accounts',
        'Accounts Payable & Receivable',
        'Multi-Currency & Multi-Entity',
        'Automated Bank Reconciliation',
        'Revenue Recognition (ASC 606)',
        'Financial Consolidation & Reporting',
        'Budget Planning & Forecasting',
        'Tax Management & Compliance',
      ],
      color: '#10b981',
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(6, 182, 212, 0.04))',
    },
    {
      id: 'hr',
      icon: '👥',
      title: language === 'id' ? 'Manajemen Modal Manusia' : 'Human Capital Management',
      tagline: language === 'id' ? 'Manajemen tenaga kerja berpusat pada manusia' : 'People-first workforce management',
      description: language === 'id' ? 'Tarik, kembangkan, dan pertahankan talenta terbaik dengan alat HR komprehensif mulai dari rekrutmen, orientasi, penggajian, hingga manajemen kinerja.' : 'Attract, develop, and retain top talent with comprehensive HR tools spanning recruitment, onboarding, payroll, performance management, and employee engagement.',
      features: language === 'id' ? [
        'Pelacakan Pelamar & Rekrutmen',
        'Alur Kerja Orientasi Karyawan',
        'Pemrosesan Gaji & Kepatuhan',
        'Pelacakan Waktu & Kehadiran',
        'Siklus Penilaian Kinerja',
        'Platform Pembelajaran & Pengembangan',
        'Administrasi Tunjangan',
        'Portal Mandiri Karyawan',
      ] : [
        'Applicant Tracking & Recruitment',
        'Employee Onboarding Workflows',
        'Payroll Processing & Compliance',
        'Time & Attendance Tracking',
        'Performance Review Cycles',
        'Learning & Development Platform',
        'Benefits Administration',
        'Employee Self-Service Portal',
      ],
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(99, 102, 241, 0.04))',
    },
    {
      id: 'supply-chain',
      icon: '📦',
      title: language === 'id' ? 'Manajemen Rantai Pasok' : 'Supply Chain Management',
      tagline: language === 'id' ? 'Visibilitas pasokan ujung-ke-ujung' : 'End-to-end supply visibility',
      description: language === 'id' ? 'Optimalkan seluruh rantai pasok Anda dari pengadaan hingga pengiriman. Peramalan permintaan berbasis AI, manajemen gudang, dan optimasi logistik.' : 'Optimize your entire supply chain from procurement to delivery. AI-powered demand forecasting, warehouse management, and logistics optimization in one platform.',
      features: language === 'id' ? [
        'Pengadaan & Manajemen Vendor',
        'Sistem Manajemen Gudang',
        'Optimasi Inventaris',
        'Peramalan Permintaan (AI)',
        'Manajemen Pesanan & Pemenuhan',
        'Integrasi Logistik & Pengiriman',
        'Kontrol Kualitas & Inspeksi',
        'Manajemen Hubungan Pemasok',
      ] : [
        'Procurement & Vendor Management',
        'Warehouse Management System',
        'Inventory Optimization',
        'Demand Forecasting (AI-Powered)',
        'Order Management & Fulfillment',
        'Logistics & Shipping Integration',
        'Quality Control & Inspection',
        'Supplier Relationship Management',
      ],
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(99, 102, 241, 0.04))',
    },
    {
      id: 'manufacturing',
      icon: '🏭',
      title: language === 'id' ? 'Operasi Manufaktur' : 'Manufacturing Operations',
      tagline: language === 'id' ? 'Manajemen pabrik cerdas' : 'Smart factory management',
      description: language === 'id' ? 'Rencanakan, jalankan, dan optimalkan operasi manufaktur dengan penjadwalan produksi, manajemen BOM, penjaminan kualitas, dan pemantauan lantai pabrik.' : 'Plan, execute, and optimize manufacturing operations with production scheduling, bill of materials management, quality assurance, and real-time shop floor monitoring.',
      features: language === 'id' ? [
        'Perencanaan & Penjadwalan Produksi',
        'Daftar Material (BOM)',
        'Manajemen Perintah Kerja',
        'Kontrol Lantai Pabrik',
        'Sistem Manajemen Kualitas',
        'Pemeliharaan Peralatan (CMMS)',
        'Manajemen Siklus Hidup Produk',
        'Akuntansi Biaya & Varians',
      ] : [
        'Production Planning & Scheduling',
        'Bill of Materials (BOM)',
        'Work Order Management',
        'Shop Floor Control',
        'Quality Management System',
        'Equipment Maintenance (CMMS)',
        'Product Lifecycle Management',
        'Cost Accounting & Variance',
      ],
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(244, 63, 94, 0.04))',
    },
    {
      id: 'analytics',
      icon: '📊',
      title: language === 'id' ? 'Kecerdasan Bisnis' : 'Business Intelligence',
      tagline: language === 'id' ? 'Pengambilan keputusan berbasis data' : 'Data-driven decision making',
      description: language === 'id' ? 'Ubah data mentah menjadi wawasan strategis dengan analitik berbasis AI, dashboard yang dapat disesuaikan, dan pemodelan prediktif.' : 'Transform raw data into strategic insights with AI-powered analytics, customizable dashboards, automated reporting, and predictive modeling across all departments.',
      features: language === 'id' ? [
        'Dashboard Interaktif & KPI',
        'Pembuat Laporan Kustom',
        'Analitik Prediktif (ML)',
        'Pemrosesan Data Real-Time',
        'Integrasi Data Antar Modul',
        'Laporan Terjadwal & Ad-hoc',
        'Deteksi Anomali & Peringatan',
        'Perpustakaan Visualisasi Data',
      ] : [
        'Interactive Dashboards & KPIs',
        'Custom Report Builder',
        'Predictive Analytics (ML)',
        'Real-Time Data Processing',
        'Cross-Module Data Integration',
        'Scheduled & Ad-hoc Reports',
        'Anomaly Detection & Alerts',
        'Data Visualization Library',
      ],
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(139, 92, 246, 0.04))',
    },
    {
      id: 'crm',
      icon: '🤝',
      title: language === 'id' ? 'CRM & Penjualan' : 'CRM & Sales',
      tagline: language === 'id' ? 'Akselerator pertumbuhan pendapatan' : 'Revenue growth accelerator',
      description: language === 'id' ? 'Kelola siklus hidup pelanggan secara lengkap mulai dari prospek hingga dukungan purna jual. Manajemen pipeline dan analitik pelanggan.' : 'Manage the complete customer lifecycle from lead generation to post-sale support. Pipeline management, opportunity tracking, and customer analytics in one view.',
      features: language === 'id' ? [
        'Manajemen Prospek & Peluang',
        'Pipeline Penjualan & Peramalan',
        'Manajemen Kontak & Akun',
        'Pelacakan Email & Komunikasi',
        'Pembuatan Penawaran & Proposal',
        'Segmentasi Pelanggan',
        'Manajemen Kampanye',
        'Dukungan Pelanggan & Tiket',
      ] : [
        'Lead & Opportunity Management',
        'Sales Pipeline & Forecasting',
        'Contact & Account Management',
        'Email & Communication Tracking',
        'Quote & Proposal Generation',
        'Customer Segmentation',
        'Campaign Management',
        'Customer Support & Ticketing',
      ],
      color: '#f43f5e',
      gradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.08), rgba(245, 158, 11, 0.04))',
    },
  ];

  return (
    <section style={{
      padding: '40px 0 120px',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {products.map((product) => {
            const isExpanded = expandedId === product.id;
            return (
              <div
                key={product.id}
                style={{
                  borderRadius: '20px',
                  background: isExpanded ? product.gradient : 'rgba(20, 20, 32, 0.4)',
                  border: `1px solid ${isExpanded ? `${product.color}33` : 'rgba(255,255,255,0.04)'}`,
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                }}
                onClick={() => setExpandedId(isExpanded ? null : product.id)}
              >
                {/* Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '28px 36px',
                }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: `${product.color}15`,
                    border: `1px solid ${product.color}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    flexShrink: 0,
                  }}>
                    {product.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '2px',
                    }}>
                      {product.title}
                    </h3>
                    <p style={{
                      fontSize: '0.85rem',
                      color: product.color,
                      fontWeight: 500,
                    }}>
                      {product.tagline}
                    </p>
                  </div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease',
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)',
                    flexShrink: 0,
                  }}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M4 6l4 4 4-4" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Expandable Content */}
                <div style={{
                  maxHeight: isExpanded ? '400px' : '0',
                  opacity: isExpanded ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                }}>
                  <div style={{
                    padding: '0 36px 36px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '32px',
                  }}
                  className="product-detail-grid"
                  >
                    <div>
                      <p style={{
                        fontSize: '0.95rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.8,
                        marginBottom: '20px',
                      }}>
                        {product.description}
                      </p>
                      <button style={{
                        padding: '10px 24px',
                        borderRadius: '10px',
                        background: `linear-gradient(135deg, ${product.color}, ${product.color}cc)`,
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        border: 'none',
                        transition: 'all 0.2s ease',
                        boxShadow: `0 4px 15px ${product.color}30`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                      >
                        {language === 'id' ? 'Jelajahi Modul' : 'Explore Module'} →
                      </button>
                    </div>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '8px',
                    }}>
                      {product.features.map((feature) => (
                        <div key={feature} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '0.8rem',
                          color: 'var(--text-secondary)',
                        }}>
                          <span style={{ color: product.color, fontSize: '0.7rem' }}>✦</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .product-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
