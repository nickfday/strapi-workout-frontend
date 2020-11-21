import React, { useCallback, useContext } from 'react';
import { Button, TextField, FormControl, Box } from '@material-ui/core';
import { useRouter, withRouter } from 'next/router';

import * as firebase from 'firebase';

import { AuthContext } from './auth';
import firebaseApp from '../../base.js';

const ChangePassword = (props) => {
  const router = useRouter();
  const user = firebaseApp.auth().currentUser;

  const handleChangePassword = useCallback(async (event) => {
    event.preventDefault();
    const { password, newPassword, confirmNewPassord } = event.target.elements;

    if (newPassword !== confirmNewPassord) {
      alert('Passwords do not match');
      return;
    }

    const credentials = firebase.auth.EmailAuthProvider.credential(
      user.email,
      password.value
    );

    user
      .reauthenticateWithCredential(credentials)
      .then((result) => {
        console.log('authenticated');
        user
          .updatePassword(newPassword.value)
          .then(function () {
            alert('Your password has been updated');
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch((error) => {
        console.log('error', error);
        console.log('code', error.code);
      });
  }, []);

  return (
    <div>
      <h2>Change Password</h2>
      <form onSubmit={handleChangePassword}>
        <FormControl margin="normal" fullWidth>
          <TextField
            id="name"
            name="password"
            label="Current Password"
            variant="outlined"
            type="password"
            margin="normal"
          />

          <TextField
            id="newPassword"
            name="newPassword"
            label="New Password"
            variant="outlined"
            type="password"
            margin="normal"
          />

          <TextField
            id="confirmNewPassword"
            name="confirmNewPassword"
            label="Confirm New Password"
            variant="outlined"
            type="password"
            margin="normal"
          />
          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit">
              Update
            </Button>
          </Box>
        </FormControl>
      </form>
    </div>
  );
};

export default ChangePassword;
