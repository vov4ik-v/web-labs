// src/components/Catalog.js
import React, { useState, useEffect } from "react";
import "../styles/Catalog.css";
import { getCars } from "../services/api"; // Новий API для фільтрації
import CatalogItem from "./CatalogItem";
import Button from './Button';
import Input from './Input';
import Select from './Select';
import Loader from './Loader'; // Спінер для завантаження

const Catalog = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState("default");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    // Опції сортування
    const sortOptions = [
        { value: "default", label: "Sort by Price" },
        { value: "asc", label: "Price: Low to High" },
        { value: "desc", label: "Price: High to Low" },
        { value: "horsepower-asc", label: "Horsepower: Low to High" },
        { value: "horsepower-desc", label: "Horsepower: High to Low" }
    ];

    // Виклик API після зміни будь-якого фільтру
    const fetchFilteredCars = () => {
        setLoading(true);
        getCars(searchTerm, minPrice, maxPrice, sortType)
            .then(response => {
                setCars(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching cars:', error);
                setLoading(false);
            });
    };

    // Запускаємо пошук по натисканню кнопки пошуку або зміни сортування
    useEffect(() => {
        fetchFilteredCars();
    }, [sortType]); // Автоматично викликається при зміні сортування

    const handleSearchClick = () => {
        fetchFilteredCars(); // Викликаємо пошук при натисканні на іконку пошуку
    };

    const handlePriceOkClick = () => {
        fetchFilteredCars(); // Викликаємо пошук при натисканні кнопки "OK" біля полів мінімальної та максимальної ціни
    };

    const handleClearFilters = () => {
        setMinPrice("");
        setMaxPrice("");
        setSearchTerm("");
        fetchFilteredCars();
    };

    const handleCancelClick = () => {
        setMinPrice("");
        setMaxPrice("");
        setSearchTerm("");
        setSortType("default");
        fetchFilteredCars(); // Очищаємо фільтри і відправляємо запит
    };

    return (
        <div className="catalog-wrapper">
            <h1 className="catalog-title">Premium Cars Catalog</h1>

            <div className="catalog-filters">
                <div className="search-filter">
                    <Input
                        type="text"
                        placeholder="Search by name or description"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="search-btn" onClick={handleSearchClick}>
                        <i className="fa fa-search"></i> {/* Іконка пошуку */}
                    </button>
                </div>

                <div className="price-range-filters">
                    <Input
                        type="number"
                        placeholder="Min"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <Input
                        type="number"
                        placeholder="Max"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <Button onClick={handlePriceOkClick} className="price-ok-btn">
                        OK
                    </Button>
                </div>

                <Select
                    options={sortOptions}
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                />

                <div className="filter-actions">
                    <Button onClick={handleClearFilters} className="clear-btn">
                        Clear Filters
                    </Button>
                    <Button onClick={handleCancelClick} className="cancel-btn">
                        Cancel
                    </Button>
                </div>
            </div>

            {loading ? (
                <Loader /> // Показуємо спінер під час завантаження
            ) : (
                <div className="cars-grid">
                    {cars.map((car) => (
                        <CatalogItem
                            key={car.id}
                            id={car.id}
                            image={car.image}
                            name={car.name}
                            description={car.description}
                            price={car.price}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Catalog;
