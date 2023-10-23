import React from 'react'
import "../../styles/Footer.css"
import logo from "../../assests/img/footerlogo.png"
import { Link } from 'react-router-dom'
import { CiMail } from "react-icons/ci"
import { AiFillYoutube } from "react-icons/ai"
import { BsInstagram, BsTelegram, BsFacebook, BsWhatsapp } from "react-icons/bs"
import { IoCallOutline } from "react-icons/io5"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer-content">
                <div className="footer-top-logo">
                    <Link>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="contact-sales-content">
                    <ul className='footer-list'>
                        <li className='footer-list-item mail'>
                            <CiMail/>
                            <Link to={'mailto:bestune.uz@gmail.com'}>bestune.uz@gmail.com</Link>
                        </li>
                        <li className='footer-list-item'>
                            <IoCallOutline/>
                            <Link to={'tel:(071) 777 77 77'}>(071) 777 77 77</Link>
                        </li>
                        <li className='footer-list-item'>
                            <IoCallOutline/>
                            <Link to={'tel:(071) 767 77 67'}>(071) 767 77 67</Link>
                        </li>
                    </ul>
                    <div className="social-link-content">
                        <ul className='footer-social-list'>
                            <li className='footer-social-item'>
                                <Link to={'/'}><AiFillYoutube/></Link>
                            </li>
                            <li className='footer-social-item'>
                                <Link to={'https://www.instagram.com/bestune.uz/'}><BsInstagram/></Link>
                            </li>
                            <li className='footer-social-item'>
                                <Link to={'/'}><BsTelegram/></Link>
                            </li>
                            <li className='footer-social-item'>
                                <Link to={'https://www.facebook.com/bestune.uz'}><BsFacebook/></Link>
                            </li>
                            <li className='footer-social-item'>
                                <Link to={'/'}><BsWhatsapp/></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="about-text">
                    <p>
                    Вся представленная на сайте информация, касающаяся технических характеристик и стоимости товара, носит информационный характер и ни при каких условиях не является публичной офертой. Компания оставляет за собой право вносить изменения в технические характеристики, комплектации и цены автомобилей без предварительного уведомления конечного покупателя. Внешний вид товара может отличаться от фотографий на сайте.Указанные цены включают стоимость доставки за исключением городов, за доставку в которые взимается дополнительная плата.Подробности уточняйте у официальных дилеров FAW в Вашем городе.*Цена указана за автомобили Bestune T77 с учетом всех максимальных скидок и действующих акций.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer