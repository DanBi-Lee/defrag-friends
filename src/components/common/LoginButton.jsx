import React from 'react';

function LoginButton ({setLoginModal, user}) {
    const openLoginModal = () => {
        setLoginModal(()=>true);
    }
  return (
      <>
          {
                user ? 
                <button className="btn-logout">
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