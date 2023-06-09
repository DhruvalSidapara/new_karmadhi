import React from "react"
import { Form } from "react-bootstrap"
import FloatingLabel from "react-bootstrap-floating-label"
import TextareaAutosize from "react-textarea-autosize"
const OurServiceContact = () => {
  return (
    <div className="OurServiceForm">
      <div className="container">
        <div className="mainFormContent">
          <>
            <div className="serviceFormtitle">
              <h3>GET IN TOUCH</h3>
              <p>Our professional will help you</p>
              <span>
                Feel free to ask any question - we are glad to help you!
              </span>
            </div>
            <div className="FloatingLabelbox">
              <FloatingLabel
                // controlId="floatingInput"
                label="Name"
                className="floatingInput"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <div className="d-flex align-items-center justify-content-between serviceNumber">
                <FloatingLabel
                  // controlId="floatingPassword"
                  label="Your email address"
                >
                  <Form.Control type="email" placeholder="Your email address" />
                </FloatingLabel>
                <FloatingLabel
                  // controlId="floatingPassword"
                  label="Your phone number"
                >
                  <Form.Control type="number" placeholder="Your phone number" />
                </FloatingLabel>
              </div>

              <div className="serviceMsg">
                <TextareaAutosize
                  name=""
                  placeholder="Your message"
                  minRows={3}
                  maxLength={400}
                />
              </div>

              <button> SEND MESSAGE </button>
            </div>
          </>

          <div className="OurServiceUserContent">
            <div className="UserLayer"></div>
            <img src="./img/images/OurUser.png" />
            <div className="mainUserContentDetails">
              <div className="UserBack" id="UserId">
                <img src="./img/images/user.jpeg" className="userImg" />
              </div>
              <div className="userTitle text-center">
                <h3> Ravi Sondagar </h3>
                <p>Head of Business</p>
              </div>
              <div className="d-flex align-items-center userContact justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src="./img/icone/phone.png"
                    className="phone"
                    style={{
                      width: "16.01px",
                      height: "15.99px",
                      borderRadius: "0px"
                    }}
                  />
                  <p>+44 134 873 4</p>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="./img/icone/envelope.png"
                    className="email"
                    style={{
                      width: "16px",
                      height: "12px",
                      borderRadius: "0px"
                    }}
                  />
                  <p>james.k@gmail.com</p>
                </div>
              </div>
              <div className="borderCustom"></div>
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src="./img/icone/linkedin.png"
                  className=""
                  style={{
                    width: "21px",
                    height: "21px",
                    borderRadius: "0px",
                    marginRight: "12px"
                  }}
                />
                <img
                  src="./img/icone/skype.png"
                  className=""
                  style={{
                    width: "20.96px",
                    height: "21px",
                    borderRadius: "0px",
                    marginLeft: "12px"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServiceContact
