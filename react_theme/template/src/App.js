import { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/layout/Landing';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Fragment>
        <button className="btn btn-primary"></button>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
