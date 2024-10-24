import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer__content-wrapper">
                <div className="footer__logo-copyright-wrapper">
                    <p className="grey-text">©2024 Car Store. All rights reserved</p>
                </div>
                <hr/>
                <div className="footer__social-media-icons">
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;