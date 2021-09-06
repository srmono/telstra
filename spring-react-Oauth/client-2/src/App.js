import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionTypes } from './reducers/reducer';
import PrivateRoute from './shared/PrivateRoute';
import { Route, Switch } from 'react-router';

import { ACCESS_TOKEN } from './constants';
import Login from './Login';
import Header from './shared/Header';
import Home from './Home';
import { NotFound } from 'http-errors';
import OAuth2RedirectHandler from './oauth2/OAuth2RedirectHandler';
import useLogout from './customHooks/useLogout';
import useLogin from './customHooks/useLogin';
import UserProfile from './users/UserProfile';
import AdminProfile from './users/AdminProfile';
import { getCurrentUser } from './utils/user';
import profile from './profile';

const App = (props) => {
  const [loading, setLoading] = useState(false);
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();

  const { currentUser, authenticated } = useSelector((state) => state);
  const logout = useLogout();
  const login = useLogin();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    setLoading(true);

    getCurrentUser()
      .then((response) => {
        login(response);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <span className="display-5">loading............!</span>
      ) : (
        <div className="app">
          <div className="app-top-box">
            <Header authenticated={authenticated} onLogout={handleLogout} />
          </div>
          <div className="app-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={profile} />
              <PrivateRoute
                path="/AdminProfile"
                authenticated={authenticated}
                currentUser={currentUser}
                component={AdminProfile}
              ></PrivateRoute>
              <PrivateRoute
                path="/UserProfile"
                authenticated={authenticated}
                currentUser={currentUser}
                component={UserProfile}
              ></PrivateRoute>
              <Route
                path="/login"
                render={(props) => (
                  <Login authenticated={authenticated} {...props} />
                )}
              ></Route>
              <Route
                path="/oauth2/redirect"
                render={(props) => (
                  <OAuth2RedirectHandler currentUser={currentUser} {...props} />
                )}
              />

              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
