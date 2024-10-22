// src/components/CarDetails.js
import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {getCarById} from '../services/api'; // Використовуємо getCarById для отримання даних
import Loader from './Loader';  // Loader для спінера
import Select from './Select';  // Використовуємо Select
import Button from './Button';  // Використовуємо Button
import '../styles/CarsDetails.css';

const CarDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const colors = ["Original", "Black", "Silver", "White", "Red"];

    useEffect(() => {
        setLoading(true);
        getCarById(id)
            .then(response => {
                setCar(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching car:', error);
                setLoading(false);
            });
    }, [id]);

    const handleGoBack = () => {
        navigate('/catalog');
    };

    if (loading) {
        return <Loader/>;  // Показуємо спінер, поки дані завантажуються
    }

    if (!car) {
        return <div className="container mx-auto px-4 py-8">Car not found</div>;
    }

    return (
        <div className="car-detail-container">
            <div className="car-detail">
                <img src={car.image} alt={car.name} className="car-detail-image"/>
                <div className="car-info">
                    <h3 className="car-detail-title">{car.name}</h3>
                    <p className="car-detail-description">
                        {car.detailedDescription ? car.detailedDescription : "No detailed description available"}
                    </p>

                    <div className="car-detail-add-info">
                        <div className="car-selector-container">
                            <h4>Select Color:</h4>
                            <Select
                                options={colors}
                                value={''}
                                onChange={(e) => console.log(e.target.value)}
                                placeholder="Select Color"
                            />
                        </div>
                    </div>

                    {/*{car.characteristics && (*/}
                    {/*    {Object.entries(car.characteristics).map(([key, value]) => (*/}

                    <div className="characteristics-grid">
                        <div className="characteristic-item">
                            <span className="characteristic-label">Horsepower:</span>
                            <span className="characteristic-value">car.horsepower</span>
                        </div>
                        <div className="characteristic-item">
                            <span className="characteristic-label">Top Speed:</span>
                            <span className="characteristic-value">car.top_speed</span>
                        </div>
                        <div className="characteristic-item">
                            <span className="characteristic-label">0-60 mph:</span>
                            <span className="characteristic-value">car.zero_to_sixty</span>
                        </div>
                        <div className="characteristic-item">
                            <span className="characteristic-label">Weight:</span>
                            <span className="characteristic-value">car.weight</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="car-actions">
                <p className="car-price">Price: ${car.price.toLocaleString()}</p>
                <div className="action-buttons">
                    <Button onClick={handleGoBack} text="Go Back"/>
                    <Button text="Add to Cart"/>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
