import React, { useState } from "react"
import Benner from "../../Component/Benner"
import { useHistory } from "react-router"
import NevTab from "../../Component/NevTab"
import OurServiceRow from "./OurServiceRow"
import OurServiceSliderContent from "./OurServiceSliderContent"
import GoToTop from "../GoToTop"

const OurService = () => {
  const history = useHistory()
  const [hide, setHide] = useState(false)

  const softwaretest = () => {
    setHide(true)
    history.push("/softwaretesting")
  }

  return (
    <>
      <Benner
        title="Over Service"
        info="We are committed to a production consistent with the following value system"
      />
      <div className="OverServiceMainTitle">
        <div className="container">
          <NevTab title="Home" title1="Services" title2="" hide={hide} />
          <div className="mainOverServiceContent">
            <OurServiceRow softwaretest={softwaretest} />
            <div className="container">
              <OurServiceSliderContent />
            </div>
            {/* <OurServiceContact /> */}
          </div>
        </div>
      </div>

      <GoToTop />
    </>
  )
}

export default OurService
