import React from 'react'
import newsArticle1 from "../assests/img/new-article.png"
import "../styles/News.css"
import Nav from '../components/nav/Nav'
import { AiFillCalendar } from "react-icons/ai"
import { useState, useEffect } from 'react'
import axios from 'axios'

const News = () => {
    const [ allNewsData, setAllNewsData ] = useState([])

    useEffect(() => {
        axios.get('https://api.bestuneuzbekistan.uz/api/news')
            .then(response => setAllNewsData(response.data))
            .catch(err => console.log(err))
    }, [])
  return (
    <div className='news'>
        <Nav/>
        <div className="container">
            <div className="news-content">
                <div className="main-news">
                        {
                            allNewsData.map(item => 
                                <>
                                <div className="single-main-new">
                                <div className="news-img">
                                    <img src={item?.photo} alt="news-article" />
                                </div>
                                <div className="news-article">
                                    <h1>
                                        {item?.name}
                                    </h1>
                                    <p>
                                        {item?.desc}
                                    </p>
                                    <div className="date-time">
                                        <span><AiFillCalendar/> {item?.created_at.slice(0, 10)}</span>
                                    </div>
                                </div>
                                </div>
                                </>    
                            )
                        }
                    </div>
            </div>
        </div>
    </div>
  )
}

export default News