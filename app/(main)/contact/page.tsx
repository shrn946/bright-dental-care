import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Primecare Dental Clinic. Find our address, phone number, email, and location map, or send us a message.",
};

export default function Contact() {
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">Contact Us</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">contact us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page Contact Start */}
      <div className="page-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Contact Info Start */}
              <div className="contact-us-info">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    {/* Contact Us Item Start */}
                    <div className="contact-us-item wow fadeInUp">
                      <div className="icon-box">
                        <img src="/images/icon-location-info.svg" alt="" />
                      </div>
                      <div className="contact-info-content">
                        <h3>address</h3>
                        <p>Suite 239 69717 Annika Hills, Noemiton, New York, USA MI 25039-4157</p>
                      </div>
                    </div>
                    {/* Contact Us Item End */}
                  </div>

                  <div className="col-lg-4 col-md-6">
                    {/* Contact Us Item Start */}
                    <div className="contact-us-item wow fadeInUp" data-wow-delay="0.25s">
                      <div className="icon-box">
                        <img src="/images/icon-phone-info.svg" alt="" />
                      </div>
                      <div className="contact-info-content">
                        <h3>contact</h3>
                        <p>(+01) 789 987 645</p>
                        <p>(+01) 012 345 678</p>
                        <p>Support@domain.com</p>
                      </div>
                    </div>
                    {/* Contact Us Item End */}
                  </div>

                  <div className="col-lg-4 col-md-6">
                    {/* Contact Us Item Start */}
                    <div className="contact-us-item wow fadeInUp" data-wow-delay="0.5s">
                      <div className="icon-box">
                        <img src="/images/icon-watch-info.svg" alt="" />
                      </div>
                      <div className="contact-info-content">
                        <h3>opening hours</h3>
                        <p>Monday to Friday : 8am - 7pm</p>
                        <p>Saturday: 9am - 4pm</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                    {/* Contact Us Item End */}
                  </div>
                </div>
              </div>
              {/* Contact Info End */}

              {/* Contact Form Section */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      {/* Page Contact End */}

      {/* Google Map Section */}
      <div className="google-map" style={{ marginTop: '80px', marginBottom: '80px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="google-map-iframe" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)', height: '450px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, width: '100%', height: '100%' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Google Map End */}
    </>
  );
}
