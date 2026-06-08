import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-area" data-background="/assets/img/bg/footer-bg.jpg">
        <div className="footer-top">
          <div className="container">
            <div className="footer-top-wrapper">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="footer-top-single">
                    <div className="footer-top-icon">
                      <img src="/assets/img/icon/ft01.png" alt="" />
                    </div>
                    <div className="footer-top-content">
                      <h5>Give us a Call</h5>
                      <span>+962-478-123-4567</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="footer-top-single">
                    <div className="footer-top-icon">
                      <img src="/assets/img/icon/ft02.png" alt="" />
                    </div>
                    <div className="footer-top-content">
                      <h5>Send us a Message</h5>
                      <span>kinterschoo07@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="footer-top-single footer-top-single-2">
                    <div className="footer-top-icon">
                      <img src="/assets/img/icon/ft03.png" alt="" />
                    </div>
                    <div className="footer-top-content">
                      <h5>Visit our Location</h5>
                      <span>07 Suitland Street 120 USA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-100 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget mb-40">
                  <h3>About Kinter</h3>
                  <p>Monotne deplos copertve chanva andng crorate Qhanin Unique Qnderwhe Premum Convere With Uheng Mutmed Nquel Undehee Mandnge theme Qhann Unqu Qndewhe Premum Converenc With Aheing Mutmeda Nquel Undehele</p>
                  <div className="footer-social">
                    <h4>Follow us :</h4>
                    <a href="#!"><i className="fab fa-twitter"></i></a>
                    <a href="#!"><i className="fas fa-rss"></i></a>
                    <a href="#!"><i className="fab fa-dribbble"></i></a>
                    <a href="#!"><i className="fab fa-behance"></i></a>
                    <a href="#!"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget mb-40">
                  <h3>Recent Blog Posts</h3>
                  <div className="blog-feeds">
                    <div className="signle-blog-feeds">
                      <div className="blog-feeds-thumb">
                        <Link href="/blog-details"><img src="/assets/img/blog/b-feed-1.jpg" alt="" /></Link>
                      </div>
                      <div className="blog-feeds-text">
                        <h5><Link href="/blog-details">New trends in UI/UX Design World Integration</Link></h5>
                        <span className="b-date"><i className="fal fa-calendar-alt"></i> 25 Nov 2021</span>
                      </div>
                    </div>
                    <div className="signle-blog-feeds">
                      <div className="blog-feeds-thumb">
                        <Link href="/blog-details"><img src="/assets/img/blog/b-feed-2.jpg" alt="" /></Link>
                      </div>
                      <div className="blog-feeds-text">
                        <h5><Link href="/blog-details">New trends in UI/UX Design World Integration</Link></h5>
                        <span className="b-date"><i className="fal fa-calendar-alt"></i> 25 Nov 2021</span>
                      </div>
                    </div>
                    <div className="signle-blog-feeds">
                      <div className="blog-feeds-thumb">
                        <Link href="/blog-details"><img src="/assets/img/blog/b-feed-3.jpg" alt="" /></Link>
                      </div>
                      <div className="blog-feeds-text">
                        <h5><Link href="/blog-details">New trends in UI/UX Design World Integration</Link></h5>
                        <span className="b-date"><i className="fal fa-calendar-alt"></i> 25 Nov 2021</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget mb-40">
                  <h3>Photo Gallery</h3>
                  <div className="footer-gallery">
                    <ul>
                      <li><a href="#!"><img src="/assets/img/gallery/gallery-01.jpg" alt="" /></a></li>
                      <li><a href="#!"><img src="/assets/img/gallery/gallery-02.jpg" alt="" /></a></li>
                      <li><a href="#!"><img src="/assets/img/gallery/gallery-03.jpg" alt="" /></a></li>
                      <li><a href="#!"><img src="/assets/img/gallery/gallery-04.jpg" alt="" /></a></li>
                      <li><a href="#!"><img src="/assets/img/gallery/gallery-05.jpg" alt="" /></a></li>
                      <li><a href="#!"><img src="/assets/img/gallery/gallery-06.jpg" alt="" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="footer-logo">
                  <Link href="/"><img src="/assets/img/logo/logo.png" alt="" /></Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-8">
                <div className="copyright-text">
                  <p>&copy; 2022 kinter Designed by <a href="https://themeforest.net/user/xpressbuddy" target="_blank" rel="noreferrer">XpressBuddy</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
