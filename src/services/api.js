import axios from 'axios';

const API_URL = 'http://localhost:8080/api/cars';

export const getCars = (searchTerm = '', minPrice = '', maxPrice = '', sortType = '') => {
    const params = new URLSearchParams();
    if (searchTerm) params.append('searchTerm', searchTerm);
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);
    if (sortType) params.append('sortType', sortType);

    return axios.get(`${API_URL}/filter?${params.toString()}`);
};

export const getCarById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};
