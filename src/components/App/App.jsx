import React from 'react';
import UserInfo from '../userInfo/userInfo';
import Form from '../form/Form';
import Repos from '../repos/Repos';

export default function App() {
  return (
    <>
      <Form />
      <UserInfo />
      <Repos />
    </>
  );
}
