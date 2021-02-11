import React from 'react';
import FriendCardContainer from './FriendCardContainer';
import FriendListStyles from './FriendList.module.css';

function FriendList ({title, number, friendList, removeFriend}) {
  return (
    <section className={FriendListStyles.friendList}>
    <h2>{`${title} (${number}명)`}</h2>
    <ul>
      {
        friendList === undefined ? 
          <div>로딩</div> :
          friendList.map(friend => <FriendCardContainer key={friend.id} friend={friend} removeFriend={removeFriend} />)
      }
    </ul>
</section>
  );
}

export default FriendList;