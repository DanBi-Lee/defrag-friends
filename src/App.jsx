import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginContainer from './containsers/LoginContainer';
import './css/reset.module.css';
import './css/common.module.css';
import List from './pages/List';
import Main from './pages/Main';
import Friend from './pages/Friend';
import { useState } from 'react';

function App() {
  const [loginModal, setLoginModal] = useState(false);

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
      { loginModal && <LoginContainer setLoginModal={setLoginModal} /> }
    </>
  );
}

export default App;