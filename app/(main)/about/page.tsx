import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import Counter from '@/components/Counter';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: "About Us",
  description: "Learn more about Primecare Clinic, our mission, vision, and meet our team of expert dentists.",
};

export default function About() {
  const doctors = [
    { name: "Dr. Rohini Joe", role: "Lead Dentist", image: "/images/doctor-1.jpg" },
    { name: "Dr. James Smith", role: "Lead Dentist", image: "/images/doctor-2.jpg" },
    { name: "Dr. Michael John", role: "Lead Dentist", image: "/images/doctor-3.jpg" },
    { name: "Dr. Laura Davis", role: "Lead Dentist", image: "/images/doctor-4.jpg" },
  ];

  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">About Us</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">about us</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* About Us Section Start */}
      <div className="about-us page-about">
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

      {/* Our Excellence Section Start */}
      <div className="our-excellence">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-9">
              <div className="section-title">
                <h3 className="wow fadeInUp">committed to excellence</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Our vision for the future and mission to serve with integrity and compassion</h2>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="section-btn wow fadeInUp">
                <Button label="contact now" href="/contact" variant="border" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="excellence-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/images/icon-mission.svg" alt="" />
                </div>
                <div className="excellence-body">
                  <div className="excellence-title">
                    <h3>our mission</h3>
                  </div>
                  <div className="excellence-content">
                    <p>Our mission is to provide compassionate, high-quality dental care, promoting healthy smiles through personalized treatments and patient education.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="excellence-item wow fadeInUp" data-wow-delay="0.25s">
                <div className="icon-box">
                  <img src="/images/icon-vision.svg" alt="" />
                </div>
                <div className="excellence-body">
                  <div className="excellence-title">
                    <h3>our vision</h3>
                  </div>
                  <div className="excellence-content">
                    <p>Our vision is to be the leading dental care provider, recognized for medical excellence, cutting-edge technology, and patient satisfaction.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="excellence-item wow fadeInUp" data-wow-delay="0.5s">
                <div className="icon-box">
                  <img src="/images/icon-value.svg" alt="" />
                </div>
                <div className="excellence-body">
                  <div className="excellence-title">
                    <h3>our value</h3>
                  </div>
                  <div className="excellence-content">
                    <p>We value compassion, integrity, quality care, and innovation, ensuring that every patient leaves our clinic with a confident, healthy smile.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Excellence Section End */}

      {/* How It Work Section Start */}
      <div className="how-it-work about-how-work">
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

      {/* Our Doctors Section Start */}
      <div className="our-doctors">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-9">
              <div className="section-title">
                <h3 className="wow fadeInUp">our doctors</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Meet our expert dentists skilled professionals doctors</h2>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="section-btn wow fadeInUp">
                <Button label="all doctor" href="/about" variant="default" />
              </div>
            </div>
          </div>

          <div className="row">
            {doctors.map((doctor, index) => {
              const delays = ["0s", "0.2s", "0.4s", "0.6s"];
              return (
                <div key={doctor.name} className="col-lg-3 col-md-6">
                  <div className="team-member-item wow fadeInUp" data-wow-delay={delays[index]}>
                    <div className="team-image">
                      <figure className="image-anime">
                        <Image src={doctor.image} alt={doctor.name} width={270} height={350} style={{ objectFit: 'cover' }} />
                      </figure>
                      <div className="team-social-icon">
                        <ul>
                          <li><a href="#" className="social-icon"><i className="fa-brands fa-facebook-f"></i></a></li>
                          <li><a href="#" className="social-icon"><i className="fa-brands fa-instagram"></i></a></li>
                          <li><a href="#" className="social-icon"><i className="fa-brands fa-x-twitter"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="team-content">
                      <h3>{doctor.name}</h3>
                      <p>{doctor.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Our Doctors Section End */}
    </>
  );
}
