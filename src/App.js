import '../src/css/styles.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Settings, Login, Register, ResetPassword, ForgotPassword } from './pages/index';
import RequireAuth from './utils/RequireAuth';
// import PersistLogin from './utils/PersistLogin';
import { Layout } from './layouts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/reset-password/:token' element={<ResetPassword />} />
          <Route exact path='/forgot-password' element={<ForgotPassword />} />
          {/* <Route element={<PersistLogin />}> */}
            <Route path='' element={<RequireAuth />}>
              <Route path='/' element={<Home />} />
              <Route path='/settings' element={<Settings />} />
            </Route>
          </Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
