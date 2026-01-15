import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';


function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [emailCopied, setEmailCopied] = useState(false);
    const contactRef = useRef(null);

    const handleEmailCopy = () => {
        const email = 'alipirposhteh@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
        setEmailCopied(true);
        setTimeout(() => {
            setEmailCopied(false);
        }, 2000); // Reset after 2 seconds
        });
    };

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
                threshold: 0.4, // Trigger earlier at 30% visibility
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

                    <button onClick={handleEmailCopy} className="contact-link contact-button">
                        <span>{emailCopied ? 'Copied!' : 'alipirposhteh@gmail.com'}</span>
                    </button>

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