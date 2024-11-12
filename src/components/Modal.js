import React from 'react';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, onGoToCart }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Car added to cart successfully!</h2>
                <div className="modal-actions">
                    <button onClick={onClose} className="close-button">Close</button>
                    <button onClick={onGoToCart} className="go-to-cart-button">Go to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;