import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiFillCalendar } from "react-icons/ai"
import "./SingleNew.css"
import Nav from '../nav/Nav'

const SingleNew = () => {
    const { id } = useParams()
    const [ singleNew, setSingleNew ] = useState([])

    useEffect(() => {
        axios.get(`https://api.bestuneuzbekistan.uz/api/news/${id}`)
            .then(response => {
                setSingleNew(response.data)
                console.log(response.data);
            })
            .catch(err => console.log(err))
    }, [id])
  return (
    <div className='single-new'>
        <Nav/>
        <div className="container">
            <div className="single-new-content">
                {
                    singleNew.map((item) => {
                        return (
                            <>
                                <div className="news-img">
                                    <img src={item?.photo} alt="photo_url" />
                                 </div>
                                <div className="news-articl">
                                   <h1>
                                     {item?.name} 
                                   </h1>
                                    <p>
                                        {item?.desc}
                                    </p> 
                                    <div className="date-time">
                                        <span><AiFillCalendar/> {item?.created_at}</span>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default SingleNew