import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import ElementSetting from '../../js/automaticElementScaling';
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

  const $parent = useRef();
  const $children = useRef();

  useEffect(()=>{
    const elementSetting = new ElementSetting($parent , $children);
    elementSetting.setScale($parent);

    const setScale = ()=>{
      elementSetting.setScale($parent);
    }
    
    window.addEventListener('resize', setScale);

    return ()=>{
      window.removeEventListener('resize', setScale);
    }
  },[]);

  return (
      <li className={FriendCardContainerStyles.list}>
        <div className={FriendCardContainerStyles.cardWrap} ref={$parent}>
          <div className={FriendCardContainerStyles.center}>
            <div className={FriendCardContainerStyles.scale} ref={$children}>
              <Card friendInfo={friend} />
            </div>
          </div>
          <div className={FriendCardContainerStyles.buttonBox}>
            <button className={FriendCardContainerStyles.edit} onClick={goToEditPage} title="수정">
              <i className="fas fa-edit"></i>
              <span className="hidden">수정</span>
            </button>
            <button className={FriendCardContainerStyles.delete}  onClick={()=>removeFriend(friend.id)} title="삭제">
              <i className="fas fa-trash-alt"></i>
              <span className="hidden">삭제</span>
            </button>
          </div>
        </div>
      </li>
  );
}

export default FriendCardContainer;