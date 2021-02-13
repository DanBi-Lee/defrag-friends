import React from 'react';
import Editor from './Editor';
import friendBoxStyles from './FriendBox.module.css';
import PreviewBox from './PreviewBox';

function FriendBox ({saveData, friendInfo, setFriendInfo, setImgData, user, isEditMode}) {
  return (
    <section className={friendBoxStyles.friendBox}>
    <div className={friendBoxStyles.innerWrap}>
        <PreviewBox saveData={saveData} friendInfo={friendInfo} isEditMode={isEditMode} />
        <Editor setFriendInfo={setFriendInfo} friendInfo={friendInfo} setImgData={setImgData} user={user} />
    </div>
</section>
  );
}

export default FriendBox;