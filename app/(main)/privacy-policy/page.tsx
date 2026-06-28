import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy",
  description: "Learn about how Primecare Clinic collects, uses, and protects your personal and dental healthcare information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">Privacy Policy</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">privacy policy</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Privacy Policy Content Start */}
      <div className="page-privacy" style={{ padding: '80px 0', background: '#f9f9fc' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="privacy-content-box" style={{ background: '#fff', padding: '50px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <h2 style={{ marginBottom: '20px', color: 'var(--primary-color)' }}>Information Collection and Use</h2>
                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '30px' }}>
                  At Primecare Clinic, we collect personal information when you register with us, request an appointment, or contact us. This information may include your name, email address, phone number, medical record number, and date/time preferences for your appointment. We use this information solely to schedule your visits, communicate updates, and provide high-quality dental care services.
                </p>

                <h2 style={{ marginBottom: '20px', color: 'var(--primary-color)' }}>Data Protection</h2>
                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '30px' }}>
                  We implement robust administrative, technical, and physical security measures to safeguard your personal data against unauthorized access, loss, alteration, or disclosure. All dental patient records are held strictly confidential in compliance with healthcare privacy regulations.
                </p>

                <h2 style={{ marginBottom: '20px', color: 'var(--primary-color)' }}>Cookies and Tracking</h2>
                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '30px' }}>
                  Our website uses cookies to enhance user experience, remember preferences, and analyze web traffic anonymously. You can choose to disable cookies through your browser settings, though some features of the booking site may not function fully.
                </p>

                <h2 style={{ marginBottom: '20px', color: 'var(--primary-color)' }}>Third-Party Sharing</h2>
                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '30px' }}>
                  We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties, except as required by law or to trusted partners assisting us in operating our website and conducting our clinic business, provided those parties agree to keep the information confidential.
                </p>

                <h2 style={{ marginBottom: '20px', color: 'var(--primary-color)' }}>Contact Information</h2>
                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '0' }}>
                  If you have questions about this Privacy Policy, please reach out to us at <strong>support@domain.com</strong> or visit our contact page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Privacy Policy Content End */}
    </>
  );
}
