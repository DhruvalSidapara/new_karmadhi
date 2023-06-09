import React, { useEffect, useState } from "react"
import Benner from "../../Component/Benner"
import "./team.css"
import { Col, Container, Modal, Row } from "react-bootstrap"
import Slider from "react-slick"
import { Link } from "react-router-dom"
import GoToTop from "../GoToTop"

const OurFamily = () => {
  const [modalShow, setModalShow] = useState(false)
  const openModal = () => {
    setModalShow(true)
  }

  const closeModal = () => {
    setModalShow(false)
  }

  const sertification = {
    dots: false,
    fade: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const ProjectWork = {
    dots: true,
    fade: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <>
      <Benner
        title="Our Family"
        info="Inspiration and innovation — that is what we stand for"
      />

      <div className="CustomContainer">
        <div className="ourFamilyMainbox">
          <div className="ourfamilydetalisbox">
            {/* <div className='container'>
                          <div className='familycardbox'>
                              <div>
                                  <Row className='align-items-center'>
                                      {ourFamily.map((data: any, index) => {
                                          return (
                                              <Col xl={3} lg={4} md={6} sm={6}>
                                                  <div className='mainfamilycard'>
                                                      <div className='familycard'>
                                                          <img src='./img/images/family1.png' style={{ width: '100%', height: '342px', borderRadius: '0px 0px 50px 50px' }} />
                                                      </div>
                                                      <div className='familyDetailsBox'>
                                                          <div className='familyfollowlink'>
                                                              <a href={data.socialLinks.linkedIn} target='_blank'>
                                                                  <img src='./img/icone/Linkedin1.png' className='linkdin' />
                                                              </a>
                                                              <a href={data.socialLinks.telegram} target='_blank'>
                                                                  <img src='./img/icone/familyTELEGRAM.png' className='telegram' />
                                                              </a>
                                                              <a href={data.socialLinks.skype} target='_blank'>
                                                                  <img src='./img/icone/familyfacebook.png' className='skype' />
                                                              </a>
                                                          </div>
                                                          <div className='familycardtitle'>
                                                              <h1>{data.name}</h1>
                                                          </div>
                                                          <div className='d-flex align-items-center justify-content-between familyownertitle'>
                                                              <p>{data.position}</p>
                                                              <button
                                                                  type="button"
                                                                  onClick={openModal}
                                                                  style={{ backgroundColor: 'transparent', border: 'none' }}
                                                              >
                                                                  <img src='./img/icone/right-arrow.png' />
                                                              </button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </Col>
                                          )
                                      })}
                                  </Row>
                              </div>
                          </div>
                      </div> */}

            <Container>
              <div className="rowContent">
                <Row>
                  <Col xl={3} md={4} sm={6} lg={4}>
                    <div className="MainContentBox">
                      <div className="NameBox">
                        <div className="name">
                          <Link to="/singleteam">
                            <h2>Luciana Batista</h2>
                          </Link>
                          <p>Chief executive Officer</p>
                        </div>
                        <img
                          src="./img/icone/sliders.png"
                          alt=""
                          className="sliders"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} md={4} sm={6} lg={4}>
                    <div className="MainContentBox">
                      <div className="NameBox">
                        <div className="name">
                          <Link to="/singleteam">
                            <h2>Luciana Batista</h2>
                          </Link>
                          <p>Chief executive Officer</p>
                        </div>
                        <img
                          src="./img/icone/sliders.png"
                          alt=""
                          className="sliders"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} md={4} sm={6} lg={4}>
                    <div className="MainContentBox">
                      <div className="NameBox">
                        <div className="name">
                          <Link to="#">
                            <h2>Luciana Batista</h2>
                          </Link>
                          <p>Chief executive Officer</p>
                        </div>
                        <img
                          src="./img/icone/sliders.png"
                          alt=""
                          className="sliders"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} md={4} sm={6} lg={4}>
                    <div className="MainContentBox">
                      <div className="NameBox">
                        <div className="name">
                          <h2>Luciana Batista</h2>
                          <p>Chief executive Officer</p>
                        </div>
                        <img
                          src="./img/icone/sliders.png"
                          alt=""
                          className="sliders"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} md={4} sm={6} lg={4}>
                    <div className="MainContentBox">
                      <div className="NameBox">
                        <div className="name">
                          <h2>Luciana Batista</h2>
                          <p>Chief executive Officer</p>
                        </div>
                        <img
                          src="./img/icone/sliders.png"
                          alt=""
                          className="sliders"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} md={4} sm={6} lg={4}>
                    <div className="MainContentBox">
                      <div className="NameBox">
                        <div className="name">
                          <h2>Luciana Batista</h2>
                          <p>Chief executive Officer</p>
                        </div>
                        <img
                          src="./img/icone/sliders.png"
                          alt=""
                          className="sliders"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} md={4} sm={6} lg={4}>
                    <div className="MainContentBox">
                      <div className="NameBox">
                        <div className="name">
                          <h2>Luciana Batista</h2>
                          <p>Chief executive Officer</p>
                        </div>
                        <img
                          src="./img/icone/sliders.png"
                          alt=""
                          className="sliders"
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} md={4} sm={6} lg={4}>
                    <div className="MainContentBox">
                      <div className="NameBox">
                        <div className="name">
                          <h2>Luciana Batista</h2>
                          <p>Chief executive Officer</p>
                        </div>
                        <img
                          src="./img/icone/sliders.png"
                          alt=""
                          className="sliders"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>

            <div className="partofFamilymain">
              <div className="familycontainer">
                <div className="container">
                  <div className="d-flex align-items-center justify-content-between responsiveContent">
                    <div className="partfamilytitle">
                      <h1>
                        Do you want to become a part of the{" "}
                        <span>Karmadhi Family</span> ?
                      </h1>
                    </div>
                    <div className="familyjoining">
                      <button onClick={openModal}>JOIN US NOW!</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="familyModal">
          <Modal className="familymodal" show={modalShow} onHide={closeModal}>
            <Modal.Body className="modalcontent">
              <Row>
                <Col xl={6} lg={6}>
                  <div className="position-realtive">
                    <div className="position-absolute mainImgTitle">
                      <h1>
                        If you don’t know where you are going. How can you
                        expect to get there?
                      </h1>
                    </div>
                    <img src="./img/images/popupimg.png" className="popupimg" />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="detailsBox">
                    <div className="closeBOX d-flex align-items-center">
                      <p>Alexandra Pisarchuk Details</p>
                      <img
                        src="./img/icone/blackClose.png"
                        alt=""
                        onClick={closeModal}
                      />
                    </div>
                    <div className="title">
                      <h1>Alexandra Pisarchuk</h1>
                      <p>Project Leader/Full-stack Dev</p>
                    </div>
                    <div className="certificationbox">
                      <Slider {...sertification}>
                        <div className=" w-100 certificationSliderInner">
                          <div className="d-flex align-items-center justify-content-center">
                            <img
                              src="./img/icone/azure.png"
                              alt=""
                              className="certification"
                            />
                            <div className="certificationboxtitle">
                              <h1>Azure Fundamentals</h1>
                              <p>12 March 2018</p>
                            </div>
                          </div>
                        </div>
                        <div className=" w-100 certificationSliderInner">
                          <div className="d-flex align-items-center justify-content-center">
                            <img
                              src="./img/icone/firebase.png"
                              alt=""
                              className="certification"
                            />
                            <div className="certificationboxtitle">
                              <h1>Azure Fundamentals</h1>
                              <p>12 March 2018</p>
                            </div>
                          </div>
                        </div>
                        <div className=" w-100 certificationSliderInner">
                          <div className="d-flex align-items-center justify-content-center">
                            <img
                              src="./img/icone/aws.png"
                              alt=""
                              className="certification"
                            />
                            <div className="certificationboxtitle">
                              <h1>Azure Fundamentals</h1>
                              <p>12 March 2018</p>
                            </div>
                          </div>
                        </div>
                        <div className=" w-100 certificationSliderInner">
                          <div className="d-flex align-items-center justify-content-center">
                            <img
                              src="./img/icone/firebase.png"
                              alt=""
                              className="certification"
                            />
                            <div className="certificationboxtitle">
                              <h1>Azure Fundamentals</h1>
                              <p>12 March 2018</p>
                            </div>
                          </div>
                        </div>
                        {/* <div className=' w-100 certificationSliderInner'>

                        <div className='d-flex align-items-center justify-content-center'>
                          <img src="./img/icone/aws.png" alt="" className='certification' />
                          <div className='certificationboxtitle'>
                            <h1>Azure Fundamentals</h1>
                            <p>12 March 2018</p>
                          </div>
                        </div>
                      </div>
                      <div className=' w-100 certificationSliderInner'>

                        <div className='d-flex align-items-center justify-content-center'>
                          <img src="./img/icone/firebase.png" alt="" className='certification' />
                          <div className='certificationboxtitle'>
                            <h1>Azure Fundamentals</h1>
                            <p>12 March 2018</p>
                          </div>
                        </div>

                      </div> */}
                      </Slider>
                    </div>
                    <div className="emailbox d-flex align-items-center">
                      <div className="d-flex align-items-center emailctn">
                        <img
                          src="./img/icone/email.png"
                          alt=""
                          className="email"
                        />
                        <p>Karmadhi@gmail.com</p>
                      </div>
                      <img
                        src="./img/icone/linkedin-logoColor.png"
                        alt=""
                        className="icon"
                      />
                      <img
                        src="./img/icone/instagramColor.png"
                        alt=""
                        className="icon"
                      />
                      <img
                        src="./img/icone/telegramColor.png"
                        alt=""
                        className="icon"
                      />
                      <img
                        src="./img/icone/skypeColor.png"
                        alt=""
                        className="icon"
                      />
                    </div>
                    <div className="d-flex reviewMain justify-content-between">
                      <div className="reviewResponsiveDiv">
                        <div className="d-flex align-items-center mainReviewbox justify-content-between">
                          <p>Java</p>
                          <div className="reviewStar d-flex align-items-center justify-content-between">
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                          </div>
                        </div>
                        <div className="d-flex align-items-center mainReviewbox justify-content-between">
                          <p>ReactJs</p>
                          <div className="reviewStar d-flex align-items-center justify-content-between">
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                          </div>
                        </div>
                        <div className="d-flex align-items-center mainReviewbox justify-content-between">
                          <p>Spring</p>
                          <div className="reviewStar d-flex align-items-center justify-content-between">
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                          </div>
                        </div>
                        <div className="d-flex align-items-center mainReviewbox justify-content-between">
                          <p>
                            OOP, Design <br /> Patterns, SOLID
                          </p>
                          <div className="reviewStar d-flex align-items-center justify-content-between">
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                          </div>
                        </div>
                        <div className="d-flex align-items-center mainReviewbox justify-content-between">
                          <p>RabbitMQ</p>
                          <div className="reviewStar d-flex align-items-center justify-content-between">
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                          </div>
                        </div>
                        <div className="d-flex align-items-center mainReviewbox justify-content-between">
                          <p>Docker</p>
                          <div className="reviewStar d-flex align-items-center justify-content-between">
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="reviewResponsiveDiv">
                        <div className="d-flex align-items-center mainReviewbox justify-content-between">
                          <p>Angular</p>
                          <div className="reviewStar d-flex align-items-center justify-content-between">
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                          </div>
                        </div>
                        <div className="d-flex align-items-center mainReviewbox justify-content-between">
                          <p>JHipster</p>
                          <div className="reviewStar d-flex align-items-center justify-content-between">
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                          </div>
                        </div>
                        <div className="d-flex align-items-center mainReviewbox justify-content-between">
                          <p>Symfony</p>
                          <div className="reviewStar d-flex align-items-center justify-content-between">
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                          </div>
                        </div>
                        <div className="d-flex align-items-center mainReviewbox justify-content-between">
                          <p>AWS</p>
                          <div className="reviewStar d-flex align-items-center justify-content-between">
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                          </div>
                        </div>
                        <div className="d-flex align-items-center mainReviewbox justify-content-between">
                          <p>
                            {" "}
                            CSS, HTML, Bootstrap, <br /> jQuery, Ajax
                          </p>
                          <div className="reviewStar d-flex align-items-center justify-content-between">
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star1.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                            <img src="img/icone/star.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="descriptionbox">
                      <p>
                        <b>Hi! My name is Alexandra.</b> <br />I love
                        programming and fighting with difficulties in any
                        situations. Also, I like to communicate with people,
                        investigate new tasks and creating the structure for the
                        project. My hobbies are sports, cars, traveling and
                        reading books.
                      </p>
                    </div>

                    <div className="projectWorkBox">
                      <h1>Projects I worked</h1>

                      <div className="projectSliderBox">
                        <Slider {...ProjectWork}>
                          <div className="projectSliderCtn">
                            <div className="ProjectSliderImage">
                              <img
                                src="./img/images/projectsliderimg.png"
                                alt=""
                              />
                            </div>
                            <div className="smallbox">
                              <h1>Virtual Reality Integration</h1>
                              <div className="d-flex align-itmes-center tabContent">
                                <div className="linkbox">
                                  <p>Fintech</p>
                                </div>
                                <div className="linkbox">
                                  <p>Smart Contract</p>
                                </div>
                                <div className="linkbox">
                                  <p>Blockchain</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="projectSliderCtn">
                            <div className="ProjectSliderImage">
                              <img
                                src="./img/images/projectsliderimg.png"
                                alt=""
                              />
                            </div>
                            <div className="smallbox">
                              <h1>Virtual Reality Integration</h1>
                              <div className="d-flex align-itmes-center">
                                <div className="linkbox">
                                  <p>Fintech</p>
                                </div>
                                <div className="linkbox">
                                  <p>Smart Contract</p>
                                </div>
                                <div className="linkbox">
                                  <p>Blockchain</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="projectSliderCtn">
                            <div className="ProjectSliderImage">
                              <img
                                src="./img/images/projectsliderimg.png"
                                alt=""
                              />
                            </div>
                            <div className="smallbox">
                              <h1>Virtual Reality Integration</h1>
                              <div className="d-flex align-itmes-center">
                                <div className="linkbox">
                                  <p>Fintech</p>
                                </div>
                                <div className="linkbox">
                                  <p>Smart Contract</p>
                                </div>
                                <div className="linkbox">
                                  <p>Blockchain</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="projectSliderCtn">
                            <div className="ProjectSliderImage">
                              <img
                                src="./img/images/projectsliderimg.png"
                                alt=""
                              />
                            </div>
                            <div className="smallbox">
                              <h1>Virtual Reality Integration</h1>
                              <div className="d-flex align-itmes-center">
                                <div className="linkbox">
                                  <p>Fintech</p>
                                </div>
                                <div className="linkbox">
                                  <p>Smart Contract</p>
                                </div>
                                <div className="linkbox">
                                  <p>Blockchain</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        </div>
      </div>
      <GoToTop />
    </>
  )
}

export default OurFamily
