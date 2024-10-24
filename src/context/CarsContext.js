import React, { createContext, useState, useEffect } from 'react';
import { getCars } from '../services/api';

export const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getCars()
            .then(response => {
                setCars(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching cars:', error);
                setLoading(false);
            });
    }, []);

    return (
        <CarsContext.Provider value={{ cars, loading }}>
            {children}
        </CarsContext.Provider>
    );
};
