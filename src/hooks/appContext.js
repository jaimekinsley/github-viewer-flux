import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useForm = () => {
  const { state, dispatch } = useContext(AppContext);
  return { state, dispatch };
};

export const useFetchUser = () => {
  const { state } = useContext(AppContext);
  return state.user;
};

export const useState = () => {
  const { state, dispatch } = useContext(AppContext);
  return { state, dispatch };
};
