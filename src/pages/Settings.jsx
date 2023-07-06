import React from 'react';
import { NavbarComponent } from '../components';
import { Container, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../features/auth/userInfoSlice';

const Settings = () => {
  const dispatch = useDispatch();
  
  const { error} = useSelector((state) => state.userInfo);

  const handleDeleteAccount = () => {
    // Dispatch the action to delete the user account
    dispatch(deleteUser());
  };

  return (
    <div>
      <NavbarComponent />
      <div className='d-flex mt-5'></div>
      <Container className='d-flex justify-content-between mt-5 w-50'>
        <div>
          <h3 className='fw-bold'>Delete Account</h3>
        </div>
        <Button variant='pri' className='rounded-pill btn-pri' onClick={handleDeleteAccount}>
          Delete
        </Button>
        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
      </Container>
    </div>
  );
};

export default Settings;
