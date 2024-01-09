import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
    return(

    <>
<div>
  {/*=====================================*/}
  {/*=          Login Area Start         =*/}
  {/*=====================================*/}
  <section className="account-page-area section-gap-equal">
    <div className="container position-relative">
      <div className="row g-5 justify-content-center">
        <div className="col-lg-5">
          <div className="login-form-box">
            <div>  <Link to="Home/"><img src="assets/images/logo/logo-dark.svg" /></Link></div>
            <h3 className="title">Sign in</h3>
            <p>Don’t have an account? <Link to="Signup/">Sign up</Link></p>
            <form>
              <div className="form-group">
                <label htmlFor="current-log-email">Username or email*</label>
                <input type="email" name="current-log-email" id="current-log-email" placeholder="Email or username" />
              </div>
              <div className="form-group">
                <label htmlFor="current-log-password">Password*</label>
                <input type="password" name="current-log-password" id="current-log-password" placeholder="Password" />
                <span className="password-show"><i className="icon-76" /></span>
              </div>
              <div className="form-group chekbox-area">
                <div className="edu-form-check">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember Me</label>
                </div>
                <Link to="#" className="password-reset">Lost your password?</Link>
              </div>
              <div className="form-group">
                <button type="button" className="edu-btn btn-medium">Log in<i className="icon-4" /></button>
                <Link style={{textAlign: 'center'}} to="Signup/" className="signup">SignUp</Link>
              </div>
            </form>
          </div>
        </div>
        <ul className="shape-group">
          <li className="shape-1 scene"><img data-depth={2} src="assets/images/about/shape-07.png" alt="Shape" /></li>
          <li className="shape-2 scene"><img data-depth={-2} src="assets/images/about/shape-13.png" alt="Shape" /></li>
          <li className="shape-3 scene"><img data-depth={2} src="assets/images/counterup/shape-02.png" alt="Shape" /></li>
        </ul>
      </div>
    </div></section>
  <div className="rn-progress-parent">
    <svg className="rn-back-circle svg-inner" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
</div>





    </>

    )
}

export default Login;