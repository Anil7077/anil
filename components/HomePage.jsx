import React, { useEffect } from 'react'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HomePage = ({ darkMode, setDarkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [textColor, setTextColor] = useState('deeppink');
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

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <>
            <section className={darkMode ? 'mobile-navbar sticky-top sections' : 'mobile-navbar sticky-top'}>
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="mobile-navbar-nav">
                            <div>
                                <Link href="/">
                                    <img src="images/app-store.png" style={{ width: "30px" }} alt="aaa" />
                                </Link>
                            </div>
                            <div>
                                <span className='latest-news'><Link href="/blogs">Latest news</Link></span>
                            </div>
                            <div>
                                {darkMode ?
                                    <Image onClick={handleDarkMode} src="/images/brightness (1).png" width={20} height={20} alt="aa" />
                                    :
                                    <Image onClick={handleDarkMode} src="/images/darkness.png" width={20} height={20} alt="aa" />
                                }
                            </div>
                            <div className="toggle-button" onClick={toggleMenu}>
                                {menuOpen ?
                                    <i className="fas fa-times" style={{ color: darkMode ? 'white' : 'black' }}></i>
                                    :
                                    <i className="fas fa-bars" style={{ color: darkMode ? 'white' : 'black' }}></i>}
                            </div>

                            <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                                <li onClick={closeMenu}><a href="#home">Home</a></li>
                                <li onClick={closeMenu}><a href="#about">About</a></li>
                                <li onClick={closeMenu}><a href="#latest-work">Latest Work</a></li>
                                <li onClick={closeMenu}><a href="#my-skills">My Skills</a></li>
                                <li onClick={closeMenu}><a href="#my-education">Education</a></li>
                                <li onClick={closeMenu}><Link href="/blogs">Latest News</Link></li>
                                <li onClick={closeMenu}><a href="#contact-me">Contact me</a></li>
                                {/* Add more menu items as needed */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
            <section className={darkMode ? "hero-section sections" : "hero-section"} id="home">
                <div className="row">
                    <div className="col-lg-8">
                        {/* <h2>Anil Mallick</h2> */}
                        <div class="loader">
                            <span>Anil Mallick</span>
                            <span>Anil Mallick</span>
                        </div>
                        <div
                            style={{
                                fontSize: '20px',
                                color: textColor,
                                fontWeight: '600'
                            }}
                        > <span style={{ color: darkMode ? "white" : "black" }}>I am </span>
                            <TypeAnimation
                                sequence={[
                                    () => setTextColor('deeppink'),
                                    ' an Engineer..', 800,
                                    () => setTextColor('#808000'),
                                    ' a Web developer..',
                                    800,
                                    () => setTextColor('#8E44AD'),
                                    ' a Web designer..',
                                    1000,
                                    () => setTextColor('#005841'),
                                    ' a Coder..',
                                ]}
                                repeat={Infinity}
                            />
                        </div>
                        <div className="small-black-line" />
                        <p>A passionate front-end developer who is eager to work in new technologies and always
                            try to deliver in time...</p>

                        <h6>Connect with me</h6>

                        <div className="social-icons">
                            <a href="https://www.facebook.com/anil.mallick.39501" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-square" style={{ color: '#0866ff' }} />
                            </a>
                            <a href="https://www.linkedin.com/in/anil-mallick-642a89259" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin" style={{ color: '#0077b5' }} />
                            </a>
                            <a href="https://github.com/Anil7077" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github-square" style={{ color: darkMode ? '#e84e31' : 'black' }} />
                            </a>
                        </div>
                        <button onClick={downloadResume} style={{ marginBottom: "10px" }}>Download Resume</button>

                    </div>
                    <div className="col-lg-4">
                        <div className="profile-container">
                            <div className="background-pattern" />
                            <img className="hero-img" src="/images/Untitled design.png" style={{ border: darkMode && "2px solid #414141" }} alt="aaa" />
                            {/* <ImageSlider /> */}
                        </div>
                    </div>
                </div>
                <div className='shape'></div>
            </section>
        </>
    )
}

export default HomePage