import Link from 'next/link';
import { servicesData } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';

export const metadata = {
  title: "Our Services",
  description: "Explore our wide range of dental care services, including general dentistry, cosmetic surgery, teeth whitening, and implants.",
};

export default function Services() {
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">Services</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">services</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page Services Grid Start */}
      <div className="page-services">
        <div className="container">
          <div className="row">
            {servicesData.map((service, index) => {
              // Calculate stagger delay
              const delay = `${(index % 3) * 0.2}s`;
              return (
                <div key={service.slug} className="col-lg-4 col-md-6 mb-4">
                  <ServiceCard
                    name={service.name}
                    slug={service.slug}
                    icon={service.icon}
                    image={service.image}
                    description={service.description}
                    delay={delay}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Page Services Grid End */}

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

      {/* Our Faqs Section Start */}
      <div className="our-faqs page-about-faqs page-service-faqs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="our-faqs-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">FAQs</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Everything you need to know about dental care</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">Find quick answers to common questions about our dental services, procedures, and patient care in our FAQ section.</p>
                </div>

                <div className="section-cta-box wow fadeInUp" data-wow-delay="0.5s">
                  <div className="icon-box">
                    <img src="/images/icon-faqs-cta-box.svg" alt="" />
                  </div>
                  <div className="section-cta-content">
                    <p>We always take care of your smile</p>
                    <h3>24/7 Emergency</h3>
                    <span>(+01) 789 987 645</span>
                  </div>
                </div>
              </div>  
            </div>

            <div className="col-lg-6">
              <div className="our-faq-section">
                <div className="faq-accordion" id="faqaccordion">
                  <div className="accordion-item wow fadeInUp">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        What services do you offer?
                      </button>
                    </h2>
                    <div id="collapse1" className="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>We offer a comprehensive range of dental services including general dentistry, cosmetic treatments, teeth whitening, implants, root canals, pediatric care, emergency care, and clear aligners.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                    <h2 className="accordion-header" id="heading2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        How often should I visit the dentist?
                      </button>
                    </h2>
                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>For most patients, we recommend a routine check-up and cleaning every six months to maintain healthy teeth and gums, and to diagnose any potential problems early.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                    <h2 className="accordion-header" id="heading3">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        Do you accept insurance?
                      </button>
                    </h2>
                    <div id="collapse3" className="accordion-collapse collapse show" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>Yes, we accept a variety of insurance plans. Please contact our office with your insurance information to verify if your provider is accepted and to check your coverage limits.</p>
                      </div>
                    </div>
                  </div>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Faqs Section End */}
    </>
  );
}
