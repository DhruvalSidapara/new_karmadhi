import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { API } from "../../config/API/api.config";
import { ApiGet } from "../../helper/API/ApiData";

const LogoSilderSection = () => {
  // const [logo, setLogo] = useState([])

  // const getLogo = () => {
  //     ApiGet('master-technology?rpp=100&pg=0')
  //         .then((res: any) => {
  //             setLogo(res.result)
  //         })
  // }

  // useEffect(() => {
  //     getLogo()
  // }, [])

  const logoSlider = {
    dots: false,
    fade: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoPlay: true,
    autoPlaySpeed: 2000,
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
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="sliderLogo">
      <div className="SliderLogoContent">
        <div>
          <div className="sliderLogoTitle">
            <h3>Trust By Multinationals and Startups</h3>
            <h2>We Always Understand Clients Expectation.</h2>
          </div>
          <div className="container">
            <div className="logoinnerSlider">
              <Slider {...logoSlider}>
                {/* {logo.map((data: any, index) => {
                                    return (
                                        <div className='sliderinnerImg'>
                                            <img src={`${API.hostUrl}/service/${data.headerImage}`} />
                                        </div>
                                    )
                                })

                                } */}
                <div className="sliderinnerImg">
                  <img src="./img/company/scogo.png" />
                </div>

                <div className="sliderinnerImg">
                  <img src="./img/company/compastrip.svg" />
                </div>

                <div className="sliderinnerImg">
                  <img src="./img/company/spoweek.svg" />
                </div>

                <div className="sliderinnerImg">
                  <img src="./img/company/talent.svg" />
                </div>

                <div className="sliderinnerImg">
                  <img src="./img/company/smatech.svg" />
                </div>
              
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSilderSection;
