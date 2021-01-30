import React from 'react';
import FriendListStyles from './FriendList.module.css';

function FriendList ({title, number}) {
  return (
    <section className={FriendListStyles.friendList}>
    <h2>{`${title} (${number}명)`}</h2>
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</section>
  );
}

export default FriendList;