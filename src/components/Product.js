import React, { useContext } from 'react';
import { CarsContext } from '../context/CarsContext';
import ProductItem from './ProductItem';
import ViewMoreButton from './ViewMoreButton';
import '../styles/Product.css';

const Products = () => {
    const { cars } = useContext(CarsContext);
    const [showAll, setShowAll] = React.useState(false);

    const handleViewMore = () => {
        setShowAll(!showAll);
    };

    const carsToDisplay = showAll ? cars.slice(0, 8) : cars.slice(0, 4);

    return (
        <div className="product-wrapper">
            <h2>
                <span className="underline-light_blue">Our Premium Cars</span>
            </h2>
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
            <ViewMoreButton onClick={handleViewMore} text={showAll ? 'Less' : 'View more'} />
        </div>
    );
};

export default Products;
