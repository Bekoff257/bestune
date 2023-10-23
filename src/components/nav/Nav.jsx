import logo from "../../assests/img/bestunelogo.png"
import '../../styles/Nav.css'
import { Link } from "react-scroll"
import { NavLink } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx"
import { LiaTimesSolid } from "react-icons/lia"
import { useState } from "react"
import Modal from "../modal/Modal"
import LogoSvg from "../../assests/LogoSvg"

const Nav = () => {
    const [ toggler, setToggler ] = useState(false)
    const [ modalOpen, setModalOpen ] = useState(false)

    const navbarHandler = () => {
        setToggler(!toggler)
    }

    const modalOpener = () => {
        setModalOpen(true)
    }

  return (
    <div className='nav'>
        <div className="container">
            { modalOpen ? <Modal setModalOpen={setModalOpen} /> : null }
            <div className="nav_content">
                <div className="nav_logo">
                    <NavLink to={'/'}>
                        <LogoSvg/>
                    </NavLink>
                    <div className="menu-toggler">
                        {toggler ? (
                            <LiaTimesSolid onClick={navbarHandler} />
                        )
                        : (
                            <RxHamburgerMenu onClick={navbarHandler} />
                        )}
                    </div>
                </div>
                <div className="nav_links">
                    <ul className={toggler ? 'menu_list active' : 'menu_list'}>
                        <li className='list_item'>
                            <NavLink to={'/'}>Home page</NavLink>
                        </li>
                        <li className='list_item'>
                            <NavLink to={'/bestune-models'}>Bestune models</NavLink>
                        </li>
                        <li className='list_item'>
                            <NavLink to={'/news'}>News</NavLink>
                        </li>
                        <li className='list_item'>
                        <Link 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            offset={50} 
                            duration={500} 
                            >
                            About
                            </Link>
                        </li>
                        <li className='list_item'>
                            <Link 
                                to="test-drive" 
                                spy={true} 
                                smooth={true} 
                                offset={50} 
                                duration={500}
                            >
                                <button onClick={modalOpener}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                    <g clip-path="url(#clip0_21_1257)">
                                        <path d="M8.04028 0.982056C3.62997 0.982056 0.0541992 4.55782 0.0541992 8.96814C0.0541992 13.3785 3.62997 16.9542 8.04028 16.9542C12.4506 16.9542 16.0264 13.3785 16.0264 8.96814C16.0264 4.55782 12.4506 0.982056 8.04028 0.982056ZM8.04028 2.97858C10.6393 2.97858 12.8344 4.65266 13.6635 6.97162H2.41708C3.24614 4.65266 5.44131 2.97858 8.04028 2.97858ZM8.04028 9.9664C7.48874 9.9664 7.04202 9.51968 7.04202 8.96814C7.04202 8.4166 7.48874 7.96988 8.04028 7.96988C8.59182 7.96988 9.03854 8.4166 9.03854 8.96814C9.03854 9.51968 8.59182 9.9664 8.04028 9.9664ZM2.05072 8.96814C4.77847 8.96814 6.98762 11.5966 7.03404 14.8564C4.21096 14.3727 2.05072 11.926 2.05072 8.96814ZM9.04653 14.8564C9.09295 11.5966 11.3021 8.96814 14.0298 8.96814C14.0298 11.926 11.8696 14.3727 9.04653 14.8564Z" fill="#282828"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_21_1257">
                                        <rect width="15.9722" height="15.9722" fill="white" transform="translate(0.0541992 0.982056)"/>
                                        </clipPath>
                                    </defs>
                                    </svg> 
                                    Test drive
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav