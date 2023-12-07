import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <>
      <div className="navigation-box">
        <ul>
          <li><a href="#home">Home</a></li>
          <div className="small-black-line" />
          <li><a href="#about">About</a></li>
          <div className="small-black-line" />
          <li><a href="#latest-work">Latest Work</a></li>
          <div className="small-black-line" />
          <li><a href="#my-skills">My Skills</a></li>
          <div className="small-black-line" />
          <li><Link href="/blogs">Latest News</Link></li>
          <div className="small-black-line" />
          <li><a href="#contact-me">Contact me</a></li>
          <div className="small-black-line" />
        </ul>
      </div>

    </>
  )
}

export default NavBar