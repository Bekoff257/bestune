import React from 'react'
import "../../styles/About.css"
import videoImg from "../../assests/img/video.png"
import playBtn from "../../assests/logo/playbtn.svg"
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element name='about'>
        <div className='about'>
        <div className="container">
            <div className="about-content">
                <h1>
                    ABOUT COMPANY
                </h1>
                <div className="video-content">
                    <Link target='blank' to={'https://www.youtube.com/watch?v=QMYCXfVv3Zo'}>
                        <img className='playbtn' src={playBtn} alt="playBtn" />
                        <img className='video' src={videoImg} alt="video_img" />
                    </Link>
                </div>
                <div className="info-content">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris
                        Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum 
                        sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam 
                        condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
                        Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida 
                        viverra. Fusce vel tempor elit. Proin tempus,.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </Element>
  )
}

export default About