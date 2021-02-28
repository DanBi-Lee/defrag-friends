import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import ListHeader from '../components/common/ListHeader';
import SubMainBox from '../components/templates/SubMainBox';
import FriendListContainer from '../containsers/FriendListContainer';
import SlideMenu from '../js/slideMenu';

function List ({setLoginModal, user}) {
  const history = useHistory();
  const slideBtn = useRef();
  const aside = useRef();

  useEffect(()=>{
    let slideMenu;
    const $slideBtn = {...slideBtn};
    const $aside = {...aside};
    
    if($slideBtn.current && $aside.current){
     slideMenu = new SlideMenu($slideBtn, $aside);
    }

    if(!user){
      history.push('/');
      setLoginModal(()=>true);
    }
    return ()=>{
      if($slideBtn.current && $aside.current){
        slideMenu.removeEvent();
       }
    }
  }, [setLoginModal, user, history]);

  if(!user){
    return null;
  }

  return (
    <>
        <ListHeader setLoginModal={setLoginModal} user={user} slideBtn={slideBtn} />
        <SubMainBox>
          <FriendListContainer user={user} slideMenu = {aside} />
        </SubMainBox>
    </>
  );
}

export default List;