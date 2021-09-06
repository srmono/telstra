import React from 'react';
import { ACCESS_TOKEN } from '../constants';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../reducers/reducer';

const useLogout = () => {
  const dispatch = useDispatch();
  return () => {
    localStorage.removeItem(ACCESS_TOKEN);
    dispatch({
      type: actionTypes.LOGOUT_USER,
    });
  };
};

export default useLogout;
