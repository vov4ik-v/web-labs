import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCarById } from '../services/api';
import Loader from './Loader';
import Select from './Select';
import Button from './Button';
import Input from './Input';
import '../styles/CarsDetails.css';
import { useDispatch } from 'react-redux';
import { addToCart } from "../redux/cartActions";

const CarDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedColor, setSelectedColor] = useState(''); // Default no color selected
    const [quantity, setQuantity] = useState(1);
    const [maxStock, setMaxStock] = useState(0);

    const colors = [
        { value: '', label: 'Select Color' }, // Default placeholder option
        ...car?.stock.map(stockItem => ({
            value: stockItem.color,
            label: stockItem.color.charAt(0).toUpperCase() + stockItem.color.slice(1)
        })) || []
    ];

    useEffect(() => {
        setLoading(true);
        getCarById(id)
            .then((response) => {
                setCar(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching car:', error);
                setLoading(false);
            });
    }, [id]);

    const handleGoBack = () => {
        navigate('/catalog');
    };

    const handleColorChange = (e) => {
        const color = e.target.value;
        setSelectedColor(color);
        setQuantity(1); // Reset quantity to 1 whenever color changes

        // Find the selected color's stock and set maxStock
        const selectedStockItem = car.stock.find(stock => stock.color === color);
        setMaxStock(selectedStockItem ? selectedStockItem.stock : 0);
    };

    const handleQuantityChange = (e) => {
        const newQuantity = Number(e.target.value);
        if (newQuantity > maxStock) {
            setQuantity(maxStock);
            alert(`Only ${maxStock} items are available in ${selectedColor} color.`);
        } else {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = () => {
        if (!selectedColor) {
            alert("Please select a color.");
            return;
        }

        dispatch(addToCart({ ...car, quantity, selectedColor }));
    };

    if (loading) {
        return <Loader />;
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
                        <div className="quantity-selector">
                            <h4>Select Quantity:</h4>
                            <Input
                                type="number"
                                min="1"
                                max={maxStock}
                                value={quantity}
                                onChange={handleQuantityChange}
                                disabled={!selectedColor} // Disable input if no color is selected
                            />
                            {selectedColor && maxStock === 0 && <p>No stock available for this color.</p>}
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
                    <Button onClick={handleGoBack}>Go Back</Button>
                    <Button onClick={handleAddToCart}>Add to Cart</Button>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
