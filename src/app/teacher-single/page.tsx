import Link from "next/link";

export default function TeacherSingle() {
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
                <h2>Teacher Details</h2>
                <div className="breadcrumb-list text-left">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>Teacher Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page title end */}

      {/* teacher details start */}
      <section className="teacher-details-area pt-120 pb-120">
        <div className="container">
          <div className="gaghahg"></div>
          <div className="row align-items-lg-center mt-none-30">
            <div className="col-lg-5 col-md-5">
              <div className="teacher-img mt-30">
                <img src="/assets/img/teacher/img-09.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="teacher-single-info mt-30">
                <h3>Morgan Be Rulax</h3>
                <p>
                  Since joining Ozix in 2009, he has helped turn the company
                  from a group of bright technology minds working with startups
                  into a global Digital Product Engineering Services leader
                  helping Fortune 500 companies on their innovation agenda. In
                  Chriss’s{" "}
                </p>
                <ul className="teacher-info-list mt-25">
                  <li className="d-flex flex-wrap justify-content-start">
                    <span className="list-name">Age</span>
                    <span className="list-attr">21 Years</span>
                  </li>
                  <li className="d-flex flex-wrap justify-content-start">
                    <span className="list-name">Address</span>
                    <span className="list-attr">
                      Adress Suite 2 &amp; 7 Melbourne, Australia
                    </span>
                  </li>
                  <li className="d-flex flex-wrap justify-content-start">
                    <span className="list-name">Email</span>
                    <span className="list-attr">info@gamil.com</span>
                  </li>
                  <li className="d-flex flex-wrap justify-content-start">
                    <span className="list-name">Phone</span>
                    <span className="list-attr">
                      +021 548 736 982 ,01236985
                    </span>
                  </li>
                  <li className="d-flex flex-wrap justify-content-start">
                    <span className="list-name">Website</span>
                    <span className="list-attr">www.kinter.com</span>
                  </li>
                  <li className="d-flex flex-wrap justify-content-start">
                    <span className="list-name">Experience</span>
                    <span className="list-attr">3 Years</span>
                  </li>
                  <li className="d-flex flex-wrap justify-content-start">
                    <span className="list-name">Interview</span>
                    <span className="list-attr">Read The Interview</span>
                  </li>
                </ul>
                <div className="social-links mt-35">
                  <Link href="#!">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="#!">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#!">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link href="#!">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="teacher-content">
              <h4>About Me</h4>
              <p>
                Since joining Ozix in 2009, he has helped turn the company from
                a group of bright technology minds working with startups into a
                global Digital Product Engineering Services leader helping
                Fortune 500 companies on their innovation agenda. In Chriss’s
                time as President and CEO of company, the company has
                experienced explosive growth in size and revenue – all while
                developing a culture that fosters engaged employees around
                innovation.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                consectetur aperiam eos voluptate dolorum ex soluta quia fugiat
                totam optio doloremque sint, perspiciatis eius ullam repellat
                similique facilis accusantium atque.Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Impedit consectetur aperiam eos
                voluptate dolorum ex soluta quia fugiat totam optio doloremque
                sint, perspiciatis eius ullam repellat similique facilis
                accusantium atque.
              </p>
              <div className="row mt-25 mb-40">
                <div className="col-md-6">
                  <div className="mt-20">
                    <img src="/assets/img/teacher/img-10.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mt-20">
                    <img src="/assets/img/teacher/img-11.jpg" alt="" />
                  </div>
                </div>
              </div>
              <p>
                Prior to joining Ozix, he spent 20+ years at Inmosys, where he
                held a wide range of global leadership roles, from services to
                products, and across operations and sales. Most recently, he was
                SVP &amp; Global Head of the Manufacturing business, as well as
                a board member of their software subsidiary. He is also an avid
                cook and history buff. You can find him dining late at night
                with the chefs of the hotels where he stays during his travels,
                or reading in his home library. He is a frequent speaker on the
                topics of global innovation and digital disruptionHe
              </p>
              <p>
                is also an avid cook and history buff. You can find him dining
                late at night with the chefs of the hotels where he stays during
                his travels, or reading in his home library. Since joining Ozix
                in 2009, he has helped turn the company from a group of bright
                technology minds working with startups into a global Digital
                Product Engineering Services leader helping Fortune 500
                companies on their innovation agenda. In Chriss’s time as
                President and CEO of company, the company has experienced
                explosive.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* teacher details end */}
    </>
  );
}
