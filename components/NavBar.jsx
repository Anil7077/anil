import Link from 'next/link'
import React from 'react'

const NavBar = ({ darkMode }) => {
  return (
    <>
      <div className='sticky-top'>
        <div className={darkMode ? "navigation-box dark-mode-box sticky-top" : "navigation-box sticky-top"}>
          <ul>
            <li><a href="#home" style={{ color: darkMode ? "white" : "black" }}>Home</a></li>
            <div className="small-black-line" style={{ backgroundColor: darkMode ? "white" : "black" }} />
            <li><a href="#about" style={{ color: darkMode ? "white" : "black" }}>About</a></li>
            <div className="small-black-line" style={{ backgroundColor: darkMode ? "white" : "black" }} />
            <li><a href="#latest-work" style={{ color: darkMode ? "white" : "black" }}>Latest Work</a></li>
            <div className="small-black-line" style={{ backgroundColor: darkMode ? "white" : "black" }} />
            <li><a href="#my-skills" style={{ color: darkMode ? "white" : "black" }}>My Skills</a></li>
            <div className="small-black-line" style={{ backgroundColor: darkMode ? "white" : "black" }} />
            <li><a href="#my-education" style={{ color: darkMode ? "white" : "black" }}>Education</a></li>
            <div className="small-black-line" style={{ backgroundColor: darkMode ? "white" : "black" }} />
            <li><Link href="/blogs" style={{ color: darkMode ? "white" : "black" }}>Latest News</Link></li>
            <div className="small-black-line" style={{ backgroundColor: darkMode ? "white" : "black" }} />
            <li><a href="#contact-me" style={{ color: darkMode ? "white" : "black" }}>Contact me</a></li>
            <div className="small-black-line" style={{ backgroundColor: darkMode ? "white" : "black" }} />
          </ul>
        </div>
        <div className={darkMode ? "navigation-box dark-mode-box mt-5" : "navigation-box mt-5"} style={{padding: '22px'}}>
          <h5>Languages known</h5>
          <hr />
          <p className='mb-2'><i class="far fa-check-circle"></i> English, Hindi, Odia</p>
          {/* <i class="far fa-check-circle"></i> */}
          <div>
          <h5 className='mt-3'>My Hobbies</h5>
          <hr />
          <p><i class="far fa-check-circle"></i> Cooking</p>
          <p><i class="far fa-check-circle"></i> Playing cricket</p>
          <p><i class="far fa-check-circle"></i> Watching webseries</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default NavBar