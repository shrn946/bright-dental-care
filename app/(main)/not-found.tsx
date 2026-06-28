import Link from 'next/link';

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist on Primecare Clinic website.",
};

export default function NotFound() {
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">Page Not Found</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">404 error</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* error section start */}
      <div className="error-page" style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <div className="row">
            <div className="error-page-image wow fadeInUp" data-wow-delay="0.25s" style={{ marginBottom: '40px' }}>
              <img src="/images/404-error-img.png" alt="404 Error" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="error-page-content">
              <div className="error-page-content-heading">
                <h2 className="text-anime-style-3" data-cursor="-opaque">Oops! Page Not Found</h2>
              </div>
              <div className="error-page-content-body">
                <p className="wow fadeInUp" data-wow-delay="0.5s" style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
                  The page you are looking for does not exist
                </p>
                <Link className="btn-default wow fadeInUp" data-wow-delay="0.75s" href="/">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* error section end */}
    </>
  );
}
