import Link from "next/link";

export default function Header() {
  return (
    <header className="header-area">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="left">
                <li><span><i className="far fa-clock"></i></span> 9:30am - 6:30pm Mon - Sun</li>
                <li><span><i className="far fa-phone"></i></span> +800-123-4567 6587</li>
                <li><span><i className="far fa-map-marker-alt"></i></span> Anmoore Road Brooklyn, NY 230</li>
              </ul>
              <ul className="right">
                <li><a href="#!"><i className="fab fa-facebook-messenger"></i></a></li>
                <li><a href="#!"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#!"><i className="fab fa-vimeo-v"></i></a></li>
                <li><a href="#!"><i className="fab fa-skype"></i></a></li>
                <li><a href="#!"><i className="fas fa-rss"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom-area" data-uk-sticky="top: 250; animation: uk-animation-slide-top;">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-6">
              <div className="logo">
                <Link href="/"><img src="/assets/img/logo/logo.png" alt="Logo" /></Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 d-none d-lg-block">
              <div className="main-menu-wrap">
                <nav id="mobile-menu" className="main-menu">
                  <ul className="main-menu-list ul_li">
                    <li className="active"><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li className="menu-item-has-children"><a href="#!">Pages</a>
                      <ul className="submenu">
                        <li><Link href="/teachers">Teachers</Link></li>
                        <li><Link href="/teacher-single">Teacher Details</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/classes">Classes</Link>
                      <ul className="submenu">
                        <li><Link href="/classes">Classes</Link></li>
                        <li><Link href="/class-single">Class Details</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link href="/shop">Shop</Link>
                      <ul className="submenu">
                        <li><Link href="/shop">Shop Sidebar</Link></li>
                        <li><Link href="/shop-single">Shop Details</Link></li>
                        <li><Link href="/cart">Cart</Link></li>
                        <li><Link href="/checkout">Checkout</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children"><Link href="/blog">Blog</Link>
                      <ul className="submenu">
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                      </ul>
                    </li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-6">
              <div className="header-right">
                <div className="header-btn">
                  <Link className="thm-btn" href="/contact">Admission Now</Link>
                </div>
                <div className="side-mobile-menu">
                  <button className="side-info-close"><i className="far fa-times"></i></button>
                  <div className="mobile-menu"></div>
                </div>
                <div className="side-menu-icon d-lg-none">
                  <button className="side-toggle"><i className="far fa-bars"></i></button>
                </div>
                <div className="offcanvas-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
