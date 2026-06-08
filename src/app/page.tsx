import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* hero start */}
      <section className="hero-slider hero-style-1 section-notch">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="slide-inner slide-overlay slide-bg-image" data-background="/assets/img/slider/slide-01.jpg">
                <div className="container">
                  <div data-swiper-parallax="200" className="slide-span">
                    <span>A New Approach to</span>
                  </div>
                  <div data-swiper-parallax="300" className="slide-title">
                    <h2>Kids Education</h2>
                  </div>
                  <div data-swiper-parallax="400" className="slide-text">
                    <p>The Universe is one great kindergarten for man. Everything that exists has brought with it its own peculiar lesson.</p>
                  </div>
                  <div className="clearfix"></div>
                  <div className="slider-btn">
                    <Link data-swiper-parallax="500" className="thm-btn thm-btn-2" href="/contact">Admission Now</Link>
                    <Link data-swiper-parallax="550" className="thm-btn" href="/classes">Our Classes</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-inner slide-overlay slide-bg-image" data-background="/assets/img/slider/slide-02.jpg">
                <div className="container">
                  <div data-swiper-parallax="200" className="slide-span">
                    <span>A New Approach to</span>
                  </div>
                  <div data-swiper-parallax="300" className="slide-title">
                    <h2>Kids Education</h2>
                  </div>
                  <div data-swiper-parallax="400" className="slide-text">
                    <p>The Universe is one great kindergarten for man. Everything that exists has brought with it its own peculiar lesson.</p>
                  </div>
                  <div className="clearfix"></div>
                  <div className="slider-btn">
                    <Link data-swiper-parallax="500" className="thm-btn thm-btn-2" href="/contact">Admission Now</Link>
                    <Link data-swiper-parallax="550" className="thm-btn" href="/classes">Our Classes</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="slide-inner slide-overlay slide-bg-image" data-background="/assets/img/slider/slide-03.jpg">
                <div className="container">
                  <div data-swiper-parallax="200" className="slide-span">
                    <span>A New Approach to</span>
                  </div>
                  <div data-swiper-parallax="300" className="slide-title">
                    <h2>Kids Education</h2>
                  </div>
                  <div data-swiper-parallax="400" className="slide-text">
                    <p>The Universe is one great kindergarten for man. Everything that exists has brought with it its own peculiar lesson.</p>
                  </div>
                  <div className="clearfix"></div>
                  <div className="slider-btn">
                    <Link data-swiper-parallax="500" className="thm-btn thm-btn-2" href="/contact">Admission Now</Link>
                    <Link data-swiper-parallax="550" className="thm-btn" href="/classes">Our Classes</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* swipper controls */}
          <div className="container">
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </section>

      {/* feature area start */}
      <section className="feature-area pt-110 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="section-title text-center mb-60">
                <h2 className="title">Welcome to Our Kinter</h2>
                <p>Here is what you can expect from a house cleaning from a Handy professional. Download the app to share further cleaning details and instructions!</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-item text-center mb-30">
                <div className="feature-shape">
                  <img src="/assets/img/icon/f-icon-1.png" alt="" />
                </div>
                <div className="feature-content">
                  <div className="feature-title">
                    <h3>Active Learning</h3>
                  </div>
                  <p>Since have been visonary relable sofware engnern partne have been and visionary</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-item text-center mb-30">
                <div className="feature-shape feature-shape-2">
                  <img src="/assets/img/icon/f-icon-2.png" alt="" />
                </div>
                <div className="feature-content">
                  <div className="feature-title feature-title-2">
                    <h3>Expert Teachers</h3>
                  </div>
                  <p>Since have been visonary relable sofware engnern partne have been and visionary</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-item text-center mb-30">
                <div className="feature-shape feature-shape-3">
                  <img src="/assets/img/icon/f-icon-3.png" alt="" />
                </div>
                <div className="feature-content">
                  <div className="feature-title feature-title-3">
                    <h3>Parents Day</h3>
                  </div>
                  <p>Since have been visonary relable sofware engnern partne have been and visionary</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="feature-item text-center mb-30">
                <div className="feature-shape feature-shape-4">
                  <img src="/assets/img/icon/f-icon-4.png" alt="" />
                </div>
                <div className="feature-content">
                  <div className="feature-title feature-title-4">
                    <h3>Music Lessons</h3>
                  </div>
                  <p>Since have been visonary relable sofware engnern partne have been and visionary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about area start */}
      <section className="about-area section-bg-one section-notch">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 d-flex align-items-center">
              <div className="about-content pt-100 pb-100">
                <div className="section-title section-title-white mb-30">
                  <h2 className="title">About Kindergarten School</h2>
                  <p>Enthusastcay deminate competitive oportunities through transparent and action Compelngly seize andvirschemas through intermandated creative adiea sources Enthusiasticay plagiarize clientcentered and relationships foovalent experiences Distinctively architect 24 naservice for wreless andebusiness ahosfluorescently Efficiently comunicate coperative andmethods empowerment awesome atrough Monotonectaly myocardinate crioss and functional niche markets and functional scenarios awesome nteractively utilize viral.</p>
                </div>
                <div className="about-btn">
                  <Link className="thm-btn thm-btn-2" href="/contact">admission now</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about-img d-none d-lg-block f-right">
                <img src="/assets/img/about/about.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* class area start */}
      <section className="class-area pt-110 pb-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="section-title text-center mb-60">
                <h2 className="title">Our Popular Classes</h2>
                <p>Here is what you can expect from a house cleaning from a Handy professional. Download the app to share further cleaning details and instructions!</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="class-item mb-30">
                <div className="class-img">
                  <img src="/assets/img/class/class-1.jpg" alt="class image" />
                </div>
                <div className="class-content">
                  <h4 className="title"><Link href="/class-single">Imagination Classes</Link></h4>
                  <p>Class Time : 08:00 am - 10:00 am</p>
                  <p>Draticaly novate fuly rarched an plications awesome theme education</p>
                </div>
                <ul className="schedule">
                  <li><span>Class Size</span><span className="class-size">30 - 40</span></li>
                  <li><span>Years Old</span><span className="class-size class-size-2">06 - 09</span></li>
                  <li><span>Tution Fee</span><span className="class-size">$320.00</span></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="class-item mb-30">
                <div className="class-img">
                  <img src="/assets/img/class/class-2.jpg" alt="class image" />
                </div>
                <div className="class-content">
                  <h4 className="title"><Link href="/class-single">Talented Explorers</Link></h4>
                  <p>Class Time : 08:00 am - 10:00 am</p>
                  <p>Draticaly novate fuly rarched an plications awesome theme education</p>
                </div>
                <ul className="schedule">
                  <li><span>Class Size</span><span className="class-size">30 - 40</span></li>
                  <li><span>Years Old</span><span className="class-size class-size-2">06 - 09</span></li>
                  <li><span>Tution Fee</span><span className="class-size">$320.00</span></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="class-item mb-30">
                <div className="class-img">
                  <img src="/assets/img/class/class-3.jpg" alt="class image" />
                </div>
                <div className="class-content">
                  <h4 className="title"><Link href="/class-single">Super Color Kid</Link></h4>
                  <p>Class Time : 08:00 am - 10:00 am</p>
                  <p>Draticaly novate fuly rarched an plications awesome theme education</p>
                </div>
                <ul className="schedule">
                  <li><span>Class Size</span><span className="class-size">30 - 40</span></li>
                  <li><span>Years Old</span><span className="class-size class-size-2">06 - 09</span></li>
                  <li><span>Tution Fee</span><span className="class-size">$320.00</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="view-class text-center mt-30">
                <Link className="thm-btn" href="/classes">See More Classes</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* portfolio area start */}
      <div className="portfolio-area pt-110 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="section-title text-center mb-50">
                <h2 className="title">Our School Gallery</h2>
                <p>Here is what you can expect from a house cleaning from a Handy professional. Download the app to share further cleaning details and instructions!</p>
              </div>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12">
              <ul className="portfolio-menu">
                <li className="active" data-filter="*">see all</li>
                <li data-filter=".cat1">Branding</li>
                <li data-filter=".cat2">Creative</li>
                <li data-filter=".cat3">Illustration</li>
                <li data-filter=".cat4">Photoshgop</li>
              </ul>
            </div>
          </div>
          <div className="row grid text-center">
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item mb-30 cat3 cat4 cat2">
              <div className="portfolio-item">
                <div className="fortfolio-thumb">
                  <img src="/assets/img/portfolio/port01.jpg" alt="" />
                </div>
                <div className="portfolio-content">
                  <div className="content-view">
                    <a className="popup-image" href="/assets/img/portfolio/port01.jpg"><i className="icon fal fa-plus"></i></a>
                  </div>
                  <a href="#!"><h3>Product Name Here</h3></a>
                  <span>By: Kinter Theme</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item mb-30 cat1 cat2 cat4">
              <div className="portfolio-item">
                <div className="fortfolio-thumb">
                  <img src="/assets/img/portfolio/port02.jpg" alt="" />
                </div>
                <div className="portfolio-content">
                  <div className="content-view">
                    <a className="popup-image" href="/assets/img/portfolio/port02.jpg"><i className="icon fal fa-plus"></i></a>
                  </div>
                  <a href="#!"><h3>Product Name Here</h3></a>
                  <span>By:Kinter Theme</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item mb-30 cat2 cat3 cat1">
              <div className="portfolio-item">
                <div className="fortfolio-thumb">
                  <img src="/assets/img/portfolio/port03.jpg" alt="" />
                </div>
                <div className="portfolio-content">
                  <div className="content-view">
                    <a className="popup-image" href="/assets/img/portfolio/port03.jpg"><i className="icon fal fa-plus"></i></a>
                  </div>
                  <a href="#!"><h3>Product Name Here</h3></a>
                  <span>By: Kinter Theme</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item mb-30 cat1 cat2 cat4">
              <div className="portfolio-item">
                <div className="fortfolio-thumb">
                  <img src="/assets/img/portfolio/port04.jpg" alt="" />
                </div>
                <div className="portfolio-content">
                  <div className="content-view">
                    <a className="popup-image" href="/assets/img/portfolio/port04.jpg"><i className="icon fal fa-plus"></i></a>
                  </div>
                  <a href="#!"><h3>Product Name Here</h3></a>
                  <span>By: Kinter Theme</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item mb-30 cat3 cat1 cat4">
              <div className="portfolio-item">
                <div className="fortfolio-thumb">
                  <img src="/assets/img/portfolio/port05.jpg" alt="" />
                </div>
                <div className="portfolio-content">
                  <div className="content-view">
                    <a className="popup-image" href="/assets/img/portfolio/port05.jpg"><i className="icon fal fa-plus"></i></a>
                  </div>
                  <a href="#!"><h3>Product Name Here</h3></a>
                  <span>By: Kinter Theme</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 grid-item mb-30 cat3 cat4 cat2">
              <div className="portfolio-item">
                <div className="fortfolio-thumb">
                  <img src="/assets/img/portfolio/port06.jpg" alt="" />
                </div>
                <div className="portfolio-content">
                  <div className="content-view">
                    <a className="popup-image" href="/assets/img/portfolio/port06.jpg"><i className="icon fal fa-plus"></i></a>
                  </div>
                  <a href="#!"><h3>Product Name Here</h3></a>
                  <span>By: Kinter Theme</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blog area start */}
      <section className="blog-area section-bg-three section-notch pt-120 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-9">
              <div className="section-title section-title-white text-center mb-55">
                <h2 className="title">Our Latest News</h2>
                <p>Here is what you can expect from a house cleaning from a Handy professional. Download the app to share further cleaning details and instructions!</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="blog-item mb-30">
                <div className="blog-image">
                  <Link href="/blog-details"><img src="/assets/img/blog/blog-01.jpg" alt="blog image" /></Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta ul_li">
                    <span><i className="far fa-user"></i>by <a href="#!">Wasim</a></span>
                    <span><i className="far fa-calendar-alt"></i>12th March 2021</span>
                  </div>
                  <h4 className="blog-title"><Link href="/blog-details">Why children need a Healthy Environment</Link></h4>
                  <Link className="blog-btn" href="/blog-details">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="blog-item mb-30">
                <div className="blog-image">
                  <Link href="/blog-details"><img src="/assets/img/blog/blog-02.jpg" alt="blog image" /></Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><i className="far fa-user"></i>by <a href="#!">Wasim</a></span>
                    <span><i className="far fa-calendar-alt"></i>18th March 2021</span>
                  </div>
                  <h4 className="blog-title"><Link href="/blog-details">Planting Seeds in the Hearts of Preschoolers</Link></h4>
                  <Link className="blog-btn" href="/blog-details">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="blog-item mb-30">
                <div className="blog-image">
                  <Link href="/blog-details"><img src="/assets/img/blog/blog-03.jpg" alt="blog image" /></Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><i className="far fa-user"></i>by <a href="#!">Wasim</a></span>
                    <span><i className="far fa-calendar-alt"></i>16th March 2021</span>
                  </div>
                  <h4 className="blog-title"><Link href="/blog-details">Full-day kindergarten in Alberta another.</Link></h4>
                  <Link className="blog-btn" href="/blog-details">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* brand area start */}
      <section className="brand-area pt-110 pb-120">
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
    </>
  );
}
