import React from 'react';
import Editor from './Editor';
import friendBoxStyles from './FriendBox.module.css';
import PreviewBox from './PreviewBox';

function FriendBox ({saveData, friendInfo, setFriendInfo, setImgData}) {
  

  return (
    <section className={friendBoxStyles.friendBox}>
    <div className={friendBoxStyles.innerWrap}>
        <PreviewBox saveData={saveData} friendInfo={friendInfo} />
        <Editor setFriendInfo={setFriendInfo} friendInfo={friendInfo} setImgData={setImgData} />
    </div>
</section>
  );
}

export default FriendBox;