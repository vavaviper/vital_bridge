import logo from './logo.svg';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             <code>zubin</code> 
          </p>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            ur gay
          </a>
        </header>
      </div>
      <Switch>
        <Route exact path="/register" component={RegistrationForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Redirect to="/dashboard" />
      </Switch>
    </Router>
  );
}

export default App;
