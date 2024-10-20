// Catalog.jsx
import React, { useState, useContext } from "react";
import "../styles/Catalog.css";
import { CarsContext } from "../context/CarsContext";
import CatalogItem from "./CatalogItem";
import Button from './Button';
import Input from './Input';
import Select from './Select';

const Catalog = () => {
    const { cars } = useContext(CarsContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState("default");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const sortOptions = [
        { value: "default", label: "Sort by Price" },
        { value: "asc", label: "Price: Low to High" },
        { value: "desc", label: "Price: High to Low" },
        { value: "horsepower-asc", label: "Horsepower: Low to High" },
        { value: "horsepower-desc", label: "Horsepower: High to Low" }
    ];

    const handleClearFilters = () => {
        setMinPrice("");
        setMaxPrice("");
    };

    const filteredCars = cars
        .filter((car) => {
            const matchesSearchTerm =
                car.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
                car.description.toLowerCase().includes(searchTerm.trim().toLowerCase());
            const matchesPriceRange =
                (minPrice === "" || car.price >= parseInt(minPrice)) &&
                (maxPrice === "" || car.price <= parseInt(maxPrice));
            return matchesSearchTerm && matchesPriceRange;
        })
        .sort((a, b) => {
            if (sortType === "asc") {
                return a.price - b.price;
            } else if (sortType === "desc") {
                return b.price - a.price;
            } else if (sortType === "horsepower-asc") {
                return parseInt(a.characteristics?.Horsepower || 0) - parseInt(b.characteristics?.Horsepower || 0);
            } else if (sortType === "horsepower-desc") {
                return parseInt(b.characteristics?.Horsepower || 0) - parseInt(a.characteristics?.Horsepower || 0);
            } else {
                return 0;
            }
        });

    return (
        <div className="catalog-wrapper">
            <h1 className="catalog-title">Premium Cars Catalog</h1>

            <div className="catalog-filters">
                <Input
                    type="text"
                    placeholder="Search by name or description"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

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
                    <Button onClick={handleClearFilters} className={'catalog-clear-btn'}>
                        Clear
                    </Button>
                </div>

                <Select
                    options={sortOptions}
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                />
            </div>

            <div className="cars-grid">
                {filteredCars.map((car) => (
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
        </div>
    );
};

export default Catalog;