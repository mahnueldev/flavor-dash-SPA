import React from 'react'
import { Form, Container, Button, Alert } from 'react-bootstrap';

const RegisterFormLayout = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic
      };
  return (
    <Container className="registerForm d-flex justify-content-center align-items-center vh-100 mb-5">
    <Form id="form" onSubmit={handleSubmit}>
      <Form.Group controlId="firstname">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="firstName" required />
        <Form.Control.Feedback type="invalid">
        Please enter your first name.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group controlId="lastname">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lastName" required />
        <Form.Control.Feedback type="invalid">
        Please enter your last name.
        </Form.Control.Feedback>
      </Form.Group>
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

      
        <p className="mt-5 mb-5">Already have an account? <a href="./login.html" className='text-btn-pri-in'>Login</a></p>
       
    </Form>
  </Container>
  )
}

export default RegisterFormLayout