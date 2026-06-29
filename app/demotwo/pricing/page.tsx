'use client';

import Link from 'next/link';
import { PageHeader } from '../components';

export default function DemotwoPricing() {
  const plansList = [
    { title: 'Basic Plan', price: '49', period: 'Month', features: ['Routine Cleanings (2/yr)', 'Comprehensive X-rays', 'Standard Fillings (1/yr)', '24/7 Phone Support', 'Emergency checkups (1/yr)'], featured: false },
    { title: 'Standard Plan', price: '99', period: 'Month', features: ['Routine Cleanings (4/yr)', 'Comprehensive X-rays', 'Teeth Whitening (1/yr)', 'Dental Fillings (2/yr)', '24/7 Priority Support', 'Emergency checkups (Unlimited)'], featured: true },
    { title: 'Unlimited Plan', price: '149', period: 'Month', features: ['Unlimited Cleanings', 'All Diagnostic X-rays', 'Teeth Whitening (Unlimited)', 'Implant Discount 20%', 'Dedicated Personal Dentist', 'Orthodontic consultations (Free)'], featured: false }
  ];

  return (
    <main>
      <PageHeader title="Pricing Plans" />

      {/* Pricing Cards Section */}
      <section className="section-padding">
        <div className="container">
          <div className="title-center">
            <span className="subtitle">Payment Options</span>
            <h2 className="main-title">Smile Care Insurance & Subscription Plans</h2>
          </div>

          <div className="grid-3">
            {plansList.map((plan, idx) => (
              <div key={idx} className={`pricing-card ${plan.featured ? 'featured' : ''}`} style={{ padding: '50px 35px' }}>
                {plan.featured && <span className="pricing-badge">Popular</span>}
                <h3 className="pricing-card-title" style={{ fontSize: '24px' }}>{plan.title}</h3>
                <div className="pricing-price" style={{ margin: '15px 0 25px 0' }}>
                  ${plan.price}<span style={{ fontSize: '16px', color: 'var(--text-light)' }}>/{plan.period}</span>
                </div>
                <ul className="pricing-features" style={{ marginBottom: '35px' }}>
                  {plan.features.map((feat, fidx) => (
                    <li key={fidx} style={{ padding: '12px 0', borderBottom: '1px solid var(--border-color)' }}>
                      <i className="fa-solid fa-check" style={{ color: 'var(--accent-color)', marginRight: '8px' }}></i> {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/demotwo/appointment" className={`btn-${plan.featured ? 'primary' : 'secondary'}`} style={{ width: '100%' }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Accordion Intro Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="subtitle">F.A.Q</span>
          <h2 className="main-title" style={{ marginBottom: '20px' }}>Frequently Asked Insurance Questions</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>
            We accept all major PPO insurance plans. We also provide zero-interest customized payment plan options via CareCredit for families and uninsured patients.
          </p>
          <Link href="/demotwo/contact" className="btn-primary">
            Speak to Billing Coordinator
          </Link>
        </div>
      </section>
    </main>
  );
}
