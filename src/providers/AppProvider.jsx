import React, { useReducer } from 'react';
import { AppContext } from '../hooks/appContext';
import reducer, { initialState } from '../reducers/appReducer';
// import { useEffect } from 'react';
// import { fetchUser } from '../services/gitHubAPI';

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   // blocker if no username -
  //   fetchUser()
  //     .then(user => dispatch({ type: 'SET_USER_RESPONSE', payload: user }));
  // }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
