// cartReducer.js
import {
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_FROM_CART,
    SET_CART,
    UPDATE_CART_ITEM_QUANTITY,
} from "./actionTypes";

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    let updatedCartItems = []; // Initialize this variable outside the switch to avoid uninitialized reference errors.

    switch (action.type) {
        case SET_CART:
            return { ...state, cartItems: action.payload };

        case ADD_TO_CART:
            const existingItemIndex = state.cartItems.findIndex(
                (item) =>
                    item.id === action.payload.id &&
                    item.selectedColor === action.payload.selectedColor
            );

            if (existingItemIndex >= 0) {
                updatedCartItems = [...state.cartItems];
                updatedCartItems[existingItemIndex].quantity += action.payload.quantity;
            } else {
                updatedCartItems = [...state.cartItems, action.payload];
            }
            return { ...state, cartItems: updatedCartItems };

        case REMOVE_FROM_CART:
            updatedCartItems = state.cartItems.filter(
                (item) =>
                    !(
                        item.id === action.payload.id &&
                        item.selectedColor === action.payload.selectedColor
                    )
            );
            return { ...state, cartItems: updatedCartItems };

        case CLEAR_CART:
            return { ...state, cartItems: [] };

        case UPDATE_CART_ITEM_QUANTITY:
            updatedCartItems = state.cartItems
                .map((item) => {
                    if (
                        item.id === action.payload.id &&
                        item.selectedColor === action.payload.selectedColor
                    ) {
                        return { ...item, quantity: action.payload.quantity };
                    }
                    return item;
                })
                .filter((item) => item.quantity > 0); // Remove if quantity is 0
            return { ...state, cartItems: updatedCartItems };

        default:
            return state;
    }
};

export default cartReducer;
