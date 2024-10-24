import React, {useState, useEffect} from "react";
import "../styles/Catalog.css";
import {getCars} from "../services/api";
import CatalogItem from "./CatalogItem";
import Button from './Button';
import Input from './Input';
import Select from './Select';
import Loader from './Loader';

const Catalog = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState("default");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    const sortOptions = [
        {value: "default", label: "Sort by Price"},
        {value: "asc", label: "Price: Low to High"},
        {value: "desc", label: "Price: High to Low"},
        {value: "horsepower-asc", label: "Horsepower: Low to High"},
        {value: "horsepower-desc", label: "Horsepower: High to Low"}
    ];

    const fetchFilteredCars = (searchTerm = '', minPrice  = '', maxPrice = '', sortType = '') => {
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

    useEffect(() => {
        fetchFilteredCars();
    }, []);

    const handleSearchClick = () => {
        fetchFilteredCars(searchTerm.trim(), minPrice, maxPrice, sortType);
    };

    const handlePriceOkClick = () => {
        fetchFilteredCars(searchTerm.trim(), minPrice, maxPrice, sortType);
    };

    const handleSortChange = (e) => {
        setSortType(e.target.value);
        fetchFilteredCars(searchTerm.trim(), minPrice, maxPrice, sortType);
    };


    const handleClearFilters = () => {
        setSearchTerm("");
        setMinPrice("");
        setMaxPrice("");
        setSortType("default");
        fetchFilteredCars();
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
                    <Button className="search-btn" onClick={handleSearchClick}>Пошук</Button>

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
                    onChange={(e) => handleSortChange(e)}
                />

                <div className="filter-actions">
                    <Button onClick={handleClearFilters} className="catalog-clear-btn">
                        Clear Filters
                    </Button>
                </div>
            </div>

            {loading ? (
                <Loader/>
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
