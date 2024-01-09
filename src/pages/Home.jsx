import React from "react";
import {Link} from 'react-router-dom';


const Home = () => {
     return(
       <>
    
    <div>
  {/*=====================================*/}
  {/*=       Hero Banner Area Start      =*/}
  {/*=====================================*/}
  <div className="hero-banner hero-style-8">
    <div className="container Sreshta EduTech-animated-shape">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="banner-content">
            <h1 className="title" data-sal-delay={100} data-sal="slide-up" data-sal-duration={1000}>Learn  JEE   NEET   CBSE 
              <span className="color-secondary"> Science &amp; Maths Concepts </span>  </h1>
            <p data-sal-delay={200} data-sal="slide-up" data-sal-duration={1000}>Your Future is Our Priority
            </p>
            <div className="banner-search" data-sal-delay={400} data-sal="slide-up" data-sal-duration={1000}>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="What do you want learn?" />
                <button className="search-btn" type="button"><i className="icon-2" /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="banner-thumbnail">
            <div className="thumbnail" data-sal-delay={500} data-sal="slide-left" data-sal-duration={1000}>
              <img src="assets/images/banner/home8-vactor-bg.webp" alt="vactor Image" />
            </div>
            <ul className="shape-group">
              <li className="shape-1" data-sal-delay={1000} data-sal="fade" data-sal-duration={1000}>
                <img data-depth="1.5" src="assets/images/others/shape-30.png" alt="Shape" />
              </li>
              <li className="shape-2 scene" data-sal-delay={1000} data-sal="fade" data-sal-duration={1000}>
                <img data-depth={2} src="assets/images/others/shape-31.png" alt="Shape" />
              </li>
              <li className="shape-3 scene shape-light" data-sal-delay={1000} data-sal="fade" data-sal-duration={1000}>
                <img data-depth={-2} src="assets/images/faq/shape-09.png" alt="Shape" />
              </li>
              <li className="shape-3 scene shape-dark" data-sal-delay={1000} data-sal="fade" data-sal-duration={1000}>
                <img data-depth={-2} src="assets/images/faq/dark-shape-09.png" alt="Shape" />
              </li>
              <li className="shape-4 scene shape-light" data-sal-delay={1000} data-sal="fade" data-sal-duration={1000}>
                <img data-depth={-2} src="assets/images/faq/shape-13.png" alt="Shape" />
              </li>
              <li className="shape-4 scene shape-dark" data-sal-delay={1000} data-sal="fade" data-sal-duration={1000}>
                <img data-depth={-2} src="assets/images/faq/dark-shape-13.png" alt="Shape" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="shape-group">
        <li className="shape-5">
          <span />
        </li>
        <li className="shape-6 scene" data-sal-delay={1000} data-sal="fade" data-sal-duration={1000}>
          <img data-depth="1.2" src="assets/images/others/shape-32.png" alt="Shape" />
        </li>
      </ul>
    </div>
  </div>
  {/*=====================================*/}
  {/*=====================================*/}
  {/*=       Why study with Us?      		=*/}
  {/*=====================================*/}
  <div className="edu-faq-area faq-style-5 section-gap-equal">
    <div className="container">
      <div className="row g-5 row--45">
        <div className="col-lg-6">
          <div className="edu-faq-gallery">
            <div className="faq-thumbnail thumbnail-1" data-sal-delay={50} data-sal="slide-right" data-sal-duration={800}>
              <img src="assets/images/others/faq-5.webp" alt="Faq Images" />
            </div>
            <ul className="shape-group">
              <li className="shape-1 scene" data-sal-delay={500} data-sal="fade" data-sal-duration={200}>
                <img data-depth="1.5" src="assets/images/faq/shape-35.png" alt="Shape Images" />
              </li>
              <li className="shape-2 scene" data-sal-delay={500} data-sal="fade" data-sal-duration={200}>
                <img data-depth={-2} src="assets/images/faq/shape-36.png" alt="Shape Images" />
              </li>
              <li className="shape-3">
                <img src="assets/images/faq/shape-34.png" alt="Shape Images" />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-faq-content">
            <div className="section-title section-left">
              <span className="pre-title">Why</span>
              <h2 className="title">Why   <span className="color-secondary">study with Us?</span></h2>
              <span className="shape-line"><i className="icon-19" /></span>
            </div>
            <div className="faq-accordion" id="faq-accordion">
              <div className="accordion">
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                      Personalized Learning Environment
                    </button>
                  </h5>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faq-accordion">
                    <div className="accordion-body">
                      <p>Sreshta EduTech has brought a fine range of preparatory online courses for JEE
                        NEET. Each course caters to different study requirements of students. We aim to
                        provide tailor-made courses to all as we embrace the unique mind of every
                        student.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false">
                      Learning That Fits Your Schedule
                    </button>
                  </h5>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div className="accordion-body">
                      <p>
                        With Sreshta EduTech, time will never bind students. You are free to learn whenever
                        you want, from wherever you want. Our flexible schedule, multi-device platform,
                        special revision classes will help you catch up on learning at your own pace.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false">
                      Teaming up with Sreshta EduTech Every Year
                    </button>
                  </h5>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div className="accordion-body">
                      <p>        We are growing bigger and better each year, collaborating with IIT Alumni,
                        doctors and best educators of India. Our faculty is par excellence with more
                        than 10 years of teaching experience. Get motivated at every step until you
                        finally crack JEE/NEET.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="shape-group">
              <li className="shape-1 scene" data-sal-delay={500} data-sal="fade" data-sal-duration={200}>
                <img data-depth="1.5" src="assets/images/about/shape-02.png" alt="Shape Images" />
              </li>
              <li className="shape-2 scene" data-sal-delay={500} data-sal="fade" data-sal-duration={200}>
                <span data-depth="-2.2" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*================Why study with Us?=====================*/}
  {/*=====================================*/}
  {/*=      		Subjects Area Start   		=*/}
  {/*=====================================*/}
  {/* Start Blog Area  */}
  <div className="edu-blog-area blog-area-1 edu-section-gap">
    <div className="container">
      <div className="section-title section-center" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
        <span className="pre-title">Syllabus</span>
        <h2 className="title">Subjects</h2>
        <span className="shape-line"><i className="icon-19" /></span>
      </div>
      <div className="row g-5">
        {/* Start Blog Grid  */}
        <div className="col-lg-4 col-md-6 col-12" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-1">
            <div className="inner">
              <div className="thumbnail">
                <a href="#">
                  <img src="assets/images/subjects/Maths.jpg" alt="Blog Images" />
                </a>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="content position-top">
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="#"><i className="icon-4" /></a>
                </div>
                <h5 className="title"><a href="#">Maths</a></h5>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
        {/* Start Blog Grid  */}
        <div className="col-lg-4 col-md-6 col-12" data-sal-delay={200} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-1">
            <div className="inner">
              <div className="thumbnail">
                <a href="#">
                  <img src="assets/images/subjects/Physics.jpg" alt="Blog Images" />
                </a>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="content position-top">
                <h5 className="title"><a href="#">Physics</a></h5>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
        {/* Start Blog Grid  */}
        <div className="col-lg-4 col-md-6 col-12" data-sal-delay={300} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-1">
            <div className="inner">
              <div className="thumbnail">
                <a href="#">
                  <img src="assets/images/subjects/Chemistry.jpg" alt="Blog Images" />
                </a>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="content position-top">
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="#"><i className="icon-4" /></a>
                </div>
                <h5 className="title"><a href="#">Chemistry</a></h5>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
      </div>
    </div>
    <ul className="shape-group">
      <li className="shape-1 scene">
        <img data-depth="-1.4" src="assets/images/about/shape-02.png" alt="Shape" />
      </li>
      <li className="shape-2 scene">
        <span data-depth="2.5" />
      </li>
      <li className="shape-3 scene">
        <img data-depth="-2.3" src="assets/images/counterup/shape-05.png" alt="Shape" />
      </li>
    </ul>
  </div>
  {/* End Subjects Area  */}
  {/*=====================================*/}
  {/*=       Course Area Start      		=*/}
  {/*=====================================*/}
  {/* Start Course Area  */}
  <div className="home-eight-course edu-course-area course-area-8 gap-tb-text bg-image">
    <div className="container Sreshta EduTech-animated-shape">
      <ul>
        <li>
          <div className="section-title section-left" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
            <span className="pre-title">Explore Courses</span>
            <h4 className="title">Stay ahead from your friends with Versatile courses for <br />Engineering, Medical, School, and Other Exams.</h4>
            <span className="shape-line"><i className="icon-19" /></span>
          </div>
        </li>
        <li>
          <div className="course-view-all" data-sal-delay={150} data-sal="slide-up" data-sal-duration={1200}>
            <a href="#" className="edu-btn">Browse more courses <i className="icon-4" /></a>
          </div>
        </li>
      </ul>
      <div className="row g-5">
        {/* Start Single Course  */}
        <div className="col-xl-6" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-course course-style-4 course-style-8">
            <div className="inner">
              <div className="thumbnail">
                <a href="course-details.html">
                  <img src="assets/images/course/course-11.jpg" alt="Course Meta" />
                </a>
                <div className="time-top">
                  <span className="duration"><i className="icon-61" />1 Year</span>
                </div>
              </div>
              <div className="content">
                <h6 className="title">
                  <a href="course-details.html">IIT JEE - Engineering</a>
                </h6>
                <div className="course-rating">
                  <div className="rating">
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                  </div>
                  <span className="rating-count">(5.0 /7 Rating)</span>
                </div>
                <ul className="course-meta">
                  <div className="ask-soc-txt">
                    <ul>
                      <li><i className="fa fa-circle" aria-hidden="true" />
                        &nbsp; 301 hr Live Lectures.</li>
                      <li><i className="fa fa-circle" aria-hidden="true" />
                        &nbsp; 111 hr Live Doubt Removal Sessions.</li>
                      <li><i className="fa fa-circle" aria-hidden="true" />&nbsp; 53 hr
                        High Order Thinking Skills. </li>
                      <li><i className="fa fa-circle" aria-hidden="true" />&nbsp; 46 hr
                        Chapter Tests (JEE Main Level). </li>
                      <li><i className="fa fa-circle" aria-hidden="true" />&nbsp; 21 hr
                        Unit Tests (JEE Mains Level).
                      </li>
                      <li><i className="fa fa-circle" aria-hidden="true" />&nbsp; 78 hr SA
                        Tests (online+offline) (PCMB).
                      </li>
                    </ul></div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Course  */}
        {/* Start Single Course  */}
        <div className="col-xl-6" data-sal-delay={200} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-course course-style-4 course-style-8">
            <div className="inner">
              <div className="thumbnail">
                <a href="course-details.html">
                  <img src="assets/images/course/course-12.jpg" alt="Course Meta" />
                </a>
                <div className="time-top">
                  <span className="duration"><i className="icon-61" />1 Year</span>
                </div>
              </div>
              <div className="content">
                <h6 className="title">
                  <a href="#">NEET Medical</a>
                </h6>
                <div className="course-rating">
                  <div className="rating">
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                    <i className="icon-23" />
                  </div>
                  <span className="rating-count">(5.0 /7 Rating)</span>
                </div>
                <ul>
                  <li><i className="fa fa-circle" aria-hidden="true" />
                    &nbsp; 298 hr Live Lectures.</li>
                  <li><i className="fa fa-circle" aria-hidden="true" />
                    &nbsp; 111 hr Live Doubt Removal Sessions. </li>
                  <li><i className="fa fa-circle" aria-hidden="true" />&nbsp; 51 hr
                    High Order Thinking Skills. </li>
                  <li><i className="fa fa-circle" aria-hidden="true" />&nbsp; 52 hr
                    Chapter Tests (PMT Level). </li>
                  <li><i className="fa fa-circle" aria-hidden="true" />&nbsp; 21 hr
                    Unit Tests (PMT Level).
                  </li>
                  <li><i className="fa fa-circle" aria-hidden="true" />&nbsp; 78 hr SA
                    Tests (online+offline) (PCMB).
                  </li>
                  <li><i className="fa fa-circle" aria-hidden="true" />&nbsp; 3 hr PSA
                    Test (School Level).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Single Course  */}
      </div>
      <ul className="shape-group">
        <li className="shape-1 scene" data-sal-delay={500} data-sal="fade" data-sal-duration={200}>
          <img data-depth={-2} src="assets/images/about/shape-13.png" alt="Shape" />
        </li>
        <li className="shape-2">
          <span />
        </li>
        <li className="shape-3 scene" data-sal-delay={500} data-sal="fade" data-sal-duration={200}>
          <img data-depth={-2} src="assets/images/about/shape-13.png" alt="Shape" />
        </li>
        <li className="shape-4 sal-animate" data-sal-delay={1000} data-sal="fade" data-sal-duration={1000}>
          <img data-depth={-1} src="assets/images/counterup/shape-02.png" alt="Shape" />
        </li>
      </ul>
    </div>
  </div>
  {/* End Course Area */}
  {/*=       CounterUp Area Start      	=*/}
  {/*=====================================*/}
  <div className="counterup-area-3 gap-bottom-equal">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-3 col-sm-6">
          <div className="edu-counterup counterup-style-3">
            <h2 className="counter-item count-number primary-color">
              <span className="odometer" data-odometer-final="29.3">.</span><span>K</span>
            </h2>
            <h6 className="title">Student Enrolled</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="edu-counterup counterup-style-3">
            <h2 className="counter-item count-number secondary-color">
              <span className="odometer" data-odometer-final="32.4">.</span><span>K</span>
            </h2>
            <h6 className="title">Class Completed</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="edu-counterup counterup-style-3">
            <h2 className="counter-item count-number extra02-color">
              <span className="odometer" data-odometer-final={100}>.</span><span>%</span>
            </h2>
            <h6 className="title">Satisfaction Rate</h6>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="edu-counterup counterup-style-3 border-none">
            <h2 className="counter-item count-number extra05-color">
              <span className="odometer" data-odometer-final={354}>.</span><span>+</span>
            </h2>
            <h6 className="title">Top Instructors</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*=====================================*/}
  {/*=       Testimonial Area Start      =*/}
  {/*=====================================*/}
  {/* Start Testimonial Area  */}
  <div className="testimonial-area-8 section-gap-equal">
    <div className="container Sreshta EduTech-animated-shape">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title section-center" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
            <span className="pre-title">Testimonials</span>
            <h2 className="title">What Our Students <br /> Have To Say</h2>
            <span className="shape-line"><i className="icon-19" /></span>
          </div>
        </div>
      </div>
      <div className="testimonial-activation swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-slide">
              <div className="content">
                <div className="author-info">
                  <div className="thumb">
                    <img src="assets/images/testimonial/testimonial-05.png" alt="Testimonial" />
                  </div>
                </div>
                <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                <div className="rating-icon">
                  <i className="icon-23" />
                  <i className="icon-23" />
                  <i className="icon-23" />
                  <i className="icon-23" />
                  <i className="icon-23" />
                </div>
                <div className="info">
                  <h5 className="title">Ray Sanchez</h5>
                  <span className="subtitle">Student</span>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-slide">
              <div className="content">
                <div className="author-info">
                  <div className="thumb">
                    <img src="assets/images/testimonial/testimonial-06.png" alt="Testimonial" />
                  </div>
                </div>
                <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                <div className="rating-icon">
                  <i className="icon-23" />
                  <i className="icon-23" />
                  <i className="icon-23" />
                  <i className="icon-23" />
                  <i className="icon-23" />
                </div>
                <div className="info">
                  <h5 className="title">Thomas Lopez</h5>
                  <span className="subtitle">Designer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-slide">
              <div className="content">
                <div className="author-info">
                  <div className="thumb">
                    <img src="assets/images/testimonial/testimonial-07.png" alt="Testimonial" />
                  </div>
                </div>
                <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                <div className="rating-icon">
                  <i className="icon-23" />
                  <i className="icon-23" />
                  <i className="icon-23" />
                  <i className="icon-23" />
                  <i className="icon-23" />
                </div>
                <div className="info">
                  <h5 className="title">Amber Page</h5>
                  <span className="subtitle">Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="testimonial-slide">
              <div className="content">
                <div className="author-info">
                  <div className="thumb">
                    <img src="assets/images/testimonial/testimonial-08.png" alt="Testimonial" />
                  </div>
                </div>
                <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                <div className="rating-icon">
                  <i className="icon-23" />
                  <i className="icon-23" />
                  <i className="icon-23" />
                  <i className="icon-23" />
                  <i className="icon-23" />
                </div>
                <div className="info">
                  <h5 className="title">James Flowers</h5>
                  <span className="subtitle">Manager</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination" />
    </div>
    <ul className="shape-group">
      <li className="shape-3" data-sal-delay={200} data-sal="fade" data-sal-duration={1000}>
        <img className="d-block-shape-light" data-depth={2} src="assets/images/others/map-shape-3.png" alt="Shape" />
        <img className="d-none-shape-dark" data-depth={2} src="assets/images/others/dark-map-2-shape-3.png" alt="Shape" />
      </li>
    </ul>
  </div>
  {/* End Testimonial Area  */}
  {/*=====================================*/}
  {/*=      		Blog Area Start   		=*/}
  {/*=====================================*/}
  {/* Start Blog Area  */}
  <div className="edu-blog-area blog-area-6 bg-image section-gap-equal">
    <div className="container">
      <div className="section-title section-center" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
        <span className="pre-title">Latest Articles</span>
        <h2 className="title">Get News with Sreshta EduTech</h2>
        <span className="shape-line"><i className="icon-19" /></span>
      </div>
      <div className="row g-5">
        {/* Start Blog Grid  */}
        <div className="col-lg-3 col-md-6 col-12" data-sal-delay={100} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-6">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-32.jpg" alt="Blog Images" />
                </a>
                <span className="date">Oct 10, 2021</span>
              </div>
              <div className="content position-top">
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
                <div className="category-wrap">
                  <a href="#" className="blog-category">ONLINE</a>
                </div>
                <h5 className="title"><a href="blog-details.html">Become a Better Blogger: Content Planning</a></h5>
                <p>Lorem ipsum dolor sit amet cons tetur sed idunt.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
        {/* Start Blog Grid  */}
        <div className="col-lg-3 col-md-6 col-12" data-sal-delay={200} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-1">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-33.jpg" alt="Blog Images" />
                </a>
                <span className="date">Oct 10, 2021</span>
              </div>
              <div className="content position-top">
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
                <div className="category-wrap">
                  <a href="#" className="blog-category">LECTURE</a>
                </div>
                <h5 className="title"><a href="blog-details.html">How to Keep Workouts Fresh in the Morning</a></h5>
                <p>Lorem ipsum dolor sit amet cons tetur sed idunt.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
        {/* Start Blog Grid  */}
        <div className="col-lg-3 col-md-6 col-12" data-sal-delay={300} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-1">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-34.jpg" alt="Blog Images" />
                </a>
                <span className="date">Oct 10, 2021</span>
              </div>
              <div className="content position-top">
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
                <div className="category-wrap">
                  <a href="#" className="blog-category">BUSINESS</a>
                </div>
                <h5 className="title"><a href="blog-details.html">Four Ways to Keep Your Workout Routine Fresh</a></h5>
                <p>Lorem ipsum dolor sit amet cons tetur sed idunt.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
        {/* Start Blog Grid  */}
        <div className="col-lg-3 col-md-6 col-12" data-sal-delay={300} data-sal="slide-up" data-sal-duration={800}>
          <div className="edu-blog blog-style-1">
            <div className="inner">
              <div className="thumbnail">
                <a href="blog-details.html">
                  <img src="assets/images/blog/blog-35.jpg" alt="Blog Images" />
                </a>
                <span className="date">Oct 10, 2021</span>
              </div>
              <div className="content position-top">
                <div className="read-more-btn">
                  <a className="btn-icon-round" href="blog-details.html"><i className="icon-4" /></a>
                </div>
                <div className="category-wrap">
                  <a href="#" className="blog-category">BUSINESS</a>
                </div>
                <h5 className="title"><a href="blog-details.html">Starting SEO as your Home Based Business policy</a></h5>
                <p>Lorem ipsum dolor sit amet cons tetur sed idunt.</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Grid  */}
      </div>
    </div>
  </div>
  {/* End Blog Area  */}
</div>


       
       </>



     )

}

export default Home;