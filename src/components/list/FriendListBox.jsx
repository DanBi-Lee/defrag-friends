import React, { useCallback, useEffect, useState } from 'react';
import FriendList from './FriendList';
import FriendListBoxStyles from './FriendListBox.module.css';

function FriendListBox ({friendList, selectState, removeFriend}) {
  const [displayList, setDisplayList] = useState([]);
  const categoryFilter = useCallback((selectState) => {
    if(!selectState.isSelect){
      return friendList;
    }
    return friendList.filter(friend=> friend.category === selectState.categoryId);
  }, [friendList]);

  useEffect(()=>{
    setDisplayList(categoryFilter(selectState));
  }, [categoryFilter, selectState, setDisplayList, friendList]);

  return (
    <section className={FriendListBoxStyles.friendListBox}>
        <h1 className="hidden">친구 리스트</h1>
            {/* <FriendList title="이번달이 생일인 친구" number={5} /> */}
            <FriendList title={selectState.categoryName || "전체 친구"} number={displayList.length} friendList={displayList} removeFriend={removeFriend} />
    </section>
  );
}

export default FriendListBox;