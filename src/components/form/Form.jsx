import React from 'react';
import { useForm } from '../../hooks/appContext';
import { fetchUser } from '../../services/gitHubAPI';

const Form = () => {
  const { state, dispatch } = useForm();

  const handleChange = ({ target }) => {
    dispatch({
      type: 'SET_USERNAME',
      payload: target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUser(state.username)
      .then(res => {
        dispatch({
          type: 'SET_USER_RESPONSE',
          payload: res
        });
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={state.username} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default Form;
