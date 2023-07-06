import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../features/auth/authSlice';
import { Form, Container, Button, Alert, Spinner } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { error, loading, success } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { token } = useParams(); // Get the token from the URL

  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('New Password:', newPassword);
    dispatch(resetPassword({ token,  newPassword }));
  };

  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  useEffect(() => {
    let timeout;
    if (error || success) {
      timeout = setTimeout(() => {
        dispatch({ type: 'auth/clearMsg' }); // Dispatch an action to clear the error
      }, 5000); // Set the duration for the timeout (e.g., 5000ms = 5 seconds)
    }
    if (success) {
      const handleReset = async () => {
        navigate('/login');
      };

      handleReset(); // Call the async function to initiate logout and navigation
    }
    return () => {
      clearTimeout(timeout); // Clear the timeout if the component unmounts or error changes
    };
  }, [dispatch, error, success, navigate]);

  return (
    <Container className="loginForm d-flex justify-content-center align-items-center vh-100">
      <Form id="form" onSubmit={handleSubmit}>
        <p className="mb-5 text-pri">Enter your new password</p>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={newPassword}
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
        {success && <Alert variant="success" className="mt-3">Password changed successfully</Alert>}

        <div id="alerty-box"></div>
      </Form>
    </Container>
  );
};

export default ResetPassword;
