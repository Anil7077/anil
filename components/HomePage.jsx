import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };
    const downloadResume = () => {
        const resumePath = '/images/ANIL MALLICK Front-end Developer.pdf';
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'resume.pdf';
        link.click();
    };
    return (
        <>
            <section className='mobile-navbar sticky-top'>
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="mobile-navbar-nav">
                            <div>
                                <img src="images/app-store.png" style={{ width: "30px" }} alt="aaa" />
                            </div>
                            <div>
                                <span className='latest-news'><Link href="/blogs">Latest news</Link></span>
                            </div>
                            <div className="toggle-button" onClick={toggleMenu}>
                                {menuOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                            </div>

                            <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                                <li onClick={closeMenu}><a href="#home">Home</a></li>
                                <li onClick={closeMenu}><a href="#about">About</a></li>
                                <li onClick={closeMenu}><a href="#latest-work">Latest Work</a></li>
                                <li onClick={closeMenu}><a href="#my-skills">My Skills</a></li>
                                <li onClick={closeMenu}><a href="#">Latest News</a></li>
                                <li onClick={closeMenu}><a href="#contact-me">Contact me</a></li>
                                {/* Add more menu items as needed */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
            <section className="hero-section" id="home">
                <div className="row">
                    <div className="col-lg-8">
                        <h2>Anil Mallick</h2>
                        <span>Front-end Developer</span>
                        <div className="small-black-line" />
                        <p>A passionate front-end developer who has eager to work in new technologies and always
                            tries to deliver in time...</p>
                        <h6>Connect with me</h6>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/anil.mallick.39501" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-square" style={{ color: '#0866ff' }} />
                            </a>
                            <a href="https://www.linkedin.com/in/anil-mallick-642a89259" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin" style={{ color: '#0077b5' }} />
                            </a>
                            <a href="https://github.com/Anil7077" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github-square" style={{ color: 'black' }} />
                            </a>
                        </div>
                        <button onClick={downloadResume} style={{ marginBottom: "10px" }}>Download Resume</button>
                    </div>
                    <div className="col-lg-4">
                        <div className="profile-container">
                            <div className="background-pattern" />
                            <img className="hero-img" src="/images/Untitled design.png" alt="aaa" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomePage