import React from "react";


const Aboutus = () => {
    return(

    <>
{/*=====================================*/}
{/*=       About Area Start            =*/}
{/*=====================================*/}
<div className="section-gap-large edu-about-area about-style-7">
  <div className="container">
    <div className="row g-5 align-items-center">
      <div className="col-lg-5">
        <div className="about-content">
          <div className="section-title section-left" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
            <span className="pre-title">About Us</span>
            <h2 className="title">We Providing The <span className="color-secondary">Best Quality</span> Online Courses.</h2>
            <span className="shape-line"><i className="icon-19" /></span>
            <p>Sreshta EduTech has brought a fine range of preparatory online courses for JEE &amp; NEET. Each course caters to different study requirements of students. We aim to provide tailor-made courses to all as we embrace the unique mind of every student</p>
          </div>
          <ul className="features-list" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
            <li>Flexible Classes</li>
            <li>Educator Support</li>
          </ul>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="about-image-gallery">
          <img className="main-img-1" src="assets/images/about/about-11.webp" alt="About Image" />
          <img className="main-img-2" src="assets/images/about/about-12.webp" data-sal-delay={150} data-sal="slide-down" data-sal-duration={800} alt="About Image" />
          <ul className="shape-group">
            <li className="shape-1 scene" data-sal-delay={500} data-sal="fade" data-sal-duration={200}>
              <img data-depth={2} src="assets/images/about/shape-38.png" alt="Shape" />
            </li>
            <li className="shape-2 scene" data-sal-delay={500} data-sal="fade" data-sal-duration={200}>
              <img data-depth={-2} src="assets/images/about/shape-37.png" alt="Shape" />
            </li>
            <li className="shape-3 scene" data-sal-delay={500} data-sal="fade" data-sal-duration={200}>
              <img data-depth="-1.8" src="assets/images/about/shape-04.png" alt="Shape" />
            </li>
            <li className="shape-4 scene" data-sal-delay={500} data-sal="fade" data-sal-duration={200}>
              <img src="assets/images/counterup/shape-02.png" alt="Shape" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <ul className="shape-group">
    <li className="shape-1" data-sal-delay={500} data-sal="fade" data-sal-duration={200} />
  </ul>
</div>





    </>

    )
}

export default Aboutus;