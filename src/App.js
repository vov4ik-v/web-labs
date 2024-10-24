import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Catalog from './components/Catalog';
import CarDetails from './components/CarsDetails';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/car/:id" element={<CarDetails />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
