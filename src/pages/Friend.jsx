import React, { useCallback, useState } from 'react';
import SubHeader from '../components/common/SubHeader';
import FriendBox from '../components/friend/FriendBox';
import Loading from '../components/loading/Loading';
import LoadingSuccess from '../components/loading/LoadingSuccess';
import SubMainBox from '../components/templates/SubMainBox';
import DataService from '../service/data_service';
import ImageService from '../service/image_service';

function Friend ({setLoginModal, user}) {
  const dataService = new DataService();
  const imageService = new ImageService();
  const [imgData, setImgData] = useState({});
  const [loading, setLoading] = useState('ready');

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

  const uploadImg = () => {
    return imageService.uploadImg(imgData).then((response)=> response.text()).then((data)=>JSON.parse(data).url);
  }
  const saveFriend = (friendInfo) => {
    return dataService.addFriend(user, friendInfo);
  };
  const setImg = async (thumb) => {
    return {...friendInfo, thumb : thumb || ''};
  }

  const uploadImgThenSaveFriend = async () => {
    console.log('업로드시작')
    setLoading(()=>'loading');
    const thumb = await uploadImg();
    const copy_info = await setImg(thumb);
    await saveFriend(copy_info);
    console.log('업로드 끝');
    setLoading(()=>'success');
  }

  const handlingSaveBtn = () =>{
    if(!user){
      alert('로그인 후 이용 가능');
      return;
    }
    uploadImgThenSaveFriend();
  }

const loadingSpinner = useCallback(() => {
    if(loading === 'loading'){
      return <Loading>로딩중</Loading>
    }else if(loading === 'success'){
      return <LoadingSuccess setLoading={setLoading}>성공!</LoadingSuccess>
    }
  }, [loading]);

  return (
    <>
        <SubHeader setLoginModal={setLoginModal} user={user} />
        <SubMainBox>
            <FriendBox saveData={handlingSaveBtn} friendInfo={friendInfo} setFriendInfo={setFriendInfo} setImgData={setImgData} user={user}  />
        </SubMainBox>
        {loadingSpinner()}
    </>
  );
}

export default Friend;