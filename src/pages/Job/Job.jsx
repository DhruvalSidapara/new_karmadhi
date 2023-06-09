import React, { useEffect, useState } from "react"
import Benner from "../../Component/Benner"
import NevTab from "../../Component/NevTab"
import { Col, Row } from "react-bootstrap"
import { useHistory } from "react-router-dom"

const Job = () => {
  const [hide, setHide] = useState(false)

  const [collapse, setCollapse] = useState(false)
  const handleClick = e => {
    setCollapse(!collapse)
  }

  const history = useHistory()
  const handleContact = () => {
    history.push("/contactus")
  }

  const JobsCard = [
    {
      bgimg: "./img/sliderimg/slider-1.jpg",
      title: "Node JS Developer",
      content:
        "karmadhi Solutions  is currently looking for a Senior Node js Developers with min 1 year experience.",
      location: "Surat",
      Available: 2,
      contract: "Yes",
      english: "Yes",
      experience: "min 1 year"
    },
    {
      bgimg: "./img/sliderimg/slider-3.jpg",
      title: "React JS Developer",
      content:
        "karmadhi Solutions  is currently looking for a Senior React js Developers with min 1 year experience.",
      location: "Surat",
      Available: 1,
      contract: "Yes",
      english: "Yes",
      experience: "min 1 year"
    },
    {
      bgimg: "./img/sliderimg/slider-4.jpg",
      title: "Angular JS Developer",
      content:
        "karmadhi Solutions  is currently looking for a Senior Angular js Developers with min 1 year experience.",
      location: "Surat",
      Available: 1,
      contract: "Yes",
      english: "Yes",
      experience: "min 1 year"
    },
    {
      bgimg: "./img/sliderimg/slider-2.jpg",
      title: "PHP Laravel Developer",
      content:
        "karmadhi Solutions  is currently looking for a  PHP Laravel Developers with min 0 to 1 year experience.",
      location: "Surat",
      Available: 3,
      contract: "Yes",
      english: "Yes",
      experience: "0 to 1 year"
    },
    {
      bgimg: "./img/sliderimg/slider-5.jpg",
      title: "Mern Stack Developer",
      content:
        "karmadhi Solutions  is currently looking for a  Mern Stack Developer with min 0 to 1 year experience.",
      location: "Surat",
      Available: 1,
      contract: "Yes",
      english: "Yes",
      experience: "0 to 1 year"
    }
  ]

  return (
    <>
      <Benner
        title="Create your career now"
        info="We are investing in training and professional growth of our employees. Become a part of our close knit community of passionate explorers"
      />

      <div className="CustomContainer mb-5">
        <div className="ourjobMainBox">
          <div className="container">
            <NevTab title="Home" title1="Jobs" title2="" hide={hide} />
            {/* <div className='d-flex align-items-center mainLinkBox'>
                          <div className='linkBox'>
                              <Link to='/'> Home </Link>
                          </div>
                          <span>
                              <img src='./img/icone/ChevronRight.png' />
                          </span>
                          <div className='linkBox'>
                              <Link to='/job' className='active'> Jobs </Link>
                          </div>
                      </div> */}

            <div className="jobsNeedcard">
              <div className="xsContainer">
                <div>
                  <Row className="align-items-center">
                    {JobsCard.map(item => (
                      <Col md={4} sm={6} lg={6} key={item.bgimg}>
                        <div>
                          <div className="jobcardbox">
                            <img src={item.bgimg} className="mainImg" />
                            <div className="jobLayer"></div>
                            {/* <img
                            src="./img/layerbg/joblayer.png"
                            className="joblayer"
                          /> */}

                            <div className="jobcardTitlebox">
                              <div className="urgentlyNeeded">
                                {/* <Link to={`/job/${data._id}`}>
                              Urgently Needed
                            </Link> */}
                                {/* <Link to="/jobdetail">Contact Us</Link>x */}
                                <a href="mailto:info@karmadhisolutions.com">
                                  Contact Us
                                </a>
                              </div>
                              <div className="jobcardborder">
                                <h1>{item.title}</h1>
                                {/* <h1 className="JobMainTitle">{data.title}</h1> */}
                                {/* <p>{data.shortDescription}</p> */}
                                <p>{item.content}</p>
                              </div>

                              <div>
                                <div className="mainlocationbox">
                                  <div className="d-flex align-items-center justify-content-between w-100 location">
                                    <div className="d-flex align-items-center ">
                                      <img
                                        src="./img/icone/map.png"
                                        className="iconImg"
                                      />
                                      {/* <h1>{data.location}</h1> */}
                                      <h1>{item.location}</h1>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between visa">
                                      <h1>Contract</h1>
                                      {/* <p>{data.urgent === true ? "Yes" : ""}</p> */}
                                      <p>{item.contract}</p>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center justify-content-between w-100 location">
                                    <div className="d-flex align-items-center">
                                      <img
                                        src="./img/icone/calendar.png"
                                        className="iconImg"
                                      />
                                      {/* <h1>{data.period}</h1> */}
                                      <h1>{item.experience}</h1>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-between visa">
                                      <h1>English Speaking:</h1>
                                      <p>{item.english}</p>
                                      {/* <p>
                                    {data.englishSpeaking === true
                                      ? "Yes"
                                      : ""}
                                  </p> */}
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center location">
                                    <img
                                      src="./img/icone/teleworking.png"
                                      className="iconImg"
                                    />
                                    <h1>{item.Available} Seat</h1>
                                    {/* <h1>
                                  {data.remoteWork === true
                                    ? "Remotework"
                                    : "on site"}
                                </h1> */}
                                  </div>
                                </div>
                                <div></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                    {/* {jobs.map((data: any, index) => {
                                          return (
                                              <Col md={4} sm={6} lg={6}>
                                                  <div>
                                                      <div className='jobcardbox'>
                                                          <img src='./img/images/job.jpg' className="mainImg" />
                                                          <div className='jobLayer'></div>
                                                          <img src='./img/layerbg/joblayer.png' className='joblayer' />

                                                          <div className='jobcardTitlebox'>
                                                              <div className='urgentlyNeeded'>
                                                                  <Link to={`/job/${data._id}`}>Urgently Needed</Link>
                                                              </div>
                                                              <div className='jobcardborder'>
                                                                  <h1>Senior Java Developer</h1>
                                                                  <h1 className='JobMainTitle'>{data.title}</h1>
                                                                  <p>{data.shortDescription}</p>
                                                              </div>

                                                              <div>
                                                                  <div className='mainlocationbox'>
                                                                      <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                          <div className='d-flex align-items-center '>
                                                                              <img src='./img/icone/map.png' className='iconImg' />
                                                                              <h1>{data.location}</h1>
                                                                          </div>

                                                                          <div className='d-flex align-items-center justify-content-between visa'>
                                                                              <h1>Visa Support:</h1>
                                                                              <p>{data.urgent === true ? 'Yes' : ''}</p>
                                                                          </div>
                                                                      </div>
                                                                      <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                          <div className='d-flex align-items-center'>
                                                                              <img src='./img/icone/calendar.png' className='iconImg' />
                                                                              <h1>{data.period}</h1>
                                                                          </div>

                                                                          <div className='d-flex align-items-center justify-content-between visa'>
                                                                              <h1>English Speaking:</h1>
                                                                              <p>{data.englishSpeaking === true ? 'Yes' : ''}</p>
                                                                          </div>
                                                                      </div>
                                                                      <div className='d-flex align-items-center location'>
                                                                          <img src='./img/icone/teleworking.png' className='iconImg' />
                                                                          <h1>{data.remoteWork === true ? 'Remotework' : 'on site'}</h1>
                                                                      </div>
                                                                  </div>
                                                                  <div></div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </Col>
                                          )
                                      })} */}

                    {/* <Col lg={6} md={4} sm={6}>

                                          <div>
                                              <div className='jobcardbox'>
                                                  <img src='./img/images/job1.png' className="mainImg" />
                                                  <img src='./img/layerbg/joblayer.png' className='joblayer' />

                                                  <div className='jobcardTitlebox'>
                                                      <div className='urgentlyNeeded'>
                                                          <button onClick={handleJob}>Urgently Needed</button>
                                                      </div>
                                                      <div className='jobcardborder'>
                                                          <h1>Senior Java Developer</h1>
                                                          <p>CodeImpact is currently looking for a Senior Java developer with front-end experience.
                                                              You will work for a leading company in the telecom industry with
                                                              You will work for a leading company in the telecom industry with
                                                          </p>
                                                      </div>

                                                      <div>
                                                          <div className='mainlocationbox'>
                                                              <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                  <div className='d-flex align-items-center '>
                                                                      <img src='./img/icone/map.png' className='iconImg' />
                                                                      <h1>Kyiv</h1>
                                                                  </div>

                                                                  <div className='d-flex align-items-center justify-content-between visa'>
                                                                      <h1>Visa Support:</h1>
                                                                      <p>Yes</p>
                                                                  </div>
                                                              </div>
                                                              <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                  <div className='d-flex align-items-center '>
                                                                      <img src='./img/icone/calendar.png' className='iconImg' />
                                                                      <h1>Long term</h1>
                                                                  </div>

                                                                  <div className='d-flex align-items-center justify-content-between visa'>
                                                                      <h1>English Speaking:</h1>
                                                                      <p>Yes</p>
                                                                  </div>
                                                              </div>
                                                              <div className='d-flex align-items-center location'>
                                                                  <img src='./img/icone/teleworking.png' className='iconImg' />
                                                                  <h1>Freelance</h1>
                                                              </div>
                                                          </div>
                                                          <div></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </Col>
                                      <Col md={4} lg={6} sm={6}>
                                          <div>
                                              <div className='jobcardbox'>
                                                  <img src='./img/images/job1.png' className="mainImg" />
                                                  <img src='./img/layerbg/joblayer.png' className='joblayer' />

                                                  <div className='jobcardTitlebox'>
                                                      <div className='urgentlyNeeded'>
                                                          <button onClick={handleJob}>Urgently Needed</button>
                                                      </div>
                                                      <div className='jobcardborder'>
                                                          <h1>Senior Java Developer</h1>
                                                          <p>CodeImpact is currently looking for a Senior Java developer with front-end experience.
                                                              You will work for a leading company in the telecom industry with
                                                              You will work for a leading company in the telecom industry with
                                                          </p>
                                                      </div>

                                                      <div>
                                                          <div className='mainlocationbox'>
                                                              <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                  <div className='d-flex align-items-center '>
                                                                      <img src='./img/icone/map.png' className='iconImg' />
                                                                      <h1>Kyiv</h1>
                                                                  </div>

                                                                  <div className='d-flex align-items-center justify-content-between visa'>
                                                                      <h1>Visa Support:</h1>
                                                                      <p>Yes</p>
                                                                  </div>
                                                              </div>
                                                              <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                  <div className='d-flex align-items-center '>
                                                                      <img src='./img/icone/calendar.png' className='iconImg' />
                                                                      <h1>Long term</h1>
                                                                  </div>

                                                                  <div className='d-flex align-items-center justify-content-between visa'>
                                                                      <h1>English Speaking:</h1>
                                                                      <p>Yes</p>
                                                                  </div>
                                                              </div>
                                                              <div className='d-flex align-items-center location'>
                                                                  <img src='./img/icone/teleworking.png' className='iconImg' />
                                                                  <h1>Freelance</h1>
                                                              </div>
                                                          </div>
                                                          <div></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </Col>
                                      <Col md={4} lg={6} sm={6}>

                                          <div>
                                              <div className='jobcardbox'>
                                                  <img src='./img/images/job1.png' className="mainImg" />
                                                  <img src='./img/layerbg/joblayer.png' className='joblayer' />

                                                  <div className='jobcardTitlebox'>
                                                      <div className='urgentlyNeeded'>
                                                          <button onClick={handleJob}>Urgently Needed</button>
                                                      </div>
                                                      <div className='jobcardborder'>
                                                          <h1>Senior Java Developer</h1>
                                                          <p>CodeImpact is currently looking for a Senior Java developer with front-end experience.
                                                              You will work for a leading company in the telecom industry with
                                                              You will work for a leading company in the telecom industry with
                                                          </p>
                                                      </div>

                                                      <div>
                                                          <div className='mainlocationbox'>
                                                              <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                  <div className='d-flex align-items-center '>
                                                                      <img src='./img/icone/map.png' className='iconImg' />
                                                                      <h1>Kyiv</h1>
                                                                  </div>

                                                                  <div className='d-flex align-items-center justify-content-between visa'>
                                                                      <h1>Visa Support:</h1>
                                                                      <p>Yes</p>
                                                                  </div>
                                                              </div>
                                                              <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                  <div className='d-flex align-items-center '>
                                                                      <img src='./img/icone/calendar.png' className='iconImg' />
                                                                      <h1>Long term</h1>
                                                                  </div>

                                                                  <div className='d-flex align-items-center justify-content-between visa'>
                                                                      <h1>English Speaking:</h1>
                                                                      <p>Yes</p>
                                                                  </div>
                                                              </div>
                                                              <div className='d-flex align-items-center location'>
                                                                  <img src='./img/icone/teleworking.png' className='iconImg' />
                                                                  <h1>Freelance</h1>
                                                              </div>
                                                          </div>
                                                          <div></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </Col>
                                      <Col md={4} lg={6} sm={6}>
                                          <div>
                                              <div className='jobcardbox'>
                                                  <img src='./img/images/job1.png' className="mainImg" />
                                                  <img src='./img/layerbg/joblayer.png' className='joblayer' />

                                                  <div className='jobcardTitlebox'>
                                                      <div className='urgentlyNeeded'>
                                                          <button onClick={handleJob}>Urgently Needed</button>
                                                      </div>
                                                      <div className='jobcardborder'>
                                                          <h1>Senior Java Developer</h1>
                                                          <p>CodeImpact is currently looking for a Senior Java developer with front-end experience.
                                                              You will work for a leading company in the telecom industry with
                                                              You will work for a leading company in the telecom industry with
                                                          </p>
                                                      </div>

                                                      <div>
                                                          <div className='mainlocationbox'>
                                                              <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                  <div className='d-flex align-items-center '>
                                                                      <img src='./img/icone/map.png' className='iconImg' />
                                                                      <h1>Kyiv</h1>
                                                                  </div>

                                                                  <div className='d-flex align-items-center justify-content-between visa'>
                                                                      <h1>Visa Support:</h1>
                                                                      <p>Yes</p>
                                                                  </div>
                                                              </div>
                                                              <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                  <div className='d-flex align-items-center '>
                                                                      <img src='./img/icone/calendar.png' className='iconImg' />
                                                                      <h1>Long term</h1>
                                                                  </div>

                                                                  <div className='d-flex align-items-center justify-content-between visa'>
                                                                      <h1>English Speaking:</h1>
                                                                      <p>Yes</p>
                                                                  </div>
                                                              </div>
                                                              <div className='d-flex align-items-center location'>
                                                                  <img src='./img/icone/teleworking.png' className='iconImg' />
                                                                  <h1>Freelance</h1>
                                                              </div>
                                                          </div>
                                                          <div></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </Col>
                                      <Col md={4} lg={6} sm={6}>

                                          <div>
                                              <div className='jobcardbox'>
                                                  <img src='./img/images/job1.png' className="mainImg" />
                                                  <img src='./img/layerbg/joblayer.png' className='joblayer' />

                                                  <div className='jobcardTitlebox'>
                                                      <div className='urgentlyNeeded'>
                                                          <button onClick={handleJob}>Urgently Needed</button>
                                                      </div>
                                                      <div className='jobcardborder'>
                                                          <h1>Senior Java Developer</h1>
                                                          <p>CodeImpact is currently looking for a Senior Java developer with front-end experience.
                                                              You will work for a leading company in the telecom industry with
                                                              You will work for a leading company in the telecom industry with
                                                          </p>
                                                      </div>

                                                      <div>
                                                          <div className='mainlocationbox'>
                                                              <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                  <div className='d-flex align-items-center '>
                                                                      <img src='./img/icone/map.png' className='iconImg' />
                                                                      <h1>Kyiv</h1>
                                                                  </div>

                                                                  <div className='d-flex align-items-center justify-content-between visa'>
                                                                      <h1>Visa Support:</h1>
                                                                      <p>Yes</p>
                                                                  </div>
                                                              </div>
                                                              <div className='d-flex align-items-center justify-content-between w-100 location'>
                                                                  <div className='d-flex align-items-center '>
                                                                      <img src='./img/icone/calendar.png' className='iconImg' />
                                                                      <h1>Long term</h1>
                                                                  </div>

                                                                  <div className='d-flex align-items-center justify-content-between visa'>
                                                                      <h1>English Speaking:</h1>
                                                                      <p>Yes</p>
                                                                  </div>
                                                              </div>
                                                              <div className='d-flex align-items-center location'>
                                                                  <img src='./img/icone/teleworking.png' className='iconImg' />
                                                                  <h1>Freelance</h1>
                                                              </div>
                                                          </div>
                                                          <div></div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </Col> */}
                  </Row>
                </div>
              </div>
              <div className="extraSmallContainer">
                <div className="wrap-content-1">
                  <div className="joblisting">
                    <h1>Jobs Listing</h1>
                  </div>

                  <div className="jobcollapseBox">
                    <div className="yourresume">
                      <div className="d-flex align-items-center justify-content-between job-collapse">
                        <h1>Your Resume</h1>
                        <button
                          className="btn btn-primary"
                          id="collapse1"
                          data-toggle="collapse"
                          data-target="#multiCollapseExample1"
                          role="button"
                          aria-expanded="false"
                          aria-controls="multiCollapseExample1"
                          onClick={handleClick}
                        >
                          {collapse ? (
                            <img src="./img/icone/chevron-up.png" />
                          ) : (
                            <img
                              src="./img/icone/chevron-up.png"
                              className="downCollapseArrow"
                            />
                          )}
                        </button>
                      </div>
                      <div className="yourresumerow">
                        <div className="row">
                          <div className="col">
                            <div
                              className="collapse multi-collapse"
                              id="multiCollapseExample1"
                            >
                              <div className="card card-body">
                                <ul>
                                  <li>Send us Resume on email first</li>
                                  {/* <li>We will check whether your resume. </li> */}
                                  <li>
                                    Your experience match our requirements.
                                  </li>
                                  <li>Contact you for interview.</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="HireProcess">
                      <div className="d-flex align-items-center justify-content-between job-collapse">
                        <h1>Hire Process</h1>
                        <button
                          className="btn btn-primary"
                          type="button"
                          id="collapse2"
                          data-toggle="collapse"
                          data-target="#multiCollapseExample2"
                          aria-expanded="false"
                          // onClick={handleClick}
                          aria-controls="multiCollapseExample2"
                        >
                          <img src="./img/icone/chevron-up.png" />
                        </button>
                      </div>

                      <div className="row">
                        <div className="col">
                          <div
                            className="collapse multi-collapse"
                            id="multiCollapseExample2"
                          >
                            <div className="card card-body">
                              <ul>
                                <li>Technical Interview</li>
                                <li>Practical Interview</li>
                                <li>Sign Contract </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="HireProcess">
                      <div className="d-flex align-items-center justify-content-between job-collapse">
                        <h1>What We Offer</h1>
                        <button
                          className="btn btn-primary"
                          type="button"
                          id="collapse3"
                          data-toggle="collapse"
                          data-target="#multiCollapseExample3"
                          aria-expanded="false"
                          // onClick={handleClick}
                          aria-controls="multiCollapseExample3"
                        >
                          <img src="./img/icone/chevron-up.png" />
                        </button>
                      </div>

                      <div className="row">
                        <div className="col">
                          <div
                            className="collapse multi-collapse"
                            id="multiCollapseExample3"
                          >
                            <div className="card card-body">
                              <ul>
                                <li>Alternative Saturday off</li>
                                <li>6 Paid Sick Leave</li>
                                <li>Company Picnic</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wrap-content-2">
                  <div className="contactUsBox">
                    <img src="./img/images/headset.png" className="headset" />
                    <div className="contactUsInner">
                      <h3>How can we help you?</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusan
                      </p>
                      <button
                        className="Contact d-flex align-items-center justify-content-center"
                        onClick={handleContact}
                      >
                        <img src="./img/icone/phone-call.png" />
                        Contact Us
                      </button>
                    </div>
                  </div>

                  <div className="seccontactUsBox">
                    <img
                      src="./img/icone/briefcase.png"
                      className="briefcase"
                    />
                    <div className="contactUsInner">
                      <h3>How can we help you?</h3>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusan
                      </p>

                      <a
                        href="mailto:info@karmadhisolutions.com"
                        className="text-decoration-none"
                      >
                        <div className="File">
                          <label htmlFor="input-file">
                            <img src="./img/icone/upload.png" />
                            Upload Resume
                          </label>
                          {/* <input type="file" id="input-file" /> */}
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="jobPagination">
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
                <><img src="./img/doublePolygon.svg" /></>
              }
              lastPageText={
                <><img src='./img/DublePolygonRight.svg' /></>
                <></>
              }
              nextPageText={
                <div className="test">
                  {" "}
                  <img
                    src="./img/icone/blackarrow.png"
                    className="secArrow"
                  />{" "}
                </div>
              }
              activePage={pageNo}
              itemsCountPerPage={10}
              pageRangeDisplayed={10}
              totalItemsCount={25}
              onChange={(e) => {
                setPageNo(e);
              }}
            />
          </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Job
