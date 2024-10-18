import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <div className="header__text-box">
                <h1>Premium<br/><span className="underline-header">Car</span><br/>Selection</h1>
                <p>Experience luxury and performance with our top-tier car collection</p>
            </div>
        </header>
    );
};

export default Header;