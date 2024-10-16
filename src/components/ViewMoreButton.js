import React from 'react';
import '../styles/ViewMoreButton.css';

const ViewMoreButton = ({ onClick, text }) => {
    return (
        <button className="view-more-btn" onClick={onClick}>
            {text}
        </button>
    );
};

export default ViewMoreButton;
