import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginContainer from './containsers/LoginContainer';
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
  const [loginState, setLoginState] = useState(false);
  const [user, setUser] = useState(null);

  authservice.checkLogin(user=>{
    if(user){
      setUser(()=>user);
      setLoginState(()=>true);
    }else{
      setUser(()=>null);
      setLoginState(()=>false);
    }
  });

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Main setLoginModal={setLoginModal} />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/friend">
          <Friend/>
        </Route>
      </Switch>
      <div>
        {loginState? '로그인 되어있다!' : '로그인 안되어있음!'}
      </div>
      { loginModal && <LoginContainer setLoginModal={setLoginModal} authservice={authservice} /> }
    </>
  );
}

export default App;