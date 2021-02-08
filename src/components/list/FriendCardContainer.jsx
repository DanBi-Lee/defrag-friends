import React from 'react';
import Card from '../friend/Card';
import FriendCardContainerStyles from './FriendCardContainer.module.css';

function FriendCardContainer ({friend}) {
  return (
      <li className={FriendCardContainerStyles.cardWrap}>
          <div className={FriendCardContainerStyles.scale}>
            <Card friendInfo={friend} />
          </div>
      </li>
  );
}

export default FriendCardContainer;