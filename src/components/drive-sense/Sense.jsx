import React from 'react'
import "../../styles/Sense.css"
import red from "../../assests/img/red.png"
import white from "../../assests/img/white.png"
import black from "../../assests/img/grey.png"

const Sense = () => {
  return (
    <div className='sense'>
        <div className="sens-right">
            <div className="snr-img">
                    <img className='img' src={red} alt="" />
                    <img className='img' src={white} alt="" />
                    <img className='img' src={black} alt="" />
                </div>
            </div>
        <div className="container">
            <div className="sense-content">
                <div className="sens-left">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Sense