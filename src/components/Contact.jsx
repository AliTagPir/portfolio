import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import linkedinIcon from '../assets/img/linkedin-icon.svg'
import githubIcon from '../assets/img/github-icon.svg'

function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const contactRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Toggle visibility based on whether section is intersecting
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Smooth scroll to center the section when it expands
                    setTimeout(() => {
                        contactRef.current?.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }, 100);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.3, // Trigger earlier at 30% visibility
                rootMargin: '0px' // Remove buffer for more natural behavior
            }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={contactRef}
            className={`contact-section ${isVisible ? 'expanded' : ''}`}
        >
            <div className={`contact-content ${isVisible ? 'slide-up' : ''}`}>
                <h2 className="contact-title">Let's Connect</h2>
                <p className="contact-subtitle">
                    I'm always interested in hearing about new projects and opportunities.
                </p>

                <div className="contact-methods">
                    <a href="mailto:alipirposhteh@gmail.com" className="contact-link">
                        <span>alipirposhteh@gmail.com</span>
                    </a>

                    <a href="https://www.linkedin.com/in/alipirposhteh/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <i className="bi bi-linkedin contact-icon"></i>
                        <span>LinkedIn</span>
                    </a>

                    <a href="https://github.com/AliTagPir" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <i className="bi bi-github contact-icon"></i>
                        <span>GitHub</span>
                    </a>

                </div>

                <div className="contact-cta">
                    <a href="mailto:alipirposhteh@gmail.com" className="cta-button">
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;