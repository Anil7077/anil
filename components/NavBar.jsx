import Link from 'next/link'
import React from 'react'

const NavBar = ({darkMode}) => {
  return (
    <>
      <div className={darkMode ? "navigation-box dark-mode-box sticky-top" : "navigation-box sticky-top"}>
        <ul>
          <li><a href="#home" style={{color : darkMode ? "white" : "black"}}>Home</a></li>
          <div className="small-black-line" style={{backgroundColor : darkMode ? "white" : "black"}}/>
          <li><a href="#about" style={{color : darkMode ? "white" : "black"}}>About</a></li>
          <div className="small-black-line" style={{backgroundColor : darkMode ? "white" : "black"}}/>
          <li><a href="#latest-work" style={{color : darkMode ? "white" : "black"}}>Latest Work</a></li>
          <div className="small-black-line" style={{backgroundColor : darkMode ? "white" : "black"}}/>
          <li><a href="#my-skills" style={{color : darkMode ? "white" : "black"}}>My Skills</a></li>
          <div className="small-black-line" style={{backgroundColor : darkMode ? "white" : "black"}}/>
          <li><Link href="/blogs" style={{color : darkMode ? "white" : "black"}}>Latest News</Link></li>
          <div className="small-black-line" style={{backgroundColor : darkMode ? "white" : "black"}}/>
          <li><a href="#contact-me" style={{color : darkMode ? "white" : "black"}}>Contact me</a></li>
          <div className="small-black-line" style={{backgroundColor : darkMode ? "white" : "black"}}/>
        </ul>
      </div>

    </>
  )
}

export default NavBar