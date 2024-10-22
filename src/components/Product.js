// src/components/Products.js
import React, { useContext, useState } from 'react';
import { CarsContext } from '../context/CarsContext'; // Контекст з автомобілями
import ProductItem from './ProductItem';
import Loader from './Loader';  // Loader для спінера
import Button from './Button';  // Використовуємо Button
import '../styles/Product.css';

const Products = () => {
    const { cars, loading } = useContext(CarsContext); // Отримуємо машини з контексту
    const [showAll, setShowAll] = useState(false);

    const handleViewMore = () => {
        setShowAll(!showAll);
    };

    const carsToDisplay = showAll ? cars : cars.slice(0, 4); // Показуємо обмежену кількість машин або всі

    return (
        <div className="product-wrapper">
            <h2>
                <span className="underline-light_blue">Our Premium Cars</span>
            </h2>
            {loading ? (
                <Loader />  // Показуємо спінер, поки дані завантажуються
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
