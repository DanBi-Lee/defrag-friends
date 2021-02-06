import React, { useState } from 'react';
import Editor from './Editor';
import friendBoxStyles from './FriendBox.module.css';
import PreviewBox from './PreviewBox';

function FriendBox ({saveData}) {
  const initFriendState = {
    thumb: '',
    name : '이름',
    nickname : '닉네임',
    category: '미분류',
    tel : '전화번호',
    email: '이메일',
    stie : '블로그, 웹사이트',
    instagram : '', 
    kakaoTalk : '', 
    twitter: '', 
    facebook: '',
    memo: `메모`,
    birthday: '1900-01-01'
  }
  const [friendInfo, setFriendInfo] = useState(initFriendState);
  console.log(friendInfo);

  return (
    <section className={friendBoxStyles.friendBox}>
    <div className={friendBoxStyles.innerWrap}>
        <PreviewBox saveData={saveData} friendInfo={friendInfo} />
        <Editor setFriendInfo={setFriendInfo} friendInfo={friendInfo} />
    </div>
</section>
  );
}

export default FriendBox;