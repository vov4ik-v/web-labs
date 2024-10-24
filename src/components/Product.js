import React, { useContext, useState } from 'react';
import { CarsContext } from '../context/CarsContext';
import ProductItem from './ProductItem';
import Loader from './Loader';
import Button from './Button';
import '../styles/Product.css';

const Products = () => {
    const { cars, loading } = useContext(CarsContext);
    const [showAll, setShowAll] = useState(false);

    const handleViewMore = () => {
        setShowAll(!showAll);
    };

    const carsToDisplay = showAll ? cars.slice(0,8) : cars.slice(0, 4);

    return (
        <div className="product-wrapper">
            <h2>
                <span className="underline-light_blue">Our Premium Cars</span>
            </h2>
            {loading ? (
                <Loader />
            ) : (
                <div className="product-div">
                    <div className="flex-row">
                        {carsToDisplay.map((car) => (
                            <ProductItem
                                key={car.id}
                                image={car.image}
                                name={car.name}
                                description={car.description}
                            />
                        ))}
                    </div>
                </div>
            )}
            <Button onClick={handleViewMore} className="view-more-btn">
                {showAll ? 'Less' : 'View more'}
            </Button>
        </div>
    );
};

export default Products;
