import React from "react";


const Termsconditions = () => {
    return(

    <>
<div>
  {/*=====================================*/}
  {/*=       Breadcrumb Area Start      =*/}
  {/*=====================================*/}
  <div className="edu-breadcrumb-area">
    <div className="container">
      <div className="breadcrumb-inner">
        <div className="page-title">
          <h1 className="title">Terms &amp; Condition</h1>
        </div>
        <ul className="edu-breadcrumb">
          <li className="breadcrumb-item"><a href="index-one.html">Home</a></li>
          <li className="separator"><i className="icon-angle-right" /></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="separator"><i className="icon-angle-right" /></li>
          <li className="breadcrumb-item active" aria-current="page">Terms &amp; Condition</li>
        </ul>
      </div>
    </div>
    <ul className="shape-group">
      <li className="shape-1">
        <span />
      </li>
      <li className="shape-2 scene"><img data-depth={2} src="assets/images/about/shape-13.png" alt="shape" /></li>
      <li className="shape-3 scene"><img data-depth={-2} src="assets/images/about/shape-15.png" alt="shape" /></li>
      <li className="shape-4">
        <span />
      </li>
      <li className="shape-5 scene"><img data-depth={2} src="assets/images/about/shape-07.png" alt="shape" /></li>
    </ul>
  </div>
  {/*=====================================*/}
  {/*=           Cart Area Start         =*/}
  {/*=====================================*/}
  <section className="privacy-policy-area terms-condition-area">
    <div className="container">
      <div className="row row--30">
        <div className="col-lg-8">
          <div className="privacy-policy terms-condition">
            <div className="text-block">
              <h3 className="title">Definitions of Basic Terms, Rights and Restriction:</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. </p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
            </div>
            <div className="text-block">
              <h4 className="title">Basic Terms</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis aliquip commodo consequat aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat. </p>
            </div>
            <div className="text-block">
              <h4 className="title">Rights &amp; Restrictions</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <ul>
                <li>Members must be at least 18 years of age.</li>
                <li>Members are granted a time-limited, non-exclusive, revocable, nontransferable, and non-sublicenseable right to access that portion of the online course corresponding to the purchase.</li>
                <li>The portion of the online course corresponding to the purchase will be available to the Member as long as the course is maintained by the Company, which will be a minimum of one year after Member’s purchase.</li>
                <li>The videos in the course are provided as a video stream and are not downloadable.</li>
                <li>By agreeing to grant such access, the Company does not obligate itself to maintain the course, or to maintain it in its present form. </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="edu-blog-sidebar">
            {/* Start Single Widget  */}
            <div className="edu-blog-widget widget-search">
              <div className="inner">
                <h4 className="widget-title">Search</h4>
                <div className="content">
                  <form className="blog-search" action="#">
                    <button className="search-button"><i className="icon-2" /></button>
                    <input type="text" placeholder="Search" />
                  </form>
                </div>
              </div>
            </div>
            {/* End Single Widget  */}
            {/* Start Single Widget  */}
            <div className="edu-blog-widget widget-tags">
              <div className="inner">
                <h4 className="widget-title">Tags</h4>
                <div className="content">
                  <div className="tag-list">
                    <a href="#">Language</a>
                    <a href="#">eLearn</a>
                    <a href="#">Tips</a>
                    <a href="#">Course</a>
                    <a href="#">Motivation</a>
                  </div>
                </div>
              </div>
            </div>
            {/* End Single Widget  */}
            {/* Start Single Widget  */}
            <div className="edu-blog-widget widget-categories">
              <div className="inner">
                <h4 className="widget-title">Categories</h4>
                <div className="content">
                  <ul className="category-list">
                    <li><a href="#">Business Studies <span>(3)</span></a></li>
                    <li><a href="#">Computer Engineering <span>(7)</span></a></li>
                    <li><a href="#">Medical &amp; Health<span>(2)</span></a></li>
                    <li><a href="#">Software <span>(1)</span></a></li>
                    <li><a href="#">Web Development <span>(3)</span></a></li>
                    <li><a href="#">Uncategorized <span>(9)</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Single Widget  */}
            {/* Start Single Widget  */}
            <div className="edu-blog-widget widget-action">
              <div className="inner">
                <h4 className="title">Get Online Courses From <span>Sreshta EduTech</span></h4>
                <span className="shape-line"><i className="icon-19" /></span>
                <p>Nostrud exer ciation laboris aliqup</p>
                <a href="#" className="edu-btn btn-medium">Start Now <i className="icon-4" /></a>
              </div>
            </div>
            {/* End Single Widget  */}
          </div>
        </div>
      </div>
    </div>
  </section>
</div>






    </>

    )
}

export default Termsconditions;