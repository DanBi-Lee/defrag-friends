import firebaseApp from "./firebase";
import "firebase/firestore";

const data = firebaseApp.firestore();

class DataService {
  addFriend(user, friend) {
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
      .doc(category)
      .set({
        name: "category",
      });
  }

  getCategoryList(user) {
    return data
      .collection("users")
      .doc(user.uid)
      .collection("categoryList")
      .get();
  }

  getFriendList(user) {
    return data
      .collection("users")
      .doc(user.uid)
      .collection("friendList")
      .get();
  }
}

export default DataService;
