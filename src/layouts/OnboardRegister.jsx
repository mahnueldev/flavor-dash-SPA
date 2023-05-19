import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import flavSvg from '../assets/svg/flav.svg';

const OnboardRegister = () => {
  return (
    <div className=' flex flx-col justify-content-center  bg-primary vw-100 vh-100'>
    <Container fluid className=" d-flex justify-content-start align-items-center ">
      <Row>
        <Col className="w-50 p-5">
          <img src={flavSvg} alt="folder" className="header-media invisi" />
        </Col>
      </Row>
    </Container>
    <Container fluid className="d-flex justify-content-center align-items-center w-50">
      <p className='text-white'>Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.</p>
    </Container>
    </div>
  )
}

export default OnboardRegister