// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from "./cartReducer";
// import other reducers if any

export const rootReducer = combineReducers({
    cart: cartReducer,
});
