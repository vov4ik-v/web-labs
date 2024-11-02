// cartActions.js

// Action types

// Helper function to save cart to local storage
import {ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, SET_CART} from "./actionTypes";

const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
};

// Action to load cart from local storage
export const loadCartFromLocalStorage = () => {
    return (dispatch) => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        dispatch({ type: SET_CART, payload: savedCart });
    };
};

// Action to add item to cart and save to local storage
export const addToCart = (item) => {
    return (dispatch, getState) => {
        dispatch({ type: ADD_TO_CART, payload: item });
        saveCartToLocalStorage(getState().cart.cartItems); // Save updated cart to local storage
    };
};

// Action to remove item from cart and save to local storage
export const removeFromCart = (id, selectedColor) => {
    return (dispatch, getState) => {
        dispatch({ type: REMOVE_FROM_CART, payload: { id, selectedColor } });
        saveCartToLocalStorage(getState().cart.cartItems); // Save updated cart to local storage
    };
};

// Action to clear cart and remove it from local storage
export const clearCart = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_CART });
        localStorage.removeItem('cart'); // Remove cart from local storage
    };
};
