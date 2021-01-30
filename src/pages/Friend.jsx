import React from 'react';
import SubHeader from '../components/common/SubHeader';
import FriendBox from '../components/friend/FriendBox';
import SubMainBox from '../components/templates/SubMainBox';


function Friend () {
  return (
    <>
        <SubHeader />
        <SubMainBox>
            <FriendBox />
        </SubMainBox>
    </>
  );
}

export default Friend;