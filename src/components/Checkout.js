import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartActions';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .max(15, 'First name must be 15 characters or less')
            .matches(/^[A-Za-z]+$/, 'First name can only contain letters')
            .required('First name is required'),

        lastName: Yup.string()
            .max(20, 'Last name must be 20 characters or less')
            .matches(/^[A-Za-z]+$/, 'Last name can only contain letters')
            .required('Last name is required'),

        email: Yup.string()
            .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Email must be in the format text@domain.extension')
            .required('Email is required'),


        phone: Yup.string()
            .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
            .required('Phone number is required'),

        address: Yup.string()
            .min(10, 'Address must be at least 10 characters')
            .required('Address is required'),

        zipCode: Yup.string()
            .matches(/^\d{5}(-\d{4})?$/, 'ZIP code must be 5 digits or 5+4 format')
            .required('ZIP code is required'),
    });

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    address: '',
                    zipCode: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    dispatch(clearCart());
                    navigate('/success');
                }}
            >
                {() => (
                    <Form className="checkout-form">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" />
                            <ErrorMessage name="firstName" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" />
                            <ErrorMessage name="lastName" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <Field name="phone" type="tel" />
                            <ErrorMessage name="phone" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <Field name="address" type="text" />
                            <ErrorMessage name="address" component="div" className="error-message" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="zipCode">ZIP Code</label>
                            <Field name="zipCode" type="text" />
                            <ErrorMessage name="zipCode" component="div" className="error-message" />
                        </div>

                        <button type="submit" className="submit-button">
                            Place Order
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Checkout;
