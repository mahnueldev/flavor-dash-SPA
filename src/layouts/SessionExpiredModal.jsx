import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const SessionExpiredModal = ({ showModal,  onRemoveTokenAndRedirect }) => {
  return (
    <Modal show={showModal} >
      <Modal.Header >
        <Modal.Title>Session Expired</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Your session has expired. Please re-aunthenticate to continue your user session.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onRemoveTokenAndRedirect}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SessionExpiredModal;
