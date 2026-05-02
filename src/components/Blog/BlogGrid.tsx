'use client';

import { useState } from 'react';

const categories = ['All', 'Technology', 'Strategy', 'Case Study', 'Industry', 'Product Update'];

const blogPosts = [
  {
    id: 1,
    title: 'The Future of ERP: How AI is Reshaping Enterprise Operations',
    excerpt: 'Discover how machine learning and artificial intelligence are transforming traditional ERP systems into intelligent, predictive platforms that anticipate business needs.',
    category: 'Technology',
    author: 'Dr. Emily Zhang',
    authorRole: 'Head of AI Research',
    date: 'Apr 28, 2026',
    readTime: '8 min read',
    color: '#6366f1',
    featured: true,
  },
  {
    id: 2,
    title: 'Digital Transformation in Manufacturing: A Complete Roadmap',
    excerpt: 'A step-by-step guide to modernizing your manufacturing operations with cloud ERP, IoT integration, and real-time analytics.',
    category: 'Strategy',
    author: 'James Rivera',
    authorRole: 'Solutions Architect',
    date: 'Apr 22, 2026',
    readTime: '12 min read',
    color: '#06b6d4',
    featured: true,
  },
  {
    id: 3,
    title: 'How NovaCorp Reduced Operational Costs by 45% with ERPPro',
    excerpt: 'An in-depth case study on how a mid-market manufacturer achieved dramatic cost savings through ERP modernization and process automation.',
    category: 'Case Study',
    author: 'Sarah Chen',
    authorRole: 'Customer Success',
    date: 'Apr 18, 2026',
    readTime: '6 min read',
    color: '#10b981',
    featured: true,
  },
  {
    id: 4,
    title: 'Supply Chain Resilience: Lessons from Global Disruptions',
    excerpt: 'How leading enterprises are building resilient supply chains with real-time visibility, diversified sourcing, and predictive risk management.',
    category: 'Industry',
    author: 'Michael Torres',
    authorRole: 'Industry Analyst',
    date: 'Apr 14, 2026',
    readTime: '10 min read',
    color: '#f59e0b',
    featured: false,
  },
  {
    id: 5,
    title: 'Introducing ERPPro v4.0: Next-Generation Analytics Engine',
    excerpt: 'Our biggest release yet brings real-time predictive analytics, natural language querying, and automated anomaly detection to every user.',
    category: 'Product Update',
    author: 'ERPPro Team',
    authorRole: 'Product',
    date: 'Apr 10, 2026',
    readTime: '5 min read',
    color: '#8b5cf6',
    featured: false,
  },
  {
    id: 6,
    title: '10 ERP Implementation Mistakes and How to Avoid Them',
    excerpt: 'Learn from the most common pitfalls in ERP implementations and discover proven strategies for a smooth, successful deployment.',
    category: 'Strategy',
    author: 'Amanda Blake',
    authorRole: 'Senior Consultant',
    date: 'Apr 5, 2026',
    readTime: '9 min read',
    color: '#f43f5e',
    featured: false,
  },
  {
    id: 7,
    title: 'The Rise of Cloud-Native ERP: Why It Matters',
    excerpt: 'Understanding the shift from on-premise to cloud-native ERP architectures and what it means for scalability, cost, and innovation.',
    category: 'Technology',
    author: 'David Kim',
    authorRole: 'Cloud Architect',
    date: 'Mar 30, 2026',
    readTime: '7 min read',
    color: '#06b6d4',
    featured: false,
  },
  {
    id: 8,
    title: 'Streamlining Multi-Entity Financial Consolidation',
    excerpt: 'Best practices for automating financial consolidation across multiple entities, currencies, and regulatory frameworks.',
    category: 'Strategy',
    author: 'Lisa Park',
    authorRole: 'Finance Expert',
    date: 'Mar 25, 2026',
    readTime: '11 min read',
    color: '#10b981',
    featured: false,
  },
  {
    id: 9,
    title: 'How AI-Powered Demand Forecasting Cuts Inventory Costs',
    excerpt: 'Explore how machine learning models analyze historical patterns and external signals to predict demand with 95% accuracy.',
    category: 'Technology',
    author: 'Dr. Emily Zhang',
    authorRole: 'Head of AI Research',
    date: 'Mar 20, 2026',
    readTime: '8 min read',
    color: '#6366f1',
    featured: false,
  },
];

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const featuredPosts = filteredPosts.filter(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured);

  return (
    <section style={{
      padding: '20px 0 120px',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        {/* Category Filter */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '48px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 20px',
                borderRadius: '100px',
                background: activeCategory === cat
                  ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(6, 182, 212, 0.15))'
                  : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeCategory === cat ? 'rgba(99, 102, 241, 0.3)' : 'rgba(255,255,255,0.06)'}`,
                color: activeCategory === cat ? '#c3d0ff' : 'var(--text-muted)',
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Posts Row */}
        {featuredPosts.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '32px',
          }}
          className="blog-featured-grid"
          >
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                style={{
                  borderRadius: '20px',
                  background: 'rgba(20, 20, 32, 0.5)',
                  border: '1px solid rgba(255,255,255,0.04)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${post.color}33`;
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 12px 40px ${post.color}10`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Colored top bar */}
                <div style={{
                  height: '4px',
                  background: `linear-gradient(90deg, ${post.color}, ${post.color}66)`,
                }} />

                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px',
                  }}>
                    <span style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: `${post.color}15`,
                      border: `1px solid ${post.color}25`,
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: post.color,
                    }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {post.readTime}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    lineHeight: 1.4,
                    marginBottom: '12px',
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '20px',
                    flex: 1,
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(255,255,255,0.04)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: `${post.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: post.color,
                      }}>
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {post.author}
                        </p>
                        <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                          {post.date}
                        </p>
                      </div>
                    </div>
                    <span style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: post.color,
                    }}>
                      Read →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Regular Posts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
        className="blog-regular-grid"
        >
          {regularPosts.map((post) => (
            <article
              key={post.id}
              style={{
                padding: '28px',
                borderRadius: '16px',
                background: 'rgba(20, 20, 32, 0.4)',
                border: '1px solid rgba(255,255,255,0.04)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '14px',
              }}>
                <span style={{
                  padding: '3px 8px',
                  borderRadius: '5px',
                  background: `${post.color}12`,
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: post.color,
                }}>
                  {post.category}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  {post.readTime}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.4,
                marginBottom: '10px',
              }}>
                {post.title}
              </h3>

              <p style={{
                fontSize: '0.83rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '16px',
                flex: 1,
              }}>
                {post.excerpt}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {post.date}
                </span>
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: post.color }}>
                  Read →
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button style={{
            padding: '14px 36px',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            color: 'var(--text-primary)',
            fontWeight: 600,
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
          }}
          >
            Load More Articles
          </button>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .blog-featured-grid,
          .blog-regular-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .blog-featured-grid,
          .blog-regular-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
