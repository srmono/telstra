import React from 'react';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../reducers/reducer';

const useLogin = () => {
  const dispatch = useDispatch();
  return (currentUser) => {
    dispatch({
      type: actionTypes.LOGIN_USER,
      currentUser,
    });
  };
};

export default useLogin;
