import { Link } from "react-router-dom";

const Footer = () => {

    return(
<>
{/*=====================================*/}
{/*=        Footer Area Start       	=*/}
{/*=====================================*/}
{/* Start Footer Area  */}
<footer className="edu-footer footer-lighten bg-image footer-style-1">
  <div className="footer-top">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <div className="edu-footer-widget">
            <div className="logo">
              <Link to="/">
              <img className="logo-light" src="assets/images/logo/logo-dark.svg" alt="Corporate Logo" />
                <img className="logo-dark" src="assets/images/logo/logo-white.png" alt="Corporate Logo" />
              </Link>
            </div>
            <p className="description">Discover a world of learning opportunities through our upcoming courses, where industry experts and thought leaders will guide you in acquiring new expertise, expanding your horizons, and reaching your full potential.</p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="edu-footer-widget explore-widget">
            <h4 className="widget-title">Pages</h4>
            <div className="inner">
              <ul className="footer-link link-hover">
                <li><Link to="Aboutus/">About Us</Link></li>
                <li><Link to="Contactus/">Contact Us</Link></li>
                <li><Link to="IITjee/">IIT JEE</Link></li>
                <li><Link to="NEET/">NEET</Link></li>
                <li><Link to="Blog/">BLOG</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6">
          <div className="edu-footer-widget quick-link-widget">
            <h4 className="widget-title">Useful Links</h4>
            <div className="inner">
              <ul className="footer-link link-hover">
                <li><Link to="Privacypolicy/">Privacy-policy</Link></li>
                <li><Link to="Termsconditions/">Terms&conditions</Link></li>

              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="edu-footer-widget">
            <h4 className="widget-title">Subscribe News Letter</h4>
            <div className="inner">
              <p className="description">Enter your email address to register to our newsletter subscription</p>
              <div className="input-group footer-subscription-form">
                <input type="email" className="form-control" placeholder="Your email" />
                <button className="edu-btn btn-medium" type="button">Subscribe <i className="icon-4" /></button>
              </div>
              <ul className="social-share icon-transparent">
                <li><Link to="#" className="color-fb"><i className="icon-facebook" /></Link></li>
                <li><Link to="#" className="color-linkd"><i className="icon-linkedin2" /></Link></li>
                <li><Link to="#" className="color-ig"><i className="icon-instagram" /></Link></li>
                <li><Link to="#" className="color-twitter"><i className="icon-twitter" /></Link></li>
                <li><Link to="#" className="color-yt"><i className="icon-youtube" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="inner text-center">
            <p>Copyright 2024 Sreshta EduTech.All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* End Footer Area  */}




</>


)
 



}

export default Footer;