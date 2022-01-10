import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Switch, Route } from 'react-router-dom';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';

function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <BrowserRouter>
        <header>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/test">Test</NavLink>
        </header>
        <Switch>
          <Route exact path="/" component={SignUp}></Route>
        </Switch>
        <Switch>
          <Route exact path="/test" component={SignIn}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
