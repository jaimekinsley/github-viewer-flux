import React, { useEffect } from 'react';
import { useState } from '../../hooks/appContext';
import { fetchRepo } from '../../services/gitHubAPI';

const Repos = () => {
  const { state, dispatch } = useState();

  useEffect(() => {
    if(!state.user) return;
    fetchRepo(state.username)
      .then(res => {
        dispatch({
          type: 'SET_REPOS',
          payload: res
        });
      });
  }, [state.user]);

  const repoElements = state.repos.map(repo => (
    <li key={`${repo.html_url}+${repo.name}`}>
      <a href={repo.html_url}> {repo.name} </a>
    </li>
  ));

  return (
    <ul>
      {repoElements}
    </ul>
  );
};

export default Repos;
