'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/demotwo') {
      return pathname === '/demotwo' || pathname === '/demotwo/';
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Bar Info */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-info">
            <span>
              <i className="fa-solid fa-phone"></i> (+123) 456 78 900
            </span>
            <span>
              <i className="fa-solid fa-envelope"></i> info@yourdomain.com
            </span>
            <span className="hidden-mobile">
              <i className="fa-solid fa-location-dot"></i> 121 King Street, Melbourne
            </span>
          </div>
          <div className="top-bar-socials">
            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container header-container">
          <Link href="/demotwo" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/demotwo/assets/uploads/2024/05/logo2.png" 
              alt="Smile Care Logo" 
              style={{ height: '63px', width: 'auto', objectFit: 'contain' }} 
            />
          </Link>

          {/* Navigation Links */}
          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
              <li>
                <Link href="/demotwo" className={`nav-item ${isActive('/demotwo') && pathname === '/demotwo' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/demotwo/about" className={`nav-item ${isActive('/demotwo/about') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/demotwo/services" className={`nav-item ${isActive('/demotwo/services') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/demotwo/doctors" className={`nav-item ${isActive('/demotwo/doctors') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  Doctors
                </Link>
              </li>
              <li>
                <Link href="/demotwo/pricing" className={`nav-item ${isActive('/demotwo/pricing') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/demotwo/faq" className={`nav-item ${isActive('/demotwo/faq') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/demotwo/blog" className={`nav-item ${isActive('/demotwo/blog') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/demotwo/contact" className={`nav-item ${isActive('/demotwo/contact') ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li className="mobile-only-btn">
                <Link href="/demotwo/appointment" className="btn-primary" onClick={() => setMobileMenuOpen(false)} style={{ padding: '10px 24px', fontSize: '14px' }}>
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <Link href="/demotwo/appointment" className="btn-primary hidden-tablet-mobile" style={{ padding: '10px 24px', fontSize: '14px' }}>
              Book Appointment
            </Link>
            
            {/* Hamburger menu for mobile */}
            <button 
              className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile menu styles dynamically loaded */}
        <style jsx>{`
          .hamburger {
            display: none;
            flex-direction: column;
            justify-content: space-between;
            width: 25px;
            height: 18px;
            background: transparent;
            border: none;
            cursor: pointer;
            z-index: 1010;
          }
          .hamburger span {
            width: 100%;
            height: 2px;
            background-color: var(--primary-color);
            transition: all 0.3s ease;
          }
          .hamburger.open span:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }
          .hamburger.open span:nth-child(2) {
            opacity: 0;
          }
          .hamburger.open span:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }
          .mobile-only-btn {
            display: none;
            margin-top: 20px;
          }
          @media (max-width: 991px) {
            .hamburger {
              display: flex;
              margin-left: 15px;
            }
            .nav-links {
              position: fixed;
              top: 0;
              right: -100%;
              width: 280px;
              height: 100vh;
              background-color: var(--bg-white);
              box-shadow: -5px 0 15px rgba(0,0,0,0.05);
              flex-direction: column;
              align-items: flex-start;
              padding: 100px 40px 40px 40px;
              gap: 20px;
              transition: all 0.3s ease-in-out;
              z-index: 1005;
            }
            .nav-links.active {
              right: 0;
            }
            .mobile-only-btn {
              display: block;
            }
            .hidden-tablet-mobile {
              display: none !important;
            }
          }
          @media (max-width: 767px) {
            .hidden-mobile {
              display: none !important;
            }
          }
        `}</style>
      </header>
    </>
  );
}

export function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="grid-4" style={{ alignItems: 'center' }}>
          
          {/* Socials Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="#" aria-label="Facebook" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff', border: '1px solid rgba(46,49,146,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '15px' }}>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff', border: '1px solid rgba(46,49,146,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '15px' }}>
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#fff', border: '1px solid rgba(46,49,146,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', fontSize: '15px' }}>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Call Us Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h3 style={{ fontSize: '14px', color: 'var(--secondary-color)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
              Call Us
            </h3>
            <h6 style={{ fontSize: '18px', color: 'var(--primary-color)', fontWeight: '700', margin: 0 }}>
              (+123) 456 78 900
            </h6>
          </div>

          {/* Email Us Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <h3 style={{ fontSize: '14px', color: 'var(--secondary-color)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>
              Email Us
            </h3>
            <h6 style={{ fontSize: '18px', color: 'var(--primary-color)', fontWeight: '700', margin: 0 }}>
              <a href="mailto:info@yourdomain.com" style={{ color: 'var(--primary-color)' }}>info@yourdomain.com</a>
            </h6>
          </div>

          {/* Newsletter Column */}
          <div>
            <h6 style={{ fontSize: '16px', color: 'var(--primary-color)', fontWeight: '700', marginBottom: '15px' }}>
              Subcribe our Newsletter
            </h6>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
              <input 
                type="email" 
                placeholder="Your Email Address" 
                required 
                style={{ 
                  flexGrow: 1, 
                  padding: '12px 20px', 
                  borderRadius: '30px', 
                  border: '1px solid rgba(46,49,146,0.15)', 
                  background: '#fff', 
                  color: '#000', 
                  fontSize: '14px',
                  outline: 'none'
                }} 
              />
              <button 
                type="submit" 
                style={{ 
                  padding: '12px 25px', 
                  borderRadius: '30px', 
                  background: 'var(--primary-color)', 
                  color: '#fff', 
                  border: 'none', 
                  fontWeight: '700', 
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
              >
                Go
              </button>
            </form>
          </div>

        </div>

        {/* Horizontal Divider Line */}
        <div style={{ borderTop: '1px solid rgba(46,49,146,0.1)', margin: '40px 0' }} />

        {/* Middle Footer Row with 4 Columns side-by-side */}
        <div className="grid-4" style={{ alignItems: 'flex-start', gap: '30px' }}>
          
          {/* Column 1: Services */}
          <div>
            <h6 style={{ fontSize: '16px', color: 'var(--primary-color)', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Services</h6>
            <div style={{ display: 'flex', gap: '30px' }}>
              <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><Link href="/demotwo/about">About Us</Link></li>
                <li><Link href="/demotwo/services">Our Services</Link></li>
                <li><Link href="/demotwo/appointment">Appointment</Link></li>
                <li><Link href="/demotwo/privacy-policy">Privacy Policy</Link></li>
                <li><Link href="/demotwo/contact">Contact Us</Link></li>
              </ul>
              <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#">Status Updates</a></li>
                <li><a href="#">How-To Videos</a></li>
                <li><a href="#">Submit Ticket</a></li>
                <li><a href="#">Live Chat</a></li>
                <li><a href="#">Report Abuse</a></li>
              </ul>
            </div>
          </div>

          {/* Column 2: Help & Support */}
          <div>
            <h6 style={{ fontSize: '16px', color: 'var(--primary-color)', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Help & Support</h6>
            <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#">Help Center</a></li>
              <li><Link href="/demotwo/services">Our Services</Link></li>
              <li><Link href="/demotwo/appointment">Appointment</Link></li>
              <li><Link href="/demotwo/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/demotwo/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h6 style={{ fontSize: '16px', color: 'var(--primary-color)', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Useful Links</h6>
            <div style={{ display: 'flex', gap: '30px' }}>
              <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><Link href="/demotwo/privacy-policy">Privacy Policy</Link></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Affiliate Program</a></li>
                <li><a href="#">Reviews</a></li>
                <li><a href="#">Payment Methods</a></li>
              </ul>
              <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><a href="#">Status Updates</a></li>
                <li><a href="#">How-To Videos</a></li>
                <li><a href="#">Submit Ticket</a></li>
                <li><a href="#">Live Chat</a></li>
                <li><a href="#">Report Abuse</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Working Hours */}
          <div>
            <h6 style={{ fontSize: '16px', color: 'var(--primary-color)', fontWeight: '700', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Working Hours</h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: '1.4' }}>Monday - Wednesday : 8 am - 8 pm</li>
              <li style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: '1.4' }}>Thursday : 9 am - 6 pm</li>
              <li style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: '1.4' }}>Friday : 9 am - 5 pm</li>
              <li style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: '1.4' }}>Saturday : 9 am - 4 pm</li>
              <li style={{ fontSize: '14.5px', color: 'var(--text-light)', lineHeight: '1.4' }}>Sunday : Closed</li>
            </ul>
          </div>

        </div>
        
        <div style={{ borderTop: '1px solid rgba(46,49,146,0.1)', margin: '40px 0 0 0' }} />

        <div className="footer-bottom" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <p style={{ margin: 0 }}>
            <a href="http://coreweblabs.com/" target="_blank" rel="noopener noreferrer" className="copyright-link" style={{ color: 'var(--primary-color)', fontWeight: '700', textDecoration: 'none' }}>coreweblabs</a>. &copy; 2026 Smile Care clinic. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({ title }: { title: string }) {
  return (
    <div className="page-header-box">
      <div className="container">
        <h1>{title}</h1>
        <ul className="breadcrumb-list">
          <li className="breadcrumb-item"><Link href="/demotwo">Home</Link></li>
          <li className="breadcrumb-item active">{title}</li>
        </ul>
      </div>
    </div>
  );
}

export function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-left, .animate-right, .animate-up, .animate-down, .animate-zoom');
    elements.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
