import React from 'react';
import Header from './Header';
import Product from './Product';
import AboutUs from './AboutUs';
import FAQ from './FAQ';

const Home = () => {
    return (
        <div>
            <Header />
            <Product />
            <FAQ />
            <AboutUs />
        </div>
    );
};

export default Home;
