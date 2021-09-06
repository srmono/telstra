import React from 'react';
import { Redirect } from 'react-router';
import { GOOGLE_AUTH_URL } from './constants';
import pic from './img/google-logo.png';
const Login = (props) => {
  return props.authenticated ? (
    <Redirect
      to={{
        pathname: '/',
        state: { from: props.location },
      }}
    />
  ) : (
    <div className="container shadow rounded text-center">
      <a className="btn btn-outline-info " type="button" href={GOOGLE_AUTH_URL}>
        <img src={pic} alt="google" />
        Log in with Google
      </a>
    </div>
  );
};

export default Login;
