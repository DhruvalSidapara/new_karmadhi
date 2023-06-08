import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const OurSpecialiteies = () => {
    return (
        <>
            <div className='ourSpecialitiesbox'>
                <h1 className='text-center'>OUR SPECIALTIES</h1>
                <h2 className='text-center mainTitle'>Nemo enim ipsam voluptatem quia voluptas</h2>

                <Container>
                    <Row>
                        <Col xl={3} sm={6}>
                            <div className='specialitiescard'>
                                <img src='./img/images/human-resources.png' />
                                <h2 className='recruitment'>RECRUITMENT</h2>
                                <p>We select IT professionals worldwide to strengthen your team</p>
                            </div>
                        </Col>
                        <Col xl={3} sm={6}>
                            <div className='specialitiescard'>
                                <img src='./img/images/app-development.png' />
                                <h2 className='webDevelop'>WEB AND APP DEVELOPMENT</h2>
                                <p>Whether it concerns a mobile (android/ios) app, custom software, or a cloud solution, we are happy to put your product on the market</p>
                            </div>
                        </Col>
                        <Col xl={3} sm={6}>
                            <div className='specialitiescard'>
                                <img src='./img/images/domain.png' />
                                <h2 className='website'>WEBSITE DEVELOPMENT</h2>
                                <p>A website with a content management system where you can easily manage the content of your site with packages such as Drupal, Typo3, or WordPress</p>
                            </div>
                        </Col>
                        <Col xl={3} sm={6}>
                            <div className='specialitiescard'>
                                <img src='./img/images/ecommerce.png' />
                                <h2 className='ecommerce'>E-COMMERCE</h2>
                                <p>Web stores where you can sell your products, we mainly use Magento and Shopify to boost your sales</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* <div className='d-flex align-items-center justify-content-center mainCardbox'>
                    <div className='specialitiescard'>
                        <img src='./img/images/human-resources.png' />
                        <h2>RECRUITMENT</h2>
                        <p>We select IT professionals worldwide to strengthen your team</p>
                    </div>
                    <div className='specialitiescard'>
                        <img src='./img/images/app-development.png' />
                        <h2>WEB AND APP DEVELOPMENT</h2>
                        <p>Whether it concerns a mobile (android/ios) app, custom software, or a cloud solution, we are happy to put your product on the market</p>
                    </div>
                    <div className='specialitiescard'>
                        <img src='./img/images/domain.png' />
                        <h2>WEBSITE DEVELOPMENT</h2>
                        <p>A website with a content management system where you can easily manage the content of your site with packages such as Drupal, Typo3, or WordPress</p>
                    </div>
                    <div className='specialitiescard'>
                        <img src='./img/images/ecommerce.png' />
                        <h2>E-COMMERCE</h2>
                        <p>Web stores where you can sell your products, we mainly use Magento and Shopify to boost your sales</p>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default OurSpecialiteies