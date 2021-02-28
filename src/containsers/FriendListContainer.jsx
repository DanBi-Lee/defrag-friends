import React, { useEffect, useMemo, useState } from 'react';
import FriendListBox from '../components/list/FriendListBox';
import Lnb from '../components/list/Lnb';
import DataService from '../service/data_service';

function FriendListContainer ({user, slideMenu}) {
    const [categoryList, setCategoryList] = useState([]);
    const [friendList, setFriendList] = useState([]);
    const [selectState, setSelectState] = useState({categoryId: '', categoryName: '', isSelect: false});
    const name = user.displayName;
    const dataService = useMemo(()=>new DataService(), []);
    const addCategory = (category) => {
        dataService.addCategory(user, category);
      }
    
    const removeCategory = (categoryId) => {
      dataService.removeCategory(user, categoryId);
    }

    const removeFriend = (friendId) => {
      dataService.removeFriend(user, friendId);
    }

    useEffect(()=>{
        const unsubscribeFriendList = dataService.getFriendList(user, (list)=>{
          const friendList = list.map(friend=>{
            return {
              ...friend.data(), id : friend.id
            }
          });
          setFriendList(()=>friendList);
        });

        const unsubscribeCategoryList = dataService.getCategoryList(user, (list)=>{
          const categoryList = list.map(category=>{
            return {
              ...category.data(), id : category.id
            }
          });
          setCategoryList(()=>categoryList);
        });
        
        return ()=>{
          unsubscribeFriendList();
          unsubscribeCategoryList();
        }
    }, [dataService, user]);

  return (
      <>
          <Lnb friendList={friendList} categoryList={categoryList} addCategory={addCategory} name={name} setSelectState={setSelectState} selectState={selectState} removeCategory={removeCategory} slideMenu={slideMenu} />
          <FriendListBox user={user}  friendList={friendList} selectState={selectState} removeFriend={removeFriend} /> 
      </>
  );
}

export default FriendListContainer;