import React from "react"
import { Col, Row } from "react-bootstrap"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

const TypeIndustry = () => {
  const history = useHistory()

  const hendleClick = () => {
    history.push("/ourservice")
  }

  return (
    <div className="typeIndustry">
      <div className="TypeIdustryInner">
        <div className="container">
          <div className="TypeIndustryInnerContent">
            <h3>How We Work</h3>
            <div className="d-flex align-items-center justify-content-center viewContent">
              <p className="text-center">
                Client satisfaction with a guaranteed result.
              </p>
              {/* <button onClick={hendleClick}>
                                View All
                            </button> */}
            </div>

            <div className="rowContent">
              <Row className="align-items-center">
                <Col xl={4} lg={4} sm={6}>
                  <div className="industryGird elearning">
                    <div style={{ position: "relative", zIndex: 12 }}>
                      <img
                        src="/img/icone/e-learning.png"
                        alt=""
                        className="logoImg"
                      />
                    </div>
                    <div className="TitleContentBox">
                      <div className="tittleContent">
                        <h1>Requirement Gathering</h1>
                        <Link to="#">
                          <img
                            src="/img/icone/ArrowRight.png"
                            alt=""
                            className="vectorImg"
                          />
                        </Link>
                      </div>

                      <div className="details">
                        <p>
                          We dig deep to know the Requirement of clients and
                          vision and create their roadmap.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                  <div className="industryGird telecom">
                    <div style={{ position: "relative", zIndex: 12 }}>
                      <img
                        src="/img/icone/Telecom.png"
                        alt=""
                        className="logoImg"
                      />
                    </div>
                    <div className="TitleContentBox">
                      <div className="tittleContent">
                        <h1>Planning</h1>
                        <Link to="#">
                          <img
                            src="/img/icone/ArrowRight.png"
                            alt=""
                            className="vectorImg"
                          />
                        </Link>
                      </div>
                      {/* <h1>
                                                Telecom
                                                <Link to="#">
                                                    <img src="/img/icone/ArrowRight.png" alt="" />
                                                </Link>
                                            </h1> */}
                      <div className="details">
                        <p>
                          Find the problem and organise the information to
                          intuitively prepare a simplified plan.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                  <div className="industryGird ecommerce">
                    <div style={{ position: "relative", zIndex: 12 }}>
                      <img
                        src="/img/icone/Ecommerce.png"
                        alt=""
                        className="logoImg"
                      />
                    </div>
                    <div className="TitleContentBox">
                      <div className="tittleContent">
                        <h1>Design</h1>
                        <Link to="#">
                          <img
                            src="/img/icone/ArrowRight.png"
                            alt=""
                            className="vectorImg"
                          />
                        </Link>
                      </div>
                      {/* <h1>Ecommerce
                                                <Link to="#">
                                                    <img src="/img/icone/ArrowRight.png" alt="" />
                                                </Link>
                                            </h1> */}
                      <div className="details">
                        <p>
                          We work to bring emotions to logics by priortizing the
                          look and feel of app.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                  <div className="industryGird secGrid fintech">
                    <div style={{ position: "relative", zIndex: 12 }}>
                      <img
                        src="/img/icone/fintech.png"
                        alt=""
                        className="logoImg"
                      />
                    </div>
                    <div className="TitleContentBox">
                      <div className="tittleContent">
                        <h1>Development</h1>
                        <Link to="#">
                          <img
                            src="/img/icone/ArrowRight.png"
                            alt=""
                            className="vectorImg"
                          />
                        </Link>
                      </div>
                      {/* <h1>
                                                Fintech
                                                <Link to="#">
                                                    <img src="/img/icone/ArrowRight.png" alt="" />
                                                </Link>
                                            </h1> */}
                      <div className="details">
                        <p>
                          With a meticulous development, we leverage incredible
                          feature and functions with expert engineering.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                  <div className="industryGird secGrid gameing">
                    <div style={{ position: "relative", zIndex: 12 }}>
                      <img
                        src="/img/icone/gameing.png"
                        alt=""
                        className="logoImg"
                      />
                    </div>
                    <div className="TitleContentBox">
                      <div className="tittleContent">
                        <h1>Testing</h1>
                        <Link to="#">
                          <img
                            src="/img/icone/ArrowRight.png"
                            alt=""
                            className="vectorImg"
                          />
                        </Link>
                      </div>
                      {/* <h1>
                                                Gaming
                                                <Link to="#">
                                                    <img src="/img/icone/ArrowRight.png" alt="" />
                                                </Link>
                                            </h1> */}
                      <div className="details">
                        <p>
                          Seamlessly test the application to review the
                          performance across a multiple platform.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl={4} lg={4} sm={6}>
                  <div className="industryGird secGrid recruitment">
                    <div style={{ position: "relative", zIndex: 12 }}>
                      <img
                        src="/img/icone/Recruitment.png"
                        alt=""
                        className="logoImg"
                      />
                    </div>
                    <div className="TitleContentBox">
                      <div className="tittleContent">
                        <h1>Maintenance</h1>
                        <Link to="#">
                          <img
                            src="/img/icone/ArrowRight.png"
                            alt=""
                            className="vectorImg"
                          />
                        </Link>
                      </div>
                      {/* <h1>
                                                Recruitment
                                                <Link to="#">
                                                    <img src="/img/icone/ArrowRight.png" alt="" />
                                                </Link>
                                            </h1> */}
                      <div className="details">
                        <p>
                          Fixing the bug and errors and making your app free
                          from any compatible issues.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypeIndustry
