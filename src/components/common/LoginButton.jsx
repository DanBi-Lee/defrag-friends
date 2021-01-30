import React from 'react';
import AuthService from '../../service/auth_service';

function LoginButton ({setLoginModal, user}) {
    const authService = new AuthService()
    const logout = () => {
        authService.logout();
    }
    const openLoginModal = () => {
        setLoginModal(()=>true);
    }
  return (
      <>
          {
                user ? 
                <button className="btn-logout" onClick={logout}>
                    로그아웃
                </button>
                :
                <button className="btn-login" onClick={openLoginModal}>
                    로그인
                </button> 
            }
      </>
  );
}

export default LoginButton;