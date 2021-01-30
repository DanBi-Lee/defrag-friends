import React from 'react';
import SubHeader from '../components/common/SubHeader';
import FriendBox from '../components/friend/FriendBox';
import SubMainBox from '../components/templates/SubMainBox';
import dataService from '../service/data_service';

function Friend ({setLoginModal, user}) {
    const saveData = () => {
      dataService.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  };

  return (
    <>
        <SubHeader setLoginModal={setLoginModal} user={user} />
        <SubMainBox>
            <FriendBox saveData={saveData} />
        </SubMainBox>
    </>
  );
}

export default Friend;