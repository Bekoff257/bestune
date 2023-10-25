import React from 'react'
import "../../styles/Chose.css"
import whiteCar from "../../assests/img/white-car.png"
import { useState } from 'react'
import Modal from '../modal/Modal'

const Chose = () => {
    const [ modalOpen, setModalOpen ] = useState(false)

  return (
        <div className='chose'>
        <div className="container">
            <div className="chose-content">
                <div className="top-text">
                    <h1>TEST DRIVE</h1>
                    <p>O'Z MASHINANGNI TANLA</p>
                </div>
                <div className="bestune-drive">
                    <div className="bestune-test-drive-section">
                        <h1>
                            BESTUNE <br />
                            B70S
                        </h1>
                        <img className='white-car-sec' src={whiteCar} alt="" />
                        <div className="test-drive-link">
                        { modalOpen && <Modal setModalOpen={setModalOpen}/> }
                        <button onClick={() => setModalOpen(true)} className='open-drv-btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <g clip-path="url(#clip0_38_1539)">
                                <path d="M8.5 0.513916C4.08968 0.513916 0.513916 4.08968 0.513916 8.5C0.513916 12.9103 4.08968 16.4861 8.5 16.4861C12.9103 16.4861 16.4861 12.9103 16.4861 8.5C16.4861 4.08968 12.9103 0.513916 8.5 0.513916ZM8.5 2.51044C11.099 2.51044 13.2941 4.18452 14.1232 6.50348H2.8460C3.70585 4.18452 5.90103 2.51044 8.5 2.51044ZM8.5 9.49826C7.94846 9.49826 7.50174 9.05154 7.50174 8.5C7.50174 7.94846 7.94846 7.50174 8.5 7.50174C9.05154 7.50174 9.49826 7.94846 9.49826 8.5C9.49826 9.05154 9.05154 9.49826 8.5 9.49826ZM2.51044 8.5C5.23818 8.5 7.44733 11.1284 7.49375 14.3882C4.67067 13.9046 2.51044 11.4578 2.51044 8.5ZM9.50625 14.3882C9.55267 11.1284 11.7618 8.5 14.4896 8.5C14.4896 11.4578 12.3293 13.9046 9.50625 14.3882Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_38_1539">
                                <rect width="15.9722" height="15.9722" fill="white" transform="translate(0.513916 0.513916)"/>
                                </clipPath>
                            </defs>
                            </svg>
                            Test drive
                        </button>
                        <h2>
                        B70S
                        </h2>
                        </div>

                        <div className="slider-btns">
                        <button className='btn-right'>
                        <svg width="55" height="52" viewBox="0 0 55 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.6303 2.07362C28.2799 1.33082 26.6432 1.33082 25.2928 2.07362L7.14891 12.0535C5.71101 12.8444 4.81767 14.3554 4.81767 15.9964V35.5442C4.81767 37.1853 5.71101 38.6962 7.14891 39.4871L25.2928 49.467C26.6432 50.2098 28.2799 50.2098 29.6303 49.467L47.7742 39.4871C49.2121 38.6962 50.1054 37.1853 50.1054 35.5442V15.9964C50.1054 14.3554 49.2121 12.8444 47.7742 12.0535L29.6303 2.07362Z" stroke="black"/>
                            <path d="M29.8887 18.4062L23.2626 24.6275C22.6031 25.2467 22.6031 26.294 23.2626 26.9132L29.8887 33.1345" stroke="black" stroke-linecap="round"/>
                        </svg>
                        </button>

                        <button className='btn-left'>
                        <svg width="55" height="52" viewBox="0 0 55 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.2928 2.07362C26.6432 1.33082 28.2799 1.33082 29.6303 2.07362L47.7742 12.0535C49.2121 12.8444 50.1054 14.3554 50.1054 15.9964V35.5442C50.1054 37.1853 49.2121 38.6962 47.7742 39.4871L29.6303 49.467C28.2799 50.2098 26.6432 50.2098 25.2928 49.467L7.14891 39.4871C5.71101 38.6962 4.81767 37.1853 4.81767 35.5442V15.9964C4.81767 14.3554 5.71102 12.8444 7.14891 12.0535L25.2928 2.07362Z" stroke="black"/>
                            <path d="M25.0344 18.4062L31.6605 24.6275C32.32 25.2467 32.32 26.294 31.6605 26.9132L25.0344 33.1345" stroke="black" stroke-linecap="round"/>
                        </svg>
                        </button>
                        </div>
                    </div>
                    <div className="slider-car">
                        <div className="bestune-model-info">
                            <h2>B70S</h2>
                        </div>
                       <div className="img-sliders-content">
                        <img src={whiteCar} alt="" />
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chose