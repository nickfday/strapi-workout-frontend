import React from 'react';
import { Button, TextField, FormControl, Box } from '@material-ui/core';
import firebaseApp from '../../base.js';

const VerifyEmail = (props) => {
  const user = firebaseApp.auth().currentUser;

  const handleVerifyEmail = (event) => {
    user
      .sendEmailVerification()
      .then(function () {
        alert('Please check your email');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <Button
      variant="contained"
      color="primary"
      type="submit"
      onClick={handleVerifyEmail}
    >
      Verify Email
    </Button>
  );
};

export default VerifyEmail;
