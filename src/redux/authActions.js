import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './actionTypes';

const API_DOMAIN = 'http://localhost:8080/';

export const loginUser = (username, password) => async (dispatch) => {
    try {
        const response = await axios.post(`${API_DOMAIN}api/auth/signin`, { username, password });
        localStorage.setItem('token', response.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
        return true;
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.message });
        return false;
    }
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT });
};
