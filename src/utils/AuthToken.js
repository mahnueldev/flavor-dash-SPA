import axios from 'axios';
import Cookies from 'js-cookie';

const setAuthToken = (accessToken) => {
  if (accessToken && !accessToken.expired) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    Cookies.set('jwtCookie', JSON.stringify(accessToken)); // Set the token in a cookie
  } else {
    delete axios.defaults.headers.common['Authorization'];
    Cookies.remove('jwtCookie'); // Remove the token cookie
  }
};

const getAuthToken = () => {
  const accessToken = Cookies.get('jwtCookie');
  if (accessToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  }
  return accessToken ? JSON.parse(accessToken) : null;
};

const removeAuthToken = () => {
  delete axios.defaults.headers.common['Authorization'];
  Cookies.remove('jwtCookie'); 
};


export { setAuthToken, getAuthToken, removeAuthToken };
