'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PageHeader } from '../components';

export default function DemotwoAbout() {
  const [patientsCount, setPatientsCount] = useState(0);
  const [casesCount, setCasesCount] = useState(0);
  const [doctorsCount, setDoctorsCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 30;
    const stepTime = duration / steps;

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setPatientsCount(Math.min(Math.floor((step / steps) * 6700), 6700));
      setCasesCount(Math.min(Math.floor((step / steps) * 8500), 8500));
      setDoctorsCount(Math.min(Math.floor((step / steps) * 140), 140));
      if (step >= steps) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  const values = [
    { title: 'Premium Hygiene', icon: 'fa-pump-medical', desc: 'Strict multi-stage autoclave sterilization protocols exceeding local health guidelines for child and adult safety.' },
    { title: 'Gentle Care', icon: 'fa-face-smile', desc: 'Customized pain-free sedation options and ultra-fine localized anesthetics to make visits comfortable.' },
    { title: 'Leading Tech', icon: 'fa-microscope', desc: 'Advanced intraoral 3D scanning, low-radiation panoramic digital X-rays, and computer-guided implantology.' }
  ];

  return (
    <main>
      <PageHeader title="About Our Clinic" />

      {/* Intro section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2">
            <div style={{ position: 'relative' }}>
              <img 
                src="/demotwo/assets/uploads/2024/05/dental-abt-img-1.jpg" 
                alt="Clinic Lobby" 
                style={{ width: '85%', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }} 
              />
              <img 
                src="/demotwo/assets/uploads/2024/05/dental-abt-img-2.jpg" 
                alt="Diagnostics Room" 
                style={{ width: '55%', position: 'absolute', bottom: '-30px', right: '0', borderRadius: '8px', border: '5px solid #fff', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }} 
              />
            </div>
            
            <div>
              <span className="subtitle">Introduction</span>
              <h2 className="main-title" style={{ marginBottom: '20px' }}>Gentle, Precision Dental Care For Your Whole Family</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '15px' }}>
                Since 2012, Smile Care clinic has provided exceptional preventative and cosmetic dental treatments. We bring together board-certified clinicians who utilize modern diagnostic workflows to build your healthy smile.
              </p>
              <p style={{ color: 'var(--text-light)', marginBottom: '25px' }}>
                Whether you need a simple aesthetic filling, professional whitening, or complex implant restoration, we customize your treatment timeline for optimal longevity.
              </p>
              <Link href="/demotwo/appointment" className="btn-primary">
                Book Initial Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="title-center">
            <span className="subtitle">Core Standards</span>
            <h2 className="main-title">Why Patients Trust Us</h2>
          </div>
          
          <div className="grid-3">
            {values.map((val, idx) => (
              <div key={idx} className="info-card" style={{ padding: '40px 30px' }}>
                <div style={{ width: '70px', height: '70px', backgroundColor: 'rgba(197, 168, 128, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)', fontSize: '24px', margin: '0 auto 20px auto' }}>
                  <i className={`fa-solid ${val.icon}`}></i>
                </div>
                <h3 className="info-card-title">{val.title}</h3>
                <p className="info-card-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="counters-wrapper" style={{ backgroundColor: 'var(--primary-color)' }}>
        <div className="container">
          <div className="grid-3">
            <div className="counter-item">
              <div className="counter-number">{patientsCount.toLocaleString()}+</div>
              <div className="counter-label">Satisfied Patients</div>
            </div>
            <div className="counter-item">
              <div className="counter-number">{casesCount.toLocaleString()}+</div>
              <div className="counter-label">Cases Done So Far</div>
            </div>
            <div className="counter-item">
              <div className="counter-number">{doctorsCount}+</div>
              <div className="counter-label">Expert Dentists</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / CTA Section */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="subtitle">Our Mission</span>
          <h2 className="main-title" style={{ marginBottom: '20px' }}>Helping You Smile With Comfort &amp; Confidence</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '30px', fontSize: '17px' }}>
            We believe that a dentist visit should be reassuring and painless. Our friendly clinical team prioritizes education and preventative therapy to ensure your natural teeth remain strong for a lifetime.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <Link href="/demotwo/appointment" className="btn-primary">Book Consultation</Link>
            <Link href="/demotwo/contact" className="btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

