import React from "react";


const Contact= () => {
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
          <h1 className="title">Contact Us</h1>
        </div>
        <ul className="edu-breadcrumb">
          <li className="breadcrumb-item"><a href="index-one.html">Home</a></li>
          <li className="separator"><i className="icon-angle-right" /></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="separator"><i className="icon-angle-right" /></li>
          <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
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
  {/*=       Contact Me Area Start       =*/}
  {/*=====================================*/}
  <section className="contact-us-area">
    <div className="container">
      <div className="row g-5">
        <div className="col-xl-4 col-lg-6">
          <div className="contact-us-info">
            <h3 className="heading-title">We're Always Eager to Hear From You!</h3>
            <ul className="address-list">
              <li>
                <h5 className="title">Address</h5>
                <p>Hyderabad</p>
              </li>
              <li>
                <h5 className="title">Email</h5>
                <p><a href="mailto:Sreshta EduTech@example.com">info@sreshtaedutech.com</a></p>
              </li>
              <li>
                <h5 className="title">Phone</h5>
                <p><a href="tel:+0914135548598">040-35592680</a></p>
              </li>
            </ul>
            <ul className="social-share">
              <li><a href="#"><i className="icon-share-alt" /></a></li>
              <li><a href="#"><i className="icon-facebook" /></a></li>
              <li><a href="#"><i className="icon-twitter" /></a></li>
              <li><a href="#"><i className="icon-linkedin2" /></a></li>
            </ul>
          </div>
        </div>
        <div className="offset-xl-2 col-lg-6">
          <div className="contact-form form-style-2">
            <div className="section-title">
              <h4 className="title">Get In Touch</h4>
              <p>Fill out this form for booking a consultant advising session.</p>
            </div>
            <form className="rnt-contact-form rwt-dynamic-form" id="contact-form" method="POST" action="https://Sreshta EduTech.html.devsblink.com/mail.php">
              <div className="row row--10">
                <div className="form-group col-12">
                  <input type="text" name="contact-name" id="contact-name" placeholder="Your name" />
                </div>
                <div className="form-group col-12">
                  <input type="email" name="contact-email" id="contact-email" placeholder="Enter your email" />
                </div>
                <div className="form-group col-12">
                  <input type="tel" name="contact-phone" id="contact-phone" placeholder="Phone number" />
                </div>
                <div className="form-group col-12">
                  <textarea name="contact-message" id="contact-message" cols={30} rows={4} placeholder="Your message" defaultValue={""} />
                </div>
                <div className="form-group col-12">
                  <button className="rn-btn edu-btn btn-medium submit-btn" name="submit" type="submit">Submit Message <i className="icon-4" /></button>
                </div>
              </div>
            </form>
            <ul className="shape-group">
              <li className="shape-1 scene"><img data-depth={1} src="assets/images/about/shape-13.png" alt="Shape" /></li>
              <li className="shape-2 scene"><img data-depth={-1} src="assets/images/counterup/shape-02.png" alt="Shape" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*=====================================*/}
  {/*=      Google Map Area Start        =*/}
  {/*=====================================*/}
  <div className="google-map-area">
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4558783155503!2d78.44258087492044!3d17.43788130134901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cf66cc9845%3A0xb7e11381476bc702!2sSAP%20St%2C%20Kumar%20Basti%2C%20Srinivasa%20Nagar%2C%20Ameerpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1696657535988!5m2!1sen!2sin" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />              </div>
    </div>
  </div>
</div>





    </>

    )
}

export default Contact;