import { Route, Switch } from 'react-router-dom';
import './App.css';
import ModalContainer from './containsers/ModalContainer';
import './css/reset.module.css';
import './css/common.module.css';
import List from './pages/List';
import Main from './pages/Main';
import Friend from './pages/Friend';
import { useState } from 'react';
import AuthService from './service/auth_service';

function App() {
  const authservice = new AuthService();
  const [loginModal, setLoginModal] = useState(false);
  const [user, setUser] = useState(null);
  if(user){
    console.log(user.uid);
  }
  authservice.checkLogin(user=>{
    if(user){
      setUser(()=>user);
    }else{
      setUser(()=>null);
    }
  });

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Main setLoginModal={setLoginModal} user={user} />
        </Route>
        <Route path="/list">
          <List setLoginModal={setLoginModal} user={user} />
        </Route>
        <Route path="/friend">
          <Friend setLoginModal={setLoginModal} user={user}/>
        </Route>
      </Switch>
      { loginModal && <ModalContainer setLoginModal={setLoginModal} authservice={authservice} /> }
    </>
  );
}

export default App;