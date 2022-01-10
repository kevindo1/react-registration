import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Switch, Route } from 'react-router-dom';
import SignUp from './views/SignUp';

function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <BrowserRouter>
        <header>
          <NavLink to="/">Home</NavLink>
        </header>
        <Switch>
          <Route exact path="/" component={SignUp}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
