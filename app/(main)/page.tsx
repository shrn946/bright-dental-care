'use client';

import Link from 'next/link';
import Image from 'next/image';
import { servicesData } from '@/data/services';
import Button from '@/components/Button';
import Counter from '@/components/Counter';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  // Take first 3 services for preview on home page
  const homeServices = servicesData.slice(0, 3);

  return (
    <>
      {/* Hero Section Start */}
      <div className="hero">
        <div className="hero-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                {/* Hero Content Start */}
                <div className="hero-content">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <h1 data-cursor="-opaque">
                      Your smile{' '}
                      <img src="/images/hero-title-img-1.jpg" alt="" style={{ borderRadius: '50px', width: '90px', height: '54px', objectFit: 'cover', display: 'inline-block', margin: '0 8px' }} />{' '}
                      matters expert dental care{' '}
                      <img src="/images/hero-title-img-2.jpg" alt="" style={{ borderRadius: '50px', width: '90px', height: '54px', objectFit: 'cover', display: 'inline-block', margin: '0 8px' }} />{' '}
                      a bright tomorrow
                    </h1>
                    <p className="wow fadeInUp" data-wow-delay="0.25s">
                      Experience top-quality dental care focused on your smile's health and beauty. Trust us to create a brighter, healthier tomorrow.
                    </p>
                  </div>
                  {/* Section Title End */}

                  {/* Hero Content Body Start */}
                  <div className="hero-content-body">
                    {/* Hero Counter Box Start */}
                    <div className="hero-counter-box">
                      <h2><Counter end={24} />X 7</h2>
                      <p>emergency service</p>
                    </div>
                    {/* Hero Counter Box End */}

                    {/* Hero Counter Box Start */}
                    <div className="hero-counter-box">
                      <h2><Counter end={25} />K</h2>
                      <p>recover patient</p>
                    </div>
                    {/* Hero Counter Box End */}

                    {/* Hero Counter Box Start */}
                    <div className="hero-counter-box">
                      <h2><Counter end={15} />+</h2>
                      <p>market experience</p>
                    </div>
                    {/* Hero Counter Box End */}
                  </div>
                  {/* Hero Content Body End */}

                  {/* Hero Content Footer Start */}
                  <div className="hero-content-footer wow fadeInUp" data-wow-delay="0.5s">
                    <Button label="book now" href="/appointment" variant="default" />
                    <Button label="enquiries" href="/contact" variant="highlighted" />
                  </div>
                  {/* Hero Content Footer End */}
                </div>
                {/* Hero Content End */}
              </div>

              <div className="col-lg-6">
                {/* Hero Images Start */}
                <div className="hero-image">
                  {/* Hero Image Start */}
                  <div className="hero-img">
                    <ScrollReveal className="image-anime">
                      <img src="/images/hero-image.jpg" alt="Expert Dental Care" />
                    </ScrollReveal>
                  </div>
                  {/* Hero Image End */}

                  {/* Company Service Rating Box Start */}
                  <div className="company-service-rating">
                    <div className="company-rating-icon">
                      <ul>
                        <li>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </div>
                    <div className="company-rating-content">
                      <h3>Best Service & 5 Star</h3>
                      <p>Hospital are crucial institutions in our society</p>
                    </div>
                  </div>
                  {/* Company Service Rating Box End */}
                </div>
                {/* Hero Images End */}
              </div>
            </div>
          </div>
        </div>

        {/* Our Cta Box Start */}
        <div className="our-cta-box">
          <div className="container">
            <div className="row cta-content-box">
              <div className="col-lg-4 col-md-6">
                {/* Cta Item Start */}
                <div className="cta-item wow fadeInUp">
                  <div className="icon-box">
                    <img src="/images/icon-phone.svg" alt="" />
                  </div>
                  <div className="cta-item-content">
                    <h3>Need Dental Services ?</h3>
                    <p>(+01) 789 987 645</p>
                  </div>
                </div>
                {/* Cta Item End */}
              </div>

              <div className="col-lg-4 col-md-6">
                {/* Cta Item Start */}
                <div className="cta-item wow fadeInUp" data-wow-delay="0.25s">
                  <div className="icon-box">
                    <img src="/images/icon-watch.svg" alt="" />
                  </div>
                  <div className="cta-item-content">
                    <h3>Opening Hours</h3>
                    <p>Mon to Sat 9:00AM to 9:00PM</p>
                  </div>
                </div>
                {/* Cta Item End */}
              </div>

              <div className="col-lg-4 col-md-12">
                <div className="cta-btn wow fadeInUp" data-wow-delay="0.5s">
                  <Button label="Make An Appointment" href="/appointment" variant="default" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Cta Box End */}
      </div>
      {/* Hero Section End */}

      {/* About Us Section Start */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="about-image">
                <div className="about-img">
                  <figure className="image-anime">
                    <Image
                      src="/images/about-image.jpg"
                      alt="About Clinic"
                      width={550}
                      height={550}
                      style={{ objectFit: 'cover' }}
                    />
                  </figure>
                </div>

                {/* Company Experience Start */}
                <div className="company-experience">
                  <div className="company-experience-box">
                    <div className="company-experience-counter">
                      <h2><Counter end={25} />+</h2>
                    </div>
                    <div className="company-experience-content">
                      <p>experience in medical services</p>
                    </div>
                  </div>
                </div>
                {/* Company Experience End */}
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1">
              <div className="about-us-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">About Us</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Commitment to your smile's health and beauty</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments. With dental practices throughout the world.
                  </p>
                </div>

                <div className="about-us-body wow fadeInUp" data-wow-delay="0.5s">
                  <div className="about-body-item">
                    <div className="about-counter">
                      <h2><Counter end={98} />%</h2>
                    </div>
                    <div className="about-counter-content">
                      <p>invisalign treatment complete</p>
                    </div>
                  </div>

                  <div className="about-body-item">
                    <div className="about-counter">
                      <h2><Counter end={100} />%</h2>
                    </div>
                    <div className="about-counter-content">
                      <p>patient satisfaction rate</p>
                    </div>
                  </div>
                </div>

                <div className="about-us-footer wow fadeInUp" data-wow-delay="0.75s">
                  <div className="about-us-footer-btn">
                    <Button label="more about" href="/about" variant="default" />
                  </div>

                  <div className="about-company-founder">
                    <div className="company-founder-image">
                      <figure className="image-anime">
                        <img src="/images/about-company-founder-img.jpg" alt="Founder" />
                      </figure>
                    </div>
                    <div className="company-founder-content">
                      <h3>Dianne Russell</h3>
                      <p>Co founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}

      {/* Our Services Section Start */}
      <div className="our-service">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h3 className="wow fadeInUp">our services</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Comprehensive dental care tailored services for every smile</h2>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="section-btn wow fadeInUp">
                <Button label="all services" href="/services" variant="default" />
              </div>
            </div>
          </div>

          <div className="row">
            {homeServices.map((service, index) => {
              const delays = ["0s", "0.25s", "0.5s"];
              return (
                <div key={service.slug} className="col-lg-4 col-md-6">
                  <div className="service-item wow fadeInUp" data-wow-delay={delays[index]}>
                    <div className="service-header">
                      <div className="service-item-box">
                        <div className="icon-box">
                          <img src={service.icon} alt={service.name} />
                        </div>
                        <div className="service-item-content">
                          <h3>{service.name}</h3>
                        </div>
                      </div>
                      <div className="service-readmore">
                        <Link href={`/services/${service.slug}`}>
                          <img src="/images/arrow-accent.svg" alt="Read more" />
                        </Link>
                      </div>
                    </div>
                    <div className="service-body">
                      <p>{service.description}</p>
                    </div>
                    <div className="service-image">
                      <Link href={`/services/${service.slug}`}>
                        <figure className="image-anime">
                          <Image
                            src={service.image}
                            alt={service.name}
                            width={400}
                            height={250}
                            style={{ objectFit: 'cover' }}
                          />
                        </figure>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Our Services Section End */}

      {/* Our Expertise Section Start */}
      <div className="our-expertise">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="expertise-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">expertise</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Commitment to your oral health and smile aesthetics</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.25s">
                    A specialist doctor is available for any need. We are available in 150+ locations with modern facilities and experienced doctors.
                  </p>
                </div>

                <div className="expertise-body">
                  <div className="expertise-list-box wow fadeInUp" data-wow-delay="0.5s">
                    <div className="expertise-list-title">
                      <h3>The needs of our patients always come first</h3>
                    </div>
                    <div className="expertise-list-content">
                      <p>A specialist doctor is available for any need. We are available in 150+ locations with modern facilities and experienced doctors.</p>
                    </div>
                  </div>

                  <div className="expertise-list-box wow fadeInUp" data-wow-delay="0.75s">
                    <div className="expertise-list-title">
                      <h3>A world leader in dental education</h3>
                    </div>
                    <div className="expertise-list-content">
                      <p>We make it a priority to educate dentists from around the world and also share the latest advances in patient care and services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="expertise-image">
                <div className="expertise-img-1">
                  <ScrollReveal className="image-anime">
                    <img src="/images/expertise-img-1.jpg" alt="Expertise 1" />
                  </ScrollReveal>
                </div>

                <div className="expertise-img-2">
                  <ScrollReveal className="image-anime">
                    <img src="/images/expertise-img-2.jpg" alt="Expertise 2" />
                  </ScrollReveal>
                </div>

                {/* Expert Doctor Start */}
                <div className="expert-doctor">
                  <div className="icon-box">
                    <img src="/images/icon-phone.svg" alt="" />
                  </div>
                  <div className="expert-doctor-content">
                    <h3><Counter end={250} />+</h3>
                    <p>Expert Doctor</p>
                  </div>
                </div>
                {/* Expert Doctor End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Expertise Section End */}

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

      {/* How It Work Section Start */}
      <div className="how-it-work">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="how-work-image">
                <div className="how-work-img-1">
                  <ScrollReveal className="image-anime">
                    <img src="/images/how-work-img-1.jpg" alt="Work 1" />
                  </ScrollReveal>
                </div>

                <div className="how-work-img-2">
                  <ScrollReveal className="image-anime">
                    <img src="/images/how-work-img-2.jpg" alt="Work 2" />
                  </ScrollReveal>
                </div>

                <div className="how-work-img-3">
                  <ScrollReveal className="image-anime">
                    <img src="/images/how-work-img-3.jpg" alt="Work 3" />
                  </ScrollReveal>
                </div>

                <div className="doctor-work-img-box">
                  <figure>
                    <img src="/images/expert-doctor-image.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1">
              <div className="how-work-content">
                <div className="section-title">
                  <h3 className="wow fadeInUp">how it work</h3>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Understanding the patient journey</h2>
                </div>

                <div className="faq-accordion how-work-accordion" id="Workaccordion">
                  <div className="accordion-item wow fadeInUp">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span>1.</span>Do you accept insurance?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#Workaccordion">
                      <div className="accordion-body">
                        <p>Yes, we accept most major dental insurance plans. Please contact us to verify your coverage.</p>
                      </div>
                    </div>
                  </div>
          
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.25s">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span>2.</span>What services do you offer?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#Workaccordion">
                      <div className="accordion-body">
                        <p>Yes, we accept most major dental insurance plans. Please contact us to verify your coverage.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <span>3.</span>How often should I visit the dentist?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#Workaccordion">
                      <div className="accordion-body">
                        <p>Yes, we accept most major dental insurance plans. Please contact us to verify your coverage.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How It Work Section End */}

      {/* Our Testimonial Section Start */}
      <div className="our-testimonials">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h3 className="wow fadeInUp">testimonial</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Real stories of exceptional care and transformative smiles</h2>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="section-btn wow fadeInUp">
                <Button label="contact us now" href="/contact" variant="border" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-slider">
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-item">  
                        <div className="testimonial-header">
                          <div className="testimonial-quote">
                            <img src="/images/icon-quote.svg" alt="" />
                          </div>
                          <div className="testimonial-content">
                            <p>Dr. Smith and the team were amazing! From the moment I walked in, I felt at ease. The care and attention to detail were outstanding. My smile has never looked better! I've always been nervous about visiting the dentist, but the staff here made me feel so comfortable. They explained everything clearly and made sure I was okay throughout the procedure The best dental experience I've ever had! The hygienists are gentle.</p>                  
                          </div>
                        </div>
                        <div className="testimonial-body">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src="/images/author-1.jpg" alt="Dianne Russell" />
                            </figure>
                          </div>            
                          <div className="author-content">
                            <h3>dianne russell</h3>
                            <p>co. founder</p>
                          </div>
                        </div>                          
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonial-item">  
                        <div className="testimonial-header">
                          <div className="testimonial-quote">
                            <img src="/images/icon-quote.svg" alt="" />
                          </div>
                          <div className="testimonial-content">
                            <p>My teeth whitening treatment was completely pain-free and the results are unbelievable. The clinic has a very welcoming environment and amazing doctors. The care and attention to detail were outstanding. My smile has never looked better!</p>                  
                          </div>
                        </div>
                        <div className="testimonial-body">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src="/images/author-2.jpg" alt="Harper Green" />
                            </figure>
                          </div>            
                          <div className="author-content">
                            <h3>harper green</h3>
                            <p>patient</p>
                          </div>
                        </div>                          
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-btn">
                    <div className="testimonial-button-prev"></div>
                    <div className="testimonial-button-next"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Testimonial Section End */}

      {/* Our Transformation Section Start */}
      <div className="our-transformation">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-9">
              <div className="section-title">
                <h3 className="wow fadeInUp">See the Transformation</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Stunning results that showcase the life changing impact</h2>
              </div>
            </div>
    
            <div className="col-lg-3">
              <div className="section-btn wow fadeInUp">
                <Button label="contact now" href="/contact" variant="default" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">          
              {/* Transformation Image Start */}
              <div className="transformation_image">          
                <img src="/images/transformation-img-1.jpg" alt="Before" />
                <img src="/images/transformation-img-2.jpg" alt="After" />
              </div>
              {/* Transformation Image End */}
            </div>

            <div className="col-md-6">          
              {/* Transformation Image Start */}
              <div className="transformation_image">          
                <img src="/images/transformation-img-3.jpg" alt="Before" />
                <img src="/images/transformation-img-4.jpg" alt="After" />
              </div>
              {/* Transformation Image End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Transformation Section End */}

      {/* Our Faqs Section Start */}
      <div className="our-faqs">
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

                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                    <h2 className="accordion-header" id="heading4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        What can I expect during my first visit?
                      </button>
                    </h2>
                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                      <div className="accordion-body">
                        <p>Your first visit involves a comprehensive oral examination, cleanings, necessary digital X-rays, and a personalized consultation to discuss your dental health goals and treatment plan.</p>
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
