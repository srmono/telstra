const initialState = {
  currentUser: null,
  authenticated: false,
};
export const actionTypes = {
  LOGIN_USER: 'LOGIN_USER',
  LOGOUT_USER: 'LOGOUT_USER',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER: {
      return {
        ...state,
        currentUser: action.currentUser,
        authenticated: true,
      };
    }
    case actionTypes.LOGOUT_USER: {
      return {
        ...state,
        currentUser: null,
        authenticated: false,
      };
    }

    default: {
      return state;
    }
  }
};
