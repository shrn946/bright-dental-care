'use client';

import { useState } from 'react';
import { PageHeader } from '../components';

export default function DemotwoContact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent successfully. We will contact you soon.');
  };

  return (
    <main>
      <PageHeader title="Contact Us" />

      {/* Info Boxes & Form Grid Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="subtitle">Get In Touch</span>
              <h2 className="main-title" style={{ marginBottom: '20px' }}>Contact Smile Care Clinic Today</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '35px' }}>
                Have questions about billing, insurance, or general dental appointments? Fill out our form or get in touch directly via email/phone.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(197, 168, 128, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', color: 'var(--text-light)' }}>Call Us Directly</h4>
                    <h3 style={{ fontSize: '18px' }}>(+123) 456 78 900</h3>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(197, 168, 128, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', color: 'var(--text-light)' }}>Email Our Support Desk</h4>
                    <h3 style={{ fontSize: '18px' }}><a href="mailto:info@yourdomain.com">info@yourdomain.com</a></h3>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: 'rgba(197, 168, 128, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', color: 'var(--text-light)' }}>Visit Our Practice</h4>
                    <h3 style={{ fontSize: '18px' }}>121 King Street, Melbourne</h3>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="form-wrapper">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Full Name" 
                    className="form-control"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email Address" 
                    className="form-control"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject"
                    placeholder="Subject Of Inquiry" 
                    className="form-control"
                    value={contactForm.subject}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    name="message"
                    placeholder="Your message details..." 
                    className="form-control"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section style={{ height: '400px', backgroundColor: '#e5e9f0', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-light)', fontStyle: 'italic' }}>
          Interactive Map Placeholder - 121 King Street, Melbourne
        </div>
      </section>
    </main>
  );
}
