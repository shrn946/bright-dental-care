'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function DemotwoHome() {
  const [satisfiedCount, setSatisfiedCount] = useState(0);
  const [casesCount, setCasesCount] = useState(0);
  const [doctorsCount, setDoctorsCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 30;
    const stepTime = duration / steps;
    
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setSatisfiedCount(Math.min(Math.floor((step / steps) * 6700), 6700));
      setCasesCount(Math.min(Math.floor((step / steps) * 1800), 1800));
      setDoctorsCount(Math.min(Math.floor((step / steps) * 100), 100));
      if (step >= steps) clearInterval(interval);
    }, stepTime);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setAppointmentForm({
      ...appointmentForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your appointment request has been submitted successfully.');
  };

  const services = [
    { id: 1, title: 'Braces & Aligners', icon: '/demotwo/assets/uploads/2024/05/dental-icon-1.png', desc: 'Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorper metus' },
    { id: 2, title: 'Dental Fillings', icon: '/demotwo/assets/uploads/2024/05/dental-icon-2.png', desc: 'Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorper metus' },
    { id: 3, title: 'Dental Implant', icon: '/demotwo/assets/uploads/2024/05/dental-icon-3.png', desc: 'Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorper metus' },
    { id: 4, title: 'Teeth Whitening', icon: '/demotwo/assets/uploads/2024/05/dental-icon-14.png', desc: 'Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorper metus' },
    { id: 5, title: 'Extractions', icon: '/demotwo/assets/uploads/2024/05/dental-icon-5.png', desc: 'Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorper metus' },
    { id: 6, title: 'Wisdom Teeth', icon: '/demotwo/assets/uploads/2024/05/dental-icon-9.png', desc: 'Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorper metus' },
    { id: 7, title: 'Molar Crown', icon: '/demotwo/assets/uploads/2024/05/dental-icon-6.png', desc: 'Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorper metus' },
    { id: 8, title: 'Braces & Aligners', icon: '/demotwo/assets/uploads/2024/05/dental-icon-7.png', desc: 'Donec nec risus arcu sed sodales rhoncus leo, ut ullamcorper metus' }
  ];

  const funfacts = [
    { count: '6700', label: 'Satisfied Patients' },
    { count: '1800', label: 'Cases Done So Far' },
    { count: '100', label: 'Expert Dentists' }
  ];

  const doctors = [
    { name: 'Dr. Sarah Williams', role: 'Orthodontist', image: '/demotwo/assets/uploads/2024/05/team-1.jpg' },
    { name: 'Dr. Michael Brown', role: 'Oral Surgeon', image: '/demotwo/assets/uploads/2024/05/team-2.jpg' },
    { name: 'Dr. James Davis', role: 'Prosthodontist', image: '/demotwo/assets/uploads/2024/05/team-4.jpg' },
    { name: 'Dr. Lisa Rodriguez', role: 'Dental Hygienist', image: '/demotwo/assets/uploads/2024/05/team-6.jpg' }
  ];

  const [sliderPos, setSliderPos] = useState(50);

  const plans = [
    { title: 'Basic Plan', price: '49', period: 'year', features: [
      { name: 'Unlimited Consults', active: true },
      { name: 'Free Scaling & Polishing', active: true },
      { name: 'Discount voucher', active: true },
      { name: 'Free Consult to 1 referred family', active: false },
      { name: 'Oral Health Kit for 1 year', active: false }
    ], featured: false },
    { title: 'Standard Plan', price: '59', period: 'year', features: [
      { name: 'Unlimited Consults', active: true },
      { name: 'Free Scaling & Polishing', active: true },
      { name: 'Discount voucher', active: true },
      { name: 'Free Consult to 1 referred family', active: true },
      { name: 'Oral Health Kit for 1 year', active: false }
    ], featured: true },
    { title: 'Unlimited Plan', price: '69', period: 'year', features: [
      { name: 'Unlimited Consults', active: true },
      { name: 'Free Scaling & Polishing', active: true },
      { name: 'Discount voucher', active: true },
      { name: 'Free Consult to 1 referred family', active: true },
      { name: 'Oral Health Kit for 1 year', active: true }
    ], featured: false }
  ];

  const blogPosts = [
    { title: 'The Importance of Mouthguards in Sports', date: 'May 25, 2024', image: '/demotwo/assets/uploads/2024/05/dental-blog-img-1.jpg', desc: 'Duis quam nisi, mollis id consectetur eget, euismod ut tellus. Quisque fermentum mauris vel fringilla porttitor.' },
    { title: 'Common Causes of Bad Breath and How to Fix It', date: 'May 25, 2024', image: '/demotwo/assets/uploads/2024/05/dental-blog-img-4.jpg', desc: 'Duis quam nisi, mollis id consectetur eget, euismod ut tellus. Quisque fermentum mauris vel fringilla porttitor.' },
    { title: 'How Diet Affects Your Dental Health', date: 'May 25, 2024', image: '/demotwo/assets/uploads/2024/05/dental-blog-img-3.jpg', desc: 'Duis quam nisi, mollis id consectetur eget, euismod ut tellus. Quisque fermentum mauris vel fringilla porttitor.' }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" style={{ position: 'relative' }}>
        <div className="hero-overlay" style={{ backgroundImage: "url('/demotwo/assets/uploads/2024/05/dental-slider-img.jpg')" }}></div>
        <img 
          src="/demotwo/assets/uploads/2024/05/dental-particles-1.png" 
          alt="Dental Particles 1" 
          className="animate-left" 
          style={{ position: 'absolute', top: '15%', left: '8%', width: '66px', height: 'auto', zIndex: 2, pointerEvents: 'none' }} 
        />
        <div className="container">
          <div className="hero-content animate-left">
            <h1 className="hero-title">
              Smile, it Lets Your <span>Teeth</span> Breathe
            </h1>
            <p className="hero-description">
              Experience the highest clinical standards of dental care. We design bright smiles through customized restorative and preventative treatments in a warm environment.
            </p>
            <div className="hero-buttons">
              <Link href="/demotwo/appointment" className="btn-primary">
                Book An Appointment
              </Link>
              <Link href="/demotwo/services" className="btn-secondary" style={{ borderColor: 'var(--primary-color)' }}>
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div className="title-center animate-down">
            <span className="subtitle">Clinical Services</span>
            <h2 className="main-title">Explore Our Services</h2>
          </div>
          
          <div className="grid-4 animate-up">
            {services.map((svc) => (
              <div key={svc.id} className="info-card">
                <div className="info-card-icon">
                  <img src={svc.icon} alt={svc.title} />
                </div>
                <h3 className="info-card-title">{svc.title}</h3>
                <p className="info-card-desc">{svc.desc}</p>
                <Link href="/demotwo/services" className="info-card-link">
                  Learn More <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: '4px' }}></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome / Clinic Intro Section */}
      <section className="section-padding welcome-section" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="welcome-images animate-left">
              <img src="/demotwo/assets/uploads/2024/05/dental-abt-img-1.jpg" alt="Smile Care Clinic Lobby" className="welcome-img-main" />
              <img src="/demotwo/assets/uploads/2024/05/dental-abt-img-2.jpg" alt="Patient Checkup" className="welcome-img-secondary" />
            </div>
            
            <div className="welcome-content animate-right">
              <span className="subtitle">Get To Know About Us</span>
              <h2 className="main-title" style={{ marginBottom: '20px' }}>Welcome to Our Smile Care Dental Clinic</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>
                Etiam scelerisque nec elit ac efficitur. Duis vestibulum magna sit amet ante gravida malesuada. Nunc gravida dui scelerisque libero venenatis hendrerit vestibulum euismod, lacus.
              </p>
              
              {/* Dynamic Counters Row inside About Clinic welcome section */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', margin: '30px 0' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <img 
                    src="/demotwo/assets/uploads/2024/05/dental-icon-11.png" 
                    alt="Satisfied Patients" 
                    style={{ width: '54px', height: '54px', objectFit: 'contain' }} 
                  />
                  <div>
                    <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--primary-color)', lineHeight: '1' }}>
                      {satisfiedCount}+
                    </h3>
                    <p style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--secondary-color)', letterSpacing: '0.5px', marginTop: '4px' }}>
                      Satisfied Patients
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <img 
                    src="/demotwo/assets/uploads/2024/05/dental-icon-12.png" 
                    alt="Cases Done" 
                    style={{ width: '54px', height: '54px', objectFit: 'contain' }} 
                  />
                  <div>
                    <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--primary-color)', lineHeight: '1' }}>
                      {casesCount}+
                    </h3>
                    <p style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--secondary-color)', letterSpacing: '0.5px', marginTop: '4px' }}>
                      Cases Done
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <img 
                    src="/demotwo/assets/uploads/2024/05/dental-icon-13.png" 
                    alt="Expert Dentists" 
                    style={{ width: '54px', height: '54px', objectFit: 'contain' }} 
                  />
                  <div>
                    <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'var(--primary-color)', lineHeight: '1' }}>
                      {doctorsCount}+
                    </h3>
                    <p style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--secondary-color)', letterSpacing: '0.5px', marginTop: '4px' }}>
                      Expert Dentists
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/demotwo/about" className="btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Step-by-Step Section (Redesigned matching original HTML) */}
      <section className="section-padding" style={{ background: 'var(--bg-white)', overflow: 'hidden' }}>
        <div className="container">
          <div className="title-center animate-down">
            <h2 className="main-title">Dental Procedures</h2>
          </div>
          
          <div className="procedures-grid-layout" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center' }}>
            
            {/* Left Column Overlapping Images */}
            <div className="animate-left" style={{ minWidth: '314px', position: 'relative', height: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="/demotwo/assets/uploads/2024/05/teeth-img.png" 
                alt="Teeth Illustration" 
                style={{ width: '80%', maxHeight: '440px', objectFit: 'contain', position: 'relative', zIndex: 1 }} 
              />
              <img 
                src="/demotwo/assets/uploads/2024/05/dental-tools.png" 
                alt="Dental Tools" 
                style={{ width: '90%', position: 'absolute', bottom: '0', left: '5%', zIndex: 2, pointerEvents: 'none' }} 
              />
              <img 
                src="/demotwo/assets/uploads/2024/05/dental-particles-1.png" 
                alt="Sparkles" 
                style={{ width: '66px', position: 'absolute', top: '10%', right: '10%', zIndex: 3 }} 
              />
            </div>

            {/* Middle Column (Connecting Lines Graphics, hidden on mobile/tablet) */}
            <div className="procedures-lines-container animate-zoom" style={{ flex: '0 0 10%', position: 'relative', height: '440px' }}>
              <img 
                src="/demotwo/assets/uploads/2024/05/dental-line-1.png" 
                alt="Line 1" 
                style={{ position: 'absolute', top: '15%', left: '0', width: '100%', objectFit: 'contain' }} 
              />
              <img 
                src="/demotwo/assets/uploads/2024/05/dental-line-2.png" 
                alt="Line 2" 
                style={{ position: 'absolute', top: '38%', left: '0', width: '100%', objectFit: 'contain' }} 
              />
              <img 
                src="/demotwo/assets/uploads/2024/05/dental-line-3.png" 
                alt="Line 3" 
                style={{ position: 'absolute', top: '61%', left: '0', width: '100%', objectFit: 'contain' }} 
              />
              <img 
                src="/demotwo/assets/uploads/2024/05/dental-line-4.png" 
                alt="Line 4" 
                style={{ position: 'absolute', top: '84%', left: '0', width: '100%', objectFit: 'contain' }} 
              />
            </div>

            {/* Right Column List Cards */}
            <div className="animate-right" style={{ minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
              
              <Link href="/demotwo/services" className="procedure-card">
                <img 
                  src="/demotwo/assets/uploads/2024/05/dental-icon-1.png" 
                  alt="Prevention of Cavities" 
                  style={{ width: '54px', height: '54px', objectFit: 'contain' }} 
                />
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '8px' }}>
                    Prevention of Cavities
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: '1.5' }}>
                    Donec nec risus arcu sed sodales pulvinar felis porta.
                  </p>
                </div>
              </Link>

              <Link href="/demotwo/services" className="procedure-card">
                <img 
                  src="/demotwo/assets/uploads/2024/05/dental-icon-2.png" 
                  alt="Cosmetic Dentistry" 
                  style={{ width: '54px', height: '54px', objectFit: 'contain' }} 
                />
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '8px' }}>
                    Cosmetic Dentistry
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: '1.5' }}>
                    Donec nec risus arcu sed sodales pulvinar felis porta.
                  </p>
                </div>
              </Link>

              <Link href="/demotwo/services" className="procedure-card">
                <img 
                  src="/demotwo/assets/uploads/2024/05/dental-icon-3.png" 
                  alt="General Checkup" 
                  style={{ width: '54px', height: '54px', objectFit: 'contain' }} 
                />
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '8px' }}>
                    General Checkup
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: '1.5' }}>
                    Donec nec risus arcu sed sodales pulvinar felis porta.
                  </p>
                </div>
              </Link>

              <Link href="/demotwo/services" className="procedure-card">
                <img 
                  src="/demotwo/assets/uploads/2024/05/dental-icon-4.png" 
                  alt="Periodontic Care" 
                  style={{ width: '54px', height: '54px', objectFit: 'contain' }} 
                />
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '8px' }}>
                    Periodontic Care
                  </h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: '1.5' }}>
                    Donec nec risus arcu sed sodales pulvinar felis porta.
                  </p>
                </div>
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* Meet Our Doctors Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div className="title-center animate-down">
            <span className="subtitle">Medical Team</span>
            <h2 className="main-title">Meet Our Doctors</h2>
          </div>
          
          <div className="grid-4 animate-up">
            {doctors.map((doc, idx) => (
              <div key={idx} className="doctor-card">
                <div className="doctor-image">
                  <img src={doc.image} alt={doc.name} />
                </div>
                <div className="doctor-info">
                  <h3 className="doctor-name">{doc.name}</h3>
                  <div className="doctor-designation">{doc.role}</div>
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

      {/* Pricing Plan Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="title-center animate-down">
            <span className="subtitle">Payment Plans</span>
            <h2 className="main-title">Our Pricing Plan</h2>
          </div>
          
          <div className="grid-3 animate-up">
            {plans.map((plan, idx) => (
              <div key={idx} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <span className="pricing-badge">Popular</span>}
                <h3 className="pricing-card-title">{plan.title}</h3>
                <div className="pricing-price">
                  ${plan.price}<span>/{plan.period}</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feat, fidx) => (
                    <li key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: feat.active ? 'none' : 'line-through', opacity: feat.active ? 1 : 0.45 }}>
                      <i className={`fa-solid ${feat.active ? 'fa-circle-check' : 'fa-circle-xmark'}`} style={{ color: feat.active ? 'var(--accent-color)' : '#aaa', fontSize: '14px' }}></i>
                      {feat.name}
                    </li>
                  ))}
                </ul>
                <Link href="/demotwo/appointment" className={`btn-${plan.featured ? 'primary' : 'secondary'}`} style={{ width: '100%' }}>
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Image Comparison Section */}
      <section className="section-padding" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="title-center animate-down">
            <span className="subtitle">See the Difference</span>
            <h2 className="main-title">Make your smile shine again</h2>
          </div>

          <div className="animate-zoom" style={{ position: 'relative', width: '100%', maxWidth: '800px', height: '480px', overflow: 'hidden', borderRadius: '20px', margin: '0 auto', boxShadow: '0 15px 40px rgba(0,0,0,0.08)' }}>
            {/* After Image (Background) */}
            <img 
              src="/demotwo/assets/uploads/2024/05/dental-teeth-after.jpg" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              alt="After Treatment" 
            />
            {/* Before Image (Foreground overlay slider) */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: `${sliderPos}%`, height: '100%', overflow: 'hidden' }}>
              <img 
                src="/demotwo/assets/uploads/2024/05/dental-teeth-before.jpg" 
                style={{ width: '800px', height: '480px', objectFit: 'cover', maxWidth: 'none' }} 
                alt="Before Treatment" 
              />
            </div>
            {/* Drag Handle Controls */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos} 
              onChange={(e) => setSliderPos(Number(e.target.value))} 
              style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, width: '100%', height: '100%', opacity: 0, cursor: 'ew-resize', zIndex: 10 }}
            />
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${sliderPos}%`, width: '4px', background: '#fff', zIndex: 5, pointerEvents: 'none' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '42px', height: '42px', borderRadius: '50%', background: 'var(--primary-color)', border: '4px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '14px', boxShadow: '0 4px 10px rgba(0,0,0,0.15)' }}>
                <i className="fa-solid fa-arrows-left-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News / Blog Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div className="title-center animate-down">
            <span className="subtitle">Our Articles</span>
            <h2 className="main-title">Latest News & Articles</h2>
          </div>
          
          <div className="grid-3 animate-up">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><i className="fa-solid fa-calendar-days"></i> {post.date}</span>
                    <span><i className="fa-solid fa-comment"></i> 0 Comments</span>
                  </div>
                  <h3 className="blog-title">
                    <Link href="/demotwo/blog">{post.title}</Link>
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-light)', marginBottom: '20px' }}>{post.desc}</p>
                  <Link href="/demotwo/blog" className="blog-link">
                    Read Article <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: '4px' }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
