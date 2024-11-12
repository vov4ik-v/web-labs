// Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    removeFromCart,
    clearCart,
    updateCartItemQuantity,
} from '../redux/cartActions';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemove = (id, selectedColor) => {
        dispatch(removeFromCart(id, selectedColor));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const getTotalPrice = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    };

    const handleProceedToCheckout = () => {
        navigate('/checkout');
    };

    const handleIncreaseQuantity = (item) => {
        dispatch(
            updateCartItemQuantity(
                item.id,
                item.selectedColor,
                item.quantity + 1
            )
        );
    };

    const handleDecreaseQuantity = (item) => {
        if (item.quantity > 1) {
            dispatch(
                updateCartItemQuantity(
                    item.id,
                    item.selectedColor,
                    item.quantity - 1
                )
            );
        } else {
            handleRemove(item.id, item.selectedColor);
        }
    };

    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div
                                key={`${item.id}-${item.selectedColor}`}
                                className="cart-item"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-details">
                                    <h4 className="cart-item-name">{item.name}</h4>
                                    <p className="cart-item-color">
                                        Color: {item.selectedColor}
                                    </p>
                                    <div className="quantity-control">
                                        <p className="cart-item-quantity">Quantity:</p>
                                        <div className="quantity-buttons">
                                            <button
                                                onClick={() => handleDecreaseQuantity(item)}
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => handleIncreaseQuantity(item)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <p className="cart-item-price">
                                        Price per item: ${item.price.toLocaleString()}
                                    </p>
                                    <p className="cart-item-total">
                                        Total: $
                                        {(item.price * item.quantity).toLocaleString()}
                                    </p>
                                    <Button
                                        className="remove-button"
                                        onClick={() =>
                                            handleRemove(item.id, item.selectedColor)
                                        }
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Cart Summary</h3>
                        <p>
                            Total Items:{' '}
                            {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                        </p>
                        <p>Total Price: ${getTotalPrice().toLocaleString()}</p>
                        <Button className="clear-cart-button" onClick={handleClearCart}>
                            Clear Cart
                        </Button>
                        <Button
                            className="checkout-button"
                            onClick={handleProceedToCheckout}
                        >
                            Proceed to Checkout
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
