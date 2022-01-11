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
      <h1>Welcome</h1>
      <BrowserRouter>
        <header>
          <NavLink to="/"></NavLink>
        </header>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <div
                  style={{
                    backgroundImage: `url("https://wallpaperaccess.com/full/1099445.png")`,
                    height: '700px',
                    backgroundPosition: 'center',
                  }}
                >
                  <h2>Signed In</h2>
                  <button onClick={logOutUser}>Log Out</button>
                </div>
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
