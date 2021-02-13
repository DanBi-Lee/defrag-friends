import React, { useCallback, useState } from 'react';
import SubHeader from '../components/common/SubHeader';
import Loading from '../components/loading/Loading';
import LoadingSuccess from '../components/loading/LoadingSuccess';
import SubMainBox from '../components/templates/SubMainBox';
import FriendBoxContainer from '../containsers/FriendBoxContainer';
import DataService from '../service/data_service';
import ImageService from '../service/image_service';

function Friend ({setLoginModal, user}) {
  const dataService = new DataService();
  const imageService = new ImageService();
  const [imgData, setImgData] = useState(false);
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
    kakaotalk : '', 
    twitter: '', 
    facebook: '',
    memo: `메모`,
    birthday: '1900-01-01'
  }
  const [friendInfo, setFriendInfo] = useState(initFriendState);

  const uploadImg = () => {
    if(imgData === false){
      return friendInfo.thumb;
    }
    return imageService.uploadImg(imgData).then((response)=> response.text()).then((data)=>JSON.parse(data).url);
  }
  const setImg = async (friendInfo, thumb) => {
    return {...friendInfo, thumb : thumb || ''};
  }

  const SaveFriend = async () => {
    setLoading(()=>'loading');
    const thumb = await uploadImg();
    const copy_info = await setImg(friendInfo, thumb);
    await dataService.addFriend(user, copy_info);
    setLoading(()=>'success');
  }

  const UpdateFriend = async () => {
    setLoading(()=>'loading');
    const thumb = await uploadImg();
    const copy_info = await setImg(friendInfo, thumb);
    await dataService.updateFriend(user, copy_info);
    setLoading(()=>'success');
  }

  const handlingSaveBtn = (isEditMode) =>{
    if(!user){
      alert('로그인 후 이용 가능');
      return;
    }

    isEditMode ? UpdateFriend() : SaveFriend() ;
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
            <FriendBoxContainer saveData={handlingSaveBtn} friendInfo={friendInfo} setFriendInfo={setFriendInfo} setImgData={setImgData} user={user}  />
        </SubMainBox>
        {loadingSpinner()}
    </>
  );
}

export default Friend;