import Link from "next/link";

export default function Teachers() {
  return (
    <>
      {/* page title start */}
      <div className="page-title-area section-notch pt-170 pb-170" data-background="/assets/img/bg/page-title-bg.jpg">
        <div className="banner-overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page-title">
                <h2>Meet Our Staffs</h2>
                <div className="breadcrumb-list text-left">
                  <ul>
                    <li><Link href="/">Home</Link></li>
                    <li>Teacher</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page title end */}

      {/* teacher area start */}
      <section className="team-area pt-110 pb-120">
        <div className="container">
          <div className="row mt-none-30">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-team text-center mt-30">
                <div className="team-thumb">
                  <img src="/assets/img/teacher/img-01.jpg" alt="" />
                </div>
                <div className="team-info">
                  <h3><Link href="/teacher-single">Broklyn Doel</Link></h3>
                  <span>Sains Teacher</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-team text-center mt-30">
                <div className="team-thumb">
                  <img src="/assets/img/teacher/img-02.jpg" alt="" />
                </div>
                <div className="team-info">
                  <h3><Link href="/teacher-single">Alex Jhonson</Link></h3>
                  <span>Art Teacher</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-team text-center mt-30">
                <div className="team-thumb">
                  <img src="/assets/img/teacher/img-03.jpg" alt="" />
                </div>
                <div className="team-info">
                  <h3><Link href="/teacher-single">Janaton Doe</Link></h3>
                  <span>English Teacher</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-team text-center mt-30">
                <div className="team-thumb">
                  <img src="/assets/img/teacher/img-04.jpg" alt="" />
                </div>
                <div className="team-info">
                  <h3><Link href="/teacher-single">Robot Jhonson</Link></h3>
                  <span>Math Teacher</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-team text-center mt-30">
                <div className="team-thumb">
                  <img src="/assets/img/teacher/img-05.jpg" alt="" />
                </div>
                <div className="team-info">
                  <h3><Link href="/teacher-single">Helam Lie</Link></h3>
                  <span>Sains Teacher</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-team text-center mt-30">
                <div className="team-thumb">
                  <img src="/assets/img/teacher/img-06.jpg" alt="" />
                </div>
                <div className="team-info">
                  <h3><Link href="/teacher-single">Alex Lia</Link></h3>
                  <span>Art Teacher</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-team text-center mt-30">
                <div className="team-thumb">
                  <img src="/assets/img/teacher/img-07.jpg" alt="" />
                </div>
                <div className="team-info">
                  <h3><Link href="/teacher-single">Jonson Rabe</Link></h3>
                  <span>English Teacher</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-team text-center mt-30">
                <div className="team-thumb">
                  <img src="/assets/img/teacher/img-08.jpg" alt="" />
                </div>
                <div className="team-info">
                  <h3><Link href="/teacher-single">Robin Doe</Link></h3>
                  <span>Math Teacher</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* teacher area end */}
    </>
  );
}
