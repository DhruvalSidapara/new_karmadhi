import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer: React.FC<any> = () => {

  return (
    <>
      <div className="CustomContainer">
        <div className="MainFooterContent">
          <div className="footerMainClass">
            <div className="container">
              <div className="RowContent">
                <Row>
                  <Col lg={3} sm={12}>
                    <div className="responsiveDiv">
                      <div className="footerImg">
                        <Link to="/">
                          <img src="/img/logo/mainLogo.png" />
                        </Link>
                      </div>
                      <div className="Copyright">
                        <p>© 2021 Karmadhi Pvt Ltd All rights reserved</p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={2} sm={6}>
                    <div className="footerBlogContent">
                      <h2>Quick Links</h2>
                      <Link to="/">
                        <p>Home</p>
                      </Link>
                      <Link to="/ourservice">
                        <p>Services</p>
                      </Link>
                      <Link to="/job">
                        <p>Jobs</p>
                      </Link>
                      <Link to="/technology">
                        <p>Technology</p>
                      </Link>
                      <Link to="/contactus">
                        <p>Contact</p>
                      </Link>

                     
                    </div>
                  </Col>
                  <Col lg={2} sm={6}>
                    <div className="footerService">
                      <h2>Services</h2>
                      <Link to="/ourservice">
                        <p>Graphics Design </p>
                      </Link>
                      <Link to="/ourservice">
                        <p>Web app Design </p>
                      </Link>
                      <Link to="/ourservice">
                        <p>Web App Frontend</p>
                      </Link>
                      <Link to="/ourservice">
                        <p>Web App Development</p>
                      </Link>
                      <Link to="/ourservice">
                        <p>Web App Testing</p>
                      </Link>
                    </div>
                  </Col>
                  <Col lg={2} sm={6}>
                    <div className="footerFollow">
                      <h2>Follow us</h2>
                      {/* <div className="FooterLink">
                        <img src="/img/Footer/facebook.png" />
                        <Link to="https://www.facebook.com">
                          Facebook
                        </Link>
                      </div> */}
                      <div className="FooterLink">
                        <img src="/img/Footer/linkedin-logo.png" />
                        <a href="https://www.linkedin.com/company/codexive-solutions/mycompany/" target="_blank">
                          Linkedin
                        </a>
                      </div>
                      {/* <div className="FooterLink">
                        <img src="/img/Footer/twitter.png" />
                        <Link to="https://twitter.com">
                          Twitter
                        </Link>
                      </div>
                      <div className="FooterLink">
                        <img src="/img/Footer/instagram.png" />
                        <Link to="https://www.instagram.com">
                          Instagram
                        </Link>
                      </div>
                      <div>
                        <img src="/img/Footer/youtube.png" />
                        <Link to="https://www.youtube.com">
                          Youtube
                        </Link>
                      </div> */}
                    </div>
                  </Col>
                  <Col lg={3} sm={6}>
                    <div className="footernewSletter">
                      <h2> Conatact Us </h2>
                      <p> Send us email for Job, Projects, Guidelines ,CRM and Website Quotation. </p>
                      <div className="position-relative">
                        {/* <input type="email" placeholder="Enter Email" /> */}
                        <a href="mailto:info@karmadhisolutions.com">
                          Email Us
                        </a>
                        <a href="tel:9409859856" className="ml-3">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* <div className="d-flex align-items-center justify-content-between footercookiesbox">
                <Link to="#">Sitemap</Link>
                <span></span>
                <Link to="#">Terms and Conditions</Link>
                <span></span>
                <Link to="#">Privacy statement</Link>
                <span></span>
                <Link to="#">Cookies</Link>

              </div> */}
            </div>


          </div>
        </div>
      </div>
      {/* <div className="footerMainContent">
              <div className="responsiveDiv">
                <div className="footerImg">
                  <img src="./img/logo/mainLogo.png" />
                </div>
                <div className="Copyright">
                  <p>© 2021 Karmadhi Pvt   All rights reserved</p>
                </div>
              </div>
              <div className="footerBlogContent">
                <h2>TOP BLOG POSTS</h2>
                <p>Lorem ipsum dolor sit amet </p>
                <p>consectetur adipiscing elit </p>
                <p>quis nostrud exercitation ullamco laboris nisi ut</p>
                <p>Duis aute irure dolor in reprehenderit </p>
              </div>

              <div className="footerService">
                <h2>Services</h2>
                <p>Software testing </p>
                <p>Web app & Software Development </p>
                <p>Create/manage your infra</p>
                <p>Professional at location</p>
                <p>mobile development</p>
              </div>

              <div className="footerFollow">
                <h2>Follow us</h2>
                <div className="FooterLink">
                  <img src="./img/Footer/facebook.png" />
                  <a href="https://www.facebook.com/">
                    Facebook
                  </a>
                </div>
                <div className="FooterLink">
                  <img src="./img/Footer/linkedin-logo.png" />
                  <a href="https://www.linkedin.com/">
                    Linkedin
                  </a>
                </div>
                <div className="FooterLink">
                  <img src="./img/Footer/twitter.png" />
                  <a href="https://twitter.com/">
                    Twitter
                  </a>
                </div>
                <div className="FooterLink">
                  <img src="./img/Footer/instagram.png" />
                  <a href="https://www.instagram.com/">
                    Instagram
                  </a>
                </div>
                <div>
                  <img src="./img/Footer/youtube.png" />
                  <a href="https://www.youtube.com">
                    Youtube
                  </a>
                </div>
              </div>

              <div className="footernewSletter">
                <h2> NEWSLETTER </h2>
                <p> Receive our newsletter about new technologies and jobs in your area </p>
                <div className="position-relative">
                  <input type="email" placeholder="Enter Email" />
                  <button>
                    submit
                  </button>
                </div>
              </div>
            </div> */}
    </>
  );
};

export default Footer;
