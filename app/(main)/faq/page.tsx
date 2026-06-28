import Link from 'next/link';
import { faqData } from '@/data/faq';

export const metadata = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about dental care, check-ups, teeth whitening, and implants at Primecare.",
};

export default function FAQ() {
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">Frequently Asked Questions</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">FAQs</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page FAQs Start */}
      <div className="page-faqs">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-1 order-2">
              <div className="page-faqs-catagery">
                {faqData.map((category, catIndex) => (
                  <div key={category.title} className="page-faq-accordion mb-5" id={`category-${catIndex}`}>
                    <div className="faq-accordion-title">
                      <h2 className="text-anime-style-3" data-cursor="-opaque">
                        {category.title}
                      </h2>
                    </div>
                    {/* FAQ Accordion Start */}
                    <div className="faq-accordion" id={`accordion-${catIndex}`}>
                      {category.items.map((item, itemIndex) => {
                        const isFirst = catIndex === 0 && itemIndex === 0;
                        return (
                          <div
                            key={item.id}
                            className="accordion-item wow fadeInUp"
                            data-wow-delay={`${itemIndex * 0.15}s`}
                          >
                            <h2 className="accordion-header" id={`heading-${item.id}`}>
                              <button
                                className={`accordion-button ${isFirst ? '' : 'collapsed'}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${item.id}`}
                                aria-expanded={isFirst ? 'true' : 'false'}
                                aria-controls={`collapse-${item.id}`}
                              >
                                {item.question}
                              </button>
                            </h2>
                            <div
                              id={`collapse-${item.id}`}
                              className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                              aria-labelledby={`heading-${item.id}`}
                              data-bs-parent={`#accordion-${catIndex}`}
                            >
                              <div className="accordion-body">
                                <p>{item.answer}</p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* FAQ Accordion End */}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4 order-lg-2 order-1">
              <div className="service-sidebar" style={{ position: 'sticky', top: '100px' }}>
                {/* Working Time Box Start */}
                <div className="working-time-box wow fadeInUp">
                  <div className="working-box-title">
                    <h3>Working Hours</h3>
                  </div>
                  <div className="working-time-list">
                    <ul>
                      <li>
                        <span>Monday To Friday </span>8am - 7pm
                      </li>
                      <li>
                        <span>Saturday </span>9am - 4pm
                      </li>
                      <li>
                        <span>Sunday </span>Closed
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Working Time Box End */}

                {/* Section CTA Box Start */}
                <div className="section-cta-box wow fadeInUp" data-wow-delay="0.25s">
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
            </div>
          </div>
        </div>
      </div>
      {/* Page FAQs End */}
    </>
  );
}
