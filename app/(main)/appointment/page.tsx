import Link from 'next/link';
import AppointmentForm from '@/components/AppointmentForm';
import Button from '@/components/Button';

export const metadata = {
  title: "Book Appointment",
  description: "Schedule your dental visit with our experienced dentists online at Primecare Clinic.",
};

export default function Appointment() {
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">Book Appointment</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">book appointment</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Book Appointment Section Start */}
      <div className="book-appointment page-appointment">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Book Your Appointment</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Book your dental visit online with primecare</h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </div>
      {/* Book Appointment Section End */}

      {/* Why Choose Us Section Start */}
      <div className="why-choose-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 order-lg-1 order-1">
              <div className="why-choose-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">why choose us</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Excellence results you can trust</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    Accurate diagnosis of dental diseases ensures effective treatment plans, helping to maintain oral health and prevent further complications.
                  </p>
                </div>
                <div className="why-choose-btn wow fadeInUp">
                  <Button label="contact us" href="/contact" variant="border" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 order-lg-2 order-3">
              <div className="why-choose-image">
                <figure>
                  <img src="/images/why-choose-image.png" alt="Why Choose Us" />
                </figure>
              </div>
            </div>

            <div className="col-lg-4 order-lg-3 order-2">
              <div className="why-choose-list wow fadeInUp">
                <div className="why-choose-item">
                  <div className="icon-box">
                    <img src="/images/icon-why-choose-1.svg" alt="" />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>Emergency Services</h3>
                    <p>The goal of our clinic is to provide friendly, caring dentistry and the.</p>
                  </div>
                </div>

                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.25s">
                  <div className="icon-box">
                    <img src="/images/icon-why-choose-2.svg" alt="" />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>positive patient reviews</h3>
                    <p>The goal of our clinic is to provide friendly, caring dentistry and the.</p>
                  </div>
                </div>

                <div className="why-choose-item wow fadeInUp" data-wow-delay="0.5s">
                  <div className="icon-box">
                    <img src="/images/icon-why-choose-3.svg" alt="" />
                  </div>
                  <div className="why-choose-item-content">
                    <h3>experienced professionals</h3>
                    <p>The goal of our clinic is to provide friendly, caring dentistry and the.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section End */}
    </>
  );
}
