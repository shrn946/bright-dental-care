import Link from 'next/link';
import { testimonialsData } from '@/data/testimonials';
import TestimonialCard from '@/components/TestimonialCard';

export const metadata = {
  title: "Testimonials",
  description: "Read real stories and patient reviews about exceptional care and transformative smiles at Primecare Clinic.",
};

export default function Testimonials() {
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">Testimonials</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">testimonials</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page Testimonials Start */}
      <div className="page-testimonials">
        <div className="container">
          <div className="row">
            {testimonialsData.map((testimonial, index) => {
              // Calculate stagger delay
              const delay = `${(index % 3) * 0.2}s`;
              return (
                <div key={testimonial.name} className="col-lg-4 col-md-6 mb-4">
                  <TestimonialCard
                    name={testimonial.name}
                    role={testimonial.role}
                    image={testimonial.image}
                    rating={testimonial.rating}
                    content={testimonial.content}
                    delay={delay}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Page Testimonials End */}
    </>
  );
}
