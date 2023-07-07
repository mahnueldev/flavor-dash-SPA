import React, { useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUser} from '../features/auth/userInfoSlice';
import HeroSvg from '../assets/svg/hero.svg';
const Hero = () => {
  const dispatch = useDispatch();
  const {  user } = useSelector((state) => state.userInfo);
  const backgroundImageStyle = {
    backgroundRepeat: 'repeat-x',
    backgroundSize: 'contain',
    backgroundImage: `url(${HeroSvg})`,
    height: '20rem',
    width: '100vw',
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div >
      <Image src={HeroSvg} fluid style={backgroundImageStyle} className='bgc-green'/>
      <Container className='res-flex justify-content-between mt-5 w-50'>
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
      <Container className='res-flex justify-content-between align-items-center mt-5 '>
        <Container> 
        <h5 className='fw-bold'>First Name</h5>
        <div className=' fs-6 fw-bold  border rounded py-2 px-5 d-flex justify-content-start align-items-center'>
        <p>{user && user.firstName}</p>
        </div>
        </Container>
        <Container> 
        <h5 className='fw-bold'>Last Name</h5>
        <div className=' fs-6 fw-bold  border rounded py-2 px-5 d-flex justify-content-start align-items-center'>
        <p>{user && user.lastName}</p>
        </div>
        </Container>
        <Container> 
        <h5 className='fw-bold'>Host</h5>
        <div className=' fs-6 fw-bold  border rounded py-2 px-5 d-flex justify-content-start align-items-center'>
        {user && user.apiHost}
        </div>
        </Container>
       
      </Container>
    </div>
  );
};

export default Hero;
