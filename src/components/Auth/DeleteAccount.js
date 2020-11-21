import React, { useCallback, useContext } from 'react';
import { Button, TextField, FormControl, Box } from '@material-ui/core';
import { useRouter, withRouter } from 'next/router';

import * as firebase from 'firebase';

import { AuthContext } from './auth';
import firebaseApp from '../../base.js';

const DeleteAccount = (props) => {
  const router = useRouter();
  const user = firebaseApp.auth().currentUser;

  const handleDeleteAccount = useCallback(async (event) => {
    event.preventDefault();
    const { password } = event.target.elements;

    const credentials = firebase.auth.EmailAuthProvider.credential(
      user.email,
      password.value
    );

    user
      .reauthenticateWithCredential(credentials)
      .then((result) => {
        user
          .delete()
          .then(function () {
            alert('Your account has been removed');
            router.push('/');
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch((error) => {
        console.log('error', error);
        console.log('code', error.code);
        // ...
      });
  }, []);

  return (
    <div>
      <h2>Delete Account</h2>
      <form onSubmit={handleDeleteAccount}>
        <FormControl margin="normal" fullWidth>
          <TextField
            id="name"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
          />
          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit">
              Delete Account
            </Button>
          </Box>
        </FormControl>
      </form>
    </div>
  );
};

export default DeleteAccount;
