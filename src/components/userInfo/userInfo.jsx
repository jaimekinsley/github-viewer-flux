import React from 'react';
import { useFetchUser, useState } from '../../hooks/appContext';

const UserInfo = () => {
  const  user = useFetchUser();

  if(!user) return <h3>Enter username</h3>;

  return (
    <>
      <p>Name: {user.name}</p>
      <p>Number of Followers: {user.followers}</p>
      <p>Number of Following: {user.following}</p>
      <p>GitHub Profile: <a href= {user.html_url}>{user.html_url}</a></p>
    </>
  );
};

export default UserInfo;
