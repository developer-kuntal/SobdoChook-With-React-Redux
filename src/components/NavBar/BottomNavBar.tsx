import './BottomNavBar.css';
import React from 'react'
import SvgLogo from '../SvgLogo';
import { 
    FaHome, 
    FaUser, 
    FaRupeeSign, 
    FaFingerprint, 
    FaBell, 
    FaCog, 
    FaPowerOff, 
    FaRegUserCircle 
} from "react-icons/fa";

import { Link } from 'react-router-dom';

const BottomNavBar = () => {
    
  const signOut = () => {
    localStorage.removeItem("token");
    window.location.pathname = '/';
  }

  return (
    <div>
        <header className="header" id="header">
            <nav className="nav container">
                {/* <a href="#" className="nav__logo">শব্দছক </a> */}
                <Link to={"/"} className="nav__logo">
                    {/* <FaHome size={24} style={{ fill: 'gold' }}/> */}
                    <span className="nav__name">শব্দছক</span>
                </Link>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to={"/dashboard"} className="nav__link active-link">
                                <FaHome size={24} style={{ fill: 'gold' }}/>
                                <span className="nav__name">Dashboard</span>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to={"/profile"} className="nav__link">
                                <FaUser size={24} style={{ fill: 'gold' }}/>
                                <span className="nav__name">Profile</span>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to={"/buymembership"} className="nav__link">
                                <FaRupeeSign size={24} style={{ fill: 'gold' }}/>
                                <span className="nav__name">Buy Membership</span>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to={"/kyc"} className="nav__link">
                                <FaFingerprint size={24} style={{ fill: 'gold' }}/>
                                <span className="nav__name">KYC</span>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to={"/notify"} className="nav__link">
                                <FaBell size={24} style={{ fill: 'gold' }}/>
                                <span className="nav__name">Notify</span>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <Link to={"/settings"} className="nav__link">
                                <FaCog size={24} style={{ fill: 'gold' }}/>
                                <span className="nav__name">Settings</span>
                            </Link>
                        </li>
                        
                        <li className="nav__item">
                            <Link to={"/test"} className="nav__link">
                                {/* <FaCog size={24} style={{ fill: 'gold' }}/> */}
                                <span className="nav__name">Test</span>
                            </Link>
                        </li>

                        <li className="nav__item">
                            <a href="#settings" className="nav__link">
                                <FaPowerOff onClick={signOut} size={24} style={{ fill: 'gold' }}/>
                                {/* <span className="nav__name">Settings</span> */}
                            </a>
                        </li>

                    </ul>
                </div>

                {/* <img src="#" alt="" className="nav__img" /> */}
                {/* <SvgLogo className='nav__img'/> */}
                <FaRegUserCircle size={24} style={{ fill: 'red' }} className='nav__img'/>
            </nav>
        </header>
    </div>
  )
}

export default BottomNavBar