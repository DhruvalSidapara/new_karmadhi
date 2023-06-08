import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Tagline = () => {
    return (
        <>
            <div className='taglinebox'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={10} xl={6}>
                            <div className='teglineText'>
                                <h1>TAGLINE HERE</h1>
                                <h2>At Codeimpact We Provide Many Software Development And Recruitment Services</h2>
                                <p>We distinguish ourselves by using new technologies so that we can develop the perfect software.
                                    Also, recruitment is an essential part of our services. We are happy to help startups set up their product and market them.
                                    Because we are an IT company ourselves, we have a good view of the world of IT, and we can also match the right IT specialists
                                    in your company which can help you make your startup successful.</p>
                            </div>
                        </Col>
                        <Col lg={10} xl={6}>
                            <div className='teglineMainImg'>
                                <img src='./img/images/teglineimg.png' style={{ width: '100%', height: '422px', borderRadius: '12px', position: 'relative', zIndex: 3, objectFit: "cover" }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Tagline