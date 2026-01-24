import React, { useState, useEffect } from 'react';
import './Banner.css';
import aboutImage from '../assets/img/about.jpg';

const Banner = () => {
  const titles = [
    'Ali T Pirposhteh',
    'a Software Engineer',
    'a Data Engineer'
  ];

  const [currentTitle, setCurrentTitle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % titles.length);
        setIsAnimating(false);
      }, 500); // Half of the animation duration
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1 className="banner-greeting">Hello, I'm</h1>
          <div className="banner-title-container">
            <h2 className={`banner-title ${isAnimating ? 'fade-out' : 'fade-in'}`}>
              {titles[currentTitle]}
            </h2>
          </div>
          <p className="banner-description">
            Passionate about building scalable solutions and transforming data into insights.
          </p>
        </div>
        
        <div className="banner-image-wrapper">
          <div className="banner-image-container">
            <img src={aboutImage} alt="Ali T Pirposhteh" className="banner-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;