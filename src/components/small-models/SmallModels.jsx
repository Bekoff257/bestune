import React from 'react'
import car from "../../assests/img/cars.png"
import { useState, useEffect } from 'react'
import "../../styles/SmallModels.css"
import axios from 'axios'

const imgArr = [
    {
        img: car,
    },
    {
        img: car,
    },
    {
        img: car,
    },
    {
        img: car,
    },
    {
        img: car,
    },
    {
        img: car,
    },
    {
        img: car,
    },
    {
        img: car,
    }
]
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
                                    <img src={item?.photos.map((elem) => elem?.photos)[0]} alt="" />
                                    <p>{enName ? enName.name : uzName.name}</p>
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