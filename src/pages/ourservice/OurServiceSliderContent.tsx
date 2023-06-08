import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router'
import Slider from 'react-slick'

const OurServiceSliderContent = () => {
    const history = useHistory()
    const hendleClick = () => {
        history.push('/contactus')
    }

    const OurService = {
        dots: false,
        fade: true,
        infinite: true,
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
            }
        ]
    }



    return (

        <div className='OurServiceContentbox'>
            <Row className="align-items-center">
                <Col lg={6}>
                    <div className='OurServiceSliderCtn'>
                        <div className='NewTechTitleandContent'>
                            <h3>VISION & MISSION</h3>
                            <h2>Web, App and Software Development Based on New Technology</h2>
                            <p>
                                Do you want to develop a website, a complete online store, app,
                                or tool effectively, and are you looking for an experienced party
                                that can help you in this? CodeImpact has qualified professionals
                                who are in state-of-the-art technologies to give a powerful
                                shape to your needs.
                                &nbsp;
                                {/* <span>Read more...</span> */}
                            </p>
                            <button onClick={hendleClick} >Get in Touch</button>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className='NewTechSlider'>
                        <Slider {...OurService}>
                            <div className='sliderContent'>
                                <div className='position-relative'>
                                    {/* <div className='imgLayer'></div> */}
                                    <img src="./img/sliderimg/slider-3.jpg" alt='SliderThree' />
                                    {/* <div className='NewPostHighLightContent'>
                                        <p>26 April 2021</p>
                                        <h2>Blog Posts Highlight</h2>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div> */}
                                </div>
                            </div>
                            
                            
                        </Slider>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default OurServiceSliderContent