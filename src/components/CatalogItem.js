// src/components/CatalogItem.jsx
import React from 'react';
import '../styles/Catalog.css';

const CatalogItem = ({ image, name, description, price }) => {
    return (
        <div className="car-card">
            <img src={image} alt={name} className="car-image" />
            <h3 className="car-name">{name}</h3>
            <p className="car-description">{description}</p>
            <p className="car-price">${price.toLocaleString()}</p>
        </div>
    );
};

export default CatalogItem;
