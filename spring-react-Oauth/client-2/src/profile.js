import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const Profile = (props) => {
  const currentUser = useSelector((state) => state.currentUser);
  console.log(currentUser);
  return currentUser?.role.toLowerCase() !== 'admin' ? (
    <Redirect
      to={{ pathname: '/UserProfile', state: { from: props.location } }}
    />
  ) : (
    <Redirect
      to={{ pathname: '/AdminProfile', state: { from: props.location } }}
    />
  );
};

export default Profile;
