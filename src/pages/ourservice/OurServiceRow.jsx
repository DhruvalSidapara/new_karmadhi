import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
const OurServiceRow = props => {

  const services = [
    {
      img: "./img/pro/service-1.jpg",
      title: "Graphics Design",
      description: "We serve Figma design and Xd design services."
    },
    {
      img: "./img/pro/service-2.jpg",
      title: "Web App Design",
      description: "We design responsive web app with clean code."
    },
    {
      img: "./img/pro/service-3.jpg",
      title: "Web App Frontend",
      description:
        "We design responsive web app with react.js and Angular.js and Pure Javascript Design."
    },
    {
      img: "./img/pro/service-4.jpg",
      title: "Web App Development",
      description: "We develop Website with different database framework."
    },
    {
      img: "./img/pro/service-5.jpg",
      title: "Web App Testing",
      description: "We Test web design and functionality and manage bugs."
    }
  ]

  return (
    <div>
      <div className="OverServiceRowCtn">
        <Row className="align-items-center">
          <Col lg={4} className="main-content-service">
            <div>
              <div className="secDetailsContent">
                <h3>OUR SERVICES</h3>
                <p>Web, App and Software Development Based</p>
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore.
                </span>
              </div>
            </div>
          </Col>

          {services.map(items => (
            <Col lg={4} sm={6} className="main-content-service" key={items.title}>
              <div className="overServiceImg">
                <div className="OverserviceLayer"></div>
                <img src={items.img} />
                <div className="overServiceDetails">
                  <h3>{items.title}</h3>
                </div>
                <div className="OverServiceHover">
                  <div className="OverServiceHoverTitle">
                    <h3>{items.title}</h3>
                  </div>
                  <div className="HoverOverserviceDetails">
                    <p>{items.description}</p>

                    {/* <button
                    style={{
                      width: "fit-content",
                      backgroundColor: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#1ab999",
                    }}
                    onClick={props.softwaretest}
                  >
                    {" "}
                    Learn More{" "}
                  </button> */}
                  </div>
                </div>
              </div>
            </Col>
          ))}

          {/* {Service.map((data: any, index) => {
            return (
              <Col lg={4} sm={6} className="main-content-service">
                <div className="overServiceImg">
                  <div className="OverserviceLayer"></div>

                  {data.headerImage ? (
                    <img src={`${API.hostUrl}/service/${data.headerImage}`} />
                  ) : (
                    <img src="./img/images/service1.jpg" alt="" />
                  )}

                  <div className="overServiceDetails">
                    <h3>{data.name}</h3>
                  </div>
                  <div className="OverServiceHover">
                    <div className="OverServiceHoverTitle">
                      <h3>{data.name}</h3>
                    </div>
                    <div className="HoverOverserviceDetails">
                      <p>{data.shortDesc}</p>

                      <button
                        style={{
                          width: "fit-content",
                          backgroundColor: "transparent",
                          border: "none",
                          outline: "none",
                          color: "#1ab999",
                        }}
                        onClick={props.softwaretest}
                      >
                        {" "}
                        Learn More{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })} */}

          {/* <Col lg={4}>
                        <div className='overServiceImg'>
                            <div className='OverserviceLayer'></div>
                            <img src='./img/images/Overserviceimg1.png' />
                            <div className='overServiceDetails'>
                                <h3>WEB, APP & SOFTWARE
                                    DEVELOPMENT</h3>
                            </div>
                            <div className='OverServiceHover'>
                                <div className='OverServiceHoverTitle'>
                                    <h3>WEB, APP & SOFTWARE
                                        DEVELOPMENT</h3>
                                </div>
                                <div className='HoverOverserviceDetails'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                    </p>

                                     <button
                        style={{
                          width: "fit-content",
                          backgroundColor: "transparent",
                          border: "none",
                          outline: "none",
                          color: "#1ab999",
                        }}
                        onClick={props.softwaretest}
                      >
                        {" "}
                        Learn More{" "}
                      </button>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='overServiceImg'>
                            <div className='OverserviceLayer'></div>
                            <img src='./img/images/Overserviceimg1.png' />
                            <div className='overServiceDetails'>
                                <h3>WEB, APP & SOFTWARE
                                    DEVELOPMENT</h3>
                            </div>
                            <div className='OverServiceHover'>
                                <div className='OverServiceHoverTitle'>
                                    <h3>WEB, APP & SOFTWARE
                                        DEVELOPMENT</h3>
                                </div>
                                <div className='HoverOverserviceDetails'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                    </p>

                                    <span > Learn More </span>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='overServiceImg'>
                            <div className='OverserviceLayer'></div>
                            <img src='./img/images/Overserviceimg1.png' />
                            <div className='overServiceDetails'>
                                <h3>WEB, APP & SOFTWARE
                                    DEVELOPMENT</h3>
                            </div>
                            <div className='OverServiceHover'>
                                <div className='OverServiceHoverTitle'>
                                    <h3>WEB, APP & SOFTWARE
                                        DEVELOPMENT</h3>
                                </div>
                                <div className='HoverOverserviceDetails'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                    </p>

                                    <span > Learn More </span>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className='overServiceImg'>
                            <div className='OverserviceLayer'></div>
                            <img src='./img/images/Overserviceimg1.png' />
                            <div className='overServiceDetails'>
                                <h3>WEB, APP & SOFTWARE
                                    DEVELOPMENT</h3>
                            </div>
                            <div className='OverServiceHover'>
                                <div className='OverServiceHoverTitle'>
                                    <h3>WEB, APP & SOFTWARE
                                        DEVELOPMENT</h3>
                                </div>
                                <div className='HoverOverserviceDetails'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                                    </p>

                                    <span > Learn More </span>

                                </div>
                            </div>
                        </div>
                    </Col> */}
        </Row>
      </div>
    </div>
  )
}

export default OurServiceRow
