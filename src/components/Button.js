import React from 'react';
import '../styles/Catalog.css';

const Button = ({ children, onClick, className = '' }) => {
    return (
        <button
            className={`${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;