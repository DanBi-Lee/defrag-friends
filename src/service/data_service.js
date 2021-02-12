import firebaseApp from "./firebase";
import "firebase/firestore";

const data = firebaseApp.firestore();

class DataService {
  addFriend(user, friend) {
    console.log(friend);
    return data
      .collection("users")
      .doc(user.uid)
      .collection("friendList")
      .add(friend);
  }

  addCategory(user, category) {
    return data
      .collection("users")
      .doc(user.uid)
      .collection("categoryList")
      .add(category);
  }

  getCategoryList(user, callback) {
    return data
      .collection("users")
      .doc(user.uid)
      .collection("categoryList")
      .onSnapshot((data) => {
        callback(data.docs);
      });
  }

  getFriendList(user, callback) {
    return data
      .collection("users")
      .doc(user.uid)
      .collection("friendList")
      .onSnapshot((data) => {
        callback(data.docs);
      });
  }

  // getFriendList(user) {
  //   return data
  //     .collection("users")
  //     .doc(user.uid)
  //     .collection("friendList")
  //     .get();
  // }

  removeCategory(user, categoryId) {
    return data
      .collection("users")
      .doc(user.uid)
      .collection("categoryList")
      .doc(categoryId)
      .delete();
  }

  removeFriend(user, friendId) {
    return data
      .collection("users")
      .doc(user.uid)
      .collection("friendList")
      .doc(friendId)
      .delete();
  }
}

export default DataService;
