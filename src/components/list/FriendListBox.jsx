import React from 'react';
import FriendList from './FriendList';
import FriendListBoxStyles from './FriendListBox.module.css';

function FriendListBox ({friendList}) {
  return (
    <section className={FriendListBoxStyles.friendListBox}>
        <h1 className="hidden">친구 리스트</h1>
            <FriendList title="이번달이 생일인 친구" number={5} />
            <FriendList title="전체 친구" number={friendList.length} friendList={friendList} />
    </section>
  );
}

export default FriendListBox;