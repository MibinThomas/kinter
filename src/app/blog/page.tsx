import Link from "next/link";

export default function Blog() {
  return (
    <>
      {/* page title start */}
      <div
        className="page-title-area section-notch pt-170 pb-170"
        data-background="/assets/img/bg/page-title-bg.jpg"
      >
        <div className="banner-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title">
                <h2>Our Blog Posts</h2>
                <div className="breadcrumb-list text-left">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>Blog</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page title end */}

      {/* blog start */}
      <section className="blog-content-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-wrapper mb-30">
                <article className="post-item format-standard mb-30">
                  <div className="post-thumb">
                    <Link href="/blog-details">
                      <img src="/assets/img/blog/blog01.jpg" alt="blog" />
                    </Link>
                  </div>
                  <div className="post-content">
                    <div className="post-meta mb-20">
                      <span>
                        <Link href="#!">
                          <i className="far fa-calendar-alt"></i> 27 December 2020
                        </Link>
                      </span>
                      <span>
                        <Link href="#!">
                          <i className="far fa-user"></i> Kinter
                        </Link>
                      </span>
                      <span>
                        <Link href="#!">
                          <i className="far fa-comments"></i> 24 Comments
                        </Link>
                      </span>
                    </div>
                    <h4 className="post-title">
                      <Link href="/blog-details">
                        Planting Seeds in the Hearts of Preschoolers
                      </Link>
                    </h4>
                    <div className="post-text">
                      <p>
                        Completely deploy focused supply chains rather than
                        viraling an e-services productivate pandemc experiences
                        via interoperable niche markets. Dramatically incentivize
                        superior functionalities with Rapidiously evolve
                        impactful core competencies without web-enabled vortals
                      </p>
                    </div>
                    <div className="read-more mt-20">
                      <Link className="thm-btn" href="/blog-details">
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
                <article className="post-item format-gallery mb-30">
                  <div className="gallery-post-active owl-carousel">
                    <div className="post-thumb">
                      <img src="/assets/img/blog/blog02.jpg" alt="" />
                    </div>
                    <div className="post-thumb">
                      <img src="/assets/img/blog/blog03.jpg" alt="" />
                    </div>
                    <div className="post-thumb">
                      <img src="/assets/img/blog/blog01.jpg" alt="" />
                    </div>
                  </div>
                  <div className="post-content">
                    <div className="post-meta mb-20">
                      <span>
                        <Link href="#!">
                          <i className="far fa-calendar-alt"></i> 27 December 2020
                        </Link>
                      </span>
                      <span>
                        <Link href="#!">
                          <i className="far fa-user"></i> Kinter
                        </Link>
                      </span>
                      <span>
                        <Link href="#!">
                          <i className="far fa-comments"></i> 24 Comments
                        </Link>
                      </span>
                    </div>
                    <h4 className="post-title">
                      <Link href="/blog-details">
                        Why children need a Healthy Environment
                      </Link>
                    </h4>
                    <div className="post-text">
                      <p>
                        Completely deploy focused supply chains rather than
                        viraling an e-services productivate pandemc experiences
                        via interoperable niche markets. Dramatically incentivize
                        superior functionalities with Rapidiously evolve
                        impactful core competencies without web-enabled vortals
                      </p>
                    </div>
                    <div className="read-more mt-20">
                      <Link className="thm-btn" href="/blog-details">
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
                <article className="post-item format-video mb-30">
                  <div className="post-thumb post-video">
                    <img src="/assets/img/blog/blog03.jpg" alt="blog" />
                    <Link
                      className="popup-video video-icon"
                      href="https://www.youtube.com/watch?v=RHgbJr4pf1A"
                    >
                      <i className="far fa-play"></i>
                    </Link>
                  </div>
                  <div className="post-content">
                    <div className="post-meta mb-20">
                      <span>
                        <Link href="#!">
                          <i className="far fa-calendar-alt"></i> 27 December 2020
                        </Link>
                      </span>
                      <span>
                        <Link href="#!">
                          <i className="far fa-user"></i> Kinter
                        </Link>
                      </span>
                      <span>
                        <Link href="#!">
                          <i className="far fa-comments"></i> 24 Comments
                        </Link>
                      </span>
                    </div>
                    <h4 className="post-title">
                      <Link href="/blog-details">
                        Full-day kindergarten in Alberta another.
                      </Link>
                    </h4>
                    <div className="post-text">
                      <p>
                        Completely deploy focused supply chains rather than
                        viraling an e-services productivate pandemc experiences
                        via interoperable niche markets. Dramatically incentivize
                        superior functionalities with Rapidiously evolve
                        impactful core competencies without web-enabled vortals
                      </p>
                    </div>
                    <div className="read-more mt-20">
                      <Link className="thm-btn" href="/blog-details">
                        Read More
                      </Link>
                    </div>
                  </div>
                </article>
                <div className="pagination pt-20 mb-30">
                  <ul>
                    <li>
                      <Link href="#!">
                        <i className="far fa-angle-double-left"></i>
                      </Link>
                    </li>
                    <li className="active">
                      <Link href="#!">1</Link>
                    </li>
                    <li>
                      <Link href="#!">2</Link>
                    </li>
                    <li>
                      <Link href="#!">3</Link>
                    </li>
                    <li>
                      <Link href="#!">
                        <i className="far fa-angle-double-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <div className="widget mb-30">
                  <div className="search-form">
                    <input type="text" placeholder="Search Here..." />
                    <button type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </div>
                </div>
                <div className="widget mb-30">
                  <h2 className="widget-header">Post Category</h2>
                  <ul className="widget-wrapper">
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>Themeforest
                        </span>
                        <span>05</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>Codecanyon
                        </span>
                        <span>27</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>Graphicriver
                        </span>
                        <span>07</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>Photodune
                        </span>
                        <span>09</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>Videohive
                        </span>
                        <span>08</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>3docean
                        </span>
                        <span>25</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>WordPress
                        </span>
                        <span>20</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>Joomla
                        </span>
                        <span>30</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget mb-30">
                  <h2 className="widget-header">Most Popular Post</h2>
                  <ul className="widget-wrapper widget-post">
                    <li className="d-flex flex-wrap justify-content-between">
                      <div className="widget-post-thumb">
                        <Link href="/blog-details">
                          <img
                            src="/assets/img/blog/blog-widget/widget-post01.jpg"
                            alt="blog"
                          />
                        </Link>
                      </div>
                      <div className="widget-post-content">
                        <h5>
                          <Link href="/blog-details">
                            Why children need a Healthy Environment
                          </Link>
                        </h5>
                        <span>22 July 2020</span>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap justify-content-between">
                      <div className="widget-post-thumb">
                        <Link href="/blog-details">
                          <img
                            src="/assets/img/blog/blog-widget/widget-post02.jpg"
                            alt="blog"
                          />
                        </Link>
                      </div>
                      <div className="widget-post-content">
                        <h5>
                          <Link href="/blog-details">
                            Why children need a Healthy Environment
                          </Link>
                        </h5>
                        <span>22 July 2020</span>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap justify-content-between">
                      <div className="widget-post-thumb">
                        <Link href="/blog-details">
                          <img
                            src="/assets/img/blog/blog-widget/widget-post03.jpg"
                            alt="blog"
                          />
                        </Link>
                      </div>
                      <div className="widget-post-content">
                        <h5>
                          <Link href="/blog-details">
                            Why children need a Healthy Environment
                          </Link>
                        </h5>
                        <span>22 July 2020</span>
                      </div>
                    </li>
                    <li className="d-flex flex-wrap justify-content-between">
                      <div className="widget-post-thumb">
                        <Link href="/blog-details">
                          <img
                            src="/assets/img/blog/blog-widget/widget-post04.jpg"
                            alt="blog"
                          />
                        </Link>
                      </div>
                      <div className="widget-post-content">
                        <h5>
                          <Link href="/blog-details">
                            Why children need a Healthy Environment
                          </Link>
                        </h5>
                        <span>22 July 2020</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget mb-30">
                  <h2 className="widget-header">Archives</h2>
                  <ul className="widget-wrapper">
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>January
                        </span>
                        <span>2020</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>February
                        </span>
                        <span>2019</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>March
                        </span>
                        <span>2018</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>August
                        </span>
                        <span>2017</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>September
                        </span>
                        <span>2016</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>October
                        </span>
                        <span>2015</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>November
                        </span>
                        <span>2014</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex justify-content-between" href="#!">
                        <span>
                          <i className="far fa-angle-double-right"></i>December
                        </span>
                        <span>2013</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget mb-30">
                  <h2 className="widget-header">Popular Tags</h2>
                  <div className="tagcloud">
                    <Link className="sidebar-tag" href="#!">
                      envato
                    </Link>
                    <Link className="sidebar-tag" href="#!">
                      themeforest
                    </Link>
                    <Link className="sidebar-tag" href="#!">
                      school
                    </Link>
                    <Link className="sidebar-tag" href="#!">
                      videohive
                    </Link>
                    <Link className="sidebar-tag" href="#!">
                      kids
                    </Link>
                    <Link className="sidebar-tag" href="#!">
                      3docean
                    </Link>
                    <Link className="sidebar-tag" href="#!">
                      envato
                    </Link>
                    <Link className="sidebar-tag" href="#!">
                      themeforest
                    </Link>
                    <Link className="sidebar-tag" href="#!">
                      kids
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog end */}
    </>
  );
}
