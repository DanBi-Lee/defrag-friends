import React from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../components/Login';

function LoginContainer ({setLoginModal, authservice}) {
  const history = useHistory();
  const closeModal = () => {
    setLoginModal(()=>false);
  }

  return (
      <Login authservice={authservice} closeModal={closeModal} history={history} />
  );
}

export default LoginContainer;