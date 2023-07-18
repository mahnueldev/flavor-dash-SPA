import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../features/auth/authSlice';
import { Form, Container, Button, Alert, Spinner } from 'react-bootstrap';
import {  useNavigate, Link } from "react-router-dom";
import { removeAuthToken } from "../utils/AuthToken";

const RegisterFormLayout = () => {
  const dispatch = useDispatch();
  const { error, loading, success } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(credentials));
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => {
        dispatch({ type: 'auth/clearMsg' }); // Dispatch an action to clear the error
      }, 5000); // Set the duration for the timeout (e.g., 5000ms = 5 seconds)
    }
    if (success) {
      const handleLogin = async () => {
        await removeAuthToken(); // Await the removal of the token
        navigate('/login');
        window.location.reload();
      };
    
      handleLogin(); // Call the async function to initiate logout and navigation
    }
    return () => {
      clearTimeout(timeout); // Clear the timeout if the component unmounts or error changes
    };
  }, [dispatch, error, success, navigate]);
  

  return (
    <Container className='registerForm d-flex justify-content-center align-items-center vh-100 mb-5'>
      <Form id='form' onSubmit={handleSubmit}>
        <Form.Group controlId='firstname'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            name='firstName'
            value={credentials.firstName}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type='invalid'>
            Please enter your first name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='lastname'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            name='lastName'
            value={credentials.lastName}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type='invalid'>
            Please enter your last name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type='invalid'>
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type='invalid'>
            Please enter a password.
          </Form.Control.Feedback>
        </Form.Group>

        <Button
  variant="pri"
  type="submit"
  className="rounded-pill px-5 mt-4"
  disabled={loading}
  style={{ backgroundColor: loading ? '#66f01c' : null }}
>
  {loading ? (
    <>
      Sending { }
      <Spinner animation="border" size="sm" className="me-2" />
    </>
  ) : (
    'Send'
  )}
</Button>

{error && <Alert variant="danger" className="mt-3">{error}</Alert>}

        <p className='mt-5 mb-5'>
          Already have an account?{' '}
          <Link to='/login' className='text-btn-pri-in'>
            Login
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default RegisterFormLayout;
