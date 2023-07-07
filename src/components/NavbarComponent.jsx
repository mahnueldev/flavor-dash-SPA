import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas, Dropdown } from 'react-bootstrap';
import logo from '../assets/images/logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaUser} from 'react-icons/fa';
import { VscClose } from 'react-icons/vsc';
import { documentation, github } from '../assets/data/links';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout} from '../features/auth/userInfoSlice';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const {  user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    // Additional logout actions or navigation can be performed here
  };

  return (
    <Navbar expand='lg' className='d-flex justify-content-center ' id='navbar' fixed='top'>
      <Container fluid className='nav-boundary'>
        <Navbar.Brand as={Link} to="/">
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
              Flavor Dash
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
          <div >Hello {user && user.firstName}!</div>
            <Nav className='ms-auto mb-2 mb-lg-0 me-5'>
              <Nav.Item className='me-4'>
                <Nav.Link
                  href={documentation}
                  className='active text-white'
                >
                  Documentation
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className='d-lg-none'>
                <Nav.Link
                  href={github}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Button variant='sec' className='rounded-pill btn-sec'>
                    Github
                  </Button>
                </Nav.Link>
              </Nav.Item>
                
      
      <Nav.Link as={Link} to="/settings">
  Settings
</Nav.Link>
      <Nav.Link  onClick={handleLogout}>Logout</Nav.Link>
   
          
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
        <Nav className='ms-auto mb-2 mb-lg-0 me-5 d-none d-lg-flex d-flex justify-content-between align-items-center'>
          <Nav.Item className='me-4'>
            <Nav.Link href={documentation} className='active text-white'>
              Documentation
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href={github}
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
      <Dropdown.Item >Hello {user && user.firstName}!</Dropdown.Item>
      <Dropdown.Item as={Link} to="/settings">
  Settings
</Dropdown.Item>
      <Dropdown.Item  onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
   
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
