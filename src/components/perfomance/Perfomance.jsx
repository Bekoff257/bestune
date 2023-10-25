import React from 'react'
import transted from "../../assests/img/transted.png"
import mobileRobot from "../../assests/img/mobile-robot.png"
import lognTrans from "../../assests/img/long-tr.png"
import robot from "../../assests/img/robot.png"

import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef } from 'react'

import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination';

const Perfomance = () => {
    const perfomanceRef = useRef()

  return (
    <div>
        <div className="perfomance">
                    <div className="perfomance-content">
                        <div className="pr-right">
                            <h1>
                                PERFORMANCE
                            </h1>
                            <p className='liter-pr'>
                                4-CYLINDER 1.5-LITER TURBOCHARGED ENGINE <br />
                                WITH 168 HP.
                            </p>
                            {/* <div className="mobile-swiper">
                                <Swiper
                                    pagination={true}
                                    modules={[Pagination]}
                                >

                                    <SwiperSlide>
                                        <img className='mobile-robot' src={mobileRobot} alt="mobileRobot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className='mobile-robot' src={mobileRobot} alt="mobileRobot" />
                                    </SwiperSlide>
                                </Swiper>
                            </div> */}
                            <p className='perfomance-desc'>
                                It is a sport utility vehicle with a front wheel drive type. <br />
                                The transmission is 7-speed automatic, and the type <br />
                                of fuel that should be used to operate this car is <br />
                                gasoline, with a fuel economy of 15.5 km / liter.
                            </p>
                            <p className='mobile-info'>
                                The interior of Urus Performante is made for its driver, enhanced by the use of innovative and lightweight materials such as Alcantara and carbon fiber. With these, dark tones, contrast stitching and exclusive Performante logos add unique details to express the car’s sporting character. Refined, contemporary and ergonomically efficient, the interior of Urus Performante is designed to make the driver “feel like a pilot.”
                            </p>
                        <div className="model-btns">

                            <button className='btn-left' onClick={() => perfomanceRef.current?.slidePrev()}>

                            <svg width="54" height="52" viewBox="0 0 54 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.893 1.94349C27.5426 1.20069 25.9059 1.20069 24.5555 1.94349L6.4116 11.9234C4.97371 12.7143 4.08037 14.2252 4.08037 15.8663V35.4141C4.08037 37.0551 4.97371 38.5661 6.41161 39.357L24.5555 49.3369C25.9059 50.0797 27.5426 50.0797 28.893 49.3369L47.0369 39.357C48.4748 38.5661 49.3681 37.0551 49.3681 35.4141V15.8663C49.3681 14.2252 48.4748 12.7143 47.0369 11.9234L28.893 1.94349Z" stroke="white"/>
                                <path d="M29.1514 18.2761L22.5252 24.4974C21.8658 25.1166 21.8658 26.1639 22.5252 26.783L29.1514 33.0043" stroke="white" stroke-linecap="round"/>
                            </svg>

                            </button>

                            <button className='btn-right' onClick={() => perfomanceRef.current?.slideNext()}>

                            <svg width="54" height="52" viewBox="0 0 54 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.5555 1.94349C25.9059 1.20069 27.5426 1.20069 28.893 1.94349L47.0369 11.9234C48.4748 12.7143 49.3681 14.2252 49.3681 15.8663V35.4141C49.3681 37.0551 48.4748 38.5661 47.0369 39.357L28.893 49.3369C27.5426 50.0797 25.9059 50.0797 24.5555 49.3369L6.4116 39.357C4.97371 38.5661 4.08037 37.0551 4.08037 35.4141V15.8663C4.08037 14.2252 4.97371 12.7143 6.41161 11.9234L24.5555 1.94349Z" stroke="white"/>
                                <path d="M24.2971 18.2761L30.9232 24.4974C31.5827 25.1166 31.5827 26.1639 30.9232 26.783L24.2971 33.0043" stroke="white" stroke-linecap="round"/>
                            </svg>

                            </button>
                        </div>
                        </div>
                            <Swiper
                                onSwiper={(swiper) => (perfomanceRef.current = swiper)}
                            >
                                <SwiperSlide>
                                    <img src={robot} alt="enginee_robot" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={robot} alt="enginee_robot" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    <div className="bottom-pr">
                        <img className='sm-trans' src={transted} alt="trans-img" />
                        <img className='sm-trans' src={transted} alt="trans-img" />
                        <img className='sm-trans' src={transted} alt="trans-img" />
                        <img className='long-trans' src={lognTrans} alt="trans-img" />
                    </div>
                </div>
    </div>
  )
}

export default Perfomance