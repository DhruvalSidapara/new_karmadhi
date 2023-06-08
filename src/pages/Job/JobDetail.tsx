import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Benner from "../../Component/Benner";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { ApiGet } from "../../helper/API/ApiData";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const [show, setShow] = useState(false);
  const [jobData, setJobData] = useState<any>("");
  const params = useParams<{ id: string }>();

  const openModel = () => {
    setShow(true);
  };
  const closeModel = () => {
    setShow(false);
  };

  const getSeniorJava = () => {
    ApiGet(`jobs/${params.id}`).then((res: any) => {
      setJobData(res);
    });
  };

  useEffect(() => {
    // console.log(params.id);
    getSeniorJava();
  }, []);

  return (
    <>
      <Benner
        title="Senior Java Developer"
        info="Become a part of our close-knit community of passionate explorers! info@Karmadhi.nl"
      />

      <div className="CustomContainer">
        <div className="seniorjavadevmain">
          <div className="container">
            <div className="d-flex align-items-center mainLinkBox">
              <div className="linkBox">
                <Link to="/"> Home </Link>
              </div>
              <span>
                <img src="/img/icone/ChevronRight.png" />
              </span>
              <div className="linkBox">
                <Link to="/job" className="">
                  {" "}
                  Jobs{" "}
                </Link>
              </div>
              <span>
                <img src="/img/icone/ChevronRight.png" />
              </span>
              <div className="linkBox">
                <Link to="/seniorjavadev" className="active">
                  {" "}
                  Senior Java Developer{" "}
                </Link>
              </div>
            </div>

            <div className="seniorjavadevedetails">
              <div className="xscontainer">
                <div className="seniortextbox">
                  <div className="position-relative">
                    <img
                      src="/img/images/depelopment.jpg"
                      alt=""
                      className="seniorimg"
                    />
                    <img
                      src="/img/icone/play-circle.png"
                      alt=""
                      className="play"
                    />
                  </div>

                  <div className="seniortitlebox">
                    {/* {jobData.map((data: any, index) => {
                                            return (
                                                <div className='seniortitle'>
                                                    <div className='d-flex align-items-center'>
                                                        <img src="./img/icone/sond.png" alt="" />
                                                        <h1>Intro</h1>
                                                    </div>
                                                    <p>{data.intro}</p>

                                                    <div className='d-flex align-items-center'>
                                                        <img src="./img/icone/trofee.png" alt="" />
                                                        <h1>Responsibilities</h1>
                                                    </div>
                                                    <ul className='firstul'>
                                                        <li> {data.responsibilities}</li>
                                                    </ul>

                                                    <div className='d-flex align-items-center'>
                                                        <img src="./img/icone/beg.png" alt="" />
                                                        <h1>Requirement</h1>
                                                    </div>
                                                    <ul className='secul'>
                                                        <li>Java (4+ years of experience);</li>
                                                        <li>JavaScript (any frontend framework);</li>
                                                        <li>Strong understanding of the software development life cycle;</li>
                                                        <li>Command of architecture standards, principles, design patterns, and methodologies;</li>
                                                        <li>Principles of microservices architecture design;</li>
                                                        <li>Analyze existing software to determine areas for continuous improvement;</li>
                                                        <li>Ability to analyze and uplift team performance;</li>
                                                        <li>Good writing/reading/speaking English (preferable);</li>
                                                        <li>Experience in Adobe Experience Manager, Jenkins, Nexus, SonarQube;</li>
                                                        <li>Experience working with VueJS is a plus but not required;</li>
                                                        <li>Experience with Software AG Rules Engine, MemSQL, Nagios is nice to have;</li>
                                                    </ul>
                                                </div>
                                            )
                                        })} */}
                    <div className="seniortitle">
                      <div className="d-flex align-items-center">
                        <img src="/img/icone/sond.png" alt="" />
                        <h1>Intro</h1>
                      </div>
                      {/* <p>{jobData?.intro}</p> */}
                      <p>
                        CodeImpact is currently looking for a Senior Java
                        developer with front-end experience. You will work for a
                        leading company in the telecom industry with a
                        multicultural setting and become part of a diverse team
                        in experience, age, and nationality. The position is
                        currently remote due to covid. Ultimately, the work will
                        be (30-50%) in Saudi Arabia and the rest in our office
                        in Kyiv.
                      </p>

                      <div className="d-flex align-items-center">
                        <img src="/img/icone/trofee.png" alt="" />
                        <h1>Responsibilities</h1>
                      </div>
                      <ul className="firstul">
                        {/* <li>{typeof jobData?.responsibilities == 'string' ? jobData.responsibilities.replace(/<[^>]+>/g, '') : jobData?.responsibilities && jobData?.responsibilities.join('')}</li> */}
                        <li>
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit
                        </li>
                        <li>
                          Qui dolorem ipsum quia dolor sit amet, consectetur,
                          adipisci velit, sed quia non numquam eius modi tempora
                          incidunt ut labore et dolore magnam aliquam
                        </li>
                        <li>Voluptatem accusantium doloremque laudantium</li>
                      </ul>

                      <div className="d-flex align-items-center">
                        <img src="/img/icone/beg.png" alt="" />
                        <h1>Requirement</h1>
                      </div>
                      <ul className="secul">
                        {/* <li>
                          {typeof jobData?.requirements == "string"
                            ? jobData.requirements.replace(/<[^>]+>/g, "")
                            : jobData?.requirements &&
                              jobData?.requirements.join("")}
                        </li> */}
                        <li>Java (4+ years of experience);</li>
                        <li>JavaScript (any frontend framework);</li>
                        <li>
                          Strong understanding of the software development life
                          cycle;
                        </li>
                        <li>
                          Command of architecture standards, principles, design
                          patterns, and methodologies;
                        </li>
                        <li>
                          Principles of microservices architecture design;
                        </li>
                        <li>
                          Analyze existing software to determine areas for
                          continuous improvement;
                        </li>
                        <li>Ability to analyze and uplift team performance;</li>
                        <li>
                          Good writing/reading/speaking English (preferable);
                        </li>
                        <li>
                          Experience in Adobe Experience Manager, Jenkins,
                          Nexus, SonarQube;
                        </li>
                        <li>
                          Experience working with VueJS is a plus but not
                          required;
                        </li>
                        <li>
                          Experience with Software AG Rules Engine, MemSQL,
                          Nagios is nice to have;
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="extrasmallcontainer">
                <div className="jobDetails">
                  <div className="jobdetailscontent">
                    <h2>Details Job</h2>
                  </div>
                  <div className="jobdetailscondition">
                    <div className="d-flex align-items-center justify-content-between jobdetailsmargin">
                      <div className="d-flex align-items-center jobConditiontitle">
                        <img src="/img/icone/map.png" alt="" />
                        <h2>Location</h2>
                      </div>
                      <div className="jobConditiontitlesec">
                        {/* <h1>{jobData.location}</h1> */}
                        <h1>Kyiv</h1>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between jobdetailsmargin">
                      <div className="d-flex align-items-center jobConditiontitle">
                        <img src="/img/icone/urgency.png" alt="" />
                        <h2>Urgency</h2>
                      </div>
                      <div className="jobConditiontitlesec">
                        {/* <h1>{jobData.urgent === true ? "vacancy" : ""}</h1> */}
                        <h1>Hot vacancy</h1>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between jobdetailsmargin">
                      <div className="d-flex align-items-center jobConditiontitle">
                        <img src="/img/icone/notebook-of-contacts.png" alt="" />
                        <h2>Contract</h2>
                      </div>
                      <div className="jobConditiontitlesec">
                        {/* <h1>{jobData.contract}</h1> */}
                        <h1>Freelance</h1>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between jobdetailsmargin">
                      <div className="d-flex align-items-center jobConditiontitle">
                        <img src="/img/icone/language.png" alt="" />
                        <h2>English Speaking</h2>
                      </div>
                      <div className="jobConditiontitlesec">
                        {/* <h1>{jobData.englishSpeaking === true ? "Yes" : ""}</h1> */}
                        <h1>Yes</h1>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between jobdetailsmargin">
                      <div className="d-flex align-items-center jobConditiontitle">
                        <img src="/img/icone/passport.png" alt="" />
                        <h2>Visa Support</h2>
                      </div>
                      <div className="jobConditiontitlesec">
                        <h1>Yes</h1>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between jobdetailsmargin">
                      <div className="d-flex align-items-center jobConditiontitle">
                        <img src="/img/icone/calendar.png" alt="" />
                        <h2>Period</h2>
                      </div>
                      <div className="jobConditiontitlesec">
                        {/* <h1>{jobData.period}</h1> */}
                        <h1>Long Term</h1>
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between ">
                      <div className="d-flex align-items-center jobConditiontitle">
                        <img src="/img/icone/home.png" alt="" />
                        <h2>Remote Work</h2>
                      </div>
                      <div className="jobConditiontitlesec">
                        {/* <h1>
                          {jobData.remoteWork === true
                            ? "Remotework"
                            : "On site"}
                        </h1> */}
                        <h1>No</h1>
                      </div>
                    </div>
                  </div>

                  <div className="jobdetailsbtn">
                    <button onClick={openModel}>APPLY NOW!</button>
                  </div>
                </div>

                <div className="contactUsBox">
                  <img src="/img/images/headset.png" className="headset" />
                  <div className="contactUsInner">
                    <h3>How can we help you?</h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusan
                    </p>
                    <button className="Contact d-flex align-items-center justify-content-center">
                      <img src="/img/icone/phone-call.png" />
                      Contact Us
                    </button>
                  </div>
                  <div className="floatingBox">
                    <img src="/img/images/User.jpeg" />

                    <div className="FloatingHover">
                      <div className="d-flex align-items-center justify-content-between floatingHoverInner">
                        <div>
                          <h3>Linda Kanne</h3>
                          <p className="titleP">Head of Talent</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <img
                            src="/img/icone/linkedinBlack.png"
                            className="Linkedinblack"
                          />
                          <img
                            src="/img/icone/skypeblack.png"
                            className="skypeblack"
                          />
                          <img
                            src="/img/icone/TELEGRAM.png"
                            className="Telegram"
                          />
                        </div>
                      </div>
                      <div className="hoverContactDetails d-flex align-items-center ">
                        <img
                          src="/img/icone/phone-call.png"
                          style={{
                            width: "13px",
                            height: "13px",
                            borderRadius: "0px",
                          }}
                        />
                        <p className="num">+44 134 873 4</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applay Model */}
        <div className="mainApplymodel">
          <Modal
            show={show}
            onHide={closeModel}
            centered
            className="seniorjavamodal"
          >
            <Modal.Header>
              <Modal.Title>Apply the job - Senior Java Developer</Modal.Title>
              <button className="close" onClick={closeModel}>
                <img src="/img/icone/close.png" alt="" />
              </button>
            </Modal.Header>
            <Modal.Body>
              <div className="userNameBox">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-100 userName"
                />
              </div>
              <div className="userNameBox">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-100 userName"
                />
              </div>
              <div className="userNameBox d-flex align-items-center ">
                <div className="mininput">
                  <label>Country</label>
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="United Kingdom"
                  >
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item>Something else</Dropdown.Item>
                  </DropdownButton>
                </div>
                <div className="citybox">
                  <label>City</label>
                  <input
                    type="text"
                    placeholder="Standford"
                    className="w-100 userName mininput"
                  />
                </div>
              </div>

              <div className="userNameBox">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="Enter Your Number"
                  className="w-100 userName"
                />
              </div>
              <div className="userNameBox">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Karmadhi@gmail.com "
                  className="w-100 userName"
                />
              </div>
              <div className="userNameBox">
                <label>
                  Linkedin <span>(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="https://www.linkedin.com/company/microsoft/"
                  className="w-100 userName"
                />
              </div>
              <div className="userNameBox">
                <label>
                  Skype <span>(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="https://www.skype.com/en/free-conference-call/"
                  className="w-100 userName"
                />
              </div>
              <div className="userNameBox">
                <label>
                  Additional Info <span>(optional)</span>
                </label>
                <textarea
                  rows={3}
                  className="w-100 userName"
                  placeholder="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias"
                ></textarea>
              </div>

              <div className="d-flex align-items-center MainuploadDiv">
                <div className="userNameBox attach-filebox">
                  <p>Resume</p>
                  <label htmlFor="file-upload" className="file-upload">
                    <img src="/img/icone/Attach-pin.png" alt="" />
                    Attach Resume
                  </label>
                  <span className="filesize">
                    {" "}
                    Max size 16mb, .pdf, .png, .jpg{" "}
                  </span>
                  <input
                    type="file"
                    id="file-upload"
                    style={{ display: "none" }}
                  />
                </div>
                <div className="userNameBox">
                  <p>
                    Additional Files <span>(optional)</span>
                  </p>
                  <label htmlFor="file-upload" className="attach-file ">
                    <img src="/img/icone/Attach-pin.png" alt="" />
                    Attach Files
                  </label>
                  <span className="filesize">
                    {" "}
                    Max size 16mb, .pdf, .png, .jpg{" "}
                  </span>
                  <input
                    type="file"
                    id="attach-file"
                    style={{ display: "none" }}
                  />
                </div>
              </div>

              <div className="main-Checkbox">
                <h1> Preferred reach out way </h1>
                <div className="d-grid align-items-center checkbox-item">
                  <div className="secmainCheckbox position-relative">
                    <input type="checkbox" checked />
                    <span className="checkmark"></span>
                    <label> Email </label>
                  </div>
                  <div className="secmainCheckbox position-relative">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <label> Phone Call </label>
                  </div>
                  <div className="secmainCheckbox position-relative">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <label> Skype </label>
                  </div>
                  <div className="secmainCheckbox position-relative">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <label> Linkedin </label>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={closeModel} variant="secondary">
                Submit REquest
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
