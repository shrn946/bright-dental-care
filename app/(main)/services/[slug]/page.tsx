import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/data/services';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetail({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Sidebar list of services, excluding the current one or keeping all
  const otherServices = servicesData;

  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">{service.name}</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item"><Link href="/services">services</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{service.name.toLowerCase()}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page Service Single Start */}
      <div className="page-service-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Service Single Content Start */}
              <div className="service-single-content">
                {/* Service Single Slider Start */}
                <div className="service-single-slider">
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="service-slider-image">
                          <figure>
                            <Image
                              src={service.image}
                              alt={service.name}
                              width={800}
                              height={450}
                              style={{ objectFit: 'cover' }}
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="service-slider-image">
                          <figure>
                            <Image
                              src="/images/service-img-1.jpg"
                              alt="Service Detail 1"
                              width={800}
                              height={450}
                              style={{ objectFit: 'cover' }}
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="service-slider-image">
                          <figure>
                            <Image
                              src="/images/service-img-2.jpg"
                              alt="Service Detail 2"
                              width={800}
                              height={450}
                              style={{ objectFit: 'cover' }}
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </div>
                {/* Service Single Slider End */}

                {/* Service Entry Content Start */}
                <div className="service-entry">
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    {service.fullDescription}
                  </p>
                  
                  <h2 className="text-anime-style-3">Key Benefits of {service.name}</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    Choosing {service.name.toLowerCase()} offers significant advantages for your overall dental wellness and aesthetic confidence. Here are some key benefits:
                  </p>

                  {/* Service Entry Image and List Start */}
                  <div className="service-entry-image">
                    <div className="row align-items-center">
                      <div className="col-md-6 col-12">
                        <div className="service-entry-img">
                          <figure className="image-anime reveal">
                            <img src="/images/service-entry-img-1.jpg" alt="" />
                          </figure>
                        </div>
                      </div>

                      <div className="col-md-6 col-12">
                        <div className="service-entry-list">
                          <ul className="wow fadeInUp" data-wow-delay="0.6s">
                            {service.benefits.map((benefit, i) => (
                              <li key={i}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Service Entry Image and List End */}

                  <h2 className="text-anime-style-3 mt-5">Our Treatment Process</h2>
                  <ol className="wow fadeInUp" data-wow-delay="0.2s" style={{ paddingLeft: '20px', marginBottom: '30px' }}>
                    {service.process.map((step, i) => (
                      <li key={i} style={{ marginBottom: '10px', fontSize: '16px', color: '#666' }}>
                        <strong>{i + 1}. {step.split(' ')[0]} {step.split(' ')[1] || ''}:</strong> {step}
                      </li>
                    ))}
                  </ol>
                </div>
                {/* Service Entry Content End */}

                {/* Service Single Faqs Start */}
                <div className="service-single-faqs">
                  <div className="section-title">
                    <h3 className="wow fadeInUp">faqs</h3>
                    <h2 className="text-anime-style-2" data-cursor="-opaque">Frequently Asked Questions</h2>
                  </div>

                  <div className="our-faq-section">
                    <div className="faq-accordion" id="faqaccordion">
                      {service.faq.map((item, index) => {
                        const isFirst = index === 0;
                        return (
                          <div key={index} className="accordion-item wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                              <button
                                className={`accordion-button ${isFirst ? '' : 'collapsed'}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded={isFirst ? 'true' : 'false'}
                                aria-controls={`collapse${index}`}
                              >
                                {item.question}
                              </button>
                            </h2>
                            <div
                              id={`collapse${index}`}
                              className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                              aria-labelledby={`heading${index}`}
                              data-bs-parent="#faqaccordion"
                            >
                              <div className="accordion-body">
                                <p>{item.answer}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* Service Single Faqs End */}
              </div>
              {/* Service Single Content End */}
            </div>

            <div className="col-lg-4">
              {/* Service Sidebar Start */}
              <div className="service-sidebar">
                {/* Service Categories List Start */}
                <div className="service-catagery-list wow fadeInUp">
                  <h3>our services</h3>
                  <ul>
                    {otherServices.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/services/${item.slug}`}
                          className={item.slug === slug ? 'active-service' : ''}
                          style={{
                            display: 'block',
                            color: item.slug === slug ? 'var(--primary-color)' : 'inherit',
                            fontWeight: item.slug === slug ? '600' : 'normal',
                          }}
                        >
                          {item.name.toLowerCase()}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Service Categories List End */}

                {/* Working Time Box Start */}
                <div className="working-time-box wow fadeInUp" data-wow-delay="0.25s">
                  <div className="working-box-title">
                    <h3>Working Hours</h3>
                  </div>
                  <div className="working-time-list">
                    <ul>
                      <li><span>Monday To Friday </span>8am - 7pm</li>
                      <li><span>Saturday </span>9am - 4pm</li>
                      <li><span>Sunday </span>Closed</li>
                    </ul>
                  </div>
                </div>
                {/* Working Time Box End */}

                {/* Section CTA Box Start */}
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
                {/* Section CTA Box End */}
              </div>
              {/* Service Sidebar End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Service Single End */}
    </>
  );
}
