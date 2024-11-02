import React from 'react';
import '../styles/Navbar.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item"><Link to="/">Home</Link></li>
                <li className="navbar-item"><Link to="/catalog">Catalog</Link></li>
                <li className="navbar-item"><Link to="/cart">Cart ({cartItems.length})</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;