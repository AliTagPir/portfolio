import React, { useState, useEffect, useRef } from "react";
import "./Footer.css";

function Footer() {
  const [showWaves, setShowWaves] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setShowWaves(true);
        } else {
          setShowWaves(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer ref={footerRef} className={`footer ${showWaves ? "active" : ""}`}>
      {/* Wavy Transition Effect */}
      <div className="wave-top"></div>

      <div className={`contact-info ${showWaves ? "visible" : ""}`}>
        <h3>Contact Me</h3>
        <p>Email: ali.pirposhteh@example.com</p>
        <p>Phone: +123 456 7890</p>
        <p>LinkedIn: linkedin.com/in/alipirposhteh</p>
      </div>
    </footer>
  );
}

export default Footer;