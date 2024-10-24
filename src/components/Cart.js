import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className="cart-page">
            <h1>Your Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((car) => (
                        <li key={car.id}>
                            <img src={car.image} alt={car.name} />
                            <div>
                                <h2>{car.name}</h2>
                                <p>{car.price}</p>
                                <button onClick={() => handleRemoveFromCart(car.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
