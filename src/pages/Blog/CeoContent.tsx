import React from 'react'
import OurServiceContact from '../ourservice/OurServiceContact';
const CeoContent = () => {
    return (
        <div>
            <div className='ceoContent'>
                <div className='bgimg'>
                    <div className='ceoCard'>
                        <img src='./img/images/heximg.png' className='hex' />
                        <p>Your <span>brand</span> is what other people say about you when you’re not in the room</p>
                        <h5>Robert K Davis . CEO Fundel</h5>
                    </div>
                </div>

                {/* <div className='contectbox'>
                    <OurServiceContact />
                </div> */}
            </div>
        </div>
    )
}

export default CeoContent