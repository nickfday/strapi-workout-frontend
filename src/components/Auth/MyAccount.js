import React, { useCallback, useEffect, useState } from 'react';
import firebaseApp, { firestore } from '../../base.js';
import { AuthContext } from './auth';
import Logout from './Logout';
import DeleteAccount from './DeleteAccount';
import ChangePassword from './ChangePassword';
import VerifyEmail from './VerifyEmail';

const MyAccount = (props) => {
  const user = firebaseApp.auth().currentUser;
  console.log(user.emailVerified);

  return (
    <div>
      <h1>My Account</h1>
      <p>Email: {user.email}</p>
      <p>Name: {user.displayName}</p>

      <ChangePassword />

      <DeleteAccount />

      {!user.emailVerified && <VerifyEmail />}

      <Logout>Logout</Logout>
    </div>
  );
};

export default MyAccount;
