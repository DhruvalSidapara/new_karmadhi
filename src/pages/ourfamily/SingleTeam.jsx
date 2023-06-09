import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Benner from "../../Component/Benner"
import ProgressBar from "react-bootstrap/ProgressBar"
import GoToTop from "../GoToTop"

const SingleTeam = () => {
  return (
    <>
      <Benner
        title="Our Team"
        info="Inspiration and innovation — that is what we stand for"
      />

      <div className="CustomContainer">
        <Container>
          <div className="SingleBoxContainer">
            <div className="SingleImg">
              <img src="./img/images/teamImg.jpg" alt="" className="teamImg" />
            </div>
            <div className="singleInfoWraper">
              <div className="singleTitle">
                <h2>Luciana Batista</h2>
                <p>Chief executive Officer</p>
              </div>
              <div className="d-flex align-items-center w-100 singleInfo">
                <h5>Position: </h5>
                <span>Chief Executive Officer</span>
              </div>
              <div className="d-flex align-items-center w-100 singleInfo">
                <h5>Responsibility: </h5>
                <span>Brand Development</span>
              </div>
              <div className="d-flex align-items-center w-100 singleInfo">
                <h5>Experience: </h5>
                <span>10 Years</span>
              </div>
              <div className="d-flex align-items-center w-100 singleInfo">
                <h5>Email: </h5>
                <span>chriss.moore@mail.com</span>
              </div>
              <div className="d-flex align-items-center w-100 singleInfo">
                <h5>Phone: </h5>
                <Link to="#">
                  <span>507 - 541 - 4567</span>
                </Link>
              </div>
              <div className="d-flex w-100 socialBox">
                <Link to="#" className="socialLink">
                  <img
                    src="./img/icone/teamtwitter.png"
                    alt=""
                    className="socialImg"
                  />
                </Link>
                <Link to="#" className="socialLink">
                  <img
                    src="./img/icone/teamFacebook.png"
                    alt=""
                    className="socialImg"
                  />
                </Link>
                <Link to="#" className="socialLink">
                  <img
                    src="./img/icone/teamPrintrest.png"
                    alt=""
                    className="socialImg"
                  />
                </Link>
                <Link to="#" className="socialLink">
                  <img
                    src="./img/icone/teamInstagram.png"
                    alt=""
                    className="socialImg"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="singleContentBox">
            <div className="singleContentTitle">
              <h2>Personal Experience</h2>
            </div>
            <div className="singleDetails">
              <p>
                Since joining Zikzag in 2009, Chriss More has helped turn the
                company from a group of bright technology minds working with
                startups into a global Digital Product Engineering Services
                leader helping Fortune 500 companies on their innovation agenda.
                In Chriss’s time as President and CEO of company, the company
                has experienced explosive growth in size and revenue – all while
                developing a culture that fosters engaged employees around
                innovation.
              </p>
              <p>
                Chriss is a frequent speaker on the topics of global innovation
                and digital disruption. He is also an avid cook and history
                buff. You can find him dining late at night with the chefs of
                the hotels where he stays during his travels, or reading in his
                home library.
              </p>
            </div>
          </div>

          <div className="Rowcontent">
            <Row>
              <Col xl={6} md={6} sm={6}>
                <div className="professionalContent">
                  <div className="singleContentTitle">
                    <h2>Professional Skills</h2>
                  </div>
                  <div className="progressBarContent">
                    <div className="d-flex align-items-center justify-content-between progressTitle">
                      <span>digital strategy</span>
                      <div>
                        <span>55</span>
                        <span>%</span>
                      </div>
                    </div>
                    <div className="mainProgress">
                      <ProgressBar animated now={55} />
                    </div>
                  </div>
                  <div className="progressBarContent">
                    <div className="d-flex align-items-center justify-content-between progressTitle">
                      <span>digital strategy</span>
                      <div>
                        <span>75</span>
                        <span>%</span>
                      </div>
                    </div>
                    <div className="mainProgress">
                      <ProgressBar animated now={75} />
                    </div>
                  </div>
                  <div className="progressBarContent">
                    <div className="d-flex align-items-center justify-content-between progressTitle">
                      <span>financial services</span>
                      <div>
                        <span>68</span>
                        <span>%</span>
                      </div>
                    </div>
                    <div className="mainProgress">
                      <ProgressBar animated now={68} />
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={6} md={6} sm={6}>
                <div className="earlyBox">
                  <div className="earlyTitle">
                    <h2>Early Years</h2>
                  </div>
                  <div className="earlyDetails">
                    <p>
                      He is a services industry veteran with a diversified
                      wealth of expertise that includes worldwide operations,
                      delivery, process improvements, mergers and acquisitions,
                      and integration, as well as sales and business
                      development.
                    </p>
                    <p>
                      He is a services industry veteran with a diversified
                      wealth of expertise that includes worldwide operations,
                      delivery, process improvements, mergers and acquisitions,
                      and integration, as well as sales and business
                      development.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="careerBox">
            <div className="singleContentTitle">
              <h2>Career Guidelines</h2>
            </div>

            <div className="CareerDetails">
              <p>
                Prior to joining Integrio, he spent 20+ years at Inmosys, where
                he held a wide range of global leadership roles, from services
                to products, and across operations and sales. Most recently, he
                was SVP & Global Head of the Manufacturing business, as well as
                a board member of their software subsidiary. He is also an avid
                cook and history buff. You can find him dining late at night
                with the chefs of the hotels where he stays during his travels,
                or reading in his home library. Prior to joining Integrio, he
                spent 20+ years at Inmosys, where he held a wide range of global
                leadership roles, from services to products, and across
                operations and sales. Most recently, he was SVP & Global Head of
                the Manufacturing business, as well as a board member of their
                software subsidiary. He is also an avid cook and history buff.
                You can find him dining late at night with the chefs of the
                hotels where he stays during his travels, or reading in his home
                library.
              </p>
            </div>
          </div>
        </Container>
      </div>
      <GoToTop />
    </>
  )
}

export default SingleTeam
