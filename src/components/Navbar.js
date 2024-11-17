import React from 'react';
import '../styles/Navbar.css';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../redux/authActions";

const Navbar = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/login');
    };
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item"><Link to="/">Home</Link></li>
                <li className="navbar-item"><Link to="/catalog">Catalog</Link></li>
                <li className="navbar-item"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                {isAuthenticated ? (
                        <li className="navbar-item" onClick={handleLogout}>Logout</li>
                        ) : (
                        <>
                        <li className="navbar-item"><Link to="/login">Login</Link></li>
                        <li className="navbar-item"><Link to="/signup">Signup</Link></li>
                        </>
                        )}
                    </ul>
                    </nav>
                    );
                };
export default Navbar;