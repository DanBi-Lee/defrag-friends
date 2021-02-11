import React from 'react';
import Card from '../friend/Card';
import FriendCardContainerStyles from './FriendCardContainer.module.css';

function FriendCardContainer ({friend, removeFriend}) {
  return (
      <li className={FriendCardContainerStyles.list}>
        <div className={FriendCardContainerStyles.cardWrap}>
          <div className={FriendCardContainerStyles.scale}>
            <Card friendInfo={friend} />
          </div>
          <button className={FriendCardContainerStyles.deleteBtn} onClick={()=>removeFriend(friend.id)}>삭제</button>
        </div>
      </li>
  );
}

export default FriendCardContainer;