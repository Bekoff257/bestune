import React from 'react';
import "./Safety.css"
import safe1 from "../../assests/img/safe-1.png"
import safe2 from "../../assests/img/safe-2.png"

const Safety = () => {
  return (
    <div className='swiper'>
        <div className='swiper__container'>
            <ul className='swiper__list'>
               <li className='swiper__item'>
                    <img className='swiper__img' src={safe1} alt="" />
                </li>
                <li className='swiper__item'>
                    <img className='swiper__img' src={safe2} alt="" />
                </li>
                <li className='swiper__item'>
                    <img className='swiper__img' src={safe1} alt="" />
                </li>
                <li className='swiper__item'>
                    <img className='swiper__img' src={safe2} alt="" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Safety