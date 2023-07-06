import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../features/auth/userInfoSlice';
import { clearUser } from '../features/auth/authSlice';
import { removeAuthToken, getAuthToken, setAuthToken } from '../utils/AuthToken';
import { SessionExpiredModal } from '../layouts';
import { refresh } from '../features/auth/refreshSlice';

const RequireAuth = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserAuth = async () => {
      try {
        const accessToken = getAuthToken(); // Retrieve the token from cookies
        if (!accessToken) {
          const response = await dispatch(refresh()).unwrap();
          const newAccessToken = response.data.accessToken;
          setAuthToken(newAccessToken); // Update the access token in cookies
          await dispatch(getUser()).unwrap();
        } else {
          await dispatch(getUser()).unwrap();
        }
      } catch (error) {
        dispatch(clearUser());
        setShowModal(true);
      }
    };

    checkUserAuth();
  }, [dispatch]);

  const onRemoveTokenAndRedirect = () => {
    removeAuthToken();
    setShowModal(false);
    navigate('/login', { replace: true, state: { from: location } });
  };

  // User is logged in, render the child components
  return (
    <>
      <SessionExpiredModal
        showModal={showModal}
        onRemoveTokenAndRedirect={onRemoveTokenAndRedirect}
      />
      <Outlet />
    </>
  );
};

export default RequireAuth;
