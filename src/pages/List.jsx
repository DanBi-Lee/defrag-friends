import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SubHeader from '../components/common/SubHeader';
import SubMainBox from '../components/templates/SubMainBox';
import FriendListContainer from '../containsers/FriendListContainer';

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
          <FriendListContainer user={user} />
        </SubMainBox>
    </>
  );
}

export default List;