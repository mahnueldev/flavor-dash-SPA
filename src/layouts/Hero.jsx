import { Container, Image } from 'react-bootstrap';
import HeroSvg from '../assets/svg/hero.svg';
const Hero = () => {
  const backgroundImageStyle = {
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'contain',
    backgroundImage: `url(${HeroSvg})`,
    height: '10rem',
    width: '100vw',
  };

  return (
    <div >
      <Image src={HeroSvg} fluid style={backgroundImageStyle} className='bgc-green'/>
      <Container className='d-flex justify-content-between mt-5 w-50'>
        <div>
        <h3 className='fw-bold'>Overview</h3>
        <p className='text-btn-pri fs-1 fw-bold'>0</p>
        </div>
        <div>
        <h3 className='fw-bold'>Stats</h3>
        <p className='text-btn-pri fs-1 fw-bold'>0</p>
        </div>
        <div>
        <h3 className='fw-bold'>Post</h3>
        <p className='text-btn-pri fs-1 fw-bold'>0</p>
        </div>
      </Container>
      <Container className='d-flex justify-content-between align-items-center mt-5 '>
        <Container> 
        <h5 className='fw-bold'>First Name</h5>
        <div className=' fs-6 fw-bold  border rounded py-2 px-5 d-flex justify-content-start align-items-center'>
        <p>First Name</p>
        </div>
        </Container>
        <Container> 
        <h5 className='fw-bold'>Last Name</h5>
        <div className=' fs-6 fw-bold  border rounded py-2 px-5 d-flex justify-content-start align-items-center'>
        <p>Last Name</p>
        </div>
        </Container>
        <Container> 
        <h5 className='fw-bold'>API Key</h5>
        <div className=' fs-6 fw-bold  border rounded py-2 px-5 d-flex justify-content-start align-items-center'>
        <p>873535y598292985u3928952</p>
        </div>
        </Container>
       
      </Container>
    </div>
  );
};

export default Hero;
