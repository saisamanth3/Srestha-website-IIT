import React from "react";


const Blog = () => {
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
          <h1 className="title">Blog</h1>
        </div>
        <ul className="edu-breadcrumb">
          <li className="breadcrumb-item"><a href="index-one.html">Home</a></li>
          <li className="separator"><i className="icon-angle-right" /></li>
          <li className="breadcrumb-item active" aria-current="page">Blog</li>
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
  {/*=        Blog Area Start            =*/}
  {/*=====================================*/}
  <section className="section-gap-equal">
    <div className="container">
      <div className="row g-5" id="masonry-gallery">
        {/* Start Blog Grid  */}
        <div className="col-lg-4 col-md-6 col-12 masonry-item" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-5">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-01.jpg" alt="Blog Images" />
                </a>
              </div>
              <div className="content position-top">
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
                <div className="category-wrap">
                  <a href="#" className="blog-category">ONLINE</a>
                </div>
                <h5 className="title"><a href="blog-details.html">Become a Better Blogger: Content Planning</a></h5>
                <ul className="blog-meta">
                  <li><i className="icon-27" />Oct 10, 2021</li>
                  <li><i className="icon-28" />Com 09</li>
                </ul>
                <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
        {/* Start Blog Grid  */}
        <div className="col-lg-4 col-md-6 col-12 masonry-item" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-5">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-02.jpg" alt="Blog Images" />
                </a>
              </div>
              <div className="content position-top">
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
                <div className="category-wrap">
                  <a href="#" className="blog-category">Lecture</a>
                </div>
                <h5 className="title"><a href="blog-details.html">Fresh Inspiration For March And A...</a></h5>
                <ul className="blog-meta">
                  <li><i className="icon-27" />Oct 10, 2021</li>
                  <li><i className="icon-28" />Com 09</li>
                </ul>
                <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
        {/* Start Blog Grid  */}
        <div className="col-lg-4 col-md-6 col-12 masonry-item" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-5">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-03.jpg" alt="Blog Images" />
                </a>
              </div>
              <div className="content position-top">
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
                <div className="category-wrap">
                  <a href="#" className="blog-category">Business</a>
                </div>
                <h5 className="title"><a href="blog-details.html">How to Developers Taking the Guess Work...</a></h5>
                <ul className="blog-meta">
                  <li><i className="icon-27" />Oct 10, 2021</li>
                  <li><i className="icon-28" />Com 09</li>
                </ul>
                <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
        {/* Start Blog Grid  */}
        <div className="col-lg-4 col-md-6 col-12 masonry-item" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-5">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-19.jpg" alt="Blog Images" />
                </a>
              </div>
              <div className="content position-top">
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
                <div className="category-wrap">
                  <a href="#" className="blog-category">Business</a>
                </div>
                <h5 className="title"><a href="blog-details.html">How to Become Computer Working Days...</a></h5>
                <ul className="blog-meta">
                  <li><i className="icon-27" />Oct 10, 2021</li>
                  <li><i className="icon-28" />Com 09</li>
                </ul>
                <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore ad dolore magna aliqua enim mini veniam quis nostrud exercitation.ullamco laboris.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
        {/* Start Blog Grid  */}
        <div className="col-lg-4 col-md-6 col-12 masonry-item" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-5">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-21.jpg" alt="Blog Images" />
                </a>
              </div>
              <div className="content position-top">
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
                <div className="category-wrap">
                  <a href="#" className="blog-category">Lecture</a>
                </div>
                <h5 className="title"><a href="blog-details.html">Designing an Online Course from...</a></h5>
                <ul className="blog-meta">
                  <li><i className="icon-27" />Oct 10, 2021</li>
                  <li><i className="icon-28" />Com 09</li>
                </ul>
                <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
        {/* Start Blog Grid  */}
        <div className="col-lg-4 col-md-6 col-12 masonry-item" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-5">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-20.jpg" alt="Blog Images" />
                </a>
              </div>
              <div className="content position-top">
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
                <div className="category-wrap">
                  <a href="#" className="blog-category">Online</a>
                </div>
                <h5 className="title"><a href="blog-details.html">Ten Benefits Of Rentals That May Change...</a></h5>
                <ul className="blog-meta">
                  <li><i className="icon-27" />Oct 10, 2021</li>
                  <li><i className="icon-28" />Com 09</li>
                </ul>
                <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
        {/* Start Blog Grid  */}
        <div className="col-lg-4 col-md-6 col-12 masonry-item" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-5">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-23.jpg" alt="Blog Images" />
                </a>
              </div>
              <div className="content position-top">
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
                <div className="category-wrap">
                  <a href="#" className="blog-category">Bussiness</a>
                </div>
                <h5 className="title"><a href="blog-details.html">How to Keep Workouts Fresh in the...</a></h5>
                <ul className="blog-meta">
                  <li><i className="icon-27" />Oct 10, 2021</li>
                  <li><i className="icon-28" />Com 09</li>
                </ul>
                <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore ad dolore magna aliqua enim mini veniam quis nostrud exercitation.ullamco laboris.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
        {/* Start Blog Grid  */}
        <div className="col-lg-4 col-md-6 col-12 masonry-item" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-5">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-24.jpg" alt="Blog Images" />
                </a>
              </div>
              <div className="content position-top">
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
                <div className="category-wrap">
                  <a href="#" className="blog-category">Online</a>
                </div>
                <h5 className="title"><a href="blog-details.html">Become a Better Blogger: Content Planning</a></h5>
                <ul className="blog-meta">
                  <li><i className="icon-27" />Oct 10, 2021</li>
                  <li><i className="icon-28" />Com 09</li>
                </ul>
                <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
        {/* Start Blog Grid  */}
        <div className="col-lg-4 col-md-6 col-12 masonry-item" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-5">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-22.jpg" alt="Blog Images" />
                </a>
              </div>
              <div className="content position-top">
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
                <div className="category-wrap">
                  <a href="#" className="blog-category">Lecture</a>
                </div>
                <h5 className="title"><a href="blog-details.html">Unveiling the Secrets of Online Teaching</a></h5>
                <ul className="blog-meta">
                  <li><i className="icon-27" />Oct 10, 2021</li>
                  <li><i className="icon-28" />Com 09</li>
                </ul>
                <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
      </div>
      <ul className="edu-pagination top-space-30">
        <li><a href="#" aria-label="Previous"><i className="icon-west" /></a></li>
        <li className="active"><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li className="more-next"><a href="#" /></li>
        <li><a href="#">8</a></li>
        <li><a href="#" aria-label="Next"><i className="icon-east" /></a></li>
      </ul>
    </div>
  </section>
  {/*=====================================*/}
</div>



    </>

    )
}

export default Blog;