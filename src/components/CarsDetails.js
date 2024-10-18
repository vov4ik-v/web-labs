// CarDetails.js
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CarsContext } from '../context/CarsContext'; // Import context
import '../styles/CarsDetails.css';

const CarDetails = () => {
    const { cars } = useContext(CarsContext); // Use context to get cars data
    const { id } = useParams();
    const navigate = useNavigate();
    const car = cars.find((car) => car.id === parseInt(id));

    if (!car) {
        return <div className="container mx-auto px-4 py-8">Car not found</div>;
    }

    const handleGoBack = () => {
        navigate('/catalog');
    };

    const colors = ["Original", "Black", "Silver", "White", "Red"]; // Example color options

    return (
        <div className="car-detail-container">
            <div className="car-detail">
                <img src={car.image} alt={car.name} className="car-detail-image" />
                <div className="car-info">
                    <h3 className="car-detail-title">{car.name}</h3>
                    <p className="car-detail-description">
                        {car.detailedDescription ? car.detailedDescription : "No detailed description available"}
                    </p>

                    <div className="car-detail-add-info">
                        <div className="car-selector-container">
                            <h4>Select Color:</h4>
                            <select className="car-selector">
                                <option value="">Select</option>
                                {colors.map((color) => (
                                    <option key={color} value={color}>{color}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {car.characteristics && (
                        <div className="characteristics-grid">
                            {Object.entries(car.characteristics).map(([key, value]) => (
                                <div key={key} className="characteristic-item">
                                    <span className="characteristic-label">{key}:</span>
                                    <span className="characteristic-value">{value}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="car-actions">
                <p className="car-price">Price: ${car.price.toLocaleString()}</p>
                <div className="action-buttons">
                    <button onClick={handleGoBack}>Go Back</button>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
