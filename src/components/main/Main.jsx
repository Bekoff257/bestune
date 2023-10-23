import "../../styles/Main.css"
import { Swiper, SwiperSlide } from "swiper/react";
import bestune from "../../assests/img/car.png"

const Main = () => {
  return (
    <div className="main">
        <div className="container">
            <div className="main-content">
                <div className="main-hero">
                    <h1>
                        DRIVE YOUR SENSES
                    </h1>
                    <h2>
                    BESTUNE <br />
                    T77
                    </h2>
                </div>
            </div>
        </div>
        <div className="bestune-car">
            <img src={bestune} alt="bestune-car"/>
        </div>
    </div>
  )
}

export default Main