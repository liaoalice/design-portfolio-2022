import React from "react";
import { useState, useEffect } from 'react'
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
// import PDF from "/Users/alice/portfolio/src/aliceliao-resume.pdf";
import "./Navbar.scss";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [status, setStatus] = useState('close')

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="left">
          <a aria-current="page" href="/" class="brand-text" className="logo">
            文欣
          </a>
        </div>
        <div className="right">
          {/* hamburger */}
          <div onClick={() => {
            toggleNav();
            setStatus(status === 'open' ? 'close' : 'open');
          }} class="hamburger">
            <i className={status}></i>
            <i className={status}></i>
            <i className={status}></i>
          </div>
          {(toggleMenu || screenWidth > 640) && (
            <ul className="list" id="menu-items">
              <li className="items"><HashLink smooth to="/#work">Work</HashLink></li>
              <li className="items"><Link to="/play">Play</Link></li>
              <li className="items"><Link to="/about">About</Link></li>
              {/* <li className="items"><Link to="/posts">Blog</Link></li> */}
              {/* <li className="items"><Link to={PDF} target='_blank' rel='noopener noreferrer'>Resume</Link></li> */}
            </ul>
          )}
        </div>
      </div>
      <div className="header-menu-nav" id="mobile-menu-nav">
        {(toggleMenu || screenWidth > 640) && (
          <nav class="header-menu-nav-list">
            <div className="mobile-menu">
              <div className="folder-content">
                <div className="menu-item-container">
                  <div className="items headline">                                    <p>Work</p>
                  </div>
                </div>
                <div className="menu-item-container">
                  <div className="items">
                    <Link to="/work/ptc-convergence">Convergence</Link>
                  </div>
                </div>
                <div className="menu-item-container">
                  <div className="items">
                    <Link to="/work/ptc-themer">PTC Themer</Link>
                  </div>
                </div>
                <div className="menu-item-container">
                  <div className="items">
                    <Link to="/work/climate-donor">Climate Donor</Link>
                  </div>
                </div>
                <div className="menu-item-container">
                  <div className="items">
                    <Link to="/work/covidsupport">COVIDSupport</Link>
                  </div>
                </div>
                <div className="menu-item-container">
                  <div className="items headline" >                                    <p>Get to Know Me</p>
                  </div>
                </div>
                <div className="menu-item-container">
                  <div className="items">                                        <Link to="/about">About
                  </Link></div>
                  {/* <div className="items">                                        <Link to="/posts">Blog
                  </Link></div> */}
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </nav>
  )
}
