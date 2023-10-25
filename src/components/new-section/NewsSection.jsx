import React, { useEffect, useState } from 'react'
import "../../styles/NewsSection.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination, FreeMode } from 'swiper/modules';
import SwiperButtons from '../SwiperButtons';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NewsSection = () => {
    const [ newsData, setNewsData ] = useState([])

    useEffect(() => {
        axios.get('https://api.bestuneuzbekistan.uz/api/news')
            .then(response => {
                setNewsData(response.data)
                console.log(response.data);
            })
            .catch(err => console.log(err))
    }, [])
    
  return (
    <div className='news-section'>
        <div className="container">
            <div className="news-top-content">
                <h1>NEWS</h1>
            </div>
            <div className="swiper-content">
                <Swiper
                    spaceBetween={50}
                    centeredSlides={true}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, FreeMode]}
                    className="mySwiper"
                >
                    {
                        newsData.map((item) => {
                            return (
                                <SwiperSlide>
                                    <div className="news-slide">
                                        <Link to={`/news/${item.id}`}>
                                        <div className="img-slider-content">
                                            <img className='img-slider-1' src={item?.photo} alt="" />
                                            {/* <img className='img-slider-2' src={mobileImg} alt="mobile_img" /> */}
                                        </div>
                                        <div className="info-text-content">
                                            <p>{item.created_at.slice(0, 10)}</p>
                                            <h3>{item.name.length < 100 ? item.name.slice(0, 100) + '...' : item.name}</h3>
                                        </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    <SwiperButtons/>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default NewsSection