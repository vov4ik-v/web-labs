// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from "./cartReducer";
import authReducer from "./authReducer"; // Import authReducer

export const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer, // Add auth reducer
});
