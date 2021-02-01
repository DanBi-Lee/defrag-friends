import firebase from "firebase/app";
import firebaseApp from "./firebase";
import "firebase/auth";

class AuthService {
  loginWithEmail(email, password) {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password);
  }

  loginWithSNS(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  joinWithEmail(email, password) {
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
  }

  checkLogin(callback) {
    firebase.auth().onAuthStateChanged(callback);
  }

  logout() {
    return firebase.auth().signOut();
  }
}

export default AuthService;
