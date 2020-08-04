import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useFetchUser = () => {
  const { state } = useContext(AppContext);
  return state;
};

export const useForm = () => {
  const { state, dispatch } = useContext(AppContext);
  return { state, dispatch };
};
