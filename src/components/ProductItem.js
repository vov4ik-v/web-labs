import React from 'react';

const ProductItem = ({ image, name, description }) => {
    return (
        <div className="product-item eachdiv col-2">
            <div className="img-box">
                <img src={image} alt={name} />
            </div>
            <div className="det-box">
                <p className="name">{name}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    );
};

export default ProductItem;
