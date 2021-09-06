import React from 'react';
import useLogout from './customHooks/useLogout';
const Home = (props) => {
  const logout = useLogout();
  return (
    <div className="container shadow my-3">
      <span className="display-5">Welcome to the React </span>
      <hr />
      <strong>its a home page</strong>
    </div>
  );
};

export default Home;
