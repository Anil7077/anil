import React, { useState, useEffect } from 'react';

const MovetoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 80);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <button
        className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        data-bs-toggle="tooltip" data-bs-placement="top" title="Back to top"
      >
        <i class="fas fa-chevron-double-up" style={{ color: "black", fontSize: "22px", fontWeight: "600" }}></i>
      </button>
    </>
  )
}

export default MovetoTop;