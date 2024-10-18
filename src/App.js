import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Importing Routes
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Catalog from './components/Catalog';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/"  element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
