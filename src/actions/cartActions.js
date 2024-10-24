export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (car) => {
    return {
        type: ADD_TO_CART,
        payload: car
    };
};

export const removeFromCart = (carId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: carId
    };
};
