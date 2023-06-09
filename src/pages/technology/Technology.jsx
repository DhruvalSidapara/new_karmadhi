import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./contact.css"
import Benner from "../../Component/Benner"
import GoToTop from "../GoToTop"

const Technology = () => {
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
    },
    {
      img: "./img/logo/myadmin.svg"
    },
    {
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
    }

    // {
    //     img: "./img/logo/postman.png"
    // },
  ]

  return (
    <>
      <Benner
        title="Technology"
        info="We are committed to a production consistent with the following value system"
      />

      <div className="CustomContainer">
        <div className="contactBg">
          <Container>
            <div className="contactTitleBox">
              <div className="title">
                <h4>Technology</h4>
                <h3>
                  Delivering business solutions for the web and mobile world.
                </h3>
              </div>
            </div>
          </Container>

          <Container>
            <Row>
              {technology.map(items => (
                <Col md={3} className="text-center" key={items.img}>
                  <img src={items.img} alt="" className="tech-images" />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
      <GoToTop />
    </>
  )
}

export default Technology
