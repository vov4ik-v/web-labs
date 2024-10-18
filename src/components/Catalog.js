import React, { useState, useContext } from "react";
import "../styles/Catalog.css";
import CatalogItem from "./CatalogItem";
import { CarsContext } from "../context/CarsContext"; // Import context

const Catalog = () => {
    const { cars } = useContext(CarsContext); // Use context to get cars data
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState("default");
    const [minPrice, setMinPrice] = useState(""); // State for min price filter
    const [maxPrice, setMaxPrice] = useState(""); // State for max price filter

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortType(event.target.value);
    };

    const handleMinPriceChange = (event) => {
        setMinPrice(event.target.value);
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(event.target.value);
    };

    const handleClearFilters = () => {
        setMinPrice(""); // Reset min price
        setMaxPrice(""); // Reset max price
    };

    const filteredCars = cars
        .filter((car) => {
            const matchesSearchTerm =
                car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                car.description.toLowerCase().includes(searchTerm.toLowerCase());
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
                <input
                    type="text"
                    placeholder="Search by name or description"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="catalog-search"
                />

                <div className="price-range-filters">
                    <input
                        type="number"
                        placeholder="Min"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        className="catalog-price-input"
                    />
                    <input
                        type="number"
                        placeholder="Max"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        className="catalog-price-input"
                    />
                    <button className="catalog-clear-btn" onClick={handleClearFilters}>
                        Clear
                    </button>
                </div>

                {/* Sort Options */}
                <select value={sortType} onChange={handleSortChange} className="catalog-sort">
                    <option value="default">Sort by Price</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                    <option value="horsepower-asc">Horsepower: Low to High</option>
                    <option value="horsepower-desc">Horsepower: High to Low</option>
                </select>
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
