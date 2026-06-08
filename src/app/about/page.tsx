import Link from "next/link";

export default function About() {
  return (
    <>
      {/* page title start */}
      <div className="page-title-area section-notch pt-170 pb-170" data-background="/assets/img/bg/page-title-bg.jpg">
        <div className="banner-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title">
                <h2>About our Kinter</h2>
                <div className="breadcrumb-list text-left">
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li>About</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page title end */}

      {/* about start */}
      <section className="about-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center mt-none-25">
            <div className="col-lg-6">
              <div className="about-image mt-25">
                <img src="/assets/img/about/about-02.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content-two pl-50 mt-25">
                <div className="section-title mb-30">
                  <h2 className="title">With Efficiency to More Opportunities</h2>
                  <p>Why I say old chap that is spiffing bodge, blag pardon me mufty Oxford butty bubble and squeak wind up, brown bread the full monty bloke ruddy cras tickety-boo squiffy, blag pardon me mufty Oxford butty bubble and squeak wind up</p>
                </div>
                <ul className="about-features">
                  <li>Best Learning School for Kids</li>
                  <li>Indoor/Outdoor Games for Little Kids</li>
                  <li>Professional &amp; Qualified Teacher</li>
                  <li>Indoor/Outdoor Games for Little Kids</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}

      {/* counter area start */}
      <section className="counter-area section-bg-two section-notch pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-counter text-center pb-30">
                <img src="/assets/img/icon/c-icon1.png" alt="" />
                <h3><span className="odometer" data-count="2500">00</span><span className="plus">+</span></h3>
                <p>Students Enrolled</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-counter text-center pb-30">
                <img src="/assets/img/icon/c-icon2.png" alt="" />
                <h3><span className="odometer" data-count="912">00</span><span className="plus">+</span></h3>
                <p>Best Awards Won</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-counter text-center pb-30">
                <img src="/assets/img/icon/c-icon3.png" alt="" />
                <h3><span className="odometer" data-count="370">00</span><span className="plus">+</span></h3>
                <p>Classes Completed</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-counter text-center pb-30">
                <img src="/assets/img/icon/c-icon4.png" alt="" />
                <h3><span className="odometer" data-count="648">00</span><span className="plus">+</span></h3>
                <p>Our Total Courses</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counter area end */}

      {/* video start */}
      <section className="video-area pt-120">
        <div className="container">
          <div className="video-image pos-rel">
            <img src="/assets/img/video/img-01.jpg" alt="" />
            <a className="popup-video video-icon" href="https://www.youtube.com/watch?v=RHgbJr4pf1A"><i className="far fa-play"></i></a>
          </div>
        </div>
      </section>
      {/* video end */}
      
      {/* brand area start */}
      <section className="brand-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="brand-active owl-carousel">
                <div className="single-brand">
                  <img src="/assets/img/brand/brand-01.jpg" alt="brand image" />
                </div>
                <div className="single-brand">
                  <img src="/assets/img/brand/brand-02.jpg" alt="brand image" />
                </div>
                <div className="single-brand">
                  <img src="/assets/img/brand/brand-03.jpg" alt="brand image" />
                </div>
                <div className="single-brand">
                  <img src="/assets/img/brand/brand-04.jpg" alt="brand image" />
                </div>
                <div className="single-brand">
                  <img src="/assets/img/brand/brand-05.jpg" alt="brand image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* brand area end */}
    </>
  );
}
