import React from 'react';
import SubHeader from '../components/common/SubHeader';
import FriendListBox from '../components/list/FriendListBox';
import Lnb from '../components/list/Lnb';
import SubMainBox from '../components/templates/SubMainBox';

function List () {
  return (
    <>
        <SubHeader />
            <SubMainBox>
            <Lnb />
            <FriendListBox />
        </SubMainBox>
    </>
  );
}

export default List;