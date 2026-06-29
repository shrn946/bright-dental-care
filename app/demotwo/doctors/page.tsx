'use client';

import Link from 'next/link';
import { PageHeader } from '../components';

export default function DemotwoDoctors() {
  const doctorsList = [
    { name: 'Dr. John Doe', role: 'Chief Prosthodontist', image: '/demotwo/assets/uploads/2024/05/team-1.jpg', desc: 'Over 15 years of experience in custom dental implants and restorative full-mouth prostheses.' },
    { name: 'Dr. Jane Smith', role: 'Orthodontics Expert', image: '/demotwo/assets/uploads/2024/05/team-2.jpg', desc: 'Specializing in digital smile design, metal-free braces, and invisible aligners for adults.' },
    { name: 'Dr. Alan Green', role: 'Senior Periodontist', image: '/demotwo/assets/uploads/2024/05/team-3.jpg', desc: 'Dedicated periodontics researcher focused on gum grafting and lasers for bone regeneration.' },
    { name: 'Dr. Sarah White', role: 'Pediatric Dentist', image: '/demotwo/assets/uploads/2024/05/team-4.jpg', desc: 'Gentle, friendly specialized pediatric checkups and sealants for toddlers and teens.' }
  ];

  return (
    <main>
      <PageHeader title="Medical Team" />

      {/* Doctors Grid Section */}
      <section className="section-padding">
        <div className="container">
          <div className="title-center">
            <span className="subtitle">Clinical Leadership</span>
            <h2 className="main-title">Meet Our Board-Certified Specialists</h2>
          </div>

          <div className="grid-4">
            {doctorsList.map((doc, idx) => (
              <div key={idx} className="doctor-card">
                <div className="doctor-image">
                  <img src={doc.image} alt={doc.name} />
                </div>
                <div className="doctor-info">
                  <h3 className="doctor-name">{doc.name}</h3>
                  <div className="doctor-designation">{doc.role}</div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-light)', marginBottom: '18px', height: '60px', overflow: 'hidden' }}>{doc.desc}</p>
                  <div className="doctor-socials">
                    <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div>
            <span className="subtitle">Join Our Team</span>
            <h2 className="main-title" style={{ marginBottom: '20px' }}>Looking for Career Opportunities?</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '15px' }}>
              Smile Care clinic is always looking for qualified dental hygienists, oral assistants, and specialty coordinators to join our growing clinical practice.
            </p>
            <Link href="/demotwo/contact" className="btn-primary">
              Send Your CV
            </Link>
          </div>
          <div>
            <img 
              src="/demotwo/assets/uploads/2024/05/dental-abt-img-2.jpg" 
              alt="Medical Practice" 
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }} 
            />
          </div>
        </div>
      </section>
    </main>
  );
}
