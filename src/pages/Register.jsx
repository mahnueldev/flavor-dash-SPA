import React from 'react'
import { RegisterFormLayout, OnboardRegister  } from '../layouts';


const Register = () => {
   
  return (
    <div className='res-flex justify-content-start gap-5 align-items-center vh-100'>
      <OnboardRegister/>
      <RegisterFormLayout/>
    </div>
  )
}

export default Register