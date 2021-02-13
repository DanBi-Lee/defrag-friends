import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../friend/Card';
import FriendCardContainerStyles from './FriendCardContainer.module.css';

function FriendCardContainer ({friend, removeFriend}) {
  const history = useHistory();
  const goToEditPage = () => {
    history.push({
      pathname : `/friend`,
      state : {...friend}
    });
  }

  return (
      <li className={FriendCardContainerStyles.list}>
        <div className={FriendCardContainerStyles.cardWrap}>
          <div className={FriendCardContainerStyles.scale}>
            <Card friendInfo={friend} />
          </div>
          <div className={FriendCardContainerStyles.buttonBox}>
            <button onClick={goToEditPage}>수정</button>
            <button onClick={()=>removeFriend(friend.id)}>삭제</button>
          </div>
        </div>
      </li>
  );
}

export default FriendCardContainer;