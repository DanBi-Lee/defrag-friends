import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import FriendBox from '../components/friend/FriendBox';

function FriendBoxContainer ({saveData, friendInfo, setFriendInfo, setImgData, user}) {
    const location = useLocation();
    let isEditMode = useRef();

    useEffect(()=>{
        if(location.state){
            isEditMode.current = true;
            setFriendInfo(()=>{return {...location.state}});
        }else{
            isEditMode.current = false;
        }
    }, [location.state, setFriendInfo])



  return (
      <FriendBox saveData={saveData} friendInfo={friendInfo} setFriendInfo={setFriendInfo} setImgData={setImgData} user={user} isEditMode={isEditMode.current} />
  );
}

export default FriendBoxContainer;