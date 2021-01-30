import React from 'react';
import MainHeader from '../components/common/MainHeader';

function MainHeaderContainer ({setLoginModal, user}) {
  return (
      <MainHeader setLoginModal={setLoginModal} user={user} />
  );
}

export default MainHeaderContainer;