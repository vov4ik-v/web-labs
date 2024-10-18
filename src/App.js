import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Catalog from './components/Catalog';
import CarDetails from "./components/CarsDetails";
import { CarsProvider } from './context/CarsContext';

function App() {
    return (
        <CarsProvider>
            <Router>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/car/:id" element={<CarDetails />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </CarsProvider>
    );
}

export default App;
