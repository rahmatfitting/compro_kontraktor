'use client';

import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/user/month',
    description: 'Perfect for small teams getting started with ERP',
    features: [
      'Up to 10 users',
      '3 core modules',
      '5 GB storage',
      'Email support',
      'Basic reporting',
      'API access',
    ],
    highlighted: false,
    color: '#06b6d4',
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/user/month',
    description: 'For growing businesses that need advanced features',
    features: [
      'Up to 100 users',
      'All 6 modules',
      '100 GB storage',
      'Priority support (24/7)',
      'Advanced analytics & AI',
      'Custom workflows',
      'API + Webhooks',
      'Dedicated CSM',
    ],
    highlighted: true,
    color: '#6366f1',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    features: [
      'Unlimited users',
      'All modules + custom',
      'Unlimited storage',
      'Dedicated support team',
      'On-premise option',
      'Custom integrations',
      'SLA guarantee (99.99%)',
      'Training & onboarding',
    ],
    highlighted: false,
    color: '#8b5cf6',
  },
];

export default function PricingSection() {
  return (
    <section style={{
      padding: '120px 0',
      position: 'relative',
      background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(17, 17, 24, 1) 50%, var(--bg-primary) 100%)',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 24px',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '100px',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(6, 182, 212, 0.15))',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: '#9eb3ff',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            marginBottom: '20px',
          }}>
            ◈ Pricing
          </div>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '16px',
            background: 'linear-gradient(135deg, var(--text-primary), #9eb3ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Simple, Transparent Pricing
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}>
            Choose the plan that fits your business. Scale up anytime as your needs evolve.
          </p>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          alignItems: 'stretch',
        }}
        className="pricing-grid"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              style={{
                padding: '40px',
                borderRadius: '24px',
                background: plan.highlighted
                  ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05))'
                  : 'rgba(20, 20, 32, 0.5)',
                border: `1px solid ${plan.highlighted ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255,255,255,0.04)'}`,
                backdropFilter: 'blur(12px)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 12px 40px ${plan.color}15`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {plan.highlighted && (
                <div style={{
                  position: 'absolute',
                  top: '-1px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '4px 16px',
                  borderRadius: '0 0 8px 8px',
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  Most Popular
                </div>
              )}

              <h3 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: plan.color,
                marginBottom: '8px',
              }}>
                {plan.name}
              </h3>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '8px' }}>
                <span style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                }}>
                  {plan.price}
                </span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {plan.period}
                </span>
              </div>

              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                marginBottom: '28px',
                lineHeight: 1.6,
              }}>
                {plan.description}
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                flex: 1,
                marginBottom: '28px',
              }}>
                {plan.features.map((feature) => (
                  <div key={feature} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                  }}>
                    <span style={{
                      color: '#10b981',
                      fontSize: '0.75rem',
                      flexShrink: 0,
                    }}>✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              <Link href="/contact" style={{
                display: 'block',
                textAlign: 'center',
                padding: '14px 28px',
                borderRadius: '12px',
                background: plan.highlighted
                  ? `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)`
                  : 'rgba(255,255,255,0.04)',
                color: plan.highlighted ? 'white' : 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.9rem',
                border: plan.highlighted ? 'none' : '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.3s ease',
                boxShadow: plan.highlighted ? `0 4px 15px ${plan.color}30` : 'none',
              }}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px !important;
            margin: 0 auto !important;
          }
        }
      `}</style>
    </section>
  );
}
