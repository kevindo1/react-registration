import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Switch, Route } from 'react-router-dom';
import { getUser, logout } from './services/users';
import { useState } from 'react';
import Auth from '../src/views/Auth';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logOutUser = async () => {
    await logout();
    setCurrentUser(null);
  };
  return (
    <div className="App">
      <h1>Login</h1>
      <BrowserRouter>
        <header>
          <NavLink to="/">Home</NavLink>
        </header>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <h2>Signed In</h2>
                <button onClick={logOutUser}>Log Out</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
