import React, { useState, useEffect } from 'react';
import { Form, Container, Button, Alert, Spinner } from 'react-bootstrap';
import {  useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const { error, loading, success } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
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
      navigate('/');
    }
    return () => {
      clearTimeout(timeout); // Clear the timeout if the component unmounts or error changes
    };
  }, [dispatch, error, success, navigate]);

  return (
    <Container className="loginForm d-flex justify-content-center align-items-center vh-100">
      <Form id="form" onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
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

        <Link to="/forgot-password">
          <p className="mt-5">Forgot password?</p>
        </Link>
      </Form>
    </Container>
  );
};

export default Login;
