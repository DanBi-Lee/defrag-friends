import React, { useEffect, useMemo, useState } from 'react';
import FriendListBox from '../components/list/FriendListBox';
import Lnb from '../components/list/Lnb';
import DataService from '../service/data_service';

function FriendListContainer ({user}) {
    const [categoryList, setCategoryList] = useState([]);
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

    const removeFriend = (friendId) => {
      dataService.removeFriend(user, friendId).then(()=>console.log('삭제 완료!'));
    }

    useEffect(()=>{
        const getFriendList = async () => {
          const list = [];
          const data = await dataService.getFriendList(user);
          data.forEach(function(doc){
            list.push({...doc.data(), id : doc.id });
          });
          return list;
        }
        getFriendList().then((data)=>setFriendList(()=>data));

        const unsubscribeCategoryList = dataService.getCategoryList(user, (list)=>{
          const categoryList = list.map(category=>{
            return {
              ...category.data(), id : category.id
            }
          });
          setCategoryList(()=>categoryList);
        });
        
        return unsubscribeCategoryList;
    }, [dataService, user]);

  return (
      <>
          <Lnb friendList={friendList} categoryList={categoryList} addCategory={addCategory} name={name} setSelectState={setSelectState} selectState={selectState} removeCategory={removeCategory} />
          <FriendListBox user={user}  friendList={friendList} selectState={selectState} removeFriend={removeFriend} /> 
      </>
  );
}

export default FriendListContainer;