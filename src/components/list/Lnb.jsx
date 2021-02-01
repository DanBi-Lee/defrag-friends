import React, { useEffect, useMemo, useState } from 'react';
import DataService from '../../service/data_service';
import lnbStyles from './Lnb.module.css';

function Lnb ({user}) {
  const [categoryList, setCategory] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const name = user.displayName;
  const dataService = useMemo(()=>new DataService(), []);
  const addCategory = () => {
    dataService.addCategory(user, '미분류').then(console.log);
  }

  useEffect(()=>{
    const getCategoryList = async () => {
      const list = [];
      const data = await dataService.getCategoryList(user);
      data.forEach(function(doc){
        list.push(doc.id);
      });
      return list;
    }
    getCategoryList().then((data)=>setCategory(()=>data));

    const getFriendList = async () => {
      const list = [];
      const data = await dataService.getFriendList(user);
      data.forEach(function(doc){
        list.push(doc.id);
      });
      return list;
    }
    getFriendList().then((data)=>setFriendList(()=>data));

  }, [dataService, user]);

  return (
    <nav className={lnbStyles.lnb}>
    <p className={lnbStyles.welcomeMessage}>{name}님, 환영합니다.</p>
    <button className={lnbStyles.btn}>
        <i className="fas fa-plus"></i> 새 친구 등록
    </button>
    <p>
      전체 친구 ({friendList.length}명)
    </p>
    <ul>
      {
        categoryList.map(category=><li key={category}>{category}</li>)
      }
    </ul>
    <button className={lnbStyles.btn} onClick={addCategory}>
    <i className="fas fa-plus"></i> 카테고리 추가
    </button>
</nav>
  );
}

export default Lnb;