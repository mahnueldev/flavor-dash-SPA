import React from 'react'
import { Form, Container, Button, Alert } from 'react-bootstrap';

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
      };
    
  return (
   
    <Container className="loginForm d-flex justify-content-center align-items-center vh-100">
    <Form id="form" onSubmit={handleSubmit}>
      <Form.Group controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" required />
        <Form.Control.Feedback type="invalid">
          Please enter a valid email address.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" required />
        <Form.Control.Feedback type="invalid">
          Please enter a password.
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="pri" type="submit" className="rounded-pill px-5 mt-4">
        Send
        <span className="" role="status" aria-hidden="true"></span>
      </Button>

      <div id="alerty-box"></div>

      <a href="./reset-password.html">
        <p className="mt-5">Forgot password?</p>
      </a>
    </Form>
  </Container>

  )
}

export default Login