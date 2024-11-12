// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Catalog from './components/Catalog';
import CarDetails from "./components/CarsDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout"; // Import Checkout
import Success from "./components/Success";   // Import Success
import { CarsProvider } from './context/CarsContext';
import { useDispatch } from "react-redux";
import { loadCartFromLocalStorage } from "./redux/cartActions";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCartFromLocalStorage());
    }, [dispatch]);

    return (
        <Router>
            <CarsProvider>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/car/:id" element={<CarDetails />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />   {/* Add Checkout route */}
                        <Route path="/success" element={<Success />} />     {/* Add Success route */}
                    </Routes>
                    <Footer />
                </div>
            </CarsProvider>
        </Router>
    );
}

export default App;
