import React from 'react';
import SubHeader from '../components/common/SubHeader';
import FriendBox from '../components/friend/FriendBox';
import SubMainBox from '../components/templates/SubMainBox';
import DataService from '../service/data_service';

function Friend ({setLoginModal, user}) {
  const dataService = new DataService();

    const saveData = () => {
      if(!user){
        alert('로그인 후 이용 가능');
        return;
      }

      const friend = {
        name: 'test'
      };

      dataService.addFriend(user, friend).then(console.log);
  };

  return (
    <>
        <SubHeader setLoginModal={setLoginModal} user={user} />
        <SubMainBox>
            <FriendBox saveData={saveData} />
        </SubMainBox>
    </>
  );
}

export default Friend;