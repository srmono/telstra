import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import useLogin from '../customHooks/useLogin';
import { getCurrentUser } from '../utils/user';

const RedirectBasedOnRoles = (props) => {
  const { currentUser } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const login = useLogin();
  useEffect(() => {
    setLoading(true);
    getCurrentUser()
      .then((response) => {
        login(response);
        setLoading(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });
  }, [currentUser]);
  if (loading) {
    return <span className="display-5">loading..........!</span>;
  }
  return (
    <>
      {console.log({ currentUser })}
      {currentUser?.role.toLowerCase() === 'admin' ? (
        <Redirect
          to={{ pathname: '/AdminProfiel', state: { from: props.location } }}
        />
      ) : (
        <Redirect
          to={{ pathname: '/UserProfile', state: { from: props.location } }}
        />
      )}
    </>
  );
};

export default RedirectBasedOnRoles;
