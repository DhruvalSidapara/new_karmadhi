import React from "react";
import FloatingLabel from "react-bootstrap-floating-label";
import TextareaAutosize from "react-textarea-autosize";
import { Col, Container, Form, Row } from "react-bootstrap";
import "./contact.css";
import { Link } from "react-router-dom";
import Benner from "../../Component/Benner";
import GoToTop from "../GoToTop";

const ContactUs = () => {
  return (
    <>
      <Benner
        title="Contact Us"
        info="Get in touch to discuss your employee wellbeing needs today."
      />
      <div className="CustomContainer">
        <div className="contactBg">
          <Container>
            <div className="contactTitleBox">
              <div className="title">
                <h4>Get in Touch</h4>
                <h3>Get in touch to discuss your employee wellbeing needs today.
                 </h3>
              </div>

            </div>
            
            <div className="locationBox">
              <div className="LinkBox">
                <Link to="#" className="iconBox">
                  <img
                    src="./img/icone/contactLocation.png"
                    alt=""
                    className="img"
                  />
                </Link>
                <div className="locationDetails">
                  <p>Visit Us:</p>
                  <span>
                    4002, Central Bazzar, Khodiyar Nagar, Surat, Gujarat 395006
                  </span>
                  {/* <span>27 Division St, New York, NY 10002, USA</span> */}
                </div>
              </div>

              <div className="LinkBox">
                <Link to="#" className="iconBox">
                  <img
                    src="./img/icone/contactEmail.png"
                    alt=""
                    className="img"
                  />
                </Link>
                <div className="locationDetails">
                  <p>Mail Us:</p>
                  <a href="mailto:info@karmadhisolutions.com">
                    info@karmadhisolutions.com
                  </a>
                </div>
              </div>
              <div className="LinkBox">
                <Link to="#" className="iconBox">
                  <img
                    src="./img/icone/conatctPhone.png"
                    alt=""
                    className="img"
                  />
                </Link>
                <div className="locationDetails">
                  <p>Phone Us:</p>
                  <a href="tel:/9409859856">+91 9409859856</a>
                </div>
              </div>
            </div>
          </Container>
          <div className="MainMapBox">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14878.195501684295!2d72.8496478!3d21.2100727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e91a2940224bd39!2sCodexive%20Solutions!5e0!3m2!1sen!2sin!4v1661167574936!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
            />
          </div>

          {/* <div className='container'>
                    <div className='mainContactus d-flex '>
                        <div className='contactDetails'>

                            <>
                                <h1>CONTACT US</h1>
                                <h2>How can we help you?</h2>
                                <p>Feel free to ask any question - we are glad to help you!</p>
                            </>
                            <div>
                                <div className='FloatingLabelbox'>
                                    <FloatingLabel
                                        label="Name"
                                        className="floatingInput"
                                    >
                                        <Form.Control
                                            type="email" placeholder="name@example.com"
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        label="Your email address"
                                    >
                                        <Form.Control
                                            type="email"
                                            placeholder="Your email address"
                                        />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        label="Your phone number"
                                    >
                                        <Form.Control
                                            type="number"
                                            placeholder="Your phone number"
                                        />
                                    </FloatingLabel>

                                    <div className='serviceMsg'>
                                        <TextareaAutosize
                                            name=""
                                            placeholder="Your message"
                                            minRows={3}
                                            maxLength={400}
                                            style={{ width: '450px', height: '99px' }}
                                        />
                                    </div>

                                    <button> SEND MESSAGE </button>
                                </div>
                            </div>
                        </div>

                        <div className='OfficeLocationMain'>
                            <div className='locationtitle'>
                                <h1>OFFICE LOCATION</h1>
                                <h2>Our Headquarter</h2>
                            </div>
                            <div>
                                <Row className='align-items-center'>
                                    <Col xl={5} lg={8} md={6} sm={6}>
                                        <div className='address'>
                                            <h1> India </h1>
                                            <div className='d-flex align-items-center map'>
                                                <img src='./img/icone/map.png' />
                                                <p> Teggert 140, 6367XR Voerendaal
                                                    Netherlands</p>
                                            </div>
                                            <div className='d-flex align-items-center phone'>
                                                <img src='./img/icone/phone-call.png' />
                                                <p>+31852250504</p>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <img src='./img/icone/email.png' />
                                                <p>karmadhi@gmail.in</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={5} lg={8} md={6}>
                                        <div>

                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div> */}
        </div>
      </div>
      <GoToTop/>

    </>
  );
};

export default ContactUs;
