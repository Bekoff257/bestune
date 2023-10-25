import React from 'react'
import { useState, useEffect } from 'react'
import blueCar from "../../assests/img/image 13 (2).png"
import "../../styles/SmallModels.css"
import axios from 'axios'
import { Link } from 'react-router-dom'


const SmallModels = () => {
  const [ smlData, setSmlData ] = useState([])

  useEffect(() => {
    axios.get('https://api.bestuneuzbekistan.uz/api/car')
      .then(response => {
        setSmlData(response.data)
        console.log(response.data);
      })
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div className='small-models'>
        <div className="container">
            <div className="sm-content">
                <h1>
                    BESTUNE MODELS
                </h1>
                <div className="cars">
                    {
                        smlData.map((item) => {
                            const enName = item.name.find((nmbObj) => nmbObj.lang === "en")
                            const uzName = item.name.find((nmbObj) => nmbObj.lang === "uz")
                            return (
                                <div className="imgsm-wrap">
                                    <Link to={'/bestune-models'}>
                                        <img className='image-hover' src={item?.photos.map((elem) => elem?.photos)[0]} alt="" />
                                        <img className='image' src={blueCar} alt="blueCar" />
                                        <p>{enName ? enName.name : uzName.name}</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SmallModels