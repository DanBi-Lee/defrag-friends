import React, { useEffect, useMemo, useState } from 'react';
import FriendListBox from '../components/list/FriendListBox';
import Lnb from '../components/list/Lnb';
import DataService from '../service/data_service';

function FriendListContainer ({user}) {
    const [categoryList, setCategory] = useState([]);
    const [friendList, setFriendList] = useState([]);
    const name = user.displayName;
    const dataService = useMemo(()=>new DataService(), []);
    const addCategory = (category) => {
        dataService.addCategory(user, category);
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
            list.push({...doc.data(), id : doc.id });
          });
          return list;
        }
        getFriendList().then((data)=>setFriendList(()=>data));
    
    }, [dataService, user]);

  return (
      <>
          <Lnb friendList={friendList} categoryList={categoryList} addCategory={addCategory} name={name} />
          <FriendListBox user={user}  friendList={friendList} /> 
      </>
  );
}

export default FriendListContainer;