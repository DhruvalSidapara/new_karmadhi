import React, { useState } from "react"
import Benner from "../../Component/Benner"
import { Col, Row } from "react-bootstrap"
import ReadMore from "../../Component/ReadMore"
import Pagination from "react-js-pagination"
import { Link } from "react-router-dom"
import NevTab from "../../Component/NevTab"
import GoToTop from "../GoToTop"

const Blog = () => {
  const [hide, setHide] = useState(false)
  const [pageNo, setPageNo] = useState(1)
  const [noticeData, setNoticeData] = useState({
    count: 0
  })

  return (
    <>
      <Benner
        title="Blog Posts"
        info="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu"
      />

      <div className="mainBlogCtn">
        <div className="container">
          <NevTab title="Home" title1="Blog Posts" title2="" hide={hide} />

          <div className="bolgContentbox">
            <div>
              <Row className="align-items-center">
                <Col md={6} lg={6}>
                  <div className="blogtextcontent">
                    <h1>26 April 2021</h1>
                    <h2>
                      Excepteur sint occaecat cupidatat non proident Suliem
                    </h2>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                    </p>
                    <Link to="/excepteurinst">
                      Read more
                      <img
                        src="./img/icone/right-arrow.png"
                        style={{ marginLeft: "16px" }}
                      />
                    </Link>
                    <div className="d-flex align-items-center haseTagectn">
                      <div
                        className="hasedetails"
                        style={{ marginRight: "12px" }}
                      >
                        <span>#E-Learning</span>
                      </div>
                      <div className="hasedetails">
                        <span>#Blockchain </span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div>
                    <img
                      src="./img/images/blog1.png"
                      style={{
                        borderRadius: "12px",
                        width: "100%",
                        height: "440px",
                        objectFit: "cover"
                      }}
                      className="blogMainImg"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>

      <div className="MainBlogCardSection">
        <div className="container">
          <div>
            <Row className="align-items-center">
              <Col xl={3} lg={4} sm={6}>
                <div className="mainCarddetails" style={{ cursor: "pointer" }}>
                  <img
                    src="./img/images/blogcard1.png"
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      marginBottom: "16px"
                    }}
                    className="hoverClass"
                  />
                  <div className="cardDetails">
                    <span>26 April 2021</span>
                    <h1>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                    </h1>
                    <ReadMore
                      children={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo`}
                    />
                    <div className="cardHase">
                      <div className="cardLearning">
                        <p>#E-Learning</p>
                      </div>
                      <div className="cardblockchain">
                        <p>#Blockchain</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={4} sm={6}>
                <div className="mainCarddetails" style={{ cursor: "pointer" }}>
                  <img
                    src="./img/images/blogcard2.png"
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      marginBottom: "16px"
                    }}
                    className="hoverClass"
                  />
                  <div className="cardDetails">
                    <span>26 April 2021</span>
                    <h1>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                    </h1>

                    <ReadMore
                      children={
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                      }
                    />

                    <div className="cardHase">
                      <div className="cardLearning">
                        <p>#E-Learning</p>
                      </div>
                      <div className="cardblockchain">
                        <p>#Blockchain</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={4} sm={6}>
                <div className="mainCarddetails" style={{ cursor: "pointer" }}>
                  <img
                    src="./img/images/blogcard3.png"
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      marginBottom: "16px"
                    }}
                    className="hoverClass"
                  />
                  <div className="cardDetails">
                    <span>26 April 2021</span>
                    <h1>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                    </h1>

                    <ReadMore
                      children={
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                      }
                    />

                    <div className="cardHase">
                      <div className="cardLearning">
                        <p>#E-Learning</p>
                      </div>
                      <div className="cardblockchain">
                        <p>#Blockchain</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xl={3} lg={4} sm={6}>
                <div className="mainCarddetails" style={{ cursor: "pointer" }}>
                  <img
                    src="./img/images/blogcard1.png"
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      marginBottom: "16px"
                    }}
                    className="hoverClass"
                  />
                  <div className="cardDetails">
                    <span>26 April 2021</span>
                    <h1>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                    </h1>

                    <ReadMore
                      children={
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                      }
                    />

                    <div className="cardHase">
                      <div className="cardLearning">
                        <p>#E-Learning</p>
                      </div>
                      <div className="cardblockchain">
                        <p>#Blockchain</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              {/* <Col xl={3} lg={4} sm={6}>
                            <div className='mainCarddetails' style={{ cursor: 'pointer' }}>
                                <img src='./img/images/blogcard2.png' style={{ width: "100%", borderRadius: '12px', marginBottom: '16px' }} className='hoverClass' />
                                <div className='cardDetails'>
                                    <span>26 April 2021</span>
                                    <h1>Ut enim ad minima veniam, quis nostrum exercitationem</h1>

                                    <ReadMore children={
                                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                                    } />


                                    <div className='cardHase'>
                                        <div className='cardLearning'>
                                            <p>#E-Learning</p>
                                        </div>
                                        <div className='cardblockchain'>
                                            <p>#Blockchain</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} sm={6}>
                            <div className='mainCarddetails' style={{ cursor: 'pointer' }}>
                                <img src='./img/images/blogcard3.png' style={{ width: "100%", borderRadius: '12px', marginBottom: '16px' }} className='hoverClass' />
                                <div className='cardDetails'>
                                    <span>26 April 2021</span>
                                    <h1>Ut enim ad minima veniam, quis nostrum exercitationem</h1>

                                    <ReadMore children={
                                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                                    } />


                                    <div className='cardHase'>
                                        <div className='cardLearning'>
                                            <p>#E-Learning</p>
                                        </div>
                                        <div className='cardblockchain'>
                                            <p>#Blockchain</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} sm={6}>
                            <div className='mainCarddetails' style={{ cursor: 'pointer' }}>
                                <img src='./img/images/blogcard1.png' style={{ width: "100%", borderRadius: '12px', marginBottom: '16px' }} className='hoverClass' />
                                <div className='cardDetails'>
                                    <span>26 April 2021</span>
                                    <h1>Ut enim ad minima veniam, quis nostrum exercitationem</h1>

                                    <ReadMore
                                        children={
                                            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                                        }
                                    />
                                    <div className='cardHase'>
                                        <div className='cardLearning'>
                                            <p>#E-Learning</p>
                                        </div>
                                        <div className='cardblockchain'>
                                            <p>#Blockchain</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} sm={6}>
                            <div className='mainCarddetails' style={{ cursor: 'pointer' }}>
                                <img src='./img/images/blogcard2.png' style={{ width: "100%", borderRadius: '12px', marginBottom: '16px' }} className='hoverClass' />
                                <div className='cardDetails'>
                                    <span>26 April 2021</span>
                                    <h1>Ut enim ad minima veniam, quis nostrum exercitationem</h1>

                                    <ReadMore children={
                                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                                    } />


                                    <div className='cardHase'>
                                        <div className='cardLearning'>
                                            <p>#E-Learning</p>
                                        </div>
                                        <div className='cardblockchain'>
                                            <p>#Blockchain</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xl={3} lg={4} sm={6}>
                            <div className='mainCarddetails' style={{ cursor: 'pointer' }}>
                                <img src='./img/images/blogcard3.png' style={{ width: "100%", borderRadius: '12px', marginBottom: '16px' }} className='hoverClass' />
                                <div className='cardDetails'>
                                    <span>26 April 2021</span>
                                    <h1>Ut enim ad minima veniam, quis nostrum exercitationem</h1>

                                    <ReadMore children={
                                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
                                    } />


                                    <div className='cardHase'>
                                        <div className='cardLearning'>
                                            <p>#E-Learning</p>
                                        </div>
                                        <div className='cardblockchain'>
                                            <p>#Blockchain</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col> */}
            </Row>
          </div>
        </div>
      </div>

      <div className="blogPagination">
        <Pagination
          itemClass="page-item-custom"
          activeLinkClass="activepage"
          linkClass="page-link-custom"
          linkClassFirst="page-first-arrow"
          linkClassPrev="page-first-arrow"
          linkClassNext="page-first-arrow"
          linkClassLast="page-first-arrow"
          prevPageText={
            <div className="test">
              <img src="./img/icone/blackarrow.png" />
            </div>
          }
          firstPageText={
            <div style={{ display: "none" }}></div>
            // <><img src="./img/doublePolygon.svg" /></>
          }
          lastPageText={
            // <><img src='./img/DublePolygonRight.svg' /></>
            <></>
          }
          nextPageText={
            <div className="test">
              {" "}
              <img src="./img/icone/blackarrow.png" className="secArrow" />{" "}
            </div>
          }
          activePage={pageNo}
          itemsCountPerPage={10}
          pageRangeDisplayed={10}
          totalItemsCount={25}
          onChange={e => {
            setPageNo(e)
          }}
        />
      </div>
      <GoToTop />
    </>
  )
}

export default Blog
