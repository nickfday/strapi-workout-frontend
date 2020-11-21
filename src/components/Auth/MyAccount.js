import React, { useCallback, useEffect, useContext, useState } from 'react';
import { useRouter, withRouter } from 'next/router';

import firebaseApp, { firestore } from '../../base.js';
import { AuthContext } from './auth';
import Logout from './Logout';
import DeleteAccount from './DeleteAccount';
import ChangePassword from './ChangePassword';
import VerifyEmail from './VerifyEmail';

const MyAccount = (props) => {
  const router = useRouter();
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  // const user = firebaseApp.auth().currentUser;

  // console.log(user);

  // if (!currentUser) {
  //   router.push('/login');
  // }

  return (
    <div>
      <h1>My Account</h1>
      <p>Email: {currentUser.email}</p>
      <p>Name: {currentUser.displayName}</p>
      <ChangePassword />
      <DeleteAccount />
      {!currentUser.emailVerified && <VerifyEmail />}
      <Logout>Logout</Logout>
    </div>
  );
};

export default MyAccount;
