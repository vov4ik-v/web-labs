import React from 'react';
import '../styles/ErrorMessage.css';

const ErrorMessage = ({ message }) => {
    return <div className="error-message">{message}</div>;
};

export default ErrorMessage;
