import '../src/css/styles.min.css';
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from './features/auth/authSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, Register, ResetPassword} from './pages/index';
// import {  } from './layouts/index';


function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(login());
  // }, [dispatch]);

  // const user = useSelector((state) => state.auth.user);

  return (
   
    <BrowserRouter>
      <Routes>
      <Route path='/' element={ <Home /> } />
      {/* <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} /> */}
        {/* <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} /> */}
      {/* <Route exact path='/dashboard' element={ <Dashboard /> } /> */}
    
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
