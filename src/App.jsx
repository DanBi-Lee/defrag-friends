import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginContainer from './containsers/LoginContainer';
import './css/reset.module.css';
import './css/common.module.css';
import List from './pages/List';
import Main from './pages/Main';
import Friend from './pages/Friend';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/friend">
          <Friend/>
        </Route>
      </Switch>
      {/* <LoginContainer /> */}
    </>
  );
}

export default App;