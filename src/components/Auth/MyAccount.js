import React, { useCallback } from 'react';
import firebaseApp from '../../base.js';
import { AuthContext } from './auth';
import Logout from './Logout';

const MyAccount = (props) => {
  const user = firebaseApp.auth().currentUser;

  return (
    <div>
      <h1>My Account</h1>
      <p>Email: {user.email}</p>
      <Logout>Logout</Logout>
    </div>
  );
};

export default MyAccount;