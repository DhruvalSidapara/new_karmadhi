import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Slider from "react-slick"
import { useHistory } from "react-router"

const OurProjectSection = () => {
  const history = useHistory()
  const handleProject = () => {
    history.push("/ourproject")
  }

  const settings = {
    dots: false,
    arrows: false,
    // infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false
          // fade: true,
          // infinite: true,
          // autoplay: true,
          // speed: 500,
        }
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: false
          // fade: true,
          // infinite: true,
          // autoplay: true,
          // speed: 500,
        }
      }
    ]
  }

  const projects = [
    {
      type: "Admin",
      img: "./img/pro/pro-1.png",
      title: "Scogo Admin",
      details:
        "Scogo Admin panel designing using Tailwindcss, react.js, redux and responsive admin panel.",
      technology: [
        // "HTML", "CSS", "CSS3", "react-bootstrap", "react.js", "node.js"
        "HTML",
        "CSS",
        "CSS3",
        "TailwindCSS",
        "Responsive",
        "react.js"
      ]
    },
    {
      type: "Admin - User",
      img: "./img/pro/pro-4.png",
      title: "Smartech",
      details:
        "Smartech Admin panel and User panel Website designing using HTML, CSS, Responsive, react.js, redux and implement using node.js.",
      technology: [
        // "HTML", "CSS", "CSS3", "react-bootstrap", "react.js", "node.js"
        "HTML",
        "CSS",
        "CSS3",
        "Responsive",
        "react.js",
        "node.js"
      ]
    },
    {
      type: "Admin - User",
      img: "./img/pro/pro-3.png",
      title: "Spoweek",
      details:
        "Spoweek Admin panel and User panel Website designing using HTML, CSS, React Bootstrap, Responsive, react.js, redux and implement using node.js.",
      technology: [
        "HTML",
        "CSS",
        "CSS3",
        "react-bootstrap",
        "react.js",
        "node.js"
        // "HTML", "CSS", "CSS3", "Responsive", "react.js", "node.js"
      ]
    },
    {
      type: "Admin - User",
      img: "./img/pro/pro-2.png",
      title: "Compastrips",
      details:
        "Compastrips Admin panel and User panel Website designing using HTML, CSS, React Bootstrap, Responsive, react.js, redux and implement using node.js.",
      technology: [
        "HTML",
        "CSS",
        "CSS3",
        "react-bootstrap",
        "react.js",
        "node.js"
        // "HTML", "CSS", "CSS3", "Responsive", "react.js", "node.js"
      ]
    }
  ]

  return (
    <div className="OurProjectContent">
      <div className="projectLayer"></div>
      <div className="OurProjectInnerctn">
        <Container>
          <Row className="align-items-center">
            <Col xl={6} lg={8}>
              <div className="ourProjectInnerTitle">
                <h3>Projects we are proud of</h3>
                <p>
                  Welcome To Karmadhi Solutions – Affordable Web Development
                  Company.
                </p>
                <button onClick={handleProject}>View all projects</button>
              </div>
            </Col>
          </Row>

          <div className="mainSliderBox">
            <Slider {...settings}>
              {projects.map(items => (
                <div className="mainSliderContentBox" key={items.title}>
                  <div className="sliderBox">
                    <img src={items.img} alt="" className="SliderImg" />
                  </div>
                  <div className="mainSliderTitle">
                    <div className="layer"></div>
                    <div className="silderTitle">
                      <div className="sliderInnerTitle">
                        <h2>{items.type}</h2>
                        <span>{items.title}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mainHoverSection">
                    <div className="HoverLayer"></div>
                    <div className="HoverSection">
                      <div className="hoverTitle">
                        <h2>Projects</h2>
                        <span>{items.title}</span>
                      </div>
                      <div className="hoverDetails">
                        <p>{items.details}</p>
                      </div>
                      <div className="hoverLabelBtn">
                        <label> {items.technology.join("# ")}</label>
                        {/* <button>View Project</button> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default OurProjectSection
