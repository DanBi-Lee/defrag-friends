import React from 'react';
import Editor from './Editor';
import friendBoxStyles from './FriendBox.module.css';
import PreviewBox from './PreviewBox';

function FriendBox ({saveData, friendInfo, setFriendInfo, setImgData, user}) {
  

  return (
    <section className={friendBoxStyles.friendBox}>
    <div className={friendBoxStyles.innerWrap}>
        <PreviewBox saveData={saveData} friendInfo={friendInfo} />
        <Editor setFriendInfo={setFriendInfo} friendInfo={friendInfo} setImgData={setImgData} user={user} />
    </div>
</section>
  );
}

export default FriendBox;