import React from 'react'
import Slider from 'react-slick'

const UserSoftwareSection = () => {

    const useSoftware = {
        dots: false,
        fade: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                   
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                   
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                   
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                   
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                 
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                 
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                   
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                  
                }
            }
        ]
    };

    const technology = [
        {
            img: "./img/logo/react.png"
        },
        {
            img: "./img/logo/angular.png"
        },
        {
            img: "./img/logo/node.svg"
        },
        {
            img: "./img/logo/laravel.png"
        },
        {
            img: "./img/logo/php.svg"
        },
        {
            img: "./img/logo/antd.png"
        },
        {
            img: "./img/logo/tailwind.svg"
        },{
            img: "./img/logo/bootstrap.png"
        },
        {
            img: "./img/logo/mui.png"
        },
        {
            img: "./img/logo/post.png"
        },
        {
            img: "./img/logo/mongo.png"
        },
        {
            img: "./img/logo/myadmin.svg"
        },
        // {
        //     img: "./img/logo/postman.png"
        // },

    ]

    return (
        <div className='useSoftwareSlider'>
            <div className='useSoftwareInnerSlider'>
                <Slider {...useSoftware}>

                    {technology.map((item) =>
                        <div className='logo-tech'>
                            <img src={item.img} />
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default UserSoftwareSection