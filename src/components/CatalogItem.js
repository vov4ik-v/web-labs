import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Catalog.css';

const CatalogItem = ({ id, image, name, description, price }) => {
    return (
        <div className="car-card">
            <img src={image} alt={name} className="car-image" />
            <h3 className="car-name">{name}</h3>
            <p className="car-description">{description}</p>
            <p className="car-price">${price.toLocaleString()}</p>
            <Link to={`/car/${id}`} className="view-details-link">
                View Details
            </Link>
        </div>
    );
};

export default CatalogItem;