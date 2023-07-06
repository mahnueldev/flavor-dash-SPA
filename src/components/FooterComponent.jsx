import React from 'react'
import logo from '../assets/images/logo.png';
import { Container, Image } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <footer id="footer" className="footer-container d-flex justify-content-between align-items-center p-5 mt-5">
    <Container className="footer-content">
      <h5>API</h5>
      <p>flavor dash</p>
      <p>© 2023 Mahnuel. All Rights Reserved.</p>
    </Container>
    <div>
      <Image src={logo} alt="folder" className="footer-media" />
    </div>
  </footer>
  )
}

export default FooterComponent