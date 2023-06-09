import Benner from "../../Component/Benner"
import Tagline from "./Tagline"
import OurSpecialiteies from "./OurSpecialiteies"
import CeoContent from "./CeoContent"
import { Link } from "react-router-dom"
import { useState } from "react"
import GoToTop from "../GoToTop"

const ExcepteurInst = () => {
  const [collapseActive, setCollapseActive] = useState()
  const collapseDetails = [
    {
      id: "headingOne",
      title:
        "Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      details:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single- origin coffee nulla assumenda shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.Ad vegan excepteur butcher vice lomo.Leggings occaecat craft beer farm - to - table,raw denim aesthetic synth nesciunt you probably haven  heard of them accusamus labore sustainable VHS."
    },
    {
      id: "headingTwo",
      title:
        "Consectetur, adipisci velit, sed quia non numquam eius modi tempora",
      details:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single- origin coffee nulla assumenda shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.Ad vegan excepteur butcher vice lomo.Leggings occaecat craft beer farm - to - table,raw denim aesthetic synth nesciunt you probably haven  heard of them accusamus labore sustainable VHS."
    },
    {
      id: "headingThree",
      title:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
      details:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single- origin coffee nulla assumenda shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.Ad vegan excepteur butcher vice lomo.Leggings occaecat craft beer farm - to - table,raw denim aesthetic synth nesciunt you probably haven  heard of them accusamus labore sustainable VHS."
    }
  ]

  return (
    <>
      <Benner
        title="Excepteur sint occaecat cupidatat non proident Suliem"
        info="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu"
      />

      <div className="excepteurinstmainctn">
        <div className="container">
          <div className="d-flex align-items-center mainLinkBox">
            <div className="linkBox">
              <Link to="/"> Home </Link>
            </div>
            <span>
              <img src="./img/icone/ChevronRight.png" />
            </span>
            <div className="linkBox">
              <Link to="/blog"> Blog Posts </Link>
            </div>
            <span>
              <img src="./img/icone/ChevronRight.png" />
            </span>
            <div className="linkBox">
              <Link to="/excepteurinst" className="active">
                {" "}
                Excepteur sint occaecat{" "}
              </Link>
            </div>
          </div>

          <div className="excepteurinstDtailsSection">
            <div className="excepteurinstContent d-flex  justify-content-between">
              <div className="xsContainer">
                <div className="mainSocialbox d-flex align-items-center justify-content-between">
                  <div className="socialdate">
                    <h1>Posted 26 April 2021</h1>
                  </div>
                  <div className="d-flex align-items-center postingLinkmain">
                    <div className="postingLink">
                      <h1>Share Post:</h1>
                    </div>
                    <div className="PostingSocialmedia">
                      <Link to="#">
                        <img src="./img/icone/Facebook.png" />
                      </Link>
                      <Link to="#">
                        <img src="./img/icone/Linkedin1.png" />
                      </Link>
                      <Link to="#">
                        <img src="./img/icone/Instagram.png" />
                      </Link>
                      <Link to="#">
                        <img src="./img/icone/Twitter.png" />
                      </Link>
                      <Link to="#">
                        <img src="./img/icone/youtube.png" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="excepteurinsthasebox">
                  <div className="hasectn">
                    <p>#E-Learning</p>
                  </div>
                  <div className="hasectn">
                    <p>#Blockchain</p>
                  </div>
                  <div className="hasectn">
                    <p>#Fintech</p>
                  </div>
                  <div className="hasectn">
                    <p>#VirtualReality</p>
                  </div>
                  <div className="hasectn">
                    <p>#RecruitmentProcess</p>
                  </div>
                </div>

                <div className="excepteurDetailstitle">
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur
                  </p>
                </div>

                <div className="excepteurtextBox">
                  <h1>Excepteur sint occaecat cupidatat non proident Suliem</h1>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam
                  </p>
                </div>

                <div className="excepteurdotlink">
                  <h1>dolorem ipsum quia dolor sit amet</h1>
                  <ul>
                    <li>Sed quia consequuntur magni dolores eos qui</li>
                    <li>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit
                    </li>
                    <li>
                      Qui dolorem ipsum quia dolor sit amet, consectetur,
                      adipisci velit, sed quia non numquam eius modi tempora
                      incidunt ut labore et dolore magnam aliquam
                    </li>
                    <li>Voluptatem accusantium doloremque laudantium</li>
                  </ul>
                </div>

                <div className="collExcepteurbox">
                  <div id="accordion">
                    {collapseDetails.map(data => {
                      return (
                        <div className="card" key={data.id}>
                          <div
                            className="card-header d-flex align-items-center justify-content-between"
                            id={data.id}
                          >
                            <h5
                              className={
                                collapseActive === data.id
                                  ? "mb-0 active"
                                  : "mb-0 "
                              }
                            >
                              {data.title}
                            </h5>
                            <button
                              className="btn btn-link collapsed"
                              // data-toggle="collapse"
                              // data-target="#collapseOne"
                              // aria-expanded="false"
                              // aria-controls="collapseOne"
                              onClick={() => setCollapseActive(data.id)}
                            >
                              {collapseActive === data.id ? (
                                <img src="./img/icone/minus.png" />
                              ) : (
                                <img src="./img/icone/plus.png" />
                              )}
                            </button>
                          </div>

                          <div
                            id={data.id}
                            className={
                              collapseActive === data.id
                                ? "collapse show"
                                : "collapse"
                            }
                            aria-labelledby={data.id}
                            data-parent="#accordion"
                          >
                            <div className="card-body">
                              <p>{data.details}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}

                    {/* <div className="card">
                                        <div className="card-header d-flex align-items-center justify-content-between" id="headingOne">
                                            <h5 className="mb-0 " >Qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</h5>
                                            <button
                                                className="btn btn-link collapsed"
                                                data-toggle="collapse"
                                                data-target="#collapseOne"
                                                aria-expanded="false"
                                                aria-controls="collapseOne"
                                            >
                                                <img src='./img/icone/plus.png' />
                                            </button>
                                        </div>

                                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                    3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                    Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                                    raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </p>
                                            </div>
                                        </div>
                                    </div> */}
                    {/* <div className="card">
                                        <div className="card-header d-flex align-items-center justify-content-between" id="headingTwo">
                                            <h5 className="mb-0 " >Consectetur, adipisci velit, sed quia non numquam eius modi tempora</h5>
                                            <button
                                                className="btn btn-link collapsed"
                                                data-toggle="collapse"
                                                data-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                <img src='./img/icone/plus.png' />
                                            </button>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                    3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                    Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                                    raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </p>
                                            </div>
                                        </div>
                                    </div> */}
                    {/* <div className="card">
                                        <div className="card-header d-flex align-items-center justify-content-between" id="headingThree">
                                            <h5 className="mb-0">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</h5>
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                <img src='./img/icone/plus.png' />
                                            </button>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                                    3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                    Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                                    raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                                </p>
                                            </div>
                                        </div>
                                    </div> */}
                  </div>
                </div>

                <div className="excepteurimgbox">
                  <img
                    src="./img/images/excepteurimg.png"
                    style={{
                      width: "100%",
                      height: "300px",
                      borderRadius: "12px",
                      objectFit: "cover"
                    }}
                  />
                  <h1>Nemo enim ipsam voluptatem quia</h1>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam
                  </p>
                </div>
              </div>

              <div className="extraSmallContainer">
                <div className="relatedBlogTitle">
                  <h1>Related blog</h1>
                </div>
                <div className="relatedBlogContent">
                  <div className="relatedCtn d-flex align-items-center">
                    <img src="./img/images/RelatedBlog.png" alt="" />
                    <div className="relatedDetails">
                      <h4>Blog Posts Highlight</h4>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  <div className="relatedCtn d-flex align-items-center">
                    <img src="./img/images/RelatedBlog.png" alt="" />
                    <div className="relatedDetails">
                      <h4>Blog Posts Highlight</h4>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  <div className="relatedCtn d-flex align-items-center">
                    <img src="./img/images/RelatedBlog.png" alt="" />
                    <div className="relatedDetails">
                      <h4>Blog Posts Highlight</h4>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  <div className="relatedCtn d-flex align-items-center">
                    <img src="./img/images/RelatedBlog.png" alt="" />
                    <div className="relatedDetails">
                      <h4>Blog Posts Highlight</h4>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  <div className="relatedCtn d-flex align-items-center">
                    <img src="./img/images/RelatedBlog.png" alt="" />
                    <div className="relatedDetails">
                      <h4>Blog Posts Highlight</h4>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  <div className="relatedCtn d-flex align-items-center">
                    <img src="./img/images/RelatedBlog.png" alt="" />
                    <div className="relatedDetails">
                      <h4>Blog Posts Highlight</h4>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                  <div className="relatedCtn d-flex align-items-center">
                    <img src="./img/images/RelatedBlog.png" alt="" />
                    <div className="relatedDetails">
                      <h4>Blog Posts Highlight</h4>
                      <p>Lorem ipsum dolor sit amet</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Tagline />
        <OurSpecialiteies />
        <CeoContent />
      </div>
      <GoToTop />
    </>
  )
}

export default ExcepteurInst
