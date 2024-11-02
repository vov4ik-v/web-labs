import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/cartActions';
import Button from './Button';
import '../styles/Cart.css';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const handleRemove = (id, selectedColor) => {
        dispatch(removeFromCart(id, selectedColor));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
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
                            <div key={`${item.id}-${item.selectedColor}`} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h4 className="cart-item-name">{item.name}</h4>
                                    <p className="cart-item-color">Color: {item.selectedColor}</p>
                                    <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                                    <p className="cart-item-price">
                                        Price per item: ${item.price.toLocaleString()}
                                    </p>
                                    <p className="cart-item-total">
                                        Total: ${(item.price * item.quantity).toLocaleString()}
                                    </p>
                                    <Button
                                        className="remove-button"
                                        onClick={() => handleRemove(item.id, item.selectedColor)}
                                    >
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Cart Summary</h3>
                        <p>Total Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
                        <p>Total Price: ${getTotalPrice().toLocaleString()}</p>
                        <Button className="clear-cart-button" onClick={handleClearCart}>
                            Clear Cart
                        </Button>
                        <Button className="checkout-button">Proceed to Checkout</Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
