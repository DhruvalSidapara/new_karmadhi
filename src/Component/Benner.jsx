import React from "react"

const Benner = ({ title, info }) => {
  return (
    <>
      <div className="CustomContainer">
        <div className="mainOurServiceBenner">
          <div className="OurServiceBanner">
            <div className="overLayerbg">
              <img src="./img/layerbg/bglayer1.png" className="BannerLayer" />
              <img
                src="./img/layerbg/bannerLayer.png"
                className="BannerLayer2"
              />
            </div>
            {/* <div className='Overlayer'>
                        <img src='./img/layerbg/overLayerbg.png' />
                    </div> */}
            <div className="mainBenner">
              <div className="BannerTitle">
                {title && <h3>{title}</h3>}
                {info && <p> {info} </p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Benner
