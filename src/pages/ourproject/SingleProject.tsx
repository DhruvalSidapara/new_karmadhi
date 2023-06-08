import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Benner from "../../Component/Benner";
import GoToTop from "../GoToTop";
import { data } from "./data";

const SingleProject = () => {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 500,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          autoplay: true,
          speed: 500,
        },
      },
    ],
  };

  return (
    <div className="SingleProjectBG">
      <Benner title="Single Projects" info="Collection we are proud of" />

      <>
        <div className="CustomContainer">
          <Container>
            <div className="SingleProjectContainer">
              <div className="imgBox">
                <img src="./img/images/projectGrid.jpg" alt="" />
              </div>
              <div className="titleBox">
                <h1>Information Technology</h1>
              </div>

              <div className="ContentBox">
                <Row>
                  <Col xl={3} md={3}>
                    <div className="ContentMainBox">
                      <div className="contentTitle">
                        <h2>client</h2>
                      </div>
                      <div className="detailsBox">
                        <p>WebGeniusLab - Creative Agency</p>
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} md={3}>
                    <div className="ContentMainBox">
                      <div className="contentTitle">
                        <h2>team</h2>
                      </div>
                      <div className="detailsBox">
                        <p>
                          Kate Chee - Planning
                          <br />
                          Denis Ford - Marketing
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} md={3}>
                    <div className="ContentMainBox">
                      <div className="contentTitle">
                        <h2>SERVICES</h2>
                      </div>
                      <div className="detailsBox">
                        <p>
                          Finantial Counsulting, <br /> Planning & Marketing
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xl={3} md={3}>
                    <div className="ContentMainBox">
                      <div className="contentTitle">
                        <h2>CATEGORY</h2>
                      </div>
                      <div className="detailsBox">
                        <p>Finance</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              <div>
                <div className="mainDetailsBox">
                  <p>
                    <label>C</label>
                    ybercrime is a threat to all the organizations, but when we
                    take in consideration the financial market the level of
                    menace increases exponentially. Today banks and other
                    financial organizations face the need of providing the best
                    possible services in the best possible way and reachable by
                    everyone everywhere. We are increases exponentially. Today
                    banks and other financial organizations face the need of
                    providing the best possible services in the best possible
                    way and reachable by everyone everywhere. We are watching to
                    a spread of different products and services being available
                    through the use. By 2030—little more than a decade from
                    now—the global economy will likely be in the midst of a
                    major transformation.
                  </p>

                  <p>
                    Companies and investors grapple with changing conditions
                    constantly, but our research points to an unusual level of
                    volatility in the decades ahead. To understand why, we look
                    at the three major forces that will shape the 2020s:
                    demographics, automation and inequality. These forces are
                    already in motion and set to collide.
                  </p>
                </div>
              </div>

              <div className="mainElementBox">
                <Row>
                  <Col xl={4} md={4}>
                    <div className="elementImgBox">
                      <img src="./img/images/projectGrid.jpg" alt="" />
                    </div>
                  </Col>
                  <Col xl={4} md={4}>
                    <div className="elementImgBox">
                      <img src="./img/images/projectGrid.jpg" alt="" />
                    </div>
                  </Col>
                  <Col xl={4} md={4}>
                    <div className="elementImgBox">
                      <img src="./img/images/projectGrid.jpg" alt="" />
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="singleDetailsBox">
                <div className="singleTitle">
                  <h2>How It Works</h2>
                </div>
                <div className="singleDetails">
                  <p>
                    Companies and investors grapple with changing conditions
                    constantly, but our research points to an unusual level of
                    volatility in the decades ahead. To understand why, we look
                    at the three major forces that will shape the 2020s:
                    demographics, automation and inequality. These forces are
                    already in motion and set to collide. Secondly, given those
                    growth platforms, what is the brand portfolio, business
                    portfolio that I’ll use to address them?
                  </p>
                  <p>
                    We’re seeing an extreme rise in profitable growth from the
                    clients that we’re supporting to reset their marketing
                    model. So actually, areas four and five are enablers. Four,
                    what’s the data and technology strategy and the roadmap to
                    implement that? The leaders are owning their own data,
                    refreshing it constantly and, more importantly, using it to
                    inform the business decisions. And they’re making the
                    technology that underpins that a priority.
                  </p>
                </div>
              </div>

              <div className="SingleProjectSlider">
                <Slider {...settings}>
                  <div className="sliderInnerContent">
                    <div className="slidercontent">
                      <div className="quoteimgBox">
                        <img src="./img/icone/quote.png" alt="" />
                      </div>
                      <div className="SliderDetails">
                        <p>
                          “Working with ZikZag is always an absolute joy, both
                          personally and professionally. Tommy is an amazing
                          speaker; her experience, expertise and genuine passion
                          for what she does is obvious in every word he says.”
                        </p>
                      </div>
                      <div className="sliderTitle">
                        <h3>Emmy Barton</h3>
                        <p>client of company</p>
                      </div>
                    </div>
                  </div>
                  <div className="sliderInnerContent">
                    <div className="slidercontent">
                      <div className="quoteimgBox">
                        <img src="./img/icone/quote.png" alt="" />
                      </div>
                      <div className="SliderDetails">
                        <p>
                          “Working with ZikZag is always an absolute joy, both
                          personally and professionally. Tommy is an amazing
                          speaker; her experience, expertise and genuine passion
                          for what she does is obvious in every word he says.”
                        </p>
                      </div>
                      <div className="sliderTitle">
                        <h3>Emmy Barton</h3>
                        <p>client of company</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>

              <div className="singleDetailsBox">
                <div className="singleTitle">
                  <h2>Summary Results</h2>
                </div>
                <div className="SecsingleDetails">
                  <p>
                    Consumer products marketing has experienced a profound
                    change over the last 5 to 10 years, from a world dominated
                    by large global brands and established TV and big-box retail
                    models to a world that’s quickly much more complex, with a
                    proliferation of brands, channels and marketing tools.
                    Technology’s disrupted the industry in three ways. Firstly,
                    it’s disrupted the way consumers engage with brands. In the
                    UK and the US now, over 60% of consumers discover brands.
                    There are five areas that we encourage CMOs to look at. The
                    first is, what are my future-back platforms that will lead
                    growth for the next 5 to 10 years? Taking today’s profit
                    pools and forecasting them present forward just won’t
                    capture the level of disruption that’s impacting these
                    industries.
                  </p>
                </div>
              </div>

              {/* <div className="articleShareBox d-flex align-items-center justify-content-between">
                <div className="MainLinkBox">
                  <div className="linkTitle">
                    <h2>SHARE ARTICLE:</h2>
                  </div>
                  <div className="linkContent">
                    <Link to="#" className="linkBox">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link to="#" className="linkBox darkblue">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link to="#" className="linkBox red">
                      <i className="bi bi-pinterest"></i>
                    </Link>
                    <Link to="#" className="linkBox blue">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
                <div className="SocialLinkBox d-flex align-items-center justify-content-end">
                  <div className="socialLink">
                    <span>marketing</span>
                  </div>
                  <div className="socialLink">
                    <span>strategy</span>
                  </div>
                  <div className="socialLink">
                    <span>trade</span>
                  </div>
                  <div className="likeBox">
                    <span>
                      <i className="bi bi-heart-fill"></i>3
                    </span>
                  </div>
                </div>
              </div>

              <div className="mobileSection">
                <div className="FirstSection"></div>
                <div className="secondSection">
                  <div className="mobileSectionTitle">
                    <h4>Mobile App Startup</h4>
                    <span>February 25, 2020</span>
                  </div>
                  <Link to="#" className="mobileLink">
                    <span className="Box"></span>
                  </Link>
                </div>
              </div> */}
            </div>
          </Container>

          {/* <div className="singleprojectview">
            <div className="bglayer"></div>
            <div className="container">
              <div className="d-flex align-items-center mainLinkBox">
                <div className="linkBox">
                  <Link to="/"> Home </Link>
                </div>
                <span>
                  <img src="./img/icone/vectorwhite.png" />
                </span>
                <div className="linkBox">
                  <Link to="/ourproject" className="">
                    {" "}
                    Projects{" "}
                  </Link>
                </div>
                <span>
                  <img src="./img/icone/vectorwhite.png" />
                </span>
                <div className="linkBox">
                  <Link to="#" className="active">
                    {" "}
                    Virtual Reality Integration{" "}
                  </Link>
                </div>
              </div>

              <div style={{ position: "relative", zIndex: 50 }}>
                <Slider {...mainProjectSlider}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="projectSlider">
                      <Slider
                        // autoplay
                        autoplaySpeed={2000}
                        dots={true}
                        // infinite
                        arrows={false}
                        initialSlide={1}
                        customPaging={(i: any) => {
                          return (
                            <div className="sliderdots">
                              <img
                                src={data[i]}
                                alt=""
                                className="DotsImage"
                                style={{
                                  width: "100%",
                                  height: "195px",
                                  borderRadius: "12px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          );
                        }}
                      >
                        {data.map((x: any) => (
                          <div>
                            <img
                              src={x}
                              alt=""
                              style={{
                                width: "100%",
                                height: "444px",
                                borderRadius: "12px",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>

                    <div className="sliderContentmain">
                      <div className="slidercontentdetails">
                        <div className="slidercontenttitle">
                          <div className="imgbox">
                            <img src="./img/icone/singlesliderimg.png" alt="" />
                          </div>
                          <div className="titlebox">
                            <h1>Virtual Reality Integration</h1>
                            <div className="labelbox">
                              <div className="fintech">
                                <p>Fintech</p>
                              </div>
                              <div className="smartcontract">
                                <p>Smart Contract</p>
                              </div>
                              <div className="blockchain">
                                <p>Blockchain</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sliderdetailsbox">
                          <div className="sliderdetailstitle">
                            <h1 className="titlename">About The Project</h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu.
                            </p>
                          </div>
                          <div className="sliderdetailstitle">
                            <h1 className="titlename">The Challenge</h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu.
                            </p>
                          </div>
                          <div className="sliderdetailstitle">
                            <h1 className="titlename">The Solution</h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu.
                            </p>
                          </div>

                          <div className="slidernoticebox">
                            <p>
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit, sed quia
                              consequuntur
                            </p>
                          </div>

                          <>
                            <div className="sliderdeveloperbox">
                              <h1 className="developertitle">Develop by</h1>
                              <div className="developerdeatilsbox">
                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>

                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>

                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>

                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>
                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>
                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>
                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>
                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="developeruseingtech">
                              <h1 className="tech">Technologies used</h1>
                              <div className="techimgbox">
                                <div className="imgBox">
                                  <img src="./img/images/techimg1.png" alt="" />
                                </div>
                                <div className="imgBox">
                                  <img src="./img/images/techimg2.png" alt="" />
                                </div>
                                <div className="imgBox">
                                  <img src="./img/images/techimg3.png" alt="" />
                                </div>
                                <div className="imgBox">
                                  <img src="./img/images/techimg4.png" alt="" />
                                </div>
                                <div className="imgBox">
                                  <img src="./img/images/techimg5.png" alt="" />
                                </div>

                                <div className="imgBox">
                                  <img src="./img/images/techimg1.png" alt="" />
                                </div>
                                <div className="imgBox">
                                  <img src="./img/images/techimg2.png" alt="" />
                                </div>
                                <div className="imgBox">
                                  <img src="./img/images/techimg3.png" alt="" />
                                </div>
                                <div className="imgBox">
                                  <img src="./img/images/techimg4.png" alt="" />
                                </div>
                                <div className="imgBox">
                                  <img src="./img/images/techimg5.png" alt="" />
                                </div>
                              </div>
                            </div>

                            <div className="collaborationbox">
                              <h1 className="collaborationtitle">
                                In collaboration with
                              </h1>
                              <div className="collaborationimg">
                                <div className="SecImgBox">
                                  <img src="./img/images/techimg1.png" alt="" />
                                </div>
                                <div className="SecImgBox">
                                  <img src="./img/images/techimg2.png" alt="" />
                                </div>
                                <div className="SecImgBox">
                                  <img src="./img/images/techimg3.png" alt="" />
                                </div>
                                <div className="SecImgBox">
                                  <img src="./img/images/techimg4.png" alt="" />
                                </div>
                                <div className="SecImgBox">
                                  <img src="./img/images/techimg5.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="projectSlider">
                      <Slider
                        autoplay
                        autoplaySpeed={2000}
                        dots={true}
                        infinite
                        arrows={false}
                        initialSlide={1}
                        customPaging={(i: any) => {
                          return (
                            <div className="sliderdots">
                              <img
                                src={data[i]}
                                alt=""
                                style={{
                                  width: "100%",
                                  height: "195px",
                                  borderRadius: "12px",
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          );
                        }}
                      >
                        {data.map((x: any) => (
                          <div>
                            <img
                              src={x}
                              alt=""
                              style={{
                                width: "100%",
                                height: "444px",
                                borderRadius: "12px",
                              }}
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>

                    <div className="sliderContentmain">
                      <div className="slidercontentdetails">
                        <div className="slidercontenttitle">
                          <div className="imgbox">
                            <img src="./img/icone/singlesliderimg.png" alt="" />
                          </div>
                          <div className="titlebox">
                            <h1>Virtual Reality Integration</h1>
                            <div className="labelbox">
                              <div className="fintech">
                                <p>Fintech</p>
                              </div>
                              <div className="smartcontract">
                                <p>Smart Contract</p>
                              </div>
                              <div className="blockchain">
                                <p>Blockchain</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sliderdetailsbox">
                          <div className="sliderdetailstitle">
                            <h1 className="titlename">About The Project</h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu.
                            </p>
                          </div>
                          <div className="sliderdetailstitle">
                            <h1 className="titlename">The Challenge</h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu.
                            </p>
                          </div>
                          <div className="sliderdetailstitle">
                            <h1 className="titlename">The Solution</h1>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu.
                            </p>
                          </div>

                          <div className="slidernoticebox">
                            <p>
                              Nemo enim ipsam voluptatem quia voluptas sit
                              aspernatur aut odit aut fugit, sed quia
                              consequuntur
                            </p>
                          </div>

                          <>
                            <div className="sliderdeveloperbox">
                              <h1 className="developertitle">Develop by</h1>
                              <div className="developerdeatilsbox">
                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>

                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>

                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>

                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>
                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>
                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>
                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>
                                <div className="developerbox">
                                  <div className="imgbox">
                                    <img
                                      src="./img/images/developerimg.png"
                                      alt=""
                                    />
                                  </div>
                                  <div className="developertitlebox">
                                    <h1 className="name">Robert Kovic</h1>
                                    <p>Product Manager</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="developeruseingtech">
                              <h1 className="tech">Technologies used</h1>
                              <div className="techimgbox">
                                <div>
                                  <img src="./img/images/techimg1.png" alt="" />
                                </div>
                                <div>
                                  <img src="./img/images/techimg2.png" alt="" />
                                </div>
                                <div>
                                  <img src="./img/images/techimg3.png" alt="" />
                                </div>
                                <div>
                                  <img src="./img/images/techimg4.png" alt="" />
                                </div>
                                <div>
                                  <img src="./img/images/techimg5.png" alt="" />
                                </div>

                                <div>
                                  <img src="./img/images/techimg1.png" alt="" />
                                </div>
                                <div>
                                  <img src="./img/images/techimg2.png" alt="" />
                                </div>
                                <div>
                                  <img src="./img/images/techimg3.png" alt="" />
                                </div>
                                <div>
                                  <img src="./img/images/techimg4.png" alt="" />
                                </div>
                                <div>
                                  <img src="./img/images/techimg5.png" alt="" />
                                </div>
                              </div>
                            </div>

                            <div className="collaborationbox">
                              <h1 className="collaborationtitle">
                                In collaboration with
                              </h1>
                              <div className="collaborationimg">
                                <div>
                                  <img src="./img/images/techimg1.png" alt="" />
                                </div>
                                <div>
                                  <img src="./img/images/techimg2.png" alt="" />
                                </div>
                                <div>
                                  <img src="./img/images/techimg3.png" alt="" />
                                </div>
                                <div>
                                  <img src="./img/images/techimg4.png" alt="" />
                                </div>
                                <div>
                                  <img src="./img/images/techimg5.png" alt="" />
                                </div>
                              </div>
                            </div>
                          </>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div> */}
        </div>
      </>
      <GoToTop/>

    </div>
  );
};

export default SingleProject;
