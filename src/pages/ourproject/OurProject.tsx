import React, { useState } from 'react'
import Benner from '../../Component/Benner'
import { Col, Container, Form, Row, } from 'react-bootstrap';
import Pagination from "react-js-pagination"
import NevTab from '../../Component/NevTab';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router'
import './Project.css';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AllWork from './AllWorkTab';
import AllWorkTab from './AllWorkTab';
import CorporateTab from './CorporateTab';
import FinanceTab from './FinanceTab';
import MarketingTab from './MarketingTab';
import StartUpTab from './StartUpTab';
import StartegyTab from './StartegyTab';
import GoToTop from '../GoToTop';

interface noticeList {
    count: number;

}

const OurProject = () => {
    const history = useHistory()
    const [pageNo, setPageNo] = useState<number>(1)
    const [noticeData, setNoticeData] = useState<noticeList>({
        count: 0,
    });

    const onChange = () => {
        history.push('/singleproject')
    }


    return (
        <>
            <Benner
                title='Our Projects'
                info='Collection we are proud of'
            />

            <div className='CustomContainer'>
                <div className='OurProjectMain'>
                    <div className="container">
                        <div className='d-flex align-items-center mainLinkBox'>
                            <div className='linkBox'>
                                <Link to='/'> Home </Link>
                            </div>
                            <span>
                                <img src='./img/icone/ChevronRight.png' />
                            </span>
                            <div className='linkBox'>
                                <Link to='/ourproject' className='active'> Projects </Link>
                            </div>
                        </div>

                        <Container className='mb-5'>
                            <div className='MainTitle'>
                                <div className='title'>
                                    <span>buisness Protfolio</span>
                                    <h2>Our case studies</h2>
                                </div>
                                <div className='MainDetailsBox'>
                                    <p>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs.</p>
                                </div>
                            </div>

                            <div className="mainTabContent">
                                <Tabs
                                    defaultActiveKey="allwork"
                                    id="fill-tab-example"
                                    className="MainTab justify-content-center"
                                    variant="pills"
                                >
                                    <Tab eventKey="allwork" title="All Work" >
                                        <div className='TabConatiner'>
                                            <AllWorkTab />
                                        </div>
                                    </Tab>
                                    <Tab eventKey="corporate" title="Corporate">
                                        <div className='TabConatiner'>
                                            <CorporateTab />
                                        </div>
                                    </Tab>
                                    <Tab eventKey="finance" title="Finance">
                                        <div className='TabConatiner'>
                                            <FinanceTab />
                                        </div>
                                    </Tab>
                                    <Tab eventKey="marketing" title="Marketing">
                                        <div className='TabConatiner'>
                                            <MarketingTab />
                                        </div>
                                    </Tab>
                                    <Tab eventKey="startup" title="Startup">
                                        <div className='TabConatiner'>
                                            <StartUpTab />
                                        </div>
                                    </Tab>
                                    <Tab eventKey="strategy" title="Strategy">
                                        <div className='TabConatiner'>
                                            <StartegyTab />
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </Container>

                        {/* <div className='jobPagination'>
                            <Pagination
                                itemClass="page-item-custom"
                                activeLinkClass="activepage"
                                linkClass="page-link-custom"
                                linkClassFirst="page-first-arrow"
                                linkClassPrev="page-first-arrow"
                                linkClassNext="page-first-arrow"
                                linkClassLast="page-first-arrow"
                                prevPageText={<div className='test'><img src='./img/icone/blackarrow.png' /></div>}
                                firstPageText={
                                    <div style={{ display: "none" }}></div>
                                }
                                lastPageText={
                                    <div style={{ display: "none" }}></div>
                                }
                                nextPageText={<div className='test'> <img src='./img/icone/blackarrow.png' className='secArrow' /> </div>}
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
      <GoToTop/>

        </>
    )
}

export default OurProject