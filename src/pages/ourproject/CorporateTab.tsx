import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CorporateTab = () => {
    return (
        <>
            <Row>
                <Col xl={6} md={4} lg={6}>
                    <div className='position-relative'>
                        <div className="layer"></div>
                        <img src="./img/images/projectGrid.jpg" alt="" className='GirdImgOne' />
                        <div className='HoverClass'>
                            <div className='corporateTitle'>
                                <h2>
                                    <Link to="#">
                                        Information Technology
                                    </Link>
                                </h2>
                            </div>
                            <div className='corporateSpan'>
                                <span>Croprate finance</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl={3} md={8} lg={6}>
                    <div className='position-relative'>
                        <div className="layer"></div>
                        <img src="./img/images/GridImgTwo.jpg" alt="" className='GirdImgOne' />
                        <div className='HoverClass'>
                            <div className='corporateTitle MiniGrid'>
                                <h2>
                                    <Link to="#">
                                        Information Technology
                                    </Link>
                                </h2>
                            </div>
                            <div className='corporateSpan miniCroprorateSpan'>
                                <span>Croprate finance</span>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xl={3} md={6} lg={6}>
                    <div className='position-relative'>
                        <div className="layer"></div>
                        <img src="./img/images/projectGrid.jpg" alt="" className='GirdImgOne' />
                        <div className='HoverClass'>
                            <div className='corporateTitle MiniGrid'>
                                <h2>
                                    <Link to="#">
                                        Information Technology
                                    </Link>
                                </h2>
                            </div>
                            <div className='corporateSpan miniCroprorateSpan'>
                                <span>Croprate finance</span>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col xl={6} md={6} lg={6}>
                    <div className='position-relative'>
                        <div className="layer"></div>
                        <img src="./img/images/projectGrid.jpg" alt="" className='GirdImgOne' />
                        <div className='HoverClass'>
                            <div className='corporateTitle'>
                                <h2>
                                    <Link to="#">
                                        Information Technology
                                    </Link>
                                </h2>
                            </div>
                            <div className='corporateSpan'>
                                <span>Croprate finance</span>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default CorporateTab