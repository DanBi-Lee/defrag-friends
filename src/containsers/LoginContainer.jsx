import React from 'react';
import Login from '../components/Login';
import AuthService from '../service/auth_service';

function LoginContainer () {
  const authservice = new AuthService();

  return (
      <Login authservice={authservice} />
  );
}

export default LoginContainer;