import React from 'react'
import mobileInter from "../../assests/img/mobile-inter.png"
import interior from "../../assests/img/interior.png"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';

const Interior = () => {
  return (
    <div className="interior">
        <div className="inter-content">
            <div className="inter-left">
                <h1>INTERIOR</h1>
                    <img className='inter-img' src={mobileInter} alt="inter-mobile" />
                    <Swiper
                        direction={'vertical'}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                    <SwiperSlide>
                        <p>
                            The interior of Urus Performante is made for its driver, enhanced <br />
                            by the use of innovative and lightweight materials such as <br />
                            Alcantara and carbon fiber. With these, dark tones, contrast <br />
                            stitching and exclusive Performante logos add unique details <br />
                            to express the car’s sporting character. Refined, contemporary and <br />
                            ergonomically efficient, the interior of Urus Performante is <br />
                            designed to make the driver “feel like a pilot.”
                        </p>
                    </SwiperSlide>
                </Swiper>
            </div>
        <div className="inter-right">
            <img src={interior} alt="Interior" />
        </div>
    </div>
</div>
  )
}

export default Interior