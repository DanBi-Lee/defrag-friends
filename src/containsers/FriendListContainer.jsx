import React, { useEffect, useMemo, useState } from 'react';
import FriendListBox from '../components/list/FriendListBox';
import Lnb from '../components/list/Lnb';
import DataService from '../service/data_service';

function FriendListContainer ({user}) {
    const [categoryList, setCategory] = useState([]);
    const [friendList, setFriendList] = useState([]);
    const [selectState, setSelectState] = useState({categoryId: '', categoryName: '', isSelect: false});
    const name = user.displayName;
    const dataService = useMemo(()=>new DataService(), []);
    const addCategory = (category) => {
        dataService.addCategory(user, category);
      }
    
      const removeCategory = (categoryId) => {
        dataService.removeCategory(user, categoryId).then(()=>console.log('삭제 완료'));
      }

    useEffect(()=>{
        const getCategoryList = async () => {
          const list = [];
          const data = await dataService.getCategoryList(user);
          data.forEach(function(doc){
            list.push({...doc.data(), id : doc.id });
          });
          return list;
        }
        getCategoryList().then((data)=>setCategory(()=>data));
    
        const getFriendList = async () => {
          const list = [];
          const data = await dataService.getFriendList(user);
          data.forEach(function(doc){
            list.push({...doc.data(), id : doc.id });
          });
          return list;
        }
        getFriendList().then((data)=>setFriendList(()=>data));
    
    }, [dataService, user]);

  return (
      <>
          <Lnb friendList={friendList} categoryList={categoryList} addCategory={addCategory} name={name} setSelectState={setSelectState} selectState={selectState} removeCategory={removeCategory} />
          <FriendListBox user={user}  friendList={friendList} selectState={selectState} /> 
      </>
  );
}

export default FriendListContainer;