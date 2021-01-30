import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SubHeader from '../components/common/SubHeader';
import FriendListBox from '../components/list/FriendListBox';
import Lnb from '../components/list/Lnb';
import SubMainBox from '../components/templates/SubMainBox';

function List ({setLoginModal, user}) {
  const history = useHistory();

  useEffect(()=>{
    if(!user){
      history.push('/');
      setLoginModal(()=>true);
    }
  }, [setLoginModal, user, history]);

  if(!user){
    return null;
  }

  return (
    <>
        <SubHeader setLoginModal={setLoginModal} user={user} />
        <SubMainBox>
          <Lnb user={user}  />
          <FriendListBox user={user}  />
        </SubMainBox>
    </>
  );
}

export default List;