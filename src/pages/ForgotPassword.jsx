import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../features/auth/authSlice';
import { Form, Container, Button, Alert, Spinner } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { error, loading, success } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(forgotPassword(credentials));
    
    // Handle form submission logic
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    let timeout;
    if (error || success) {
      timeout = setTimeout(() => {
        dispatch({ type: 'auth/clearMsg' }); 
      }, 5000); 
    }
    
    return () => {
      clearTimeout(timeout); 
    };
  }, [dispatch, error, success,  navigate, credentials.email]);
  
  return (
    <Container className='loginForm d-flex justify-content-center align-items-center vh-100'>
      <Form id='form' onSubmit={handleSubmit}>
        <p className='mb-5 text-pri'>Enter your email</p>
        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' name='email'
          value={credentials.email} 
          onChange={handleChange} required />
          <Form.Control.Feedback type='invalid'>
            Please enter a valid email address.
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
        {success && <Alert variant="success" className="mt-3">We sent you an email</Alert>}

        <div id='alerty-box'></div>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
