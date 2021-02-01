import React from 'react';
import { useHistory } from 'react-router-dom';
import MemberModalBox from '../components/MemberModalBox';

function ModalContainer ({setLoginModal, authservice}) {
  const history = useHistory();
  const closeModal = () => {
    setLoginModal(()=>false);
  }

  return (
      <MemberModalBox authservice={authservice} closeModal={closeModal} history={history} />
  );
}

export default ModalContainer;