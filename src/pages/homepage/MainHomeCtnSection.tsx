import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { ApiGet } from "../../helper/API/ApiData";
import "./homepage.css";

const MainHomeCtnSection = () => {
  const [services, setServices] = useState([]);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const getServices = () => {
    ApiGet("service?rpp=100&pg=0").then((res: any) => {
      setServices(res.result);
    });
  };
  useEffect(() => {
    getServices();
  }, []);

  const smallSlider = [
    {
      img: "./img/sliderimg/slider-1.jpg",
      title: "Delivering tech solutions",
      subTitle: "Delivering business solutions for the web and mobile world."
    },
    {
      img: "./img/sliderimg/slider-6.jpg",
      title: "Innovation in motion",
      subTitle: "Our performance is your success. Our passion is innovation. "
    },
    {
      img: "./img/sliderimg/slider-2.jpg",
      title: "smarter solutions",
      subTitle: "We are a team of experienced IT specialists, ready to solve your issues."
    },
    {
      img: "./img/sliderimg/slider-4.jpg",
      title: "future in your hands",
      subTitle: "We work hard to make it happen – in technology, in ideas, and in your business."
    },
    {
      img: "./img/sliderimg/slider-3.jpg",
      title: "Our Support",
      subTitle: "We’re delivering technology solutions for today and tomorrow."
    },

  ]

  return (
    <div className="mainHomePageSlider">
      <div className="maniSliderLayer"></div>
      <div>
        <img src="./img/layerbg/Subtract.png" alt="" className="layer1" />
        <img src="./img/layerbg/Subtracttwo.png" alt="" className="layer2" />
      </div>
      <div className="container-fluid p-0">
        <div className="mainHerosection">
          <div className="miniSlider">
            <Slider
              asNavFor={nav1}
              ref={(slider2: any) => setNav2(slider2)}
              slidesToShow={4}
              swipeToSlide={true}
              focusOnSelect={true}
              vertical={true}
              autoplay={true}
              verticalSwiping={true}
              arrows={true}
              autoplaySpeed={5000}

            >

              {smallSlider.map((item) =>
                <div className="SliderInnerContent">
                  <h3>{item.title}</h3>
                  <div className="sliderContent">
                    <p>
                      {item.subTitle}
                    </p>
                  </div>
                </div>
              )}
            </Slider>
          </div>
          <div className="mainHerosectionSlider">
            <Slider
              asNavFor={nav2}
              ref={(slider1: any) => setNav1(slider1)}
              fade={true}
              autoplay={true}
              arrows={false}
              autoplaySpeed={5000}
            >

              {smallSlider.map((items) =>
                <div className="Sliderbg">
                  <div className="bgimg"></div>
                  <img
                    src={items.img}
                    alt="SliderOne"
                    className="sliderbgimg"
                  />
                  <div className="herosectionContent">
                    <Container>
                      <div className="sliderInnerText position-relative">
                        <h3>{items.title}</h3>
                        {/* <h3>{row.name}</h3> */}
                        <div className="descriptionBox">
                          {/* <p>{row.shortDesc}</p> */}
                          <p>
                          {items.subTitle}
                          </p>
                        </div>
                        <div className="buttonBox">
                          <button className="position-relative">
                            GET IN TOUCH
                          </button>
                        </div>
                      </div>
                    </Container>
                  </div>
                </div>
              )}


              {/* {services.map((row: any, index) => {
                return (
                  <div className="Sliderbg">
                    <div className="bgimg"></div>
                    <img
                      src="./img/sliderimg/office.jpg"
                      alt="SliderOne"
                      className="sliderbgimg"
                    />
                    <div className="herosectionContent">
                      <Container>
                        <div className="sliderInnerText position-relative">
                          <h3>{row.name}</h3>
                          <div className="descriptionBox">
                            <p>{row.shortDesc}</p>
                          </div>
                          <div className="buttonBox">
                            <button className="position-relative">
                              GET IN TOUCH
                            </button>
                          </div>
                        </div>
                      </Container>
                    </div>
                  </div>
                );
              })} */}
            </Slider>
          </div>
        </div>

        {/* <div className='position-relative mainHomeContent'>
                    <div className='LayerBg'>
                        <img src='./img/layerbg/Subtracttwo.png' className='layerbgimg' />
                        <img src='./img/layerbg/Subtract.png' className='layerbgimgtwo' />
                    </div>
                    <div className=''>
                        <Slider {...MainSliderCtn}>
                            {
                                services.map((row: any, index) => {
                                    return (
                                        <div className='position-relative Sliderbg'>
                                            <div className='bgimg'></div>
                                            <img src="./img/sliderimg/home-1_slider-1_bg.jpg" alt='SliderOne' className='sliderbgimg' />
                                            <Container>
                                                <Row className='SliderRow'>
                                                    <Col lg={5}>
                                                        <div className='sliderInnerText position-relative'>
                                                            <h3>{row.name}</h3>
                                                            <p>{row.shortDesc}</p>
                                                            <button className='position-relative'>
                                                                GET IN TOUCH
                                                            </button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default MainHomeCtnSection;
