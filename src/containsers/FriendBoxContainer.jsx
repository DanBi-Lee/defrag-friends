import React from 'react';
import FriendBox from '../components/friend/FriendBox';

function FriendBoxContainer ({saveData, friendInfo, setFriendInfo, setImgData, user, isEditMode}) {
  return (
      <FriendBox saveData={saveData} friendInfo={friendInfo} setFriendInfo={setFriendInfo} setImgData={setImgData} user={user} isEditMode={isEditMode} />
  );
}

export default FriendBoxContainer;