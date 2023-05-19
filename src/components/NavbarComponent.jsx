import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas, Dropdown,DropdownButton } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaUser} from 'react-icons/fa';
import { VscClose } from 'react-icons/vsc';

const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand='lg' className='d-flex justify-content-center' id='navbar'>
      <Container fluid className='nav-boundary'>
        <Navbar.Brand href='index.html'>
          <img
            src={logo}
            alt='Logo'
            width='30'
            height='30'
            className='d-inline-block align-text-top'
          />{' '}
          Flavor Dash
        </Navbar.Brand>
        <Navbar.Toggle
          className='border-0 btn text-white '
          type='button'
          variant='secondary'
          onClick={handleShow}
        >
          <RxHamburgerMenu id='menu-icon' />
        </Navbar.Toggle>
        <Offcanvas
          className='text-white'
          placement='end'
          id='navbar-collapse'
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header>
            <Offcanvas.Title id='offcanvasNavbarLabel'>
              Offcanvas
            </Offcanvas.Title>
            <Navbar.Toggle
              className='border-0 btn text-white'
              type='button'
              variant='secondary'
              onClick={handleClose}
            >
              <VscClose id='menu-icon' />
            </Navbar.Toggle>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <Nav className='ms-auto mb-2 mb-lg-0 me-5'>
              <Nav.Item className='me-4'>
                <Nav.Link
                  href='introduction.html'
                  className='active text-white'
                >
                  Documentation
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='d-lg-none'>
                <Nav.Link
                  href='https://github.com/mahnueldev/flavor-dash'
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button variant='sec' className='rounded-pill btn-sec'>
                    Github
                  </Button>
                </Nav.Link>
              </Nav.Item>
          
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
        <Nav className='ms-auto mb-2 mb-lg-0 me-5 d-none d-lg-flex d-flex justify-content-between align-items-center'>
          <Nav.Item className='me-4'>
            <Nav.Link href='introduction.html' className='active text-white'>
              Documentation
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href='https://github.com/mahnueldev/flavor-dash'
              target='_blank'
              rel='noreferrer'
              className='me-4'
            >
              <Button variant='sec' className='rounded-pill btn-sec'>
                Github
              </Button>
            </Nav.Link>
          </Nav.Item>
          <Dropdown>
          <Dropdown.Toggle variant="light" title="Dropdown" className=''>
            <FaUser className="menu-icon"/>
          </Dropdown.Toggle>
          <Dropdown.Menu align="end" className="dropdown-menu-lg-end bgc-black ">    
      <Dropdown.Item href="#">Hello</Dropdown.Item>
      <Dropdown.Item href="#">Settings</Dropdown.Item>
      <Dropdown.Item href="#">Logout</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
   
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
