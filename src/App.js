// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Catalog from './components/Catalog';
import CarDetails from './components/CarsDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Success from './components/Success';
import Login from './components/Login';
import Signup from './components/Signup';
import { CarsProvider } from './context/CarsContext';
import { loadCartFromLocalStorage } from './redux/cartActions';
import { LOGIN_SUCCESS } from './redux/actionTypes';

function App() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    useEffect(() => {
        // Load cart from local storage
        dispatch(loadCartFromLocalStorage());

        // Check for an existing token and set authenticated state
        const token = localStorage.getItem('token');
        if (token) {
            dispatch({ type: LOGIN_SUCCESS, payload: { token } });
        }
    }, [dispatch]);

    return (
        <Router>
            <CarsProvider>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" exact  element= <Home/> />
                        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
                        <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <Signup />} />
                        <Route path="/catalog" element={isAuthenticated ? <Catalog /> : <Navigate to="/login" />} />
                        <Route path="/car/:id" element={isAuthenticated ? <CarDetails /> : <Navigate to="/login" />} />
                        <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/login" />} />
                        <Route path="/checkout" element={isAuthenticated ? <Checkout /> : <Navigate to="/login" />} />
                        <Route path="/success" element={isAuthenticated ? <Success /> : <Navigate to="/login" />} />
                    </Routes>
                    <Footer />
                </div>
            </CarsProvider>
        </Router>
    );
}

export default App;
