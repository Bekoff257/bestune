import React from 'react'
import { useSwiper } from 'swiper/react'
import "../components/SwiperButtons.css"

const SwiperButtons = () => {
    const Swiper =  useSwiper()
  return (
    <div className='swiper-btns'>
        <button onClick={() => Swiper.slidePrev()}>
        <svg width="54" height="52" viewBox="0 0 54 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.4061 2.69959C28.0556 1.95679 26.419 1.95679 25.0685 2.6996L6.92466 12.6795C5.48677 13.4704 4.59343 14.9813 4.59343 16.6224V36.1702C4.59343 37.8112 5.48677 39.3222 6.92467 40.1131L25.0685 50.093C26.419 50.8358 28.0556 50.8358 29.4061 50.093L47.5499 40.1131C48.9878 39.3222 49.8812 37.8112 49.8812 36.1702V16.6224C49.8812 14.9813 48.9878 13.4704 47.5499 12.6795L29.4061 2.69959Z" stroke="white"/>
            <path d="M29.6644 19.0322L23.0383 25.2535C22.3788 25.8727 22.3789 26.92 23.0383 27.5391L29.6644 33.7604" stroke="white" stroke-linecap="round"/>
        </svg>

        </button>
        <button onClick={() => Swiper.slideNext()}>
        <svg width="54" height="52" viewBox="0 0 54 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.0685 2.69959C26.419 1.95679 28.0556 1.95679 29.4061 2.6996L47.5499 12.6795C48.9878 13.4704 49.8812 14.9813 49.8812 16.6224V36.1702C49.8812 37.8112 48.9878 39.3222 47.5499 40.1131L29.4061 50.093C28.0556 50.8358 26.419 50.8358 25.0685 50.093L6.92466 40.1131C5.48677 39.3222 4.59343 37.8112 4.59343 36.1702V16.6224C4.59343 14.9813 5.48677 13.4704 6.92467 12.6795L25.0685 2.69959Z" stroke="white"/>
            <path d="M24.8102 19.0322L31.4363 25.2535C32.0958 25.8727 32.0958 26.92 31.4363 27.5391L24.8102 33.7604" stroke="white" stroke-linecap="round"/>
        </svg>
        </button>
    </div>
  )
}

export default SwiperButtons