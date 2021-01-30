import React from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../components/Login';
import AuthService from '../service/auth_service';

function LoginContainer ({setLoginModal}) {
  const history = useHistory();
  const authservice = new AuthService();
  const closeModal = () => {
    setLoginModal(()=>false);
  }

  return (
      <Login authservice={authservice} closeModal={closeModal} history={history} />
  );
}

export default LoginContainer;