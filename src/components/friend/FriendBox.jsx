import React from 'react';
import Editor from './Editor';
import friendBoxStyles from './FriendBox.module.css';
import PreviewBox from './PreviewBox';

function FriendBox ({saveData}) {
  return (
    <section className={friendBoxStyles.friendBox}>
    <div className={friendBoxStyles.innerWrap}>
        <PreviewBox saveData={saveData} />
        <Editor />
    </div>
</section>
  );
}

export default FriendBox;