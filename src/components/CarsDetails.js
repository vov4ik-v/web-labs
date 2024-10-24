import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {getCarById} from '../services/api';
import Loader from './Loader';
import Select from './Select';
import Button from './Button';
import '../styles/CarsDetails.css';

const CarDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedColor, setSelectedColor] = useState('');
    const colors = [
        {value: "original", label: "Original"},
        {value: "black", label: "Black"},
        {value: "silver", label: "Silver"},
        {value: "white", label: "White"},
        {value: "red", label: "Red"}
    ];

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

    const handleColorChange = (e) => {
        setSelectedColor(e.target.value);
    };

    if (loading) {
        return <Loader/>;
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
                                value={selectedColor}
                                onChange={handleColorChange}
                            />
                        </div>
                    </div>

                    <div className="characteristics-grid">
                        <div className="characteristic-item">
                            <span className="characteristic-label">Horsepower: </span>
                            <span className="characteristic-value">{car.horsepower}</span>
                        </div>
                        <div className="characteristic-item">
                            <span className="characteristic-label">Top Speed: </span>
                            <span className="characteristic-value">{car.topSpeed}</span>
                        </div>
                        <div className="characteristic-item">
                            <span className="characteristic-label">0-60 mph: </span>
                            <span className="characteristic-value">{car.zeroToSixty}</span>
                        </div>
                        <div className="characteristic-item">
                            <span className="characteristic-label">Weight: </span>
                            <span className="characteristic-value">{car.weight}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="car-actions">
                <p className="car-price">Price: ${car.price.toLocaleString()}</p>
                <div className="action-buttons">
                    <Button onClick={handleGoBack}>
                        Go Back
                    </Button>
                    <Button>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
